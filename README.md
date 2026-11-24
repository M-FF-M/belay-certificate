# Kletterprüfung

Statischer Prüfungsbogen für Toprope und Vorstieg nach `REQUIREMENTS.md` und dem lokalen Export `Pruefpunkte-Google-Sheet.xlsx`. Die Anwendung besteht aus HTML, CSS und JavaScript und kann direkt über `index.html` geöffnet werden. Für stabilen Browserspeicher empfiehlt sich eine feste Webadresse. Lokal lässt sich der Ordner beispielsweise mit `python -m http.server 8000` ausliefern. Für GitHub Pages kann das Repository-Stammverzeichnis als Quelle gewählt werden.

## Prüfung und Protokolle

- Eine neue Prüfung erhält automatisch das lokale Datum. Das zuletzt geöffnete Protokoll wird beim Laden fortgesetzt.
- Die Punktwerte betragen 1, 5 oder 10 Minuspunkte je effektiv gewertetem Fehler. Ab 10 steht „Nicht bestanden“ fest. „Bestanden“ (0–5) und „Grenzfall“ (6–9) erscheinen nach Bewertung aller Kompetenzen.
- Bei einem verknüpften erheblichen Fehler zählt ab dem zweiten Einzelvorkommnis der entsprechende kritische Fehler. Bei einem verknüpften leichten Fehler erfolgt die Hochstufung beim fünften Vorkommnis. „−“ am automatisch hochgestuften Fehler stellt den letzten Stand vor der Hochstufung wieder her. Die Auswertung und der CSV-Export verwenden diese Regeln auch für bereits gespeicherte Einzelvorkommnisse im Fehlerkatalog.
- Ein wiederholbares Fehlerbild zählt höchstens fünfmal bei leichten, dreimal bei erheblichen und zweimal bei kritischen Fehlern. Eine frühere Hochstufung hat Vorrang. Bei alten Einträgen über dem Limit enthält der Export weiterhin die ursprünglich erfasste Anzahl und daneben die begrenzte Wertung. „−“ reduziert die gewertete Anzahl um eins.
- Gegenseitig ausgeschlossene Varianten erscheinen nach der ersten Auswahl ausgegraut. Zum Wechseln die gewählte Variante über „−“ zurücknehmen. Bereits gemeinsam gespeicherte Varianten aus älteren Protokollen bleiben einzeln sichtbar und lassen sich einzeln zurücknehmen.
- Die Auswertung zeigt die Anzahl je Fehlerstufe und den Punktbeitrag jedes gewerteten Fehlerbilds. „Fehlende Angaben prüfen“ führt zur ersten offenen Kompetenz. „Alles perfekt“ führt in diesem Modus zur nächsten offenen Kompetenz, am Ende zur Auswertung. Ein anderer Klick beendet den Durchgang.
- Protokolle bleiben im `localStorage`, solange der Browser sie aufbewahrt. Sieben Tage nach Prüfungsbeginn entfernt die Anwendung den Namen des Prüflings beim nächsten Seitenaufruf oder während die Seite geöffnet ist. Trainername und Bewertungen bleiben gespeichert.
- Der CSV-Export umfasst alle Protokolle ohne Prüflingsnamen. Er verwendet UTF-8 mit BOM und Semikolon als Trennzeichen. Die Protokoll-ID gruppiert die Zeilen einer Prüfung. Gesamtminuspunkte und Beobachtungen wiederholen sich pro Protokoll. Die Spalte „Minuspunkte“ enthält den Beitrag der Zeile. „Anzahl erfasst“ enthält auch Einzelvorkommnisse, die durch die Hochstufung ersetzt wurden.
- Vorhandene lokale Protokolle aus dem früheren Entwurf werden als Archiv übernommen und mit Katalogversion 0 exportiert. Die früheren Buchstabenbewertungen behalten dabei ihre ursprüngliche Bedeutung.

## Katalogeditor

Über „Fragenkatalog bearbeiten“ oder direkt über `editor.html` öffnet sich der Projektkatalog. „Datei importieren“ liest eine lokale `catalog.js` oder eine JSON-Datei im unten beschriebenen Format. Im Formular lassen sich Kompetenzen und Fehlerbilder hinzufügen, entfernen und bearbeiten, einschließlich Prüfungsarten, Fehlerstufen, Hochstufungen und Ausschlüssen. Die JSON-Ansicht erschließt sämtliche Felder, auch Reihenfolge, Kategorien, Medien und Punktwerte.

Die Tabellenansicht zeigt eine Zeile pro Fehlerbild in der Reihenfolge des Katalogs. „…“ klappt den vollständigen Zelltext aus. Ein Klick auf die Zeile öffnet die zugehörige Kompetenz und springt zum Fehlerbild. „Tabelle“ führt zur bearbeiteten Zeile zurück.

Der Editor speichert den Arbeitsstand automatisch unter `kletterpruefung-katalogentwurf-v1` im lokalen Browserspeicher. Beim nächsten Öffnen stellt er die Auswahl und auch einen unvollständigen JSON-Entwurf wieder her. Beim Import und Export prüft er das Format und die Verweise innerhalb der Kompetenzen.

„Als catalog.js exportieren“ lädt die bearbeitete Datei herunter. Um sie im Prüfungsbogen zu verwenden, die `catalog.js` im Projekt durch diese Datei ersetzen. Vorhandene Bewertungen beziehen sich auf die gespeicherten IDs. Geänderte Regeln und entfernte Einträge können daher die Auswertung bestehender Protokolle beeinflussen.

## Konfigurationsformat

`catalog.js` weist ein JSON-Objekt an `window.examCatalog` zu. Das Skriptformat erlaubt das Öffnen per Doppelklick. Die folgenden Felder sind Pflichtfelder, sofern sie nicht ausdrücklich als optional markiert sind. Arrays behalten ihre Anzeigereihenfolge.

- Das Wurzelobjekt enthält `version` (positive Ganzzahl), `escalateAt` (Schwelle je Ausgangsstufe, aktuell `{"CF":5,"BF":2}`), `thresholds` (Objekt mit ganzzahligen Untergrenzen `borderline` und `fail`, in aufsteigender Reihenfolge), `severities`, `observations` und `procedures`. Jede für eine Verknüpfung verwendete Ausgangsstufe benötigt eine ganzzahlige Schwelle ab 2.
- `repeatLimits` im Wurzelobjekt enthält je Fehlerstufe eine positive ganze Zahl als Obergrenze für wiederholbare Einträge. Jede Hochstufungsschwelle muss innerhalb der Obergrenze ihrer Ausgangsstufe liegen.
- `severities` enthält die Schlüssel `OPT`, `CF`, `BF` und `AF`. Je Eintrag gibt es `label`, `short`, `description` und `examples` als Zeichenketten sowie `points` als nichtnegative Ganzzahl. `OPT` steht für „Alles perfekt“ und hat 0 Punkte.
- `observations[]` enthält `id` (eindeutige Zeichenkette), `source` (Beobachtung aus der Tabelle in ausgeschriebener Form), `label` (Anzeige) und `options` (Array zulässiger, eindeutiger Zeichenketten).
- `procedures[]` enthält `id`, `label`, `modes` und `categories`. `id` und `label` sind Zeichenketten. `modes` enthält `toprope`, `vorstieg` oder beide. `categories` ist ein Array.
- `categories[]` enthält `id`, `label` und `source` als Zeichenketten, `color` als Palettenindex von 0 bis 5 und `competencies` als Array.
- `competencies[]` enthält `id`, `label` und `ideal` als Zeichenketten, `number` als ganzzahlige Blattnummer der Kompetenz (Spalte NR), `modes` als Teilmenge der Modi des Vorgangs sowie die Arrays `media` und `errors`.
- `media[]` enthält `type` (`image` oder `video`), `src` (relativer Dateipfad) und `label` (Beschriftung und zugänglicher Name). Leere Arrays sind zulässig.
- `errors[]` enthält `id`, `description` (redaktionell bearbeiteter Fehlertext), `severity` (`CF`, `BF` oder `AF`) und `repeat` (Boolean). Das optionale `escalatesTo` verweist bei einem wiederholbaren Fehler auf die ID eines nicht wiederholbaren häufigen Gegenstücks derselben Kompetenz. Jede Ziel-ID darf nur einmal referenziert werden. Ein optionales `ideal` überschreibt das gemeinsame Idealbild für die Erläuterung dieses Fehlers.
- Zwei Einträge mit gleicher `exclusiveGroup` (optionale Zeichenkette) schließen sich innerhalb derselben Kompetenz aus. Das optionale Array `excludes` nennt einzelne andere Fehler-IDs derselben Kompetenz. Ein Verweis in einer Richtung genügt für die gegenseitige Sperre. Beispielsweise schließt `v6-3-f1` die drei anderen Einträge aus. Zwischen diesen dreien gelten weiterhin ihre jeweiligen Hochstufungsregeln.

Vorgangs-, Kategorie-, Kompetenz- und Fehler-IDs sind innerhalb ihrer Ebene eindeutig und bleiben für bereits gespeicherte Bewertungen stabil. Die Zuordnung der Modi, die Verknüpfung gleichartiger Fehlerbilder und die Antwortoptionen für die allgemeinen Beobachtungen sind im Entwurf ausdrücklich in der Konfiguration hinterlegt.
