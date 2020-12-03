import json

jsonfile = json.load(open("C:\\Users\\gabri\\Desktop\\advent-of-code-2020\\03\\Aufgabe 2\\ninja\\map.json","r"))


# counter = 0
# walked = 0
# founds = 0
# jsonlen = len(jsonfile)
# while counter < jsonlen:
#     walked += 3
#     if(counter + 1 < jsonlen):
#         line = jsonfile[counter + 1]
#         while len(line) < walked:
#             line = line + line
#             pass 
#         if("#" in line[walked]): founds += 1
#     counter += 1
#     pass


def slopes(rights,downs):
    counter = 0
    walked = 0
    founds = 0
    jsonlen = len(jsonfile)
    while counter < jsonlen:
        walked += rights
        if(counter + downs < jsonlen):
            line = jsonfile[counter + downs]
            while len(line) <= walked:
                line = line + line 
                pass 
            if("#" in line[walked]): founds += 1
        counter += downs
    return founds

print(slopes(1,1)*slopes(3,1)*slopes(5,1)*slopes(7,1)*slopes(1,2))
