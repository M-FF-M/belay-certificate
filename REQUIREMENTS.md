# Zusätzliche Anforderungen

- durch zweimaliges Klicken auf einen einzelnen erheblichen Fehler sollte bereits der entsprechende kritische Fehler ausgewählt werden (bei passenden Fehlerbildern); von leicht auf erheblich oder leicht auf kritisch sollte es bei 5 mal Klicken bleiben
- kannst du ganze Kategorie-Abschnitte dezent farbig hinterlegen statt nur die Überschrift? Achte hier auf harmonierende Farben und dass die Farben der Fehler-Knöpfe sich weiterhin gut abheben. Wenn eine Kategorie nur eine Kompetenz enthält, sollte diese Kompetenz keine extra Überschrift erhalten (der "Alles perfekt"-Knopf sollte dann rechts neben dieser Überschrift erscheinen, so wie es aktuell bei den Kompetenz-Überschriften ist).
- insgesamt kannst du das Design etwas ansprechender/moderner machen. Bleibe bei einer Schriftart. Das Layout sollte auch so kompakt bleiben, wie es aktuell ist. Allerdings wäre zum Beispiel eine klarere visuelle Hierarchie besser und zwischen zwei Vorgängen kannst du auch zusätzlichen Abstand einfügen. Die Hintergrundfarben könnten bei der Hierarchie schon helfen. Die Unterteilung zwischen zwei Kompetenzen sollte deutlicher hervorgehoben werden. Als Referenzdesign habe ich uninow.png im Repository platziert; so ähnlich könnte das Design aussehen (allerdings bitte ohne auffällige Akzentfarbe; es gibt bereits so schon genug farbige Elemente). Der linke dicke farbige Rand bei Fehlerknöpfen sollte auf Fehlerknöpfe beschränkt sein und nicht auch für die Kategorien verwendet werden.
- die Auswertung sollte auch die Anzahl der jeweiligen Fehlerstufen aufzählen, außerdem sollte auch eine Zusammenfassung der Fehlerbilder sichtbar sein. Auch die Auswerung kann visuell ansprechender gestaltet werden. Wenn die Auswertung noch nicht abgeschlossen ist, sollte es dort einen Knopf geben wie "fehlende Angaben prüfen". Dann sollte die Seite automatisch zur ersten fehlenden Angabe scrollen und diese auch visuell deutlich hervorheben. Durch Klicken auf "Alles perfekt" sollte die Seite zum nächsten offenen Punkt scrollen und auch diesen hervorheben (bis am Ende zurück zur Auswertung gescrollt wird). Wenn stattdessen ein Fehler angeklickt wird (oder die Seite sonst irgendwo außer auf dem "Alles perfekt"-Knopf), sollte der Modus verlassen werden und die Seite sich wieder wie normal verhalten.
- Falls nötig, kannst du zum Beispiel Material Icons oder einen ähnlich leicht einzubindenden Icon-Schriftsatz verwenden.
- bitte führe alles nicht ganz Stimmige auf, was du finden kannst. Gibt es zum Beispiel einmalige und häufige Fehler, die zusammenpassen könnten, aber leicht anders heißen? Sollten manche Fehler vielleicht eine andere Stufe erhalten? Nicht einfach ohne Nachfrage korrigieren, aber wir sollten das kontrollieren. Fasse Unstimmigkeiten in CLARIFY.md zusammen.

# Anforderungen vom 20.11.2026

- man sollte Namen des Prüflings und Trainer eintragen können, das Datum soll automatisch bestimmt werden
- man sollte am Anfang zwischen Vorstieg- und Toprope-Prüfung wählen können
- die vergangenen Prüfungen sollten unbegrenzt im Browser gespeichert werden, allerdings sollten nach 7 Tagen die Namen der Prüflinge entfernt werden. Die Namen der Trainer können erhalten bleiben. Es soll später möglich sein, die Daten statistisch auszuwerten. Eine Export nach CSV Option für alle Daten (ohne Namen der Prüflinge) sollte verfügbar sein.
- die Punkte aus dem Google Sheet sind Minuspunkte für Fehler und sollten zusammengezählt werden. Wo es sinnvoll ist, sollten Fehlerbilder auch mehrmals angeklickt werden können und zu mehrfachem Punktabzug führen (Negativpunkte sollten auch wieder zurückgenommen werden können). Wenn es einmalige und häufige Fehler in der gleichen Kategorie gibt, dann sollten 5 einmalige Fehler dazu führen, dass der "häufig" Fehler ausgewählt wird und der einmalige nicht mehr anklickbar ist; häufige Fehler können nicht mehrmals angeklickt werden. Pro Kompetenz sollten mehrere Fehlerbilder gleichzeitig auswählbar sein wo sinnvoll.
- man sollte pro Kompetenz Fehler anklicken könnten. Kategorisierung in Schwere der Fehler sollte über Farben erfolgen (nicht über A/B/C Buchstaben). In jedem der Buttons sollte möglichst kompakt eine Beschreibung des Fehlerbilds stehen. Details pro Kompetenz sollten aufklappbar sein; dort könnten später auch Fotos oder Videos erscheinen.
- es sollte pro Kompetenz auch einen "alles perfekt"-Button geben, der allerdings nicht anwählbar ist, wenn Fehler in der Kompetenz eingetragen wurden
- das Google Sheet sollte von dir in eine Konfigurationsdatei (z.B. JSON) mit festem voll spezifizierten Format übertragen werden
- alle Kompetenzen sollten in einer sinnvollen Reihenfolge untereinander erscheinen. Ein fixes Navigationsmenü was immer zu sehen ist sollte dazu dienen, dass man schnell zwischen verschiednen Vorgängen (z.B. per Dropdown) und vor allem Kategorien (vielleicht nebeneinander ähnlich wie Tabs) wechseln kann. Das Navigationsmenü scrollt dann die Seite zur richtigen Stelle, alle Kompetenzen sind immer sichtbar und auch durch reines Scrollen erreichbar. Jede Kategorie sollte zur schnellen Identifizierung eine eigene Farbe haben (wenn gut aufgebaut, können sich aber Farben über verschiedene Vorgänge wiederholen)
- durchgefallen ab 10 Punkten (1 kritischer Fehler), Grenzfall bei 6-9, bestanden bei max. 5
- erstmal: Verwendung optimiert für Hochkant-Format, vermultich auf Tablet.

Im Sheet verwendete Kürzel:
GU = Gewichtsunterschied
VS = Vorstieg
TR = Toprope
BA = Bremsassistent
BH = Bremshand
S = Sichernde Person
K = Kletternde Person
ZWS = Zwischensicherung
BN = Bodennähe
BF = Bodenferne