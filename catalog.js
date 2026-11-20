// Statischer Export aus Pruefpunkte-Google-Sheet.xlsx. Format siehe README.md.
window.examCatalog = {
  "version": 1,
  "escalateAt": 5,
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
      "description": "Unmittelbare oder akut drohende erhebliche Gefährdung.\nEine Handlung oder Unterlassung, die bereits für sich genommen einen Absturz, eine schwere Verletzung oder eine unkontrollierbare Gefahr verursacht bzw. bei der nächsten relevanten Belastung mit hoher Wahrscheinlichkeit dazu führt. Die Sicherheit ist nicht mehr zuverlässig gewährleistet oder erfordert ein Eingreifen. Besteimmte Einzelkompetenzen sind stark mangelhaft (Bedienung Sicherungsgerät, Knotenknüpfen nicht möglich...)",
      "examples": "Falsch geknüpfter oder nicht vollständig fertiggestellter Einbindeknoten.\nEinbinden in die Materialschlaufe statt in den vorgesehenen Anseilpunkt.\nGefährlich viel Schlappseil in Bodennähe, sodass bei einem Sturz ein Bodensturz droht.\nBremsseil loslassen bei einem dynamischen Sicherungsgerät in einer Situation, in der ein Sturz gehalten werden muss.\nNicht erkannte Fehlbedienung des Sicherungsgeräts mit unmittelbar drohendem Kontrollverlust.\nKollision mit einem anderen Kletterer aufgrund einer nicht mehr kontrollierbaren Situation."
    }
  },
  "observations": [
    {
      "id": "b1",
      "source": "S tendenziell abwesend - sehr präsent",
      "label": "Aufmerksamkeit der sichernden Person",
      "options": [
        "Eher abwesend",
        "Wechselnd präsent",
        "Sehr präsent"
      ]
    },
    {
      "id": "b2",
      "source": "S tendenziell Fehler wahrnehmend und korrigierend",
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
              "ideal": "Sind beide in der Lage (Nüchtern, fit, gesund...) zum Sichern & Klettern?",
              "media": [],
              "errors": [
                {"id":"v1-1-f1","severity":"CF","description":"Sicherungsfähigkeit checken vergessen","repeat":false}
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
              "ideal": "Kommandos & Namen geklärt",
              "media": [],
              "errors": [
                {"id":"v1-2-f1","severity":"CF","description":"Kommandos & Namen NICHT geklärt","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v1-k2",
          "label": "Gewichtsunterschied",
          "source": "GU Check",
          "color": 1,
          "competencies": [
            {
              "id": "v1-3",
              "number": 3,
              "label": "GU im TR",
              "modes": [
                "toprope"
              ],
              "ideal": "TR Nutzung BA ab > 30%",
              "media": [],
              "errors": [
                {"id":"v1-3-f1","severity":"AF","description":"GU im TR über 50%, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-3-f2","severity":"BF","description":"GU im TR über 30 - 50%, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"}
              ]
            },
            {
              "id": "v1-4",
              "number": 4,
              "label": "GU im VS",
              "modes": [
                "vorstieg"
              ],
              "ideal": "VS Nutzung BA ab > 5kg im VS & auf -5 bis +5 kg kompensiert",
              "media": [],
              "errors": [
                {"id":"v1-4-f1","severity":"AF","description":"GU im VS über 20 kg, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-4-f2","severity":"BF","description":"GU im VS zwischen 10 - 20 kg, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-4-f3","severity":"CF","description":"GU im VS zwischen 5 - 10 kg, keine Maßnahme","repeat":false,"exclusiveGroup":"g1"}
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
              "ideal": "S sichert in festen / vorne geschlossenen Schuhen",
              "media": [],
              "errors": [
                {"id":"v1-5-f1","severity":"CF","description":"S sichert Barfuß, in Flipflops oder Kletterschuhen","repeat":false}
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
              "ideal": "Klettermaterial gecheckt: Gurt, Seil & Schlingen nicht älter als 10 Jahre",
              "media": [],
              "errors": [
                {"id":"v1-6-f1","severity":"CF","description":"Klettermaterial NICHT gecheckt: Gurt, Seil & Schlingen nicht älter als 10 Jahre","repeat":false}
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
              "ideal": "Seillänge gecheckt / lang genug",
              "media": [],
              "errors": [
                {"id":"v1-7-f1","severity":"CF","description":"Seillänge NICHT gecheckt / zu kurz","repeat":false}
              ]
            },
            {
              "id": "v1-9",
              "number": 9,
              "label": "Gelände",
              "modes": [
                "toprope"
              ],
              "ideal": "Nachstieg ab leicht überhägendem Gelände / bei seitlich versetztem Umlenker",
              "media": [],
              "errors": [
                {"id":"v1-9-f1","severity":"AF","description":"Toprope in stark überhängendem Gelände (Pendel > 4 m)","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-9-f2","severity":"BF","description":"Toprope in ordentlich überhängendem Gelände (Pendel 2 - 4 m)","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v1-9-f3","severity":"CF","description":"Toprope in leicht überhängendem Gelände / bei seitlich versetztem Umlenker (Pendel 1 - 2 m)","repeat":false,"exclusiveGroup":"g1"}
              ]
            },
            {
              "id": "v1-10",
              "number": 10,
              "label": "Umlenkung",
              "modes": [
                "toprope"
              ],
              "ideal": "Toprope an redundanter Umleknung / mindestens 2 übereinanderliegenden Exen",
              "media": [],
              "errors": [
                {"id":"v1-10-f1","severity":"AF","description":"Toprope an EINMALIGem Karabiner ohne Redundanz","repeat":false}
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
              "ideal": "Die benachbarten Routen sind frei, eine Kollision mit anderen Personen ist ausgeschlossen",
              "media": [],
              "errors": [
                {"id":"v1-11-f1","severity":"BF","description":"Die Route befindet sich im Kollisionsraum einer anderen Person, es wird trotzdem eingestiegen","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v1-k4",
          "label": "Teamcheck",
          "source": "Teamcheck",
          "color": 3,
          "competencies": [
            {
              "id": "v1-8",
              "number": 8,
              "label": "Sturzraum",
              "modes": [
                "toprope",
                "vorstieg"
              ],
              "ideal": "Sturzraum unter der Sicherungslinie FREI von Gegenständen",
              "media": [],
              "errors": [
                {"id":"v1-8-f1","severity":"CF","description":"Sturzraum unter der Sicherungslinie NICHT frei von Gegenständen","repeat":false}
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
              "ideal": "Gurt sitzt optimal & unverdreht, alle Verschlüsse zu, KEIN Material am Gurt, Hosentaschen leer",
              "media": [],
              "errors": [
                {"id":"v2-1-f1","severity":"AF","description":"Gurtverschlüsse offen, Gurt verkehrt rum angelegt, Gurt anziehen überfordert stark, Größe unpassend","repeat":false},
                {"id":"v2-1-f2","severity":"BF","description":"Gurt hängt Baggystyle unterhalb der Hüftknochen","repeat":false},
                {"id":"v2-1-f3","severity":"CF","description":"Gurt frei von Material / Karabiner / Hosentaschen leer","repeat":false},
                {"id":"v2-1-f4","severity":"CF","description":"Gurt sitzt etwas locker / Anseilring oder Beinschlaufen verdeht","repeat":false}
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
              "ideal": "Anseilknoten sauber, Knotenauge möglichst klein, 1-2 Hände Überstand, redundant durch beide Anseilschlaufen",
              "media": [],
              "errors": [
                {"id":"v2-2-f1","severity":"AF","description":"Anseilknoten an falscher Stelle: Materialschlaufe, nur 1 Anseilschlaufe","repeat":false},
                {"id":"v2-2-f2","severity":"AF","description":"Falscher (geknüpfter) Knoten als Anseilknoten","repeat":false},
                {"id":"v2-2-f3","severity":"AF","description":"Große Unsicherheit beim Knüpfen des Anseilknotens AK","repeat":false},
                {"id":"v2-2-f4","severity":"BF","description":"Knoten korrekt, Bild eindeutig zu unsauber, großes Knotenauge & viel zu langer Überstand","repeat":false},
                {"id":"v2-2-f5","severity":"CF","description":"Knoten nicht ganz optimal, z.B unsauberes Knotenbild, etwas zu großes Knotenauge...","repeat":false},
                {"id":"v2-2-f6","severity":"CF","description":"Knoten durch den den Sicherungsring geknüpft","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v2-k3",
          "label": "Sicherungsgerät",
          "source": "SiGe",
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
              "ideal": "Sichernde Person S nutzt vertrautes SiGe im Sicherungsring mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil",
              "media": [],
              "errors": [
                {"id":"v2-3-f1","severity":"BF","description":"Seil im Sicherungsgerät falsch eingelegt","repeat":false,"ideal":"Sichernde Person S nutzt vertrautes SiGe mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil"},
                {"id":"v2-3-f2","severity":"BF","description":"Kein Verschlusskarabiner beim Sicherungsgerät","repeat":false,"ideal":"Sichernde Person S nutzt vertrautes SiGe mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil"},
                {"id":"v2-3-f3","severity":"BF","description":"Sichernde Person nicht vertraut mit SiGe","repeat":false,"ideal":"Sichernde Person S nutzt vertrautes SiGe mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil"},
                {"id":"v2-3-f4","severity":"CF","description":"Ungeeigneter Verschlusskarabiner / Seilkombinationz.B bei Autotubes","repeat":false,"ideal":"Sichernde Person S nutzt vertrautes SiGe mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil"},
                {"id":"v2-3-f5","severity":"CF","description":"Karabinerverschluss auf der Bremshand BH Seite","repeat":false,"ideal":"Sichernde Person S nutzt vertrautes SiGe mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil"},
                {"id":"v2-3-f6","severity":"CF","description":"Karabiner NICHT im Sicherungsring","repeat":false,"ideal":"Sichernde Person S nutzt vertrautes SiGe mit passendem Karabiner & Verschlusssystem mit korrekt eingelegtem, passendem Seil"}
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
                {"id":"v2-4-f1","severity":"BF","description":"Kein Seilendknoten","repeat":false},
                {"id":"v2-4-f2","severity":"CF","description":"Falscher Seilendknoten, z.B einfacher Haushaltsknoten in den Seilsack","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v2-k5",
          "label": "Bremsassistent",
          "source": "BA",
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
              "ideal": "Korrektes BA / Level gewählt, Seil richtig rum eingehängt und Verriegelung verschlossen",
              "media": [],
              "errors": [
                {"id":"v2-5-f1","severity":"BF","description":"BA / Stufe passt nicht zum GU","repeat":false},
                {"id":"v2-5-f2","severity":"BF","description":"Seil verkehrt rum in BA eingelegt","repeat":false},
                {"id":"v2-5-f3","severity":"BF","description":"Verriegelung BA offen","repeat":false}
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
              "ideal": "Check haptisch erfolgt / Fehler erkannt: Anseilknoten / SiGe, Gurt, Seilendknoten, (BA)",
              "media": [],
              "errors": [
                {"id":"v3-1-f1","severity":"BF","description":"Selbstcheck komplett vergessen : Anseilknoten / SiGe, Gurt, Seilendknoten, (BA)","repeat":false},
                {"id":"v3-1-f2","severity":"CF","description":"EINMALIGe Elemente vergessen zu checken / übersehen: Anseilknoten / SiGe, Gurt, Seilendknoten, (BA)","repeat":true}
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
              "ideal": "Stets letzter Check vor dem Losklettern! Check haptisch (Gegenüber zum Zeigen auffordern) erfolgt / Fehler erkannt: Anseilknoten / SiGe, Gurt, Seilendknoten, (BA)",
              "media": [],
              "errors": [
                {"id":"v3-2-f1","severity":"BF","description":"Partnercheck komplett vergessen: Anseilknoten / SiGe, Gurt, Seilendknoten, (BA)","repeat":false},
                {"id":"v3-2-f2","severity":"CF","description":"Partnercheck zu früh!","repeat":false},
                {"id":"v3-2-f3","severity":"CF","description":"EINMALIGe Elemente vergessen zu checken / übersehen: Anseilknoten / SiGe, Gurt, Seilendknoten, (BA)","repeat":true}
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
              "ideal": "S steht bereit mit einem Bein nach vorne und leicht angewinkelt",
              "media": [],
              "errors": [
                {"id":"v4-1-f1","severity":"CF","description":"S steht passiv, mit durchgestreckten Beinen","repeat":false}
              ]
            },
            {
              "id": "v4-2",
              "number": 2,
              "label": "Positionierung",
              "modes": [
                "toprope"
              ],
              "ideal": "S steht beim TR sichern die ganze Zeit 1 - 2 m versetzt zur Sicherungslinie",
              "media": [],
              "errors": [
                {"id":"v4-2-f1","severity":"BF","description":"S steht EINMALIG in BN bis 1/4 der Route unter der Kletterdnen Person K","repeat":true},
                {"id":"v4-2-f2","severity":"BF","description":"S steht beim TR sichern HÄUFIG > 4 m versetzt zur Sicherungslinie","repeat":false,"exclusiveGroup":"g1"},
                {"id":"v4-2-f3","severity":"CF","description":"S steht in BF ab 1/4 der Route unter der Kletterdnen Person K. Seil im Weg für K","repeat":false},
                {"id":"v4-2-f4","severity":"CF","description":"S steht beim TR sichern HÄUFIG 2 - 4 m versetzt zur Sicherungslinie","repeat":false,"exclusiveGroup":"g1"}
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
              "ideal": "Seil BH Seitig neben S, mit Seilsack",
              "media": [],
              "errors": [
                {"id":"v4-3-f1","severity":"CF","description":"Seil ist ungünstig Positioniert z.B hinter S oder unter K in der Linie","repeat":false}
              ]
            },
            {
              "id": "v4-4",
              "number": 4,
              "label": "Seilmenge",
              "modes": [
                "toprope"
              ],
              "ideal": "In Bodennähe BN bis 1/4 der Route mit starker Seilspannung sichern, in Bodenferne BF ab 1/4 der Route kein Schlappseil & keine Seilspannung",
              "media": [],
              "errors": [
                {"id":"v4-4-f1","severity":"AF","description":"EINMALIG Schlappseil bis 1/4 der Route (BN)","repeat":true},
                {"id":"v4-4-f2","severity":"BF","description":"EINMALIG Keine Seilspannung bis 1/4 der Route (BN)","repeat":true},
                {"id":"v4-4-f3","severity":"CF","description":"EINMALIG Schlappseil ab 1/4 der Route (BF)","repeat":true},
                {"id":"v4-4-f4","severity":"CF","description":"EINMALIGStraffes Seil ab 1/4 der Route","repeat":true}
              ]
            }
          ]
        },
        {
          "id": "v4-k3",
          "label": "Sicherungsgerät",
          "source": "SiGe",
          "color": 2,
          "competencies": [
            {
              "id": "v4-5",
              "number": 5,
              "label": "Bremshand",
              "modes": [
                "toprope"
              ],
              "ideal": "BS stets in geschlossener Faust mit Daumen, wenn möglich mit leichtem Druck am Seil",
              "media": [],
              "errors": [
                {"id":"v4-5-f1","severity":"AF","description":"BS wird HÄUFIG losgelassen","repeat":false},
                {"id":"v4-5-f2","severity":"BF","description":"BS wird EINMALIG kurz losgelassen","repeat":true,"escalatesTo":"v4-5-f1"},
                {"id":"v4-5-f3","severity":"BF","description":"BS HÄUFIG locker am Bremsseil","repeat":false},
                {"id":"v4-5-f4","severity":"CF","description":"BS EINMALIG locker am Bremsseil","repeat":true,"escalatesTo":"v4-5-f3"}
              ]
            },
            {
              "id": "v4-6",
              "number": 6,
              "label": "Bremshandposition",
              "modes": [
                "toprope"
              ],
              "ideal": "BH ist nur kurz beim Seileinholen über der Gerätelinie",
              "media": [],
              "errors": [
                {"id":"v4-6-f1","severity":"BF","description":"BH verharrt sehr oft und lang oberhalb Gerätelinie","repeat":false},
                {"id":"v4-6-f2","severity":"CF","description":"BH verharrt manchmal kurz oberhalb Gerätelinie","repeat":false}
              ]
            },
            {
              "id": "v4-7",
              "number": 7,
              "label": "Seileinholen",
              "modes": [
                "toprope"
              ],
              "ideal": "Saubere Einholbewegeung, zügig, passende Menge, um Tunneln zu ermöglichen",
              "media": [],
              "errors": [
                {"id":"v4-7-f1","severity":"BF","description":"HÄUFIG unsaubere / hektische Einholbewegung / mit zu großen Bremsseil Schlaufen, welche Tunneln erschweren","repeat":false},
                {"id":"v4-7-f2","severity":"CF","description":"EINMALIG unsaubere / hektische Einholbewegung / mit zu großen Bremsseil Schlaufen, welche Tunneln erschweren","repeat":true,"escalatesTo":"v4-7-f1"}
              ]
            },
            {
              "id": "v4-8",
              "number": 8,
              "label": "Tunneln",
              "modes": [
                "toprope"
              ],
              "ideal": "BS tunnelt sauber, Faust öffnet sich kaum",
              "media": [],
              "errors": [
                {"id":"v4-8-f1","severity":"BF","description":"BH tunnelt HÄUFIG nicht, lässt das BS los","repeat":false},
                {"id":"v4-8-f2","severity":"CF","description":"BH tunnelt EINMALIG sehr unsauber","repeat":true}
              ]
            },
            {
              "id": "v4-9",
              "number": 9,
              "label": "Gerätekontakt",
              "modes": [
                "toprope"
              ],
              "ideal": "Kein unnötiger Kontakt mit SiG / Mechanik",
              "media": [],
              "errors": [
                {"id":"v4-9-f1","severity":"BF","description":"Unnötig viel Kontakt mit / Gerätumschließen vom SiGe","repeat":false},
                {"id":"v4-9-f2","severity":"CF","description":"Manchmal Kontakt mit / Gerätumschließen vom SiGe","repeat":false}
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
              "ideal": "Körper immer VOR Sicherungsseil",
              "media": [],
              "errors": [
                {"id":"v5-1-f1","severity":"CF","description":"Körper längere Zeit / ungemerkt HINTER Sicherungsseil","repeat":false}
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
              "ideal": "Kommandos korrekt & mit Namen genutzt mit angemessener Lautstärke",
              "media": [],
              "errors": [
                {"id":"v5-2-f1","severity":"CF","description":"Falsche Kommandos / ohne Namen / zu leise / laut, Kommando \"AB\" zu früh","repeat":false}
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
              "ideal": "Unter der Umlenkung Route beendet",
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
              "ideal": "Richtiges Spotten: mit Spannung, geschlossene Finger, Bereitschaftshaltung, Gewicht passend / NICHT Spotten!",
              "media": [],
              "errors": [
                {"id":"v6-1-f1","severity":"CF","description":"Falsches Spotten: ohne Spannung, Finger offen und locker, zu weit hinter dem Körper, K zu schwer...","repeat":false}
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
              "label": "Seilmenge 1. ZWS",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Seilmenge für 1. Clip gut passend",
              "media": [],
              "errors": [
                {"id":"v6-2-f1","severity":"CF","description":"Seilmenge für 1. Clip viel zu wenig / zu viel","repeat":false}
              ]
            },
            {
              "id": "v6-3",
              "number": 3,
              "label": "Seilmenge in BN",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets die richtige Seilmenge, Seil verläuft gerade nach oben, ohne Durchhang. Zu viel Schlappseil wird gleich bemerkt und korrigiert  (etwas Sensorseil i.O auf Höhe der ZWS)",
              "media": [],
              "errors": [
                {"id":"v6-3-f1","severity":"AF","description":"LÄNGERE ZEIT (2 - 3 sec) ZU VIEL unkonktrolliertes / unbemerktes Schlappseil in BN bis zur 6. Exe","repeat":false},
                {"id":"v6-3-f2","severity":"BF","description":"HÄUFIGER ETWAS unkonktrolliertes / unbemerktes Schlappseil in BN bis zur 6. Ex","repeat":false},
                {"id":"v6-3-f3","severity":"CF","description":"EINMALIG ETWAS unkonktrolliertes / unbemerktes Schlappseil in BN bis zur 6. Exe","repeat":true,"escalatesTo":"v6-3-f2"},
                {"id":"v6-3-f4","severity":"CF","description":"EINMALIG ETWAS zu viel Seil für Clippen gegeben, welches wieder eingeholt werden muss.","repeat":true}
              ]
            },
            {
              "id": "v6-4",
              "number": 4,
              "label": "Seilmenge in BF",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets die richtige Seilmenge, leichter Durchhang (ca. 20 - 30 cm Seil im System). Zu viel / wenig Schlappseil wird gleich bemerkt und korrigiert  (etwas Sensorseil i.O auf Höhe der ZWS)",
              "media": [],
              "errors": [
                {"id":"v6-4-f1","severity":"AF","description":"LÄNGERE ZEIT (2 - 3 sec) SEHR VIEL unkonktrolliertes / unbemerktes Schlappseil in BF ab 6. Exe","repeat":false},
                {"id":"v6-4-f2","severity":"BF","description":"HÄUFIGER ZU VIEL unkonktrolliertes / unbemerktes Schlappseil in BF ab 6. Exe","repeat":false},
                {"id":"v6-4-f3","severity":"BF","description":"HÄUFIGER ZU WENIG Seil / Shortropen in BF ab 6. Exe, Harte Stürze sind zu erwarten","repeat":false},
                {"id":"v6-4-f4","severity":"CF","description":"EINMALIG ETWAS unkonktrolliertes / unbemerktes Schlappseil in BF ab 6. Exe","repeat":true,"escalatesTo":"v6-4-f2"},
                {"id":"v6-4-f5","severity":"CF","description":"EINMALIG ETWAS zu viel Seil für Clippen gegeben, welches wieder eingeholt werden muss.","repeat":true},
                {"id":"v6-4-f6","severity":"CF","description":"EINMALIG ZU WENIG Seil / Shortropen in BF ab 6. Exe, Harte Stürze sind zu erwarten","repeat":true,"escalatesTo":"v6-4-f3"}
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
              "label": "Positionierung 1. ZWS",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Positionierung S entgegen Kletterrichtung nach 1. Zwischensicherung ZWS korrekt, 1 m seitlich Routenlinie an der Wand",
              "media": [],
              "errors": [
                {"id":"v6-5-f1","severity":"AF","description":"Positionierung zentral unter K","repeat":false},
                {"id":"v6-5-f2","severity":"BF","description":"Positionierung S entgegen Kletterrichtung nach 1. Zwischensicherung ZWS falsche Seite","repeat":false}
              ]
            },
            {
              "id": "v6-6",
              "number": 6,
              "label": "Positionierung BN",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Positionierung in BN (bis zur 6. Exe) stets entgegengesetzt zum K (1m links / rechts d. Routenlinie)",
              "media": [],
              "errors": [
                {"id":"v6-6-f1","severity":"AF","description":"Positionierung zentral unter K bis zur 6. Exe","repeat":false},
                {"id":"v6-6-f2","severity":"BF","description":"Positionierung HÄUFIG / IMMER auf der falschen Seite bis zur 6. Exe","repeat":false},
                {"id":"v6-6-f3","severity":"CF","description":"Positionierung EINMALIG auf der falschen Seite bis zur 6. Exe","repeat":true,"escalatesTo":"v6-6-f2"}
              ]
            },
            {
              "id": "v6-7",
              "number": 7,
              "label": "Positionierung BF",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Positionierung zentral unter der 1. ZWS ab der 6. Exe, ca. 1 m von der Wand",
              "media": [],
              "errors": [
                {"id":"v6-7-f1","severity":"BF","description":"Positionierung HÄUFIG / IMMER seitlich der 1. ZWS ab der 6. Exe","repeat":false},
                {"id":"v6-7-f2","severity":"CF","description":"Positionierung EINMALIG seitlich der 1. ZWS ab der 6. Exe","repeat":true,"escalatesTo":"v6-7-f1"}
              ]
            },
            {
              "id": "v6-8",
              "number": 8,
              "label": "Sicherungshaltung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "S steht bereit mit einem Bein nach vorne und leicht angewinkelt",
              "media": [],
              "errors": [
                {"id":"v6-8-f1","severity":"CF","description":"S steht passiv, mit durchgestreckten Beinen","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v6-k4",
          "label": "Sicherungsgerät",
          "source": "SiGe",
          "color": 3,
          "competencies": [
            {
              "id": "v6-9",
              "number": 9,
              "label": "Seilausgeben Halbautomat",
              "modes": [
                "vorstieg"
              ],
              "ideal": "So viel Tubemethode wie möglich, so wenig Gaswerk wie nötig. Saubere Durchführung",
              "media": [],
              "errors": [
                {"id":"v6-9-f1","severity":"AF","description":"Grundsätzliche gefährliche Methode (\"Franzosenmethode\") wird angewandt","repeat":false},
                {"id":"v6-9-f2","severity":"BF","description":"EINMALIG Seilausgeben mit \"geklemmten\" Gerät (falsche Gaswerkmethode)","repeat":true},
                {"id":"v6-9-f3","severity":"BF","description":"HÄUFIG Parken in der Gaswerkmethode mit Daumen auf Gerät","repeat":false},
                {"id":"v6-9-f4","severity":"CF","description":"EINMALIG Parken in der Gaswerkmethode mit Daumen auf Gerät","repeat":true,"escalatesTo":"v6-9-f3"}
              ]
            },
            {
              "id": "v6-10",
              "number": 10,
              "label": "Seilausgeben Autotube",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Seilausgeben mit sauberer Hebel (Rüssel-) bedienung. Hand \"hebt\" statt \"kippt\" Hebel nur kurz zum Seilausgeben öffnen, Bremshand maximal geschlossen.",
              "media": [],
              "errors": [
                {"id":"v6-10-f1","severity":"AF","description":"Hebel bleibt HÄUFIG unnötig lang offen","repeat":false},
                {"id":"v6-10-f2","severity":"AF","description":"Beim öffnen des Hebels ist die BH HÄUFIG offen","repeat":false},
                {"id":"v6-10-f3","severity":"BF","description":"Beim öffnen des Hebels ist die BH EINMALIG offen","repeat":true,"escalatesTo":"v6-10-f2"},
                {"id":"v6-10-f4","severity":"BF","description":"Hand \"kippt\" HÄUFIG den Hebel","repeat":false},
                {"id":"v6-10-f5","severity":"CF","description":"Hebel bleibt EINMALIG unnötig lang offen","repeat":true,"escalatesTo":"v6-10-f1"},
                {"id":"v6-10-f6","severity":"CF","description":"Hand \"kippt\" EINMALIG den Hebel","repeat":true,"escalatesTo":"v6-10-f4"}
              ]
            },
            {
              "id": "v6-11",
              "number": 11,
              "label": "Seileinholen",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Saubere Einholbewegeung, zügig, passende Menge, um Tunneln zu ermöglichen",
              "media": [],
              "errors": [
                {"id":"v6-11-f1","severity":"BF","description":"HÄUFIG unsaubere / hektische Einholbewegung / mit zu großen Bremsseil Schlaufen, welche Tunneln erschweren","repeat":false},
                {"id":"v6-11-f2","severity":"CF","description":"EINMALIG unsaubere / hektische Einholbewegung / mit zu großen Bremsseil Schlaufen, welche Tunneln erschweren","repeat":true,"escalatesTo":"v6-11-f1"}
              ]
            },
            {
              "id": "v6-12",
              "number": 12,
              "label": "Tunneln",
              "modes": [
                "vorstieg"
              ],
              "ideal": "BS tunnelt sauber, Faust öffnet sich kaum",
              "media": [],
              "errors": [
                {"id":"v6-12-f1","severity":"BF","description":"BH tunnelt HÄUFIG nicht, lässt das BS los","repeat":false},
                {"id":"v6-12-f2","severity":"CF","description":"BH tunnelt EINMALIG sehr unsauber","repeat":true}
              ]
            },
            {
              "id": "v6-13",
              "number": 13,
              "label": "Bremshand",
              "modes": [
                "vorstieg"
              ],
              "ideal": "BS stets in geschlossener Faust mit Wächterdaumen, wenn möglich mit leichtem Druck am Seil",
              "media": [],
              "errors": [
                {"id":"v6-13-f1","severity":"AF","description":"BS wird HÄUFIG losgelassen","repeat":false,"ideal":"BS stets in geschlossener Faust mit Daumen, wenn möglich mit leichtem Druck am Seil"},
                {"id":"v6-13-f2","severity":"BF","description":"BS wird EINMALIG kurz losgelassen","repeat":true,"escalatesTo":"v6-13-f1","ideal":"BS stets in geschlossener Faust mit Daumen, wenn möglich mit leichtem Druck am Seil"},
                {"id":"v6-13-f3","severity":"BF","description":"BS HÄUFIG locker am Bremsseil","repeat":false,"ideal":"BS stets in geschlossener Faust mit Daumen, wenn möglich mit leichtem Druck am Seil"},
                {"id":"v6-13-f4","severity":"CF","description":"BS EINMALIG locker am Bremsseil","repeat":true,"escalatesTo":"v6-13-f3","ideal":"BS stets in geschlossener Faust mit Daumen, wenn möglich mit leichtem Druck am Seil"}
              ]
            },
            {
              "id": "v6-14",
              "number": 14,
              "label": "Bremshandposition",
              "modes": [
                "vorstieg"
              ],
              "ideal": "BH führt das Bremsseil nicht über die Gerätelinie, keine \"Gießkanne\"",
              "media": [],
              "errors": [
                {"id":"v6-14-f1","severity":"BF","description":"BH verharrt HÄUFIG oberhalb Gerätelinie","repeat":false},
                {"id":"v6-14-f2","severity":"CF","description":"BH verharrt EINMALIG kurz oberhalb Gerätelinie","repeat":true,"escalatesTo":"v6-14-f1"}
              ]
            },
            {
              "id": "v6-15",
              "number": 15,
              "label": "Zügiges Seilausgeben",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Das notwendige Seil wird stets zügig / ohne Shortropen ausgegeben",
              "media": [],
              "errors": [
                {"id":"v6-15-f1","severity":"BF","description":"HÄUFIG Shortropen / zu wenig Seil zum Weiterklettern / Clippen gegeben","repeat":false},
                {"id":"v6-15-f2","severity":"CF","description":"EINMALIG Shortropen / zu wenig Seil zum Weiterklettern / Clippen gegeben","repeat":true,"escalatesTo":"v6-15-f1"}
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
              "ideal": "S stets Aufmerksam und K beobachtend",
              "media": [],
              "errors": [
                {"id":"v6-16-f1","severity":"BF","description":"S sehr abgelenkt / schaut kaum nach oben","repeat":false},
                {"id":"v6-16-f2","severity":"CF","description":"S KURZ abgelenkt / schaut in der Gegend rum","repeat":false}
              ]
            },
            {
              "id": "v6-17",
              "number": 17,
              "label": "Rückmeldung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "S beobachtet K und gibt Rückmeldung / Erinnerung zum Clippen / Fuß hinter Seil",
              "media": [],
              "errors": [
                {"id":"v6-17-f1","severity":"CF","description":"S gibt keine Rückmeldung zum Clippen / Fuß hinter Seil des K","repeat":false}
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
              "label": "Clip 1. ZWS",
              "modes": [
                "vorstieg"
              ],
              "ideal": "1. ZWS so früh wie möglich clippen, BA Karabiner richtig rum (Weg von der Wand), an richtige Stelle, BA unverdreht",
              "media": [],
              "errors": [
                {"id":"v7-1-f1","severity":"CF","description":"1. ZWS zu spät geklippt","repeat":false},
                {"id":"v7-1-f2","severity":"CF","description":"BA Karabiner zeigt zur Wand / BA verdreht / BA Karabiner an falsche Stelle: z.B Normalkarabiner Schlinge","repeat":false}
              ]
            },
            {
              "id": "v7-2",
              "number": 2,
              "label": "Clipposition",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand",
              "media": [],
              "errors": [
                {"id":"v7-2-f1","severity":"BF","description":"EINMALIG sehr unstabile Clipposition, Sturz sehr wahrscheinlich, z.B offene Pendeltür","repeat":true},
                {"id":"v7-2-f2","severity":"BF","description":"HÄUFIG etwas unstabile Position beim Clippen","repeat":false},
                {"id":"v7-2-f3","severity":"CF","description":"EINMALIG etwas unstabile Position beim Clippen","repeat":true,"escalatesTo":"v7-2-f2"}
              ]
            },
            {
              "id": "v7-3",
              "number": 3,
              "label": "Clipfenster",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets im passenden Clipfenster zwischen Bauchnabel & Brustbein geclippt",
              "media": [],
              "errors": [
                {"id":"v7-3-f1","severity":"AF","description":"HÄUFIG stark überstrecktes Clippen (oberhalb vom Kopf) in BN","repeat":false,"ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"},
                {"id":"v7-3-f2","severity":"AF","description":"Überklettern einer ZWS (sobald Hüfte über Exe)","repeat":false,"ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"},
                {"id":"v7-3-f3","severity":"BF","description":"EINMALIG stark überstrecktes Clippen (oberhalb vom Kopf) in BN","repeat":true,"escalatesTo":"v7-3-f1","ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"},
                {"id":"v7-3-f4","severity":"BF","description":"HÄUFIG stark überstrecktes Clippen (oberhalb vom Kopf) in BF","repeat":false,"ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"},
                {"id":"v7-3-f5","severity":"BF","description":"HÄUFIG zu spätes Clippen / überklettern der ZWS (unterhalb Bauchnabel) in BF","repeat":false,"ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"},
                {"id":"v7-3-f6","severity":"CF","description":"EINMALIG stark überstrecktes Clippen (oberhalb vom Kopf) in BF","repeat":true,"escalatesTo":"v7-3-f4","ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"},
                {"id":"v7-3-f7","severity":"CF","description":"EINMALIG zu spätes Clippen / überklettern der ZWS (unterhalb Bauchnabel) in BF","repeat":true,"escalatesTo":"v7-3-f5","ideal":"Stets stabile Clipposition mit 3 Punkten, Hauptbein unter der Haltehand"}
              ]
            },
            {
              "id": "v7-4",
              "number": 4,
              "label": "Clipprichtung",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Stets Seil richtig in ZWS gehängt, \"von der Wand ins Land\"",
              "media": [],
              "errors": [
                {"id":"v7-4-f1","severity":"BF","description":"HÄUFIG Seil verkehrt in ZWS gehängt","repeat":false},
                {"id":"v7-4-f2","severity":"CF","description":"EINMALIG Seil verkehrt in ZWS gehängt","repeat":true,"escalatesTo":"v7-4-f1"}
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
              "label": "Fußposition 1. ZWS",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Seil NEBEN den Beinen / Füßen",
              "media": [],
              "errors": [
                {"id":"v7-5-f1","severity":"CF","description":"Seil ZWISCHEN den Beinen / Füßen","repeat":false}
              ]
            },
            {
              "id": "v7-6",
              "number": 6,
              "label": "Fußposition",
              "modes": [
                "vorstieg"
              ],
              "ideal": "Fuß / andere Körperteile NIE hinter Seil",
              "media": [],
              "errors": [
                {"id":"v7-6-f1","severity":"BF","description":"HÄUFIG Fuß / Körper hinterm Seil","repeat":false},
                {"id":"v7-6-f2","severity":"CF","description":"EINMALIG Fuß / Körper hinterm Seil","repeat":true,"escalatesTo":"v7-6-f1"}
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
              "ideal": "Kommando \"AB\" abgewartet",
              "media": [],
              "errors": [
                {"id":"v8-1-f1","severity":"BF","description":"Zu früh abgelassen, Kommando \"AB\" kam noch nicht","repeat":false}
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
              "ideal": "Richtiger Standort S (wenig Seilzug nach vorne)",
              "media": [],
              "errors": [
                {"id":"v8-2-f1","severity":"CF","description":"Standort S NICHT beachtet: zu weit weg von der Wand / Sicherungslinie","repeat":false}
              ]
            }
          ]
        },
        {
          "id": "v8-k3",
          "label": "Sicherungsgerät",
          "source": "SiGe",
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
              "ideal": "Kontrolliert, redundan, gleichmäßig mit korrekter Bedienung  SiGe abgelassen.",
              "media": [],
              "errors": [
                {"id":"v8-3-f1","severity":"AF","description":"Ablassen mit Sensorhand am Sensorseil ohne Redundanz","repeat":false},
                {"id":"v8-3-f2","severity":"AF","description":"Gravierender Kontrollverlust beim Ablassen","repeat":false},
                {"id":"v8-3-f3","severity":"BF","description":"Zu schnelles Ablassen","repeat":false},
                {"id":"v8-3-f4","severity":"CF","description":"Zu viel Kontakt zum Ablasshebel (Halbautomaten)","repeat":false},
                {"id":"v8-3-f5","severity":"CF","description":"Ungleichmäßig abgelassen","repeat":false},
                {"id":"v8-3-f6","severity":"CF","description":"K zu schnell / unsanft auf dem Boden abgesetzt","repeat":false}
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
              "ideal": "Redundanz mit 50 / 50 Blickwechsel K / SiGe beachtet. Auf andere Personen geachtet.",
              "media": [],
              "errors": [
                {"id":"v8-4-f1","severity":"CF","description":"Redundanz mit 50 / 50 Blickwechsel K / SiGe MISSACHTET (z.B. ständiger Blick nach oben)","repeat":false},
                {"id":"v8-4-f2","severity":"CF","description":"NICHT auf andere Menschen geachtet","repeat":false}
              ]
            }
          ]
        }
      ]
    }
  ]
};
