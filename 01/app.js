const path = require('path')
const fs = require('fs')


let json = JSON.parse(fs.readFileSync(path.join(__dirname + "/numbers.json"),"utf-8"))

for (let i = 0; i < json.length; i++) {
    for (let ii = 0; ii < json.length; ii++) {
        console.log(`Index 1: ${i}:${json[i]} und Index 2: ${ii}:${json[ii]}  Summe = ${json[i] +json[ii]} `)
        
    }
}