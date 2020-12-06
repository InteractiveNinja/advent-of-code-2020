## SeatsGen

## Whats this

SeatsGen ist ein kleines Tool was wir hoffentlich bei unsere Lösung brauchen können, es erstellt recht simple ein JSON File mit allen möglichen Sitzen die dann ein boolean Wert beinhaltet, wenn wir das File korrekt verwenden müssen wir später nur noch prüfen welcher Sitzt nicht auf `true` gesetzt ist: 

Ein Eintrag aus dem File könnte so aussehen: 

```
{
        "location": "127-7",
        "status": false
    }

```

Bei `location:` erkennt man mit der ersten Zahl vor dem `-` die Reihe wo der Sitz ist, die Zweite Zahl ist die Zeile des Sitzes 