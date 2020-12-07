# Tag 6


## Aufgabe 1

Indieser aufgabe gibt es mehrere Gruppen, die die selben Fragen beantwortet haben. Wir mussten Jetzt schauen wie Oft eine Frage von mit `Ja` beantwortet wurde. Wenn aber in einer Gruppe die selbe Frage mehrmals mit `Ja` beantwortet wurde, zählt dies nur einmal.

Es gab 26 Fragen von a-z. So könnte eine Grupe aussehen:
```
gsvdkufnoawjmhp
wvhusojpnikgfadb
vshnpfedgwajkou
aujodhskfvnpgw
okpdnwhsfvjguqa
```

Jede Linie ist eine Person und die zu den ersichtlichen Buchstaben wurde `Ja` gesagt.

## Lösung

Wir schauten bei jeder Gruppe welche Buchstaben vorhanden sind und ob eine andere Person den selben Buchstaben schon mal verwendet hatte. Falls ja wurde es ignoriert. Falls der Buchstabe noch nicht vorkam wurde er gespeichert und ein Counter erhöht.

## Aufgabe 2

Bei der 2. Aufgabe zählt man nur noch die Fragen als ja wo alle Gruppenmitglieder ja gesagt haben.
Beispiel:
```
abc

a
b
c

ab
ac
```

Hier gilt jetzt also bei der ersten Gruppe wo nur eine Person ist das 3 mal `Ja` zu den Fragen gesagt wurde. In der 2. Gruppe haben alle 3 Personen zu unterschiedlichen Fragen `Ja` gesagt also gibt es 0 Punkte. Bei der 3. Gruppe haben 2 Personen zu a `Ja` gesagt also gibt es 1 Punkt

## Lösung

Wir schauten jede Gruppe an und Verglichen die antworten. Falls mehre Personen zu den selben Fragen `Ja` sagten wurde wieder ein Counter hochgestellt.