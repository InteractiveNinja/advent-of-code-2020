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

<!-- ## Lösung

Visual Studio updaten 🤦

Erste aufgabe locker aus dem Ärmel geschüttelt. Wir haben einfach gecheckt ob alle felder vorhanden sind. (Ohne die cid natürlich)

## Aufgabe 2

Dies mal mussten wir die Felder noch validieren.

## Lösung

How to validate: Wir gingen durch alle anforderungen durch. Die ersten paar Felder waren einfach und konnten wir mit einer simplen if Schlaufe lösen. Der Endboss war aller dings die Haarfarbe nach einem Hexacode zu prüfen. `@Ninja` hatte die glorreiche Idee Regex zu verwenden. Dies war komplizierter als gedacht und wir griffen schlussendlich auf eine Switch zurück. Dies machte alles um ein vielfaches einfacher. -->


