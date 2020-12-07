const fs = require('fs')
const path = require('path')


let json = JSON.parse(fs.readFileSync(path.join(__dirname + "/rules.json")))

let allowdColors = []
for (let i = 0; i < json.length; i++) {
    const list = json[i];
    if (list["name"] == "mutedyellow") {
        allowdColors.push(list["name"])
        continue;
    }
    for (let ii = 0; ii < list["bags"].length; ii++) {
        const bags = list["bags"][ii];
        if (bags == "mutedyellow" || bags == "shinygold") allowdColors.push(list["name"])
    }
}

console.log(allowdColors.length)