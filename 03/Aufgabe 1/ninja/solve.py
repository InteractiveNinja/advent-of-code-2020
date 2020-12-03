import json

jsonfile = json.load(open("C:\\Users\\gabri\\Desktop\\advent-of-code-2020\\03\\ninja\\map.json","r"))

counter = -1
walked = 0
founds = 0
jsonlen = len(jsonfile)
while counter < jsonlen:
    counter += 1
    walked += 3
    if(counter + 1 < jsonlen):
        line = jsonfile[counter + 1]
        while len(line) < walked:
            line = line + line
            pass 
        if("#" in line[walked]): founds += 1
    pass

print(founds)
