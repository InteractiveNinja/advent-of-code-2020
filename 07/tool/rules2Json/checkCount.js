const fs = require('fs')
const path = require('path')


let json = JSON.parse(fs.readFileSync(path.join(__dirname + "/rules.json")))

let allowdColors = []
let count = 0;
for (let i = 0; i < json.length; i++) {
    const name = json[i]["name"]
    const bags = json[i]["bags"]

    for (let ii = 0; ii < bags.length; ii++) {
        const bagcolors = bags[ii];
        if (bagcolors == "shinygold") allowdColors.push(name)
    }
}
for (let i = 0; i < json.length; i++) {
    const name = json[i]["name"];
    const bags = json[i]["bags"];
    let found = false;
    for (let ii = 0; ii < allowdColors.length; ii++) {
        const color = allowdColors[ii];
        for (let iii = 0; iii < bags.length; iii++) {
            const bag = bags[iii];

            if (bag == color) {
                allowdColors.push(name)
                found = true;
            }
            if (found) break;
        }
    }
}
console.log(allowdColors, allowdColors.length)