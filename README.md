# Kletterprüfung

Statischer Prüfungsbogen für Toprope und Vorstieg nach `REQUIREMENTS.md` und dem lokalen Export `Pruefpunkte-Google-Sheet.xlsx`. Die Anwendung besteht aus HTML, CSS und JavaScript und kann direkt über `index.html` geöffnet werden. Für stabilen Browserspeicher empfiehlt sich eine feste Webadresse. Lokal lässt sich der Ordner beispielsweise mit `python -m http.server 8000` ausliefern. Für GitHub Pages kann das Repository-Stammverzeichnis als Quelle gewählt werden.

## Prüfung und Protokolle

- Eine neue Prüfung erhält automatisch das lokale Datum. Das zuletzt geöffnete Protokoll wird beim Laden fortgesetzt.
- Die Punktwerte betragen 1, 5 oder 10 Minuspunkte je effektiv gewertetem Fehler. Ab 10 steht „Nicht bestanden“ fest. „Bestanden“ (0–5) und „Grenzfall“ (6–9) erscheinen nach Bewertung aller Kompetenzen.
- Bei einem verknüpften erheblichen Fehler zählt ab dem zweiten Einzelvorkommnis der entsprechende kritische Fehler. Bei einem verknüpften leichten Fehler erfolgt die Hochstufung beim fünften Vorkommnis. „−“ am automatisch hochgestuften Fehler stellt den letzten Stand vor der Hochstufung wieder her. Die Auswertung und der CSV-Export verwenden diese Regeln auch für bereits gespeicherte Einzelvorkommnisse im Fehlerkatalog.
- Die Auswertung zeigt die Anzahl je Fehlerstufe und den Punktbeitrag jedes gewerteten Fehlerbilds. „Fehlende Angaben prüfen“ führt zur ersten offenen Kompetenz. „Alles perfekt“ führt in diesem Modus zur nächsten offenen Kompetenz, am Ende zur Auswertung. Ein anderer Klick beendet den Durchgang.
- Protokolle bleiben im `localStorage`, solange der Browser sie aufbewahrt. Sieben Tage nach Prüfungsbeginn entfernt die Anwendung den Namen des Prüflings beim nächsten Seitenaufruf oder während die Seite geöffnet ist. Trainername und Bewertungen bleiben gespeichert.
- Der CSV-Export umfasst alle Protokolle ohne Prüflingsnamen. Er verwendet UTF-8 mit BOM und Semikolon als Trennzeichen. Die Protokoll-ID gruppiert die Zeilen einer Prüfung. Gesamtminuspunkte und Beobachtungen wiederholen sich pro Protokoll. Die Spalte „Minuspunkte“ enthält den Beitrag der Zeile. „Anzahl erfasst“ enthält auch Einzelvorkommnisse, die durch die Hochstufung ersetzt wurden.
- Vorhandene lokale Protokolle aus dem früheren Entwurf werden als Archiv übernommen und mit Katalogversion 0 exportiert. Die früheren Buchstabenbewertungen behalten dabei ihre ursprüngliche Bedeutung.

## Konfigurationsformat

`catalog.js` weist ein JSON-Objekt an `window.examCatalog` zu. Das Skriptformat erlaubt das Öffnen per Doppelklick. Die folgenden Felder sind Pflichtfelder, sofern sie nicht ausdrücklich als optional markiert sind. Arrays behalten ihre Anzeigereihenfolge.

- Das Wurzelobjekt enthält `version` (positive Ganzzahl), `escalateAt` (Schwelle je Ausgangsstufe, aktuell `{"CF":5,"BF":2}`), `thresholds` (Objekt mit ganzzahligen Untergrenzen `borderline` und `fail`, in aufsteigender Reihenfolge), `severities`, `observations` und `procedures`. Jede für eine Verknüpfung verwendete Ausgangsstufe benötigt eine ganzzahlige Schwelle ab 2.
- `severities` enthält die Schlüssel `OPT`, `CF`, `BF` und `AF`. Je Eintrag gibt es `label`, `short`, `description` und `examples` als Zeichenketten sowie `points` als nichtnegative Ganzzahl. `OPT` steht für „Alles perfekt“ und hat 0 Punkte.
- `observations[]` enthält `id` (eindeutige Zeichenkette), `source` (Originaltext), `label` (Anzeige) und `options` (Array zulässiger, eindeutiger Zeichenketten).
- `procedures[]` enthält `id`, `label`, `modes` und `categories`. `id` und `label` sind Zeichenketten. `modes` enthält `toprope`, `vorstieg` oder beide. `categories` ist ein Array.
- `categories[]` enthält `id`, `label` und `source` als Zeichenketten, `color` als Palettenindex von 0 bis 5 und `competencies` als Array.
- `competencies[]` enthält `id`, `label` und `ideal` als Zeichenketten, `number` als ganzzahlige Blattnummer der Kompetenz (Spalte NR), `modes` als Teilmenge der Modi des Vorgangs sowie die Arrays `media` und `errors`.
- `media[]` enthält `type` (`image` oder `video`), `src` (relativer Dateipfad) und `label` (Beschriftung und zugänglicher Name). Leere Arrays sind zulässig.
- `errors[]` enthält `id`, `description` (Text aus der Tabelle), `severity` (`CF`, `BF` oder `AF`) und `repeat` (Boolean). Das optionale `escalatesTo` verweist bei einem wiederholbaren Fehler auf die ID eines nicht wiederholbaren häufigen Gegenstücks derselben Kompetenz. Jede Ziel-ID darf nur einmal referenziert werden. Die optionale Zeichenkette `exclusiveGroup` markiert alternative Ausprägungen innerhalb einer Kompetenz. Das optionale `ideal` bewahrt ein im Sheet abweichendes Idealbild des Fehlers.

Vorgangs-, Kategorie-, Kompetenz- und Fehler-IDs sind innerhalb ihrer Ebene eindeutig und bleiben für bereits gespeicherte Bewertungen stabil. Die Zuordnung der Modi, die Verknüpfung gleichartiger Fehlerbilder und die Antwortoptionen für die allgemeinen Beobachtungen sind im Entwurf ausdrücklich in der Konfiguration hinterlegt.
