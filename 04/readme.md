# Tag 4


## Aufgabe 1

Die Aufgabe des heutigen Tag ist es eine Liste von möglichen Ausweisen zu überprüfen, ob diese korrekt sind. Wir überprüfen folgende Daten.

byr (Birth Year)<br>
iyr (Issue Year)<br>
eyr (Expiration Year)<br>
hgt (Height)<br>
hcl (Hair Color)<br>
ecl (Eye Color)<br>
pid (Passport ID)<br>
cid (Country ID)

Das grösste Problem war die Daten in ein json zu übertragen. Danke @ninja für die Mühe.

## Lösung zum Beispiel


```ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in 
```
So sehen die Inputs aus. Nicht gerade schön geordnet.

### Valid:
Wenn alle 8 angaben ausgefüllt sind ist der Ausweiss korrekt. <br> Ausnahme bei der cid diese kann fehlen ohne einen Error zu geben.

### Invalid:
Wenn nicht alle Daten ausgefüllt sind, ausgenommen die cid.


## Lösung

Visual Studio updaten 🤦

Erste aufgabe locker aus dem Ärmel geschüttelt. Wir haben einfach gecheckt ob alle felder vorhanden sind. (Ohne die cid natürlich)

## Aufgabe 2

Dies mal mussten wir die Felder noch validieren.

## Lösung

How to validate: Wir gingen durch alle anforderungen durch. Die ersten paar Felder waren einfach und konnten wir mit einer simplen if Schlaufe lösen. Der Endboss war aller dings die Haarfarbe nach einem Hexacode zu prüfen. `@Ninja` hatte die glorreiche Idee Regex zu verwenden. Dies war komplizierter als gedacht und wir griffen schlussendlich auf eine Switch zurück. Dies machte alles um ein vielfaches einfacher.


