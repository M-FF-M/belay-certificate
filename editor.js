"use strict";

const byId = (id) => document.getElementById(id);
const draftKey = "kletterpruefung-katalogentwurf-v1";
const levels = ["CF", "BF", "AF"];
const examModes = ["toprope", "vorstieg"];
let model = window.examCatalog;
let selection = { procedure: "", category: "", competency: "" };
let fileName = "catalog.js";
let view = "table";
let edited = false;
let importRequest = 0;

function readCatalog(text) {
  // Only the assignment wrapper is JavaScript. Parse its payload as strict JSON.
  const content = text.trim().replace(/^(?:\s*(?:\/\/[^\r\n]*(?:\r?\n|$)|\/\*[\s\S]*?\*\/))*/, "").trim();
  const payload = content.replace(/^window\.examCatalog\s*=\s*/, "").replace(/;\s*$/, "");
  let data;
  try {
    data = JSON.parse(payload);
  } catch (error) {
    throw new Error(`Die Datei muss ein JSON-Objekt oder die Zuweisung „window.examCatalog = {…};“ enthalten. ${error.message}`);
  }
  validate(data);
  return data;
}

function validate(data) {
  function requireValue(condition, path, reason) {
    if (!condition) throw new Error(`${path}: ${reason}.`);
  }
  function record(value, path) {
    requireValue(value && typeof value === "object" && !Array.isArray(value), path, "Objekt erwartet");
  }
  function text(value, path, allowEmpty = false) {
    requireValue(typeof value === "string" && (allowEmpty || value.trim()), path, "Text erwartet");
  }
  function integer(value, min, path) {
    requireValue(Number.isSafeInteger(value) && value >= min, path, `ganze Zahl ab ${min} erwartet`);
  }
  function list(value, path, min = 0) {
    requireValue(Array.isArray(value) && value.length >= min, path, `Liste mit mindestens ${min} Einträgen erwartet`);
    return value;
  }
  function modes(value, allowed, path) {
    list(value, path, 1);
    requireValue(value.every((mode) => allowed.includes(mode)), path, "Prüfungsart passt nicht zum Vorgang");
    requireValue(new Set(value).size === value.length, path, "doppelte Prüfungsart");
  }
  const ids = new Set();
  function entry(value, path) {
    record(value, path);
    text(value.id, path + ".id");
    requireValue(!ids.has(value.id) && !Object.hasOwn(Object.prototype, value.id), path, `unzulässige oder doppelte ID „${value.id}“`);
    ids.add(value.id);
  }

  record(data, "Katalog");
  integer(data.version, 1, "version");
  record(data.thresholds, "thresholds");
  integer(data.thresholds.borderline, 1, "thresholds.borderline");
  integer(data.thresholds.fail, data.thresholds.borderline + 1, "thresholds.fail");
  record(data.severities, "severities");
  record(data.repeatLimits, "repeatLimits");
  record(data.escalateAt, "escalateAt");
  for (const code of ["OPT", ...levels]) {
    const level = data.severities[code];
    record(level, "severities." + code);
    text(level.label, code + ".label");
    integer(level.points, 0, code + ".points");
    for (const key of ["short", "description", "examples"]) text(level[key], code + "." + key, true);
    if (code !== "OPT") integer(data.repeatLimits[code], 1, "repeatLimits." + code);
  }
  requireValue(data.severities.OPT.points === 0, "OPT", "eine perfekte Ausführung muss 0 Punkte haben");
  for (const [level, threshold] of Object.entries(data.escalateAt)) {
    integer(threshold, 2, "escalateAt." + level);
    requireValue(threshold <= data.repeatLimits[level], "escalateAt." + level, "Schwelle über dem Wiederholungslimit");
  }
  for (const obs of list(data.observations, "observations")) {
    entry(obs, "Beobachtung");
    text(obs.label, obs.id + ".label");
    text(obs.source, obs.id + ".source", true);
    for (const option of list(obs.options, obs.id + ".options", 1)) text(option, obs.id + ".options");
    requireValue(new Set(obs.options).size === obs.options.length, obs.id, "doppelte Antwortoption");
  }
  for (const proc of list(data.procedures, "procedures", 1)) {
    entry(proc, "Vorgang");
    text(proc.label, proc.id + ".label");
    modes(proc.modes, examModes, proc.id + ".modes");
    for (const group of list(proc.categories, proc.id + ".categories", 1)) {
      entry(group, "Kategorie");
      text(group.label, group.id + ".label");
      text(group.source, group.id + ".source", true);
      integer(group.color, 0, group.id + ".color");
      requireValue(group.color <= 5, group.id, "Farbindex muss zwischen 0 und 5 liegen");
      for (const item of list(group.competencies, group.id + ".competencies", 1)) {
        entry(item, "Kompetenz");
        text(item.label, item.id + ".label");
        text(item.ideal, item.id + ".ideal", true);
        integer(item.number, 1, item.id + ".number");
        modes(item.modes, proc.modes, item.id + ".modes");
        for (const asset of list(item.media, item.id + ".media")) {
          record(asset, item.id + ".media");
          requireValue(["image", "video"].includes(asset.type), item.id, "Medientyp muss image oder video sein");
          text(asset.src, item.id + ".media.src");
          text(asset.label, item.id + ".media.label");
        }
        const errors = list(item.errors, item.id + ".errors");
        for (const error of errors) {
          entry(error, item.id + ".errors");
          text(error.description, error.id + ".description");
          requireValue(levels.includes(error.severity), error.id, "unbekannte Fehlerstufe");
          requireValue(typeof error.repeat === "boolean", error.id, "repeat muss true oder false sein");
          for (const key of ["ideal", "exclusiveGroup"]) {
            if (key in error) text(error[key], error.id + "." + key, key === "ideal");
          }
        }
        const targets = new Set();
        for (const error of errors) {
          if ("excludes" in error) {
            for (const id of list(error.excludes, error.id + ".excludes")) {
              requireValue(id !== error.id && errors.some((other) => other.id === id), error.id, `ungültiger Ausschluss „${id}“`);
            }
          }
          if ("escalatesTo" in error) {
            const target = errors.find((other) => other.id === error.escalatesTo);
            requireValue(error.repeat && target && !target.repeat && levels.indexOf(target.severity) > levels.indexOf(error.severity)
              && !targets.has(target.id) && data.escalateAt[error.severity], error.id, "Hochstufungsziel oder Schwelle prüfen");
            targets.add(target.id);
          }
        }
      }
    }
  }
}

function message(value = "") {
  byId("message").textContent = value;
  byId("message").hidden = !value;
  if (value) byId("message").focus();
}

function draftText() {
  return view === "source" ? byId("source-text").value : JSON.stringify(model);
}

function saveDraft() {
  const status = byId("save-status");
  try {
    localStorage.setItem(draftKey, JSON.stringify({ fileName, selection, view, text: draftText() }));
    status.dataset.saved = "true";
    status.textContent = `${fileName} · Entwurf in diesem Browser gespeichert`;
  } catch {
    status.dataset.saved = "false";
    status.textContent = "Der Browser konnte den Entwurf nicht speichern. Sichere deine Änderungen über den Export.";
  }
}

function modified() {
  edited = true;
  message();
  saveDraft();
}

function showView(next) {
  view = next;
  byId("sheet-panel").hidden = view !== "table";
  byId("fields").hidden = view !== "form";
  byId("source-panel").hidden = view !== "source";
  byId("show-sheet").setAttribute("aria-pressed", view === "table");
  byId("show-form").setAttribute("aria-pressed", view === "form");
  if (view === "table") renderSheet();
  if (view === "form") renderForm();
}

function openSheetRow(proc, group, item, error) {
  selection = { procedure: proc.id, category: group.id, competency: item.id, error: error.id };
  showView("form");
  if (edited) saveDraft();
  const target = byId("form-error-" + error.id);
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: "start" });
}

function measureSheetOverflow() {
  if (view !== "table") return;
  const cells = byId("sheet-rows").querySelectorAll(".sheet-cell:not(.is-expanded)");
  const clipped = Array.from(cells, (cell) => cell.firstElementChild.scrollWidth > cell.clientWidth);
  cells.forEach((cell, index) => { cell.lastElementChild.hidden = !clipped[index]; });
}

function sheetCell(value, columnName, editLabel) {
  const cell = document.createElement("td");
  const wrapper = document.createElement("div");
  wrapper.className = "sheet-cell";
  const content = document.createElement(editLabel ? "button" : "span");
  content.className = "sheet-text";
  content.textContent = value;
  if (editLabel) {
    content.type = "button";
    content.classList.add("sheet-open");
    content.setAttribute("aria-label", editLabel);
  }
  const more = document.createElement("button");
  more.type = "button";
  more.className = "sheet-more";
  more.hidden = true;
  more.textContent = "…";
  more.setAttribute("aria-expanded", "false");
  more.setAttribute("aria-label", columnName + " vollständig anzeigen");
  more.onclick = (event) => {
    event.stopPropagation();
    const expanded = wrapper.classList.toggle("is-expanded");
    more.setAttribute("aria-expanded", expanded);
    more.setAttribute("aria-label", columnName + (expanded ? " einklappen" : " vollständig anzeigen"));
    more.textContent = expanded ? "−" : "…";
    if (!expanded) measureSheetOverflow();
  };
  wrapper.append(content, more);
  cell.append(wrapper);
  return cell;
}

function renderSheet() {
  const rows = document.createDocumentFragment();
  const headings = Array.from(document.querySelectorAll(".catalog-sheet th"), (th) => th.textContent);
  for (const proc of model.procedures) {
    for (const group of proc.categories) {
      for (const item of group.competencies) {
        for (const error of item.errors) {
          const row = document.createElement("tr");
          row.id = "sheet-row-" + error.id;
          row.dataset.categoryColor = group.color;
          row.dataset.severity = error.severity;
          const values = [model.severities[error.severity].label, proc.label, group.label, item.label,
            error.description, error.ideal || item.ideal];
          const editLabel = `Fehlerbild bearbeiten: ${error.description || error.id}`;
          values.forEach((value, column) => row.append(sheetCell(value, headings[column], column === 0 ? editLabel : "")));
          row.onclick = () => openSheetRow(proc, group, item, error);
          rows.append(row);
        }
      }
    }
  }
  byId("sheet-empty").hidden = rows.childElementCount > 0;
  byId("sheet-rows").replaceChildren(rows);
  requestAnimationFrame(measureSheetOverflow);
}

new ResizeObserver(measureSheetOverflow).observe(document.querySelector(".catalog-sheet"));

function choice(id, entries, selectedId) {
  const select = byId(id);
  select.replaceChildren(...entries.map((entry) => new Option(entry.label || entry.id, entry.id)));
  const chosen = entries.find((entry) => entry.id === selectedId) ?? entries[0];
  select.value = chosen.id;
  return chosen;
}

function newId(prefix) {
  const suffix = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return prefix + suffix;
}

function renderForm() {
  const proc = choice("process-choice", model.procedures, selection.procedure);
  const group = choice("category-choice", proc.categories, selection.category);
  const item = choice("item-choice", group.competencies, selection.competency);
  if (selection.competency !== item.id) delete selection.error;
  Object.assign(selection, { procedure: proc.id, category: group.id, competency: item.id });
  byId("item-label").value = item.label;
  byId("item-ideal").value = item.ideal;
  byId("item-label").oninput = (event) => {
    item.label = event.target.value;
    byId("item-choice").selectedOptions[0].text = item.label || item.id;
    modified();
  };
  byId("item-ideal").oninput = (event) => { item.ideal = event.target.value; modified(); };
  for (const mode of examModes) {
    const check = byId("mode-" + mode);
    check.checked = item.modes.includes(mode);
    check.disabled = !proc.modes.includes(mode) || (check.checked && item.modes.length === 1);
    check.onchange = () => {
      item.modes = examModes.filter((value) => byId("mode-" + value).checked);
      renderForm();
      modified();
    };
  }
  byId("add-item").onclick = () => {
    const id = newId("kompetenz-");
    const number = Math.max(...proc.categories.flatMap((c) => c.competencies.map((i) => i.number))) + 1;
    group.competencies.push({ id, number, label: "Neue Kompetenz", modes: [...proc.modes], ideal: "", media: [], errors: [] });
    selection.competency = id;
    renderForm();
    modified();
    byId("item-label").select();
  };
  byId("remove-item").disabled = group.competencies.length === 1;
  byId("remove-item").title = group.competencies.length === 1 ? "Jede Kategorie benötigt mindestens eine Kompetenz." : "";
  byId("remove-item").onclick = () => {
    if (!window.confirm(`Die Kompetenz „${item.label}“ mit allen Fehlerbildern aus dem Entwurf entfernen?`)) return;
    group.competencies = group.competencies.filter((other) => other !== item);
    renderForm();
    modified();
  };
  byId("error-fields").replaceChildren(...item.errors.map((error) => errorForm(item, error)));
  byId("add-error").onclick = () => {
    const id = newId(item.id + "-f-");
    item.errors.push({ id, description: "Neues Fehlerbild", severity: "CF", repeat: false });
    renderForm();
    modified();
    byId("error-fields").lastElementChild.querySelector("textarea").select();
  };
}

function labelled(caption, control) {
  const label = document.createElement("label");
  if (control.type === "checkbox") label.append(control, caption);
  else label.append(caption, control);
  return label;
}

function errorForm(item, error) {
  const box = document.createElement("fieldset");
  box.id = "form-error-" + error.id;
  box.tabIndex = -1;
  const legend = document.createElement("legend");
  legend.textContent = error.id;
  const description = document.createElement("textarea");
  description.rows = 2;
  description.value = error.description;
  description.oninput = () => {
    error.description = description.value;
    for (const reference of byId("error-fields").querySelectorAll("[data-error-reference]")) {
      if (reference.dataset.errorReference === error.id) reference.textContent = description.value || error.id;
    }
    modified();
  };
  const severity = document.createElement("select");
  for (const code of levels) severity.add(new Option(model.severities[code].label, code));
  severity.value = error.severity;
  severity.onchange = () => { error.severity = severity.value; modified(); };
  const repeat = document.createElement("input");
  repeat.type = "checkbox";
  repeat.checked = error.repeat;
  repeat.onchange = () => { error.repeat = repeat.checked; modified(); };
  const repeatLabel = labelled("Mehrfach erfassbar", repeat);
  repeatLabel.className = "check";
  const grid = document.createElement("div");
  grid.className = "field-grid";
  grid.append(labelled("Fehlerstufe", severity), repeatLabel);
  box.append(legend, labelled("Fehlerbeschreibung", description), grid);

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = "Idealbild, Hochstufung und Ausschlüsse";
  details.append(summary);
  const ideal = document.createElement("textarea");
  ideal.rows = 2;
  ideal.value = error.ideal ?? "";
  ideal.placeholder = "Idealbild der Kompetenz verwenden";
  ideal.oninput = () => {
    if (ideal.value) error.ideal = ideal.value;
    else delete error.ideal;
    modified();
  };
  details.append(labelled("Eigenes Idealbild für dieses Fehlerbild", ideal));
  const promotion = document.createElement("select");
  promotion.add(new Option("Keine Hochstufung", ""));
  const alternatives = item.errors.filter((other) => other !== error);
  for (const other of alternatives) {
    const option = new Option(other.description || other.id, other.id);
    option.dataset.errorReference = other.id;
    promotion.add(option);
  }
  promotion.value = error.escalatesTo ?? "";
  promotion.onchange = () => {
    if (promotion.value) {
      error.escalatesTo = promotion.value;
      error.repeat = repeat.checked = true;
    } else delete error.escalatesTo;
    modified();
  };
  details.append(labelled("Hochstufen auf", promotion));
  const group = document.createElement("input");
  group.type = "text";
  group.value = error.exclusiveGroup ?? "";
  group.oninput = () => {
    if (group.value.trim()) error.exclusiveGroup = group.value.trim();
    else delete error.exclusiveGroup;
    modified();
  };
  details.append(labelled("Ausschlussgruppe (optional)", group));
  for (const other of alternatives) {
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = error.excludes?.includes(other.id) || other.excludes?.includes(error.id) || false;
    check.onchange = () => {
      // One reference suffices; removing a symmetric exclusion clears both directions.
      unlink(error, other.id);
      unlink(other, error.id);
      if (check.checked) (error.excludes ??= []).push(other.id);
      renderForm();
      modified();
      const sameDetails = byId("error-fields").children[item.errors.indexOf(error)].querySelector("details");
      sameDetails.open = true;
      sameDetails.querySelectorAll("input[type=checkbox]")[alternatives.indexOf(other)].focus();
    };
    const name = document.createElement("span");
    name.dataset.errorReference = other.id;
    name.textContent = other.description || other.id;
    const caption = document.createElement("span");
    caption.append("Schließt aus: ", name);
    const label = labelled(caption, check);
    label.className = "check";
    details.append(label);
  }
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove";
  remove.textContent = "Fehlerbild entfernen";
  remove.onclick = () => {
    if (!window.confirm(`„${error.description || error.id}“ und die Verweise darauf aus dem Entwurf entfernen?`)) return;
    item.errors = alternatives;
    for (const other of alternatives) {
      if (other.escalatesTo === error.id) delete other.escalatesTo;
      unlink(other, error.id);
    }
    renderForm();
    modified();
  };
  details.append(remove);
  box.append(details);
  return box;
}

function unlink(error, id) {
  if (!error.excludes) return;
  error.excludes = error.excludes.filter((entry) => entry !== id);
  if (!error.excludes.length) delete error.excludes;
}

for (const [id, key] of [["process-choice", "procedure"], ["category-choice", "category"], ["item-choice", "competency"]]) {
  byId(id).onchange = (event) => {
    delete selection.error;
    selection[key] = event.target.value;
    renderForm();
    if (edited) saveDraft();
  };
}

byId("show-source").onclick = () => {
  byId("source-text").value = JSON.stringify(model, null, 2);
  showView("source");
  saveDraft();
  byId("source-text").focus();
};
byId("source-text").oninput = modified;
function switchView(next) {
  if (next === view) return;
  if (view === "source") {
    try {
      model = readCatalog(byId("source-text").value);
      edited = true;
      message();
    } catch (error) {
      message(error.message);
      return;
    }
  }
  showView(next);
  if (edited) saveDraft();
  if (next === "form") byId("process-choice").focus();
  else {
    const row = byId("sheet-row-" + selection.error);
    if (row) {
      row.querySelector(".sheet-open").focus({ preventScroll: true });
      row.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }
}
byId("show-sheet").onclick = () => switchView("table");
byId("show-form").onclick = () => switchView("form");
byId("apply-source").onclick = () => switchView("form");

byId("import-button").onclick = () => byId("import-file").click();
byId("import-file").onchange = async (event) => {
  const file = event.target.files[0];
  event.target.value = "";
  if (!file) return;
  const request = ++importRequest;
  try {
    const data = readCatalog(await file.text());
    if (request !== importRequest) return;
    if (edited && !window.confirm("Den aktuellen lokalen Entwurf durch die importierte Datei ersetzen?")) return;
    model = data;
    fileName = file.name;
    selection = {};
    showView(view === "form" ? "form" : "table");
    modified();
  } catch (error) {
    if (request === importRequest) message(`Import fehlgeschlagen. ${error.message}`);
  }
};

byId("download").onclick = () => {
  try {
    const data = view === "source" ? readCatalog(byId("source-text").value) : model;
    validate(data);
    const js = `window.examCatalog = ${JSON.stringify(data, null, 2)};\n`;
    const url = URL.createObjectURL(new Blob([js], { type: "text/javascript;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "catalog.js";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    message();
  } catch (error) { message(`Export nicht möglich. ${error.message}`); }
};

function restoreDraft() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(draftKey));
  } catch {
    message("Der lokale Entwurf konnte nicht gelesen werden.");
  }
  if (!saved || typeof saved.text !== "string") {
    showView("table");
    byId("save-status").textContent = "Projektkatalog geöffnet. Änderungen werden in diesem Browser gespeichert.";
    return;
  }
  edited = true;
  fileName = saved.fileName || "catalog.js";
  selection = saved.selection ?? {};
  byId("save-status").textContent = `${fileName} · Lokalen Entwurf wiederhergestellt`;
  const savedView = saved.view ?? (saved.rawMode ? "source" : "form");
  if (savedView !== "source") {
    try {
      // A field may still be empty or a relationship incomplete while typing.
      model = JSON.parse(saved.text);
      showView(savedView === "table" ? "table" : "form");
      return;
    } catch (error) {
      message(`Der Entwurf enthält offene Eingaben. Du kannst sie im JSON bearbeiten. ${error.message}`);
    }
  }
  byId("source-text").value = saved.text;
  showView("source");
}

restoreDraft();
