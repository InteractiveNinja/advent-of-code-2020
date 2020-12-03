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




<!-- ## Lösung -->



