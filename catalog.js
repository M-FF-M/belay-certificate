// Prüfungsgrundlage aus Pruefpunkte-Google-Sheet.xlsx mit redaktionellen und fachlichen Anpassungen.
window.examCatalog = {
  "version": 1,
  "escalateAt": { "CF": 5, "BF": 2 },
  "repeatLimits": { "CF": 5, "BF": 3, "AF": 2 },
  "thresholds": {
    "borderline": 6,
    "fail": 10
  },
  "severities": {
    "OPT": {
      "label": "Optimal",
      "points": 0,
      "short": "Selbstständige, technisch korrekte und situationsgerechte Ausführung entsprechend dem aktuellen Sicherheitsstandard.",
      "description": "Die Handlung entspricht dem aktuellen Sicherheitsstandard und wird selbstständig, situationsgerecht und kontrolliert ausgeführt.\nNicht nur technisch richtig, sondern auch vorausschauend und angepasst an die jeweilige Situation.",
      "examples": ""
    },
    "CF": {
      "label": "Leicht",
      "points": 1,
      "short": "Erkennbare Abweichung vom Sicherheitsstandard ohne unmittelbar relevante Gefährdung. Kann in Kombination mit weiteren Fehlern zur Entstehung einer Gefahr beitragen.",
      "description": "Eine erkennbare Abweichung von der empfohlenen Ausführung ohne unmittelbar relevante Gefährdung.\nDie Handlung ist noch sicher und kontrollierbar. In Kombination mit weiteren Fehlern oder ungünstigen Umständen kann sie jedoch zu einer gefährlichen Situation beitragen.",
      "examples": "Kurzzeitig etwas mehr Schlappseil als notwendig, ohne konkrete Bodensturzgefahr.\nEinmalig ungünstige, aber noch sichere Positionierung.\nUnnötig umständliche Seilausgabe.\nEinmalig etwas zu spätes Anpassen der Position an die Kletterbewegung.\nEinmalig ungünstige Clipposition ohne konkrete Sturzgefährdung."
    },
    "BF": {
      "label": "Erheblich",
      "points": 5,
      "short": "Relevantes Sicherheitsdefizit. Die Handlung erhöht die Unfallgefahr und kann unter zusätzlichen ungünstigen Bedingungen zu einem Absturz oder einer Verletzung führen.",
      "description": "Eine relevante Sicherheitsreserve fehlt oder eine notwendige Sicherheitsmaßnahme wird nicht umgesetzt.\nDie Handlung erzeugt eine erhöhte Gefährdung, die unter bestimmten zusätzlichen Bedingungen zu einem Absturz oder einer Verletzung führen kann. Die Situation ist aktuell noch kontrollierbar, entspricht aber nicht dem erforderlichen Sicherheitsstandard.",
      "examples": "Ungeeignete Sicherungstechnik bei einem deutlichen Gewichtsunterschied\nWiederholt zu großer Abstand zur Wand in einer Situation, in der dadurch die Sicherungsposition deutlich verschlechtert wird.\nFehlende oder ungeeignete Zusatzmaßnahmen bei einer bekannten Risikokonstellation.\nWiederholt unzureichendes Seilmanagement, obwohl noch keine unmittelbare Bodensturzgefahr besteht.\nNicht situationsgerechte Positionierung vor dem ersten Haken."
    },
    "AF": {
      "label": "Kritisch",
      "points": 10,
      "short": "Mangelhafte Einzelkompetenz / Unmittelbare oder akut drohende erhebliche Gefährdung. Die Sicherheit ist nicht mehr zuverlässig gewährleistet.",
      "description": "Unmittelbare oder akut drohende erhebliche Gefährdung.\nEine Handlung oder Unterlassung, die bereits für sich genommen einen Absturz, eine schwere Verletzung oder eine unkontrollierbare Gefahr verursacht oder bei der nächsten relevanten Belastung mit hoher Wahrscheinlichkeit dazu führt. Die Sicherheit ist nicht mehr zuverlässig gewährleistet oder erfordert ein Eingreifen. Bestimmte Einzelkompetenzen sind stark mangelhaft (zum Beispiel bei der Bedienung des Sicherungsgeräts oder beim Knüpfen eines Knotens).",
      "examples": "Falsch geknüpfter oder nicht vollständig fertiggestellter Einbindeknoten.\nEinbinden in die Materialschlaufe statt in den vorgesehenen Anseilpunkt.\nGefährlich viel Schlappseil in Bodennähe, sodass bei einem Sturz ein Bodensturz droht.\nBremsseil loslassen bei einem dynamischen Sicherungsgerät in einer Situation, in der ein Sturz gehalten werden muss.\nNicht erkannte Fehlbedienung des Sicherungsgeräts mit unmittelbar drohendem Kontrollverlust.\nKollision mit einem anderen Kletterer aufgrund einer nicht mehr kontrollierbaren Situation."
    }
  },
  "observations": [
    {
      "id": "b1",
      "source": "Präsenz der sichernden Person: von eher abwesend bis sehr präsent",
      "label": "Aufmerksamkeit der sichernden Person",
      "options": [
        "Eher abwesend",
        "Wechselnd präsent",
        "Sehr präsent"
      ]
    },
    {
      "id": "b2",
      "source": "Die sichernde Person nimmt Fehler wahr und korrigiert sie",
      "label": "Fehler erkennen und korrigieren",
      "options": [
        "Selten",
        "Gelegentlich",
        "Zuverlässig"
      ]
    }
  ],
  "procedures": [
    {
      "id": "v1",
      "label": "Teamcheck",
      "modes": [
        "toprope",
        "vorstieg"
      ],
      "categories": [
        {
          "id": "v1-k1",
          "label": "Sonstiges",
          "source": "Sonstiges",
          "color": 0,
          "competencies": [
            {
              "id": "v1-1",
              "number": 1,
              "label": "Befindlichkeit",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Sind beide nüchtern, fit und gesund genug zum Sichern und Klettern?",
              "media": [],
              "errors": [
                {"id":"v1-1-f1","severity":"CF","description":"Sicherungsfähigkeit nicht geprüft","repeat":false}
              ]
            },
            {
              "id": "v1-2",
              "number": 2,
              "label": "Kommandos klären",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Kommandos und Namen geklärt",
              "media": [],
              "errors": [
                {"id":"v1-2-f1","severity":"CF","description":"Kommandos und Namen nicht geklärt","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v1-k2",
          "label": "Gewichtsunterschied",
          "source": "Prüfung des Gewichtsunterschieds",
          "color": 1,
          "competencies": [
            {
              "id": "v1-3",
              "number": 3,
              "label": "Gewichtsunterschied im Toprope",
              "modes": [
                "toprope"
              ],
              "ideal": "Bei einem Gewichtsunterschied über 30 % im Toprope einen Bremsassistenten verwenden",
              "media": [],
              "errors": [
                {"id":"v1-3-f1","severity":"AF","description":"Gewichtsunterschied im Toprope über 50 %, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-3-f2","severity":"BF","description":"Gewichtsunterschied im Toprope über 30 % bis 50 %, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"}
              ]
            },
            {
              "id": "v1-4",
              "number": 4,
              "label": "Gewichtsunterschied im Vorstieg",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Bei einem Gewichtsunterschied über 5 kg im Vorstieg einen Bremsassistenten verwenden und den Unterschied auf −5 bis +5 kg ausgleichen",
              "media": [],
              "errors": [
                {"id":"v1-4-f1","severity":"AF","description":"Gewichtsunterschied im Vorstieg über 20 kg, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-4-f2","severity":"BF","description":"Gewichtsunterschied im Vorstieg zwischen 10 und 20 kg, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-4-f3","severity":"CF","description":"Gewichtsunterschied im Vorstieg zwischen 5 und 10 kg, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"}
              ]
            }
          ]
        },
        {
          "id": "v1-k3",
          "label": "Ausrüstung und Umgebung",
          "source": "Setupcheck",
          "color": 2,
          "competencies": [
            {
              "id": "v1-5",
              "number": 5,
              "label": "Schuhcheck",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Die sichernde Person sichert in festen, vorne geschlossenen Schuhen",
              "media": [],
              "errors": [
                {"id":"v1-5-f1","severity":"CF","description":"Die sichernde Person sichert barfuß, in Flipflops oder in Kletterschuhen","repeat":false}
              ]
            },
            {
              "id": "v1-6",
              "number": 6,
              "label": "Material",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Klettermaterial geprüft: Gurt, Seil und Schlingen sind höchstens 10 Jahre alt",
              "media": [],
              "errors": [
                {"id":"v1-6-f1","severity":"CF","description":"Nicht geprüft, ob Gurt, Seil und Schlingen höchstens 10 Jahre alt sind","repeat":false}
              ]
            },
            {
              "id": "v1-7",
              "number": 7,
              "label": "Seillänge",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Seillänge geprüft, Seil lang genug",
              "media": [],
              "errors": [
                {"id":"v1-7-f1","severity":"CF","description":"Seillänge nicht geprüft oder Seil zu kurz","repeat":false}
              ]
            },
            {
              "id": "v1-8",
              "number": 8,
              "label": "Sturzraum",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Sturzraum unter der Sicherungslinie frei von Gegenständen",
              "media": [],
              "errors": [
                {"id":"v1-8-f1","severity":"CF","description":"Gegenstände im Sturzraum unter der Sicherungslinie","repeat":false}
              ]
            },
            {
              "id": "v1-9",
              "number": 9,
              "label": "Gelände",
              "modes": [
                "toprope"
              ],
              "ideal": "Nachstieg ab leicht überhängendem Gelände oder bei seitlich versetztem Umlenker",
              "media": [],
              "errors": [
                {"id":"v1-9-f1","severity":"AF","description":"Toprope in stark überhängendem Gelände (Pendelstrecke über 4 m)","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-9-f2","severity":"BF","description":"Toprope in deutlich überhängendem Gelände (Pendelstrecke 2–4 m)","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-9-f3","severity":"CF","description":"Toprope in leicht überhängendem Gelände oder bei seitlich versetztem Umlenker (Pendelstrecke 1–2 m)","repeat":false,"exclusiveGroup":"g1"}
              ]
            },
            {
              "id": "v1-10",
              "number": 10,
              "label": "Umlenkung",
              "modes": [
                "toprope"
              ],
              "ideal": "Toprope an redundanter Umlenkung / mindestens zwei übereinanderliegenden Expressschlingen",
              "media": [],
              "errors": [
                {"id":"v1-10-f1","severity":"AF","description":"Toprope an einem einzelnen Karabiner ohne Redundanz","repeat":false}
              ]
            },
            {
              "id": "v1-11",
              "number": 11,
              "label": "Kollisionsgefahr",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Benachbarte Routen sind frei, eine Kollision mit anderen Personen ist ausgeschlossen",
              "media": [],
              "errors": [
                {"id":"v1-11-f1","severity":"BF","description":"In die Route eingestiegen, obwohl eine Kollision mit einer anderen Person möglich ist","repeat":false}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v2",
      "label": "Vorbereitung",
      "modes": [
        "toprope",
        "vorstieg"
      ],
      "categories": [
        {
          "id": "v2-k1",
          "label": "Gurt",
          "source": "Gurt",
          "color": 0,
          "competencies": [
            {
              "id": "v2-1",
              "number": 1,
              "label": "Gurt",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Gurt sitzt passend und unverdreht, alle Verschlüsse sind geschlossen, der Gurt ist frei von Material und die Hosentaschen sind leer",
              "media": [],
              "errors": [
                {"id":"v2-1-f1","severity":"AF","description":"Gurtverschlüsse offen, Gurt verkehrt herum angelegt, starke Überforderung beim Anziehen oder unpassende Größe","repeat":false},
                {"id":"v2-1-f2","severity":"BF","description":"Gurt hängt unterhalb der Hüftknochen","repeat":false},
                {"id":"v2-1-f3","severity":"CF","description":"Material oder Karabiner am Gurt oder Gegenstände in den Hosentaschen","repeat":false},
                {"id":"v2-1-f4","severity":"CF","description":"Gurt sitzt etwas locker, Anseilring oder Beinschlaufen sind verdreht","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v2-k2",
          "label": "Anseilknoten",
          "source": "Anseilknoten",
          "color": 1,
          "competencies": [
            {
              "id": "v2-2",
              "number": 2,
              "label": "Anseilknoten",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Anseilknoten sauber geknüpft, Knotenauge möglichst klein, Überstand ein bis zwei Handbreiten, redundant durch beide Anseilschlaufen eingebunden",
              "media": [],
              "errors": [
                {"id":"v2-2-f1","severity":"AF","description":"Anseilknoten an der Materialschlaufe oder nur an einer Anseilschlaufe","repeat":false},
                {"id":"v2-2-f2","severity":"AF","description":"Falscher (geknüpfter) Knoten als Anseilknoten","repeat":false},
                {"id":"v2-2-f3","severity":"AF","description":"Große Unsicherheit beim Knüpfen des Anseilknotens","repeat":false},
                {"id":"v2-2-f4","severity":"BF","description":"Knoten korrekt, aber deutlich unsauberes Knotenbild, großes Knotenauge und viel zu langer Überstand","repeat":false},
                {"id":"v2-2-f5","severity":"CF","description":"Knoten nicht ganz optimal, zum Beispiel unsauberes Knotenbild oder etwas zu großes Knotenauge","repeat":false},
                {"id":"v2-2-f6","severity":"CF","description":"Knoten durch den Sicherungsring geknüpft","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v2-k3",
          "label": "Sicherungsgerät",
          "source": "Sicherungsgerät",
          "color": 2,
          "competencies": [
            {
              "id": "v2-3",
              "number": 3,
              "label": "Sicherungsgerät",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Sichernde Person nutzt ein vertrautes Sicherungsgerät im Sicherungsring mit passendem Karabiner und Verschlusssystem. Das Seil passt und ist korrekt eingelegt.",
              "media": [],
              "errors": [
                {"id":"v2-3-f1","severity":"BF","description":"Seil im Sicherungsgerät falsch eingelegt","repeat":false},
                {"id":"v2-3-f2","severity":"BF","description":"Kein Verschlusskarabiner beim Sicherungsgerät","repeat":false},
                {"id":"v2-3-f3","severity":"BF","description":"Sichernde Person mit dem Sicherungsgerät nicht vertraut","repeat":false},
                {"id":"v2-3-f4","severity":"CF","description":"Ungeeigneter Verschlusskarabiner oder ungeeignete Seilkombination, zum Beispiel bei Autotubes","repeat":false},
                {"id":"v2-3-f5","severity":"CF","description":"Karabinerverschluss auf der Bremshandseite","repeat":false},
                {"id":"v2-3-f6","severity":"CF","description":"Karabiner nicht im Sicherungsring","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v2-k4",
          "label": "Seilendknoten",
          "source": "Seilendknoten",
          "color": 3,
          "competencies": [
            {
              "id": "v2-4",
              "number": 4,
              "label": "Seilendknoten",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Doppelt gelegter Seilendknoten, freiliegend oder in den Seilsack gesteckt geknotet",
              "media": [],
              "errors": [
                {"id":"v2-4-f1","severity":"BF","description":"Kein Seilendknoten","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v2-4-f2","severity":"CF","description":"Falscher Seilendknoten, zum Beispiel ein einfacher Haushaltsknoten im Seilsack","repeat":false,"exclusiveGroup":"g1"}
              ]
            }
          ]
        },
        {
          "id": "v2-k5",
          "label": "Bremsassistent",
          "source": "Bremsassistent",
          "color": 4,
          "competencies": [
            {
              "id": "v2-5",
              "number": 5,
              "label": "Bremsassistent",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Passenden Bremsassistenten und passende Stufe gewählt, Seil richtig herum eingehängt und Verriegelung geschlossen",
              "media": [],
              "errors": [
                {"id":"v2-5-f1","severity":"BF","description":"Bremsassistent oder Stufe passt nicht zum Gewichtsunterschied","repeat":false},
                {"id":"v2-5-f2","severity":"BF","description":"Seil verkehrt herum in den Bremsassistenten eingelegt","repeat":false},
                {"id":"v2-5-f3","severity":"BF","description":"Verriegelung am Bremsassistenten offen","repeat":false}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v3",
      "label": "Partnercheck",
      "modes": [
        "toprope",
        "vorstieg"
      ],
      "categories": [
        {
          "id": "v3-k1",
          "label": "Selbstcheck",
          "source": "Selbstcheck",
          "color": 0,
          "competencies": [
            {
              "id": "v3-1",
              "number": 1,
              "label": "Selbstcheck",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Haptischen Check durchgeführt und Fehler erkannt: Anseilknoten, Sicherungsgerät, Gurt, Seilendknoten und gegebenenfalls Bremsassistent",
              "media": [],
              "errors": [
                {"id":"v3-1-f1","severity":"BF","description":"Selbstcheck komplett vergessen: Anseilknoten, Sicherungsgerät, Gurt, Seilendknoten und gegebenenfalls Bremsassistent","repeat":false},
                {"id":"v3-1-f2","severity":"CF","description":"Einzelne Elemente beim Selbstcheck vergessen oder übersehen: Anseilknoten, Sicherungsgerät, Gurt, Seilendknoten oder Bremsassistent","repeat":true}
              ]
            }
          ]
        },
        {
          "id": "v3-k2",
          "label": "Partnercheck",
          "source": "Partnercheck",
          "color": 1,
          "competencies": [
            {
              "id": "v3-2",
              "number": 2,
              "label": "Partnercheck",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Letzter Check vor dem Losklettern: haptisch prüfen, das Gegenüber zum Zeigen auffordern und Fehler an Anseilknoten, Sicherungsgerät, Gurt, Seilendknoten oder Bremsassistenten erkennen",
              "media": [],
              "errors": [
                {"id":"v3-2-f1","severity":"BF","description":"Partnercheck komplett vergessen: Anseilknoten, Sicherungsgerät, Gurt, Seilendknoten und gegebenenfalls Bremsassistent","repeat":false},
                {"id":"v3-2-f2","severity":"CF","description":"Partnercheck zu früh durchgeführt","repeat":false},
                {"id":"v3-2-f3","severity":"CF","description":"Einzelne Elemente beim Partnercheck vergessen oder übersehen: Anseilknoten, Sicherungsgerät, Gurt, Seilendknoten oder Bremsassistent","repeat":true}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v4",
      "label": "Toprope sichern",
      "modes": [
        "toprope"
      ],
      "categories": [
        {
          "id": "v4-k1",
          "label": "Positionierung",
          "source": "Positionierung",
          "color": 0,
          "competencies": [
            {
              "id": "v4-1",
              "number": 1,
              "label": "Sicherungshaltung",
              "modes": [
                "toprope"
              ],
              "ideal": "Die sichernde Person steht bereit, ein Bein vorne und leicht angewinkelt",
              "media": [],
              "errors": [
                {"id":"v4-1-f1","severity":"CF","description":"Die sichernde Person steht passiv mit durchgestreckten Beinen","repeat":false}
              ]
            },
            {
              "id": "v4-2",
              "number": 2,
              "label": "Positionierung",
              "modes": [
                "toprope"
              ],
              "ideal": "Die sichernde Person steht beim Sichern im Toprope durchgehend 1–2 m seitlich versetzt zur Sicherungslinie",
              "media": [],
              "errors": [
                {"id":"v4-2-f1","severity":"BF","description":"Die sichernde Person steht einmalig in Bodennähe bis zu einem Viertel der Route unter der kletternden Person","repeat":true},
                {"id":"v4-2-f2","severity":"BF","description":"Die sichernde Person steht beim Sichern im Toprope häufig mehr als 4 m seitlich versetzt zur Sicherungslinie","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v4-2-f3","severity":"CF","description":"Die sichernde Person steht in Bodenferne ab einem Viertel der Route unter der kletternden Person. Das Seil ist ihr im Weg.","repeat":false},
                {"id":"v4-2-f4","severity":"CF","description":"Die sichernde Person steht beim Sichern im Toprope häufig 2–4 m seitlich versetzt zur Sicherungslinie","repeat":false,"exclusiveGroup":"g1"}
              ]
            }
          ]
        },
        {
          "id": "v4-k2",
          "label": "Seil",
          "source": "Seil",
          "color": 1,
          "competencies": [
            {
              "id": "v4-3",
              "number": 3,
              "label": "Seilposition",
              "modes": [
                "toprope"
              ],
              "ideal": "Seil mit Seilsack auf der Bremshandseite neben der sichernden Person",
              "media": [],
              "errors": [
                {"id":"v4-3-f1","severity":"CF","description":"Seil ungünstig positioniert, zum Beispiel hinter der sichernden Person oder unter der kletternden Person in der Sicherungslinie","repeat":false}
              ]
            },
            {
              "id": "v4-4",
              "number": 4,
              "label": "Seilmenge",
              "modes": [
                "toprope"
              ],
              "ideal": "In Bodennähe bis zu einem Viertel der Route mit starker Seilspannung sichern. In Bodenferne ab einem Viertel der Route weder Schlappseil noch Seilspannung.",
              "media": [],
              "errors": [
                {"id":"v4-4-f1","severity":"AF","description":"Einmalig Schlappseil bis zu einem Viertel der Route (Bodennähe)","repeat":true},
                {"id":"v4-4-f2","severity":"BF","description":"Einmalig keine Seilspannung bis zu einem Viertel der Route (Bodennähe)","repeat":true},
                {"id":"v4-4-f3","severity":"CF","description":"Einmalig Schlappseil ab einem Viertel der Route (Bodenferne)","repeat":true},
                {"id":"v4-4-f4","severity":"CF","description":"Einmalig straffes Seil ab einem Viertel der Route","repeat":true}
              ]
            }
          ]
        },
        {
          "id": "v4-k3",
          "label": "Sicherungsgerät",
          "source": "Sicherungsgerät",
          "color": 2,
          "competencies": [
            {
              "id": "v4-5",
              "number": 5,
              "label": "Bremshand",
              "modes": [
                "toprope"
              ],
              "ideal": "Bremsseil stets in geschlossener Faust mit Daumen, wenn möglich mit leichtem Druck am Seil",
              "media": [],
              "errors": [
                {"id":"v4-5-f1","severity":"AF","description":"Bremsseil häufig losgelassen","repeat":false},
                {"id":"v4-5-f2","severity":"BF","description":"Bremsseil einmalig kurz losgelassen","repeat":true,"escalatesTo":"v4-5-f1"},
                {"id":"v4-5-f3","severity":"BF","description":"Bremshand häufig locker am Bremsseil","repeat":false},
                {"id":"v4-5-f4","severity":"CF","description":"Bremshand einmalig locker am Bremsseil","repeat":true,"escalatesTo":"v4-5-f3"}
              ]
            },
            {
              "id": "v4-6",
              "number": 6,
              "label": "Bremshandposition",
              "modes": [
                "toprope"
              ],
              "ideal": "Bremshand ist nur kurz beim Seileinholen über der Gerätelinie",
              "media": [],
              "errors": [
                {"id":"v4-6-f1","severity":"BF","description":"Bremshand verharrt sehr oft und lange oberhalb der Gerätelinie","repeat":false},
                {"id":"v4-6-f2","severity":"CF","description":"Bremshand verharrt manchmal kurz oberhalb der Gerätelinie","repeat":true,"escalatesTo":"v4-6-f1"}
              ]
            },
            {
              "id": "v4-7",
              "number": 7,
              "label": "Seileinholen",
              "modes": [
                "toprope"
              ],
              "ideal": "Saubere, zügige Einholbewegung mit passender Seilmenge, um das Tunneln zu ermöglichen",
              "media": [],
              "errors": [
                {"id":"v4-7-f1","severity":"BF","description":"Häufig unsaubere oder hektische Einholbewegung oder zu große Bremsseilschlaufen, die das Tunneln erschweren","repeat":false},
                {"id":"v4-7-f2","severity":"CF","description":"Einmalig unsaubere oder hektische Einholbewegung oder zu große Bremsseilschlaufen, die das Tunneln erschweren","repeat":true,"escalatesTo":"v4-7-f1"}
              ]
            },
            {
              "id": "v4-8",
              "number": 8,
              "label": "Tunneln",
              "modes": [
                "toprope"
              ],
              "ideal": "Bremshand tunnelt sauber, die Faust öffnet sich kaum",
              "media": [],
              "errors": [
                {"id":"v4-8-f1","severity":"BF","description":"Bremshand tunnelt häufig nicht und lässt das Bremsseil los","repeat":false},
                {"id":"v4-8-f2","severity":"CF","description":"Bremshand tunnelt einmalig sehr unsauber","repeat":true,"escalatesTo":"v4-8-f1"}
              ]
            },
            {
              "id": "v4-9",
              "number": 9,
              "label": "Gerätekontakt",
              "modes": [
                "toprope"
              ],
              "ideal": "Kein unnötiger Kontakt mit dem Sicherungsgerät oder seiner Mechanik",
              "media": [],
              "errors": [
                {"id":"v4-9-f1","severity":"BF","description":"Unnötig viel Kontakt mit dem Sicherungsgerät oder Umschließen des Geräts","repeat":false},
                {"id":"v4-9-f2","severity":"CF","description":"Gelegentlicher Kontakt mit dem Sicherungsgerät oder gelegentliches Umschließen des Geräts","repeat":true,"escalatesTo":"v4-9-f1"}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v5",
      "label": "Toprope klettern",
      "modes": [
        "toprope"
      ],
      "categories": [
        {
          "id": "v5-k1",
          "label": "Seil",
          "source": "Seil",
          "color": 0,
          "competencies": [
            {
              "id": "v5-1",
              "number": 1,
              "label": "Seil",
              "modes": [
                "toprope"
              ],
              "ideal": "Körper immer vor dem Sicherungsseil",
              "media": [],
              "errors": [
                {"id":"v5-1-f1","severity":"CF","description":"Körper längere Zeit oder unbemerkt hinter dem Sicherungsseil","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v5-k2",
          "label": "Kommandos",
          "source": "Kommandos",
          "color": 1,
          "competencies": [
            {
              "id": "v5-2",
              "number": 2,
              "label": "Kommandos",
              "modes": [
                "toprope"
              ],
              "ideal": "Kommandos korrekt, mit Namen und in angemessener Lautstärke gegeben",
              "media": [],
              "errors": [
                {"id":"v5-2-f1","severity":"CF","description":"Falsche Kommandos, fehlende Namen, zu leise oder zu laute Kommandos oder Kommando „AB“ zu früh gegeben","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v5-k3",
          "label": "Umlenkung",
          "source": "Umlenkung",
          "color": 2,
          "competencies": [
            {
              "id": "v5-3",
              "number": 3,
              "label": "Umlenkung",
              "modes": [
                "toprope"
              ],
              "ideal": "Route unterhalb der Umlenkung beendet",
              "media": [],
              "errors": [
                {"id":"v5-3-f1","severity":"CF","description":"Umlenkung überklettert","repeat":false}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v6",
      "label": "Vorstieg sichern",
      "modes": [
        "vorstieg"
      ],
      "categories": [
        {
          "id": "v6-k1",
          "label": "Spotten",
          "source": "Spotten",
          "color": 0,
          "competencies": [
            {
              "id": "v6-1",
              "number": 1,
              "label": "Spotten",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Beim Spotten Körperspannung, geschlossene Finger, Bereitschaftshaltung und passendes Gewicht beachten oder auf das Spotten verzichten",
              "media": [],
              "errors": [
                {"id":"v6-1-f1","severity":"CF","description":"Fehler beim Spotten, zum Beispiel fehlende Spannung, offene und lockere Finger, zu großer Abstand hinter dem Körper oder zu hohes Gewicht der kletternden Person","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v6-k2",
          "label": "Seil",
          "source": "Seil",
          "color": 1,
          "competencies": [
            {
              "id": "v6-2",
              "number": 2,
              "label": "Seilmenge an der ersten Zwischensicherung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Seilmenge beim ersten Clip passend",
              "media": [],
              "errors": [
                {"id":"v6-2-f1","severity":"CF","description":"Beim ersten Clip viel zu wenig oder viel zu viel Seil","repeat":false}
              ]
            },
            {
              "id": "v6-3",
              "number": 3,
              "label": "Seilmenge in Bodennähe",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Passende Seilmenge, Seilverlauf gerade nach oben ohne Durchhang. Zu viel Schlappseil wird direkt bemerkt und korrigiert (etwas Sensorseil auf Höhe der Zwischensicherung ist in Ordnung).",
              "media": [],
              "errors": [
                {"id":"v6-3-f1","severity":"AF","description":"Längere Zeit (2–3 s) zu viel unkontrolliertes oder unbemerktes Schlappseil in Bodennähe bis zur sechsten Expressschlinge","repeat":false,"excludes":["v6-3-f2","v6-3-f3","v6-3-f4"]},
                {"id":"v6-3-f2","severity":"BF","description":"Häufiger etwas unkontrolliertes oder unbemerktes Schlappseil in Bodennähe bis zur sechsten Expressschlinge","repeat":false},
                {"id":"v6-3-f3","severity":"CF","description":"Einmalig etwas unkontrolliertes oder unbemerktes Schlappseil in Bodennähe bis zur sechsten Expressschlinge","repeat":true,"escalatesTo":"v6-3-f2"},
                {"id":"v6-3-f4","severity":"CF","description":"Einmalig etwas zu viel Seil zum Clippen ausgegeben und anschließend wieder einholen müssen","repeat":true}
              ]
            },
            {
              "id": "v6-4",
              "number": 4,
              "label": "Seilmenge in Bodenferne",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Passende Seilmenge mit leichtem Durchhang (etwa 20–30 cm Seil im System). Zu viel oder zu wenig Schlappseil wird direkt bemerkt und korrigiert (etwas Sensorseil auf Höhe der Zwischensicherung ist in Ordnung).",
              "media": [],
              "errors": [
                {"id":"v6-4-f1","severity":"AF","description":"Längere Zeit (2–3 s) sehr viel unkontrolliertes oder unbemerktes Schlappseil in Bodenferne ab der sechsten Expressschlinge","repeat":false},
                {"id":"v6-4-f2","severity":"BF","description":"Häufiger zu viel unkontrolliertes oder unbemerktes Schlappseil in Bodenferne ab der sechsten Expressschlinge","repeat":false},
                {"id":"v6-4-f3","severity":"BF","description":"Häufiger zu wenig Seil (Shortropen) in Bodenferne ab der sechsten Expressschlinge. Harte Stürze sind zu erwarten.","repeat":false},
                {"id":"v6-4-f4","severity":"CF","description":"Einmalig etwas unkontrolliertes oder unbemerktes Schlappseil in Bodenferne ab der sechsten Expressschlinge","repeat":true,"escalatesTo":"v6-4-f2"},
                {"id":"v6-4-f5","severity":"CF","description":"Einmalig etwas zu viel Seil zum Clippen ausgegeben und anschließend wieder einholen müssen","repeat":true},
                {"id":"v6-4-f6","severity":"CF","description":"Einmalig zu wenig Seil (Shortropen) in Bodenferne ab der sechsten Expressschlinge. Harte Stürze sind zu erwarten.","repeat":true,"escalatesTo":"v6-4-f3"}
              ]
            }
          ]
        },
        {
          "id": "v6-k3",
          "label": "Positionierung",
          "source": "Positionierung",
          "color": 2,
          "competencies": [
            {
              "id": "v6-5",
              "number": 5,
              "label": "Positionierung an der ersten Zwischensicherung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Nach der ersten Zwischensicherung steht die sichernde Person entgegen der Kletterrichtung an der Wand, 1 m seitlich der Routenlinie",
              "media": [],
              "errors": [
                {"id":"v6-5-f1","severity":"AF","description":"Position zentral unter der kletternden Person","repeat":false},
                {"id":"v6-5-f2","severity":"BF","description":"Nach der ersten Zwischensicherung steht die sichernde Person in Bezug auf die Kletterrichtung auf der falschen Seite","repeat":false}
              ]
            },
            {
              "id": "v6-6",
              "number": 6,
              "label": "Positionierung in Bodennähe",
              "modes": [
                "vorstieg"
              ],
              "ideal": "In Bodennähe bis zur sechsten Expressschlinge stets auf der gegenüberliegenden Seite der kletternden Person stehen (1 m links oder rechts der Routenlinie)",
              "media": [],
              "errors": [
                {"id":"v6-6-f1","severity":"AF","description":"Bis zur sechsten Expressschlinge zentral unter der kletternden Person positioniert","repeat":false},
                {"id":"v6-6-f2","severity":"BF","description":"Bis zur sechsten Expressschlinge häufig oder immer auf der falschen Seite positioniert","repeat":false},
                {"id":"v6-6-f3","severity":"CF","description":"Bis zur sechsten Expressschlinge einmalig auf der falschen Seite positioniert","repeat":true,"escalatesTo":"v6-6-f2"}
              ]
            },
            {
              "id": "v6-7",
              "number": 7,
              "label": "Positionierung in Bodenferne",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Ab der sechsten Expressschlinge zentral unter der ersten Zwischensicherung stehen, etwa 1 m von der Wand entfernt",
              "media": [],
              "errors": [
                {"id":"v6-7-f1","severity":"BF","description":"Ab der sechsten Expressschlinge häufig oder immer seitlich der ersten Zwischensicherung positioniert","repeat":false},
                {"id":"v6-7-f2","severity":"CF","description":"Ab der sechsten Expressschlinge einmalig seitlich der ersten Zwischensicherung positioniert","repeat":true,"escalatesTo":"v6-7-f1"}
              ]
            },
            {
              "id": "v6-8",
              "number": 8,
              "label": "Sicherungshaltung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Die sichernde Person steht bereit, ein Bein vorne und leicht angewinkelt",
              "media": [],
              "errors": [
                {"id":"v6-8-f1","severity":"CF","description":"Die sichernde Person steht passiv mit durchgestreckten Beinen","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v6-k4",
          "label": "Sicherungsgerät",
          "source": "Sicherungsgerät",
          "color": 3,
          "competencies": [
            {
              "id": "v6-9",
              "number": 9,
              "label": "Seilausgeben mit Halbautomat",
              "modes": [
                "vorstieg"
              ],
              "ideal": "So viel Tubemethode wie möglich, so wenig Gaswerkmethode wie nötig. Auf saubere Ausführung achten.",
              "media": [],
              "errors": [
                {"id":"v6-9-f1","severity":"AF","description":"Grundsätzlich gefährliche Methode angewandt („Franzosenmethode“)","repeat":false},
                {"id":"v6-9-f2","severity":"BF","description":"Einmalig Seil mit „geklemmtem“ Gerät ausgegeben (falsche Gaswerkmethode)","repeat":true},
                {"id":"v6-9-f3","severity":"BF","description":"Häufiges Verharren in der Gaswerkmethode mit dem Daumen auf dem Gerät","repeat":false},
                {"id":"v6-9-f4","severity":"CF","description":"Einmaliges Verharren in der Gaswerkmethode mit dem Daumen auf dem Gerät","repeat":true,"escalatesTo":"v6-9-f3"}
              ]
            },
            {
              "id": "v6-10",
              "number": 10,
              "label": "Seilausgeben mit Autotube",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Hebel (Rüssel) beim Seilausgeben sauber bedienen: mit der Hand heben statt kippen, nur kurz zum Seilausgeben öffnen und die Bremshand möglichst geschlossen halten.",
              "media": [],
              "errors": [
                {"id":"v6-10-f1","severity":"AF","description":"Hebel bleibt häufig unnötig lange offen","repeat":false},
                {"id":"v6-10-f2","severity":"AF","description":"Beim Öffnen des Hebels ist die Bremshand häufig offen","repeat":false},
                {"id":"v6-10-f3","severity":"BF","description":"Beim Öffnen des Hebels ist die Bremshand einmalig offen","repeat":true,"escalatesTo":"v6-10-f2"},
                {"id":"v6-10-f4","severity":"BF","description":"Hand kippt den Hebel häufig","repeat":false},
                {"id":"v6-10-f5","severity":"CF","description":"Hebel bleibt einmalig unnötig lange offen","repeat":true,"escalatesTo":"v6-10-f1"},
                {"id":"v6-10-f6","severity":"CF","description":"Hand kippt den Hebel einmalig","repeat":true,"escalatesTo":"v6-10-f4"}
              ]
            },
            {
              "id": "v6-11",
              "number": 11,
              "label": "Seileinholen",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Saubere, zügige Einholbewegung mit passender Seilmenge, um das Tunneln zu ermöglichen",
              "media": [],
              "errors": [
                {"id":"v6-11-f1","severity":"BF","description":"Häufig unsaubere oder hektische Einholbewegung oder zu große Bremsseilschlaufen, die das Tunneln erschweren","repeat":false},
                {"id":"v6-11-f2","severity":"CF","description":"Einmalig unsaubere oder hektische Einholbewegung oder zu große Bremsseilschlaufen, die das Tunneln erschweren","repeat":true,"escalatesTo":"v6-11-f1"}
              ]
            },
            {
              "id": "v6-12",
              "number": 12,
              "label": "Tunneln",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Bremshand tunnelt sauber, die Faust öffnet sich kaum",
              "media": [],
              "errors": [
                {"id":"v6-12-f1","severity":"BF","description":"Bremshand tunnelt häufig nicht und lässt das Bremsseil los","repeat":false},
                {"id":"v6-12-f2","severity":"CF","description":"Bremshand tunnelt einmalig sehr unsauber","repeat":true,"escalatesTo":"v6-12-f1"}
              ]
            },
            {
              "id": "v6-13",
              "number": 13,
              "label": "Bremshand",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Bremsseil stets in geschlossener Faust mit Wächterdaumen, wenn möglich mit leichtem Druck am Seil",
              "media": [],
              "errors": [
                {"id":"v6-13-f1","severity":"AF","description":"Bremsseil häufig losgelassen","repeat":false},
                {"id":"v6-13-f2","severity":"BF","description":"Bremsseil einmalig kurz losgelassen","repeat":true,"escalatesTo":"v6-13-f1"},
                {"id":"v6-13-f3","severity":"BF","description":"Bremshand häufig locker am Bremsseil","repeat":false},
                {"id":"v6-13-f4","severity":"CF","description":"Bremshand einmalig locker am Bremsseil","repeat":true,"escalatesTo":"v6-13-f3"}
              ]
            },
            {
              "id": "v6-14",
              "number": 14,
              "label": "Bremshandposition",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Bremshand führt das Bremsseil nicht über die Gerätelinie (keine „Gießkanne“)",
              "media": [],
              "errors": [
                {"id":"v6-14-f1","severity":"BF","description":"Bremshand verharrt häufig oberhalb der Gerätelinie","repeat":false},
                {"id":"v6-14-f2","severity":"CF","description":"Bremshand verharrt einmalig kurz oberhalb der Gerätelinie","repeat":true,"escalatesTo":"v6-14-f1"}
              ]
            },
            {
              "id": "v6-15",
              "number": 15,
              "label": "Zügiges Seilausgeben",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Benötigtes Seil stets zügig ausgeben, ohne zu shortropen",
              "media": [],
              "errors": [
                {"id":"v6-15-f1","severity":"BF","description":"Häufig zu wenig Seil zum Weiterklettern oder Clippen ausgegeben (Shortropen)","repeat":false},
                {"id":"v6-15-f2","severity":"CF","description":"Einmalig zu wenig Seil zum Weiterklettern oder Clippen ausgegeben (Shortropen)","repeat":true,"escalatesTo":"v6-15-f1"}
              ]
            }
          ]
        },
        {
          "id": "v6-k5",
          "label": "Umgebung",
          "source": "Umgebung",
          "color": 4,
          "competencies": [
            {
              "id": "v6-16",
              "number": 16,
              "label": "Aufmerksamkeit",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Die sichernde Person bleibt aufmerksam und beobachtet die kletternde Person",
              "media": [],
              "errors": [
                {"id":"v6-16-f1","severity":"BF","description":"Die sichernde Person ist sehr abgelenkt und schaut kaum nach oben","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v6-16-f2","severity":"CF","description":"Die sichernde Person ist kurz abgelenkt und schaut sich um","repeat":false,"exclusiveGroup":"g1"}
              ]
            },
            {
              "id": "v6-17",
              "number": 17,
              "label": "Rückmeldung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Die sichernde Person beobachtet die kletternde Person und gibt Rückmeldung zum Clippen oder zur Fußposition hinter dem Seil",
              "media": [],
              "errors": [
                {"id":"v6-17-f1","severity":"CF","description":"Die sichernde Person gibt keine Rückmeldung zum Clippen oder zur Fußposition der kletternden Person hinter dem Seil","repeat":false}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v7",
      "label": "Vorstieg klettern",
      "modes": [
        "vorstieg"
      ],
      "categories": [
        {
          "id": "v7-k1",
          "label": "Clippen",
          "source": "Clippen",
          "color": 0,
          "competencies": [
            {
              "id": "v7-1",
              "number": 1,
              "label": "Clippen der ersten Zwischensicherung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Erste Zwischensicherung so früh wie möglich clippen. Karabiner des Bremsassistenten an der richtigen Stelle und von der Wand weg ausrichten. Der Bremsassistent ist unverdreht.",
              "media": [],
              "errors": [
                {"id":"v7-1-f1","severity":"CF","description":"Erste Zwischensicherung zu spät geclippt","repeat":false},
                {"id":"v7-1-f2","severity":"CF","description":"Karabiner des Bremsassistenten zeigt zur Wand, Bremsassistent ist verdreht oder Karabiner des Bremsassistenten an der falschen Stelle eingehängt (Beispiel im Sheet: „Normalkarabiner Schlinge“)","repeat":false}
              ]
            },
            {
              "id": "v7-2",
              "number": 2,
              "label": "Clipposition",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets stabile Clipposition mit drei Punkten, Hauptbein unter der Haltehand",
              "media": [],
              "errors": [
                {"id":"v7-2-f1","severity":"BF","description":"Einmalig sehr instabile Clipposition, Sturz sehr wahrscheinlich, zum Beispiel bei offener Pendeltür","repeat":true},
                {"id":"v7-2-f2","severity":"BF","description":"Häufig etwas instabile Position beim Clippen","repeat":false},
                {"id":"v7-2-f3","severity":"CF","description":"Einmalig etwas instabile Position beim Clippen","repeat":true,"escalatesTo":"v7-2-f2"}
              ]
            },
            {
              "id": "v7-3",
              "number": 3,
              "label": "Clipfenster",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets im passenden Clipfenster zwischen Bauchnabel und Brustbein geclippt",
              "media": [],
              "errors": [
                {"id":"v7-3-f1","severity":"AF","description":"Häufig stark überstrecktes Clippen oberhalb des Kopfes in Bodennähe","repeat":false},
                {"id":"v7-3-f2","severity":"AF","description":"Zwischensicherung überklettert (Hüfte über der Expressschlinge)","repeat":false},
                {"id":"v7-3-f3","severity":"BF","description":"Einmalig stark überstrecktes Clippen oberhalb des Kopfes in Bodennähe","repeat":true,"escalatesTo":"v7-3-f1"},
                {"id":"v7-3-f4","severity":"BF","description":"Häufig stark überstrecktes Clippen oberhalb des Kopfes in Bodenferne","repeat":false},
                {"id":"v7-3-f5","severity":"BF","description":"Häufig zu spätes Clippen oder Überklettern der Zwischensicherung in Bodenferne (unterhalb des Bauchnabels)","repeat":false},
                {"id":"v7-3-f6","severity":"CF","description":"Einmalig stark überstrecktes Clippen oberhalb des Kopfes in Bodenferne","repeat":true,"escalatesTo":"v7-3-f4"},
                {"id":"v7-3-f7","severity":"CF","description":"Einmalig zu spätes Clippen oder Überklettern der Zwischensicherung in Bodenferne (unterhalb des Bauchnabels)","repeat":true,"escalatesTo":"v7-3-f5"}
              ]
            },
            {
              "id": "v7-4",
              "number": 4,
              "label": "Cliprichtung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Seil stets richtig in die Zwischensicherung eingehängt („von der Wand ins Land“)",
              "media": [],
              "errors": [
                {"id":"v7-4-f1","severity":"BF","description":"Seil häufig verkehrt in die Zwischensicherung eingehängt","repeat":false},
                {"id":"v7-4-f2","severity":"CF","description":"Seil einmalig verkehrt in die Zwischensicherung eingehängt","repeat":true,"escalatesTo":"v7-4-f1"}
              ]
            }
          ]
        },
        {
          "id": "v7-k2",
          "label": "Seil",
          "source": "Seil",
          "color": 1,
          "competencies": [
            {
              "id": "v7-5",
              "number": 5,
              "label": "Fußposition an der ersten Zwischensicherung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Seil neben den Beinen oder Füßen",
              "media": [],
              "errors": [
                {"id":"v7-5-f1","severity":"CF","description":"Seil zwischen den Beinen oder Füßen","repeat":false}
              ]
            },
            {
              "id": "v7-6",
              "number": 6,
              "label": "Fußposition",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Fuß oder andere Körperteile nie hinter dem Seil",
              "media": [],
              "errors": [
                {"id":"v7-6-f1","severity":"BF","description":"Häufig mit dem Fuß oder Körper hinter dem Seil","repeat":false},
                {"id":"v7-6-f2","severity":"CF","description":"Einmalig mit dem Fuß oder Körper hinter dem Seil","repeat":true,"escalatesTo":"v7-6-f1"}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "v8",
      "label": "Ablassen",
      "modes": [
        "toprope",
        "vorstieg"
      ],
      "categories": [
        {
          "id": "v8-k1",
          "label": "Kommandos",
          "source": "Kommandos",
          "color": 0,
          "competencies": [
            {
              "id": "v8-1",
              "number": 1,
              "label": "Kommandos",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Kommando „AB“ abgewartet",
              "media": [],
              "errors": [
                {"id":"v8-1-f1","severity":"BF","description":"Zu früh abgelassen, bevor das Kommando „AB“ kam","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v8-k2",
          "label": "Positionierung",
          "source": "Positionierung",
          "color": 1,
          "competencies": [
            {
              "id": "v8-2",
              "number": 2,
              "label": "Positionierung",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Standort der sichernden Person so gewählt, dass wenig Seilzug nach vorne entsteht",
              "media": [],
              "errors": [
                {"id":"v8-2-f1","severity":"CF","description":"Standort der sichernden Person zu weit von der Wand oder der Sicherungslinie entfernt","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v8-k3",
          "label": "Sicherungsgerät",
          "source": "Sicherungsgerät",
          "color": 2,
          "competencies": [
            {
              "id": "v8-3",
              "number": 3,
              "label": "Sicherungsgerät",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Kontrolliert, redundant und gleichmäßig abgelassen und das Sicherungsgerät dabei korrekt bedient",
              "media": [],
              "errors": [
                {"id":"v8-3-f1","severity":"AF","description":"Ablassen mit Sensorhand am Sensorseil ohne Redundanz","repeat":false},
                {"id":"v8-3-f2","severity":"AF","description":"Gravierender Kontrollverlust beim Ablassen","repeat":false},
                {"id":"v8-3-f3","severity":"BF","description":"Zu schnelles Ablassen","repeat":false},
                {"id":"v8-3-f4","severity":"CF","description":"Zu viel Kontakt zum Ablasshebel (Halbautomaten)","repeat":false},
                {"id":"v8-3-f5","severity":"CF","description":"Ungleichmäßig abgelassen","repeat":false},
                {"id":"v8-3-f6","severity":"CF","description":"Die kletternde Person zu schnell oder unsanft auf dem Boden aufgesetzt","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v8-k4",
          "label": "Umgebung",
          "source": "Umgebung",
          "color": 3,
          "competencies": [
            {
              "id": "v8-4",
              "number": 4,
              "label": "Umgebung",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Beim Ablassen den Blick gleichmäßig zwischen der kletternden Person und dem Sicherungsgerät wechseln und auf andere Personen achten",
              "media": [],
              "errors": [
                {"id":"v8-4-f1","severity":"CF","description":"50:50-Blickwechsel zwischen der kletternden Person und dem Sicherungsgerät versäumt (zum Beispiel ständig nach oben geschaut)","repeat":false},
                {"id":"v8-4-f2","severity":"CF","description":"Nicht auf andere Personen geachtet","repeat":false}
              ]
            }
          ]
        }
      ]
    }
  ]
};
