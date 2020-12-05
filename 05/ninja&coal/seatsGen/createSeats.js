const path = require('path')
const fs = require('fs')

function doStuff(callback) {
    let json = []


    let seats = []
    let rows = []

    for (let i = 0; i < 128; i++) {
        seats.push(i)

    }
    for (let i = 0; i < 8; i++) {
        rows.push(i)

    }

    for (let i = 0; i < seats.length; i++) {
        let name = seats[i]
        for (let ii = 0; ii < rows.length; ii++) {
            json.push({ "location": `${name}-${rows[ii]}`, "status": false })
        }

    }
    callback(JSON.stringify(json))
}


doStuff((data) => {

    // console.log(data)
    fs.writeFileSync(path.join(__dirname + "/seats.json"), data)
})