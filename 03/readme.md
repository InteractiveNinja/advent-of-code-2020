# Tag 3


## Aufgabe 1


Das Problem was so augestellt: 

Wir eine Liste mit Strings. Eine Zeile könnte so aussehen

`..##.......`

Und mehrere Zeile sind unser Spielfeld

```
..##.......     -->
#...#...#..
.#....#..#.     -->
..#.#...#.#
.#...##..#.     -->
..#.##.....
.#.#.#....#     -->
.#........#
#.##...#...     -->
#...##....#
.#..#...#.#     -->
```

Das zusehen Muster wiederholt pro Zeile sich unendlich weiter rechts.
Wir als Spieler bewegen uns immer weiter nach rechts bis wir an der letzten Zeil am Boden ankommen.

Wir bewegen uns immer 3 Zeichen nach rechts und eins nach unten.
Die `#` sind unsere Ziele, wir müssen Zählen wie oft wir auf einem `#` einem Feld landen.

Die Herausforderung besteht darin sich durch das Muster zu navigieren, prüfen ob der Punkt wo man landet ein `#` ist und das Muster dabei auch zu erweitern.

## Lösung zum Beispiel

```
..##.........##.........##.........##.........##.........##.......  --->
#..O#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....X..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#O#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..X...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.X#.......#.##.......#.##.......#.##.......#.##.....  --->
.#.#.#....#.#.#.#.O..#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........X.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.X#...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...#X....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...X.#.#..#...#.#.#..#...#.#.#..#...#.#  --->
```

Das Feld wurde hier erweitert um bis an den Boden zu kommen, Wenn eine `0` zu sehen ist war an dem Feld kein `#`, wo `X` sind war ein `#`. In dem Beispiel mit den 11 Zeilen wurde `7` `#` gefunden.




## Lösung

### Python setze uns einige Steine im Weg dennoch gelang uns den Sieg über die 🐍


Die Anzahl Zeichen die wir nach rechts gingen mussten war unser Index für das String Array, die `downs` also die Felder die wir runter gehen mussten waren die einzelnen Zeilen lädiglich prüfen ob an der Zeile und an dem StringIndex ein `#` zu finden war. Wenn das so war wurde ein Zähler hochgezählt.


## Aufgabe 2


Gleiche Aufgabe bloss wurden nun die Anzahl `rights` und die Anzahl `downs` mehrfach verändert um verschiedene Ergebnisse zu erlangen. Das Produkt dieser Ergebnisse ist dann der Schlüssel.

## Lösung

Lediglich oben erstellte Logik in eine Funktion gepackt.



