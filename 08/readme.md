# Tag 7


## Aufgabe 1

In dieser Aufgabe hat man Regeln zu Gepäckstücke. In diesen Regeln steht was ein Gewisses Gepäckstück tragen kann. Zum Beispiel ein weisser Koffer kann ein scheinenden goldener Koffer tragen. Oder ein dunkel oranger Koffer kann 3 weisse Koffer und 4 gelbe Koffer beihnahlten. Diese können natürlich auch wieder Koffer beinhalten.

Jetzt müssen wir Wissen anhand von unserem Input wieviele Koffer einen scheinenden goldener Koffer beinhalten können.

Wichtig für die Aufgabe ist das auch berücksichtigt werden dass ein Koffer der einen beinhaltet und vertieft in einanderer respektierten werden muss.

## Lösung

Wir haben geprüft auf erster Ebene welche Koffer einen goldenen Koffer beinhaltet, diese haben wir in eine Liste gepackt,
auf der zweiten Ebene haben wir geprüft in welchen Koffern die Koffer aus der Liste beinhalten und fügten diese in die Liste hinzu.
Dieser Prozess wiederholten wir 100mal um effektiv alle ebenen durchzugehen.

## Aufgabe 2

Nun mussten wir die Anzal Säcke berechnen.

### Beispiel

`Goldener Sack` beinhaltet `2 bräune Säcke` 
`Brauner Sack` beinhaltet `3 rote Säcke`

Anhand das müssten wir nund es so berechnen

`1 * 2 * 3 = 6 Säcke insgesammt` 


## Lösung


Die Lösung verdanken wir [@Thomas Loock](https://twitter.com/Brotherluii), in demm fall auch die ohno.py im Aufgaben 2 Ordner


