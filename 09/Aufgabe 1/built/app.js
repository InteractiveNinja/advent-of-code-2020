"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var numbercounter = 0;
var file = fs.readFileSync("input.txt", "utf-8").split("\n");
var jumps = 25;
var plum = fillArray(numbercounter);
for (var i = jumps; i < file.length; i++) {
    var searchnum = file[i];
    var found = false;
    for (var ii = 0; ii < plum.length; ii++) {
        var arr1 = plum[ii];
        if (found)
            break;
        for (var iii = 0; iii < plum.length; iii++) {
            var arr2 = plum[iii];
            if ((+arr1) + (+arr2) == +searchnum) {
                found = true;
                break;
            }
        }
    }
    if (!found) {
        console.log("Zahl die nicht gefunden wurden ist", searchnum);
        break;
    }
    else {
        plum = fillArray(numbercounter);
    }
}
function fillArray(num) {
    if (num === void 0) { num = 0; }
    var returnArr = [];
    if (num + jumps >= file.length) {
        for (var i = num; i < file.length; i++) {
            returnArr.push(file[i].split("\r")[0]);
        }
    }
    else {
        for (var i = num; i < num + jumps; i++) {
            returnArr.push(file[i].split("\r")[0]);
        }
    }
    numbercounter += 1;
    return returnArr;
}
