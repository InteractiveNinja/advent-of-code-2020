const path = require('path')
const fs = require('fs')


let rules = fs.readFileSync(path.join(__dirname + "/rules.txt"), "utf-8").split("\n")

let json = []



for (let i = 0; i < rules.length; i++) {
    let lineword = rules[i].slice(0, rules[i].length - 1).split(" ");
    let color = "";
    let colors = []
    for (let ii = 0; ii < lineword.length; ii++) {
        let word = lineword[ii];
        if (ii < 2) {
            color += word;
            continue;
        }
        if ((word.search("bag") != -1) || (word.search("contain") != -1) || (word.search("no") != -1) || (word.search("other") != -1) || word.search("[0-9]") != -1) continue;

        colors.push(`${lineword[ii]}${lineword[ii+1]}`)
        ii++;
        continue;

    }
    json.push({ "name": color, "bags": colors })
}

fs.writeFileSync(path.join(__dirname + "/rules.json"), JSON.stringify(json))