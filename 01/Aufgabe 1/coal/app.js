const path = require('path')
const fs = require('fs')


let json = JSON.parse(fs.readFileSync(path.join(__dirname + "/numbers.json"), "utf-8"))

for (let i = 0; i < json.length; i++) {
    for (let ii = 0; ii < json.length; ii++) {
        if (json[i] + json[ii] == 2020) {
            addSum(json[i], json[ii])
            i = json.length;
            break;
        }

    }
}

function addSum(zahl1, zahl2) {
    console.log(`Ergebniss der Aufgabe des Tages 1. ist ${zahl1*zahl2}`)
}