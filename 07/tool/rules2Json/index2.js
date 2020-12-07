const path = require('path')
const fs = require('fs')


let rules = fs.readFileSync(path.join(__dirname + "/ez.txt"), "utf-8").split("\n")

let json = []



for (let i = 0; i < rules.length; i++) {
    let line = rules[i].split(" ")
    let color = []
    for (let ii = 0; ii < line.length; ii++) {
        const word = line[ii];
        if (word.search("contain") == 0 || word.search("bag") == 0 || word.search("no") == 0 || word.search("other") == 0) continue;
        color.push(word)
    }
    let colorname = ""
    let colors = []
    for (let i = 0; i < color.length; i++) {
        let colorstring = color[i];
        if (i < 2) { colorname += colorstring } else {
            // console.log({ "name": color[i], "name": color[i + 1] + color[i + 2] })
            colors.push({ "menge": color[i], "name": color[i + 1] + color[i + 2] })
            i += 2;
        }
    }
    json.push({ "name": colorname, "bags": colors })
}

fs.writeFileSync(path.join(__dirname + "/rules.json"), JSON.stringify(json))