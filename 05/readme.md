# Tag 5


## Aufgabe 1

Die Heute Aufgabe besteht drin in einer Liste einen Fehlenden Eintrag zu finden mithilfe des Ausschluss verfahren.

Wir als Spieler suchen unser Flugzeug sitzt in einem Flugzeug was 8 Spalten hat und 128 Reihen von Sitzen.

So kann ein Eintrag aussehen `FBFBBFFRLR`

### Bestimmung einer Reihe
Die ersten 7 Zeichen bestimmen in welcher Reihe wir Sitzen, ein Zeichen kann dort kann immer `F` oder `B` sein.

Man fängt von der grösst Möglichen bereich an. In dem Fall 0-127(Das wären 128 Reihen) wenn das Zeichen `F` ist wird die `tiefere Hälfte` weiter verwendent in dem Fall `0-63`. Und dann wird das Nächste Zeichen verwendet, wenn das nächste Zeichen ein `B` ist wird wieder die Hälfte vom bereich genommen und dann die `grössere Hälfte verwendent` also `32-63`. Das Wiederholt sich solang bis es genau nur noch eine Reihe gibt.  

### Bestimmung einer Spalte

Das gleiche Spiel wird wieder im Werte bereich von `0-7(8 Spalten)` gemacht.

Das Zeichen `R` bedeutet wir benutzen die `grössere Hälfte` also verwenden wir `4-7`, wenn das Nächste Zeichen ein `L` ist verwenden wir die `tiefere Hälfte` also `4-7` und das wieder bis wir genau eine Reihe definiert haben, unsere Aufgabe ist es herauszufinden von all den Plätzen welcher Platz unserer ist.

## Lösung

Als erstes begangen wir uns eine Lösung zu überlegen wie wir genau einen Sitzplatz definieren, wir entschieden uns ein Array zu erstellen mit den möglichen `Rows` oder `Colums`, entsprechend den Buchstaben spalteten wir das Array und behielten die benötigte Hälfte.

Nach dem Wir die Informationen hatten welche Rows wir hatten in der Liste konnten wir die Berechnung starten welche Seat ID die grösste war. ✈

## Aufgabe 2

Nun müssen wir wissen welcher Sitzplatz unserer wahr, der Catch war das dem Flugzeug vorne und hinten an Plätze gefehlt hatte aber wir wussten das unser Sitzt zwischen Belegten Sitzen sein musste.

## Lösung

Wir benutzen ein vorher Entwickeltes Tool um eine Liste mit allen möglichen Sitzplatzen zu erstellen `SeatsGen`. Mithilfe dieser Liste konnten wir mithilfe des Ausfallverfahrens prüfen welcher Sitze nicht belegt waren. Nun mussten wir nur alle Sitzt ausgeben und sehen welcher nicht ins das Muster passte, beispiel: 

```
0-0
0-1
0-2
0-3
0-4
0-5
81-5
119-0
119-1
119-2
119-3
119-4
119-5
119-6
119-7
120-0
120-1
120-2
120-3
120-4
120-5
120-6
120-7
...
```


Man erkennt schnell das die Sitznummer `81-5` nicht in das Muster passte und so wussten wir das es der gesuchte Sitz sein musste.