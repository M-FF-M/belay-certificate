"use strict";

const catalog = window.examCatalog;
const modes = { toprope: "Toprope", vorstieg: "Vorstieg" };
const statuses = { open: "Offen", passed: "Bestanden", borderline: "Grenzfall", failed: "Nicht bestanden" };
const storageKey = "kletterpruefung-v1";
const nameLifetime = 7 * 24 * 60 * 60 * 1000;
const dateFormat = new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" });
const $ = (id) => document.getElementById(id);
const categoryColors = [
  ["#366691", "#eaf3fb"], ["#37745d", "#e8f5ef"], ["#8b5a24", "#fff1df"],
  ["#76609a", "#f1ebf8"], ["#a34869", "#fbeaf1"], ["#447274", "#e6f4f5"],
];
const severityColors = {
  CF: ["#94700f", "#fff8db", "#ffeaa0"],
  BF: ["#a54e16", "#fff0e2", "#ffd4b1"],
  AF: ["#ab353d", "#fce8e9", "#f9bfc2"],
};

let store = readStore();
let activeId = store.currentId;
let view = [];
let categoryLinks = new Map();
let scrollScheduled = false;
let retentionTimer;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function button(text, className) {
  const node = element("button", text, className);
  node.type = "button";
  return node;
}

function localDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function displayDate(date) {
  return date ? dateFormat.format(new Date(`${date}T12:00:00`)) : "Ohne Datum";
}

function readStore() {
  const result = { currentId: null, exams: [] };
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
    const previous = JSON.parse(localStorage.getItem("vorstiegs-check-protocols-v2"));
    const single = JSON.parse(localStorage.getItem("vorstiegs-check-demo-v1"));
    const records = previous?.protocols ?? (single ? [single] : []);
    result.exams = records.filter((record) =>
      record.participant || record.instructor || Object.values(record.ratings ?? {}).some(Boolean)
    ).map((record, index) => ({
      id: `alt-${record.id ?? index}`,
      catalogVersion: 0,
      mode: "vorstieg",
      date: record.date,
      createdAt: Date.parse(record.createdAt ?? record.date),
      participant: record.participant ?? "",
      trainer: record.instructor ?? "",
      legacyRatings: record.ratings ?? {},
    }));
  } catch {
    $("storage-warning").hidden = false;
  }
  return result;
}

function save() {
  for (const exam of store.exams) {
    if (!Number.isFinite(exam.createdAt) || exam.createdAt + nameLifetime <= Date.now()) exam.participant = "";
  }
  try {
    localStorage.setItem(storageKey, JSON.stringify(store));
    localStorage.removeItem("vorstiegs-check-protocols-v2");
    localStorage.removeItem("vorstiegs-check-demo-v1");
    $("storage-warning").hidden = true;
  } catch {
    $("storage-warning").hidden = false;
  }
}

function expireNames() {
  clearTimeout(retentionTimer);
  const now = Date.now();
  let next = Infinity;
  let changed = false;
  for (const exam of store.exams) {
    const expiresAt = exam.createdAt + nameLifetime;
    if (!Number.isFinite(expiresAt) || expiresAt <= now) {
      if (exam.participant) {
        exam.participant = "";
        changed = true;
      }
    } else if (exam.participant || exam === current()) {
      next = Math.min(next, expiresAt);
    }
  }
  updateParticipantField(current());
  if (changed) {
    save();
    renderHistory();
  }
  if (Number.isFinite(next)) retentionTimer = setTimeout(expireNames, Math.max(0, next - now));
  return changed;
}

function current() {
  return store.exams.find((exam) => exam.id === activeId && exam.catalogVersion === catalog.version);
}

function updateParticipantField(exam) {
  if (!exam) return;
  const input = $("participant");
  input.disabled = exam.createdAt + nameLifetime <= Date.now();
  input.placeholder = input.disabled ? "Aufbewahrungsfrist abgelaufen" : "";
  if (input.disabled) input.value = "";
}

function makeExam(mode) {
  const createdAt = Date.now();
  const exam = {
    id: globalThis.crypto?.randomUUID?.() ?? `${createdAt}-${Math.random().toString(36).slice(2)}`,
    catalogVersion: catalog.version,
    mode,
    createdAt,
    date: localDate(createdAt),
    participant: "",
    trainer: "",
    ratings: {},
    observations: {},
  };
  store.exams.unshift(exam);
  openExam(exam.id, true);
}

function forMode(mode) {
  return catalog.procedures.filter((procedure) => procedure.modes.includes(mode)).map((procedure) => ({
    ...procedure,
    categories: procedure.categories.map((category) => ({
      ...category,
      competencies: category.competencies.filter((item) => item.modes.includes(mode)),
    })).filter((category) => category.competencies.length),
  }));
}

function stateFor(exam, item) {
  return exam.ratings[item.id] ?? { perfect: false, counts: {} };
}

function effectiveCount(item, state, error) {
  const { counts } = state;
  if (error.escalatesTo && (counts[error.escalatesTo] || counts[error.id] >= catalog.escalateAt)) return 0;
  if (item.errors.some((source) => source.escalatesTo === error.id && counts[source.id] >= catalog.escalateAt)) return 1;
  return counts[error.id] ?? 0;
}

function changeError(item, state, error, undo = false) {
  const { counts } = state;
  if (undo) {
    if (counts[error.id]) {
      if (--counts[error.id] === 0) delete counts[error.id];
    } else {
      const source = item.errors.find((candidate) =>
        candidate.escalatesTo === error.id && counts[candidate.id] >= catalog.escalateAt
      );
      if (source) counts[source.id] = catalog.escalateAt - 1;
    }
    return;
  }
  if ((!error.repeat && effectiveCount(item, state, error)) ||
      (error.escalatesTo && (counts[error.escalatesTo] || counts[error.id] >= catalog.escalateAt))) return;
  if (error.exclusiveGroup) {
    for (const sibling of item.errors) {
      if (sibling.id !== error.id && sibling.exclusiveGroup === error.exclusiveGroup) delete counts[sibling.id];
    }
  }
  counts[error.id] = (counts[error.id] ?? 0) + 1;
  state.perfect = false;
}

function evaluate(exam) {
  let points = 0;
  let rated = 0;
  let total = 0;
  for (const procedure of forMode(exam.mode)) {
    for (const category of procedure.categories) {
      for (const item of category.competencies) {
        total++;
        const state = stateFor(exam, item);
        if (state.perfect || Object.keys(state.counts).length) rated++;
        for (const error of item.errors) {
          points += effectiveCount(item, state, error) * catalog.severities[error.severity].points;
        }
      }
    }
  }
  let status = "open";
  if (points >= catalog.thresholds.fail) status = "failed";
  else if (rated === total) status = points >= catalog.thresholds.borderline ? "borderline" : "passed";
  return { points, rated, total, status };
}

const abbreviations = {
  GU: "Gewichtsunterschied", VS: "Vorstieg", TR: "Toprope", BA: "Bremsassistent",
  BH: "Bremshand", S: "Sichernde Person", K: "Kletternde Person", ZWS: "Zwischensicherung",
  BN: "Bodennähe", BF: "Bodenferne", BS: "Bremsseil", SiGe: "Sicherungsgerät",
};

function readable(text) {
  return text.replace(/\b(GU|VS|TR|BA|BH|S|K|ZWS|BN|BF|BS|SiGe)\b/g, (word) => abbreviations[word]);
}

function setCategoryColor(node, category) {
  const [accent, background] = categoryColors[category.color % categoryColors.length];
  node.style.setProperty("--category", accent);
  node.style.setProperty("--category-bg", background);
}

function renderCompetency(item) {
  const exam = current();
  const card = element("article", undefined, "competency");
  const heading = element("div", undefined, "competency-heading");
  const name = element("h4", readable(item.label));
  name.id = item.id;
  card.setAttribute("aria-labelledby", name.id);
  const perfect = button("Alles perfekt", "perfect");
  heading.append(name, perfect);

  const errors = element("div", undefined, "error-grid");
  const controls = item.errors.map((error) => {
    const severity = catalog.severities[error.severity];
    const row = element("div", undefined, "error-item");
    const add = button(readable(error.description), "error-main");
    const tally = element("span", undefined, "error-meta");
    const undo = button("−", "undo");
    undo.setAttribute("aria-label", `Zurücknehmen: ${readable(error.description)}`);
    const [color, background, selected] = severityColors[error.severity];
    add.style.setProperty("--error", color);
    add.style.setProperty("--error-bg", background);
    add.style.setProperty("--selected", selected);
    add.append(tally);
    row.append(add, undo);
    errors.append(row);
    add.addEventListener("click", () => {
      commit((state) => changeError(item, state, error));
      if (add.disabled && document.activeElement === add) {
        const target = controls.find((control) => control.error.id === error.escalatesTo);
        (target?.undo ?? undo).focus({ preventScroll: true });
      }
    });
    undo.addEventListener("click", () => {
      commit((state) => changeError(item, state, error, true));
      if (undo.hidden) {
        const source = controls.find((control) => control.error.escalatesTo === error.id);
        (source?.add ?? add).focus({ preventScroll: true });
      }
    });
    return { error, severity, tally, add, undo };
  });

  function refresh() {
    const state = stateFor(exam, item);
    perfect.disabled = Object.keys(state.counts).length > 0;
    perfect.setAttribute("aria-pressed", state.perfect);
    for (const { error, severity, tally, add, undo } of controls) {
      const count = effectiveCount(item, state, error);
      const blocked = !!error.escalatesTo && (state.counts[error.escalatesTo] || state.counts[error.id] >= catalog.escalateAt);
      const automatic = count && !state.counts[error.id];
      add.disabled = Boolean(blocked || (!error.repeat && count));
      add.setAttribute("aria-pressed", count > 0);
      undo.hidden = count === 0;
      tally.textContent = `−${severity.points} · ${severity.label}` +
        (count ? ` · ${count}×` : "") + (automatic ? " · hochgestuft" : blocked ? " · durch häufig ersetzt" : "");
    }
  }

  function commit(edit) {
    const state = stateFor(exam, item);
    edit(state);
    if (state.perfect || Object.keys(state.counts).length) exam.ratings[item.id] = state;
    else delete exam.ratings[item.id];
    refresh();
    updateResult();
    save();
    renderHistory();
  }

  perfect.addEventListener("click", () => commit((state) => { state.perfect = !state.perfect; }));
  const details = element("details");
  details.append(element("summary", "Details"), element("p", `Idealbild: ${readable(item.ideal)}`));
  if (item.errors.some((error) => error.escalatesTo)) {
    details.append(element("p", `Beim ${catalog.escalateAt}. Vorkommnis ersetzt der passende häufige Fehler die Einzelvorkommnisse.`));
  }
  for (const error of item.errors.filter((entry) => entry.ideal)) {
    details.append(element("p", `${readable(error.description)} · Idealbild: ${readable(error.ideal)}`));
  }
  for (const media of item.media) {
    const figure = element("figure");
    const asset = element(media.type === "image" ? "img" : "video");
    asset.src = media.src;
    if (media.type === "image") { asset.alt = media.label; asset.loading = "lazy"; }
    else { asset.controls = true; asset.preload = "none"; asset.setAttribute("aria-label", media.label); }
    figure.append(asset, element("figcaption", media.label));
    details.append(figure);
  }
  card.append(heading, errors, details);
  refresh();
  return card;
}

function updateResult() {
  const { points, rated, total, status } = evaluate(current());
  $("progress").max = total;
  $("progress").value = rated;
  $("progress-label").textContent = `${rated} von ${total} Kompetenzen bewertet`;
  $("result").dataset.status = status;
  $("result").textContent = `${points} Minuspunkte · ${status === "open" ? "Bewertung läuft" : statuses[status]}`;
}

function renderObservations(exam) {
  const fields = catalog.observations.map((observation) => {
    const label = element("label", observation.label);
    const select = element("select");
    select.add(new Option("Keine Angabe", ""));
    observation.options.forEach((option) => select.add(new Option(option, option)));
    select.value = exam.observations[observation.id] ?? "";
    select.addEventListener("change", () => {
      if (select.value) exam.observations[observation.id] = select.value;
      else delete exam.observations[observation.id];
      save();
    });
    label.append(select);
    return label;
  });
  $("observations").replaceChildren(...fields);
}

function categoryNav(procedure, categoryId) {
  if ($("categories").dataset.procedure !== procedure.id) {
    categoryLinks = new Map();
    for (const category of procedure.categories) {
      const link = element("a", category.label);
      link.href = `#${category.id}`;
      setCategoryColor(link, category);
      categoryLinks.set(category.id, link);
    }
    $("categories").replaceChildren(...categoryLinks.values());
    $("categories").dataset.procedure = procedure.id;
  }
  $("procedure").value = procedure.id;
  for (const [id, link] of categoryLinks) {
    if (id === categoryId && !link.hasAttribute("aria-current")) {
      link.setAttribute("aria-current", "location");
      const strip = $("categories");
      const tab = link.getBoundingClientRect();
      const bounds = strip.getBoundingClientRect();
      if (tab.right > bounds.right) strip.scrollLeft += tab.right - bounds.right + 4;
      if (tab.left < bounds.left) strip.scrollLeft -= bounds.left - tab.left + 4;
    } else if (id !== categoryId) {
      link.removeAttribute("aria-current");
    }
  }
}

function syncNavigation() {
  scrollScheduled = false;
  if ($("exam").hidden || !view.length) return;
  const toolbarBottom = document.querySelector(".toolbar").getBoundingClientRect().bottom + 12;
  let procedure = view[0];
  let categoryId = procedure.categories[0].id;
  for (const section of view) {
    for (const category of section.categories) {
      if ($(category.id).getBoundingClientRect().top > toolbarBottom) {
        categoryNav(procedure, categoryId);
        return;
      }
      procedure = section;
      categoryId = category.id;
    }
  }
  categoryNav(procedure, categoryId);
}

function renderChecklist() {
  const sections = view.map((procedure) => {
    const section = element("section", undefined, "procedure");
    section.append(element("h2", procedure.label));
    for (const category of procedure.categories) {
      const group = element("section", undefined, "category");
      group.id = category.id;
      setCategoryColor(group, category);
      group.append(element("h3", category.label), ...category.competencies.map(renderCompetency));
      section.append(group);
    }
    return section;
  });
  $("checklist").replaceChildren(...sections);
  $("procedure").replaceChildren(...view.map((item) => new Option(item.label, item.id)));
  $("categories").dataset.procedure = "";
  categoryNav(view[0], view[0].categories[0].id);
}

function showStart() {
  $("start").hidden = false;
  $("resume").hidden = !current();
  $("exam").hidden = true;
  $("navigation").hidden = true;
}

function openExam(id, focus = false) {
  activeId = id;
  const exam = current();
  if (!exam) return showStart();
  store.currentId = id;
  expireNames();
  view = forMode(exam.mode);
  $("start").hidden = true;
  $("exam").hidden = false;
  $("navigation").hidden = false;
  $("exam-title").textContent = `${modes[exam.mode]}-Prüfung`;
  $("participant").value = exam.participant;
  updateParticipantField(exam);
  $("trainer").value = exam.trainer;
  $("exam-date").dateTime = exam.date;
  $("exam-date").textContent = displayDate(exam.date);
  renderChecklist();
  renderObservations(exam);
  updateResult();
  save();
  renderHistory();
  if (focus) {
    window.scrollTo(0, 0);
    $("exam-title").focus({ preventScroll: true });
  }
}

function renderHistory() {
  $("history-count").textContent = `(${store.exams.length})`;
  $("export").disabled = store.exams.length === 0;
  const items = store.exams.map((exam) => {
    const row = element("li");
    const legacy = exam.catalogVersion === 0;
    const result = legacy ? "Früherer Entwurf" : statuses[evaluate(exam).status];
    const name = exam.participant ? ` · ${exam.participant}` : "";
    row.append(element("span", `${displayDate(exam.date)} · ${modes[exam.mode]}${name} · ${result}`));
    if (!legacy) {
      const open = button(exam.id === activeId && !$("exam").hidden ? "Aktuell" : "Öffnen");
      open.disabled = exam.id === activeId && !$("exam").hidden;
      open.addEventListener("click", () => openExam(exam.id, true));
      row.append(open);
    }
    return row;
  });
  $("history-list").replaceChildren(...items);
}

function csvCell(value = "") {
  const text = String(value);
  const safe = /^\s*[=+@-]|^[\t\r\n]/u.test(text) ? `'${text}` : text;
  return `"${safe.replaceAll('"', '""')}"`;
}

function exportRows() {
  const rows = [[
    "Protokoll-ID", "Katalogversion", "Datum", "Erstellt (UTC)", "Prüfungsart", "Trainer", "Gesamtminuspunkte", "Ergebnis",
    "Vorgang", "Kategorie", "Kompetenz-ID", "Kompetenz", "Status", "Fehler-ID", "Fehlerbild", "Schwere",
    "Anzahl gewertet", "Anzahl erfasst", "Minuspunkte", ...catalog.observations.map((item) => item.label),
  ]];
  for (const exam of store.exams) {
    const created = Number.isFinite(exam.createdAt) ? new Date(exam.createdAt).toISOString() : "";
    const base = [exam.id, exam.catalogVersion, exam.date ?? "", created, modes[exam.mode], exam.trainer];
    if (exam.catalogVersion === 0) {
      const ratings = Object.entries(exam.legacyRatings).filter(([, value]) => value);
      if (!ratings.length) ratings.push(["", ""]);
      for (const [id, value] of ratings) {
        rows.push([...base, "", "Früherer Entwurf", "", "", id, "", value, "", "", "", "", "", "", "", ""]);
      }
      continue;
    }
    const result = evaluate(exam);
    const header = [...base, result.points, statuses[result.status]];
    const observations = catalog.observations.map((item) => exam.observations[item.id] ?? "");
    for (const procedure of forMode(exam.mode)) {
      for (const category of procedure.categories) {
        for (const item of category.competencies) {
          const state = stateFor(exam, item);
          const status = state.perfect ? "Perfekt" : Object.keys(state.counts).length ? "Fehler" : "Offen";
          const prefix = [...header, procedure.label, category.label, item.id, item.label, status];
          if (status !== "Fehler") rows.push([...prefix, "", "", "", 0, 0, 0, ...observations]);
          for (const error of item.errors) {
            const counted = effectiveCount(item, state, error);
            const recorded = state.counts[error.id] ?? 0;
            if (!counted && !recorded) continue;
            const severity = catalog.severities[error.severity];
            rows.push([...prefix, error.id, error.description, severity.label, counted, recorded, counted * severity.points, ...observations]);
          }
        }
      }
    }
  }
  return rows;
}

function downloadCsv() {
  expireNames();
  const csv = exportRows().map((row) => row.map(csvCell).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }));
  const link = element("a");
  link.href = url;
  link.download = `kletterpruefungen-${localDate(Date.now())}.csv`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.querySelectorAll("[data-start]").forEach((control) => {
  control.addEventListener("click", () => makeExam(control.dataset.start));
});
$("new").addEventListener("click", () => {
  showStart();
  renderHistory();
  window.scrollTo(0, 0);
  $("start-title").focus({ preventScroll: true });
});
$("resume").addEventListener("click", () => openExam(activeId, true));
$("history-link").addEventListener("click", () => {
  expireNames();
  $("history").open = true;
});
$("export").addEventListener("click", downloadCsv);
$("procedure").addEventListener("change", (event) => {
  const procedure = view.find((item) => item.id === event.target.value);
  const categoryId = procedure.categories[0].id;
  categoryNav(procedure, categoryId);
  $(categoryId).scrollIntoView();
});
$("participant").addEventListener("input", (event) => {
  const exam = current();
  if (exam.createdAt + nameLifetime <= Date.now()) {
    $("participant").disabled = true;
    $("participant").value = "";
    expireNames();
    return;
  }
  exam.participant = event.target.value;
  if (!expireNames()) save();
  renderHistory();
});
$("trainer").addEventListener("input", (event) => {
  current().trainer = event.target.value;
  save();
});
window.addEventListener("scroll", () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(syncNavigation);
  }
}, { passive: true });
window.addEventListener("pageshow", expireNames);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) expireNames();
});
new ResizeObserver(([entry]) => {
  document.documentElement.style.setProperty("--bar-height", `${entry.target.offsetHeight}px`);
}).observe(document.querySelector(".toolbar"));

expireNames();
if (current()) openExam(activeId);
else {
  showStart();
  save();
  renderHistory();
}
