"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var numbercounter = 0;
var file = fs.readFileSync("input.txt", "utf-8").split("\n");
var jumps = 25;
var broke = getBrokenNumber();
var sumnum = 0;
var numberinclude = 2;
var sumnumbers = [];
do {
    for (var i = 0; i < file.length; i++) {
        var sum = 0;
        sumnumbers = [];
        for (var ii = i; ii < i + numberinclude; ii++) {
            sum += +file[ii];
            sumnumbers.push(+file[ii]);
        }
        if (+sum == +broke) {
            sumnum = +sum;
            break;
        }
    }
    numberinclude += 1;
    if (numberinclude > file.length)
        break;
} while (+broke != +sumnum);
console.log("loop durch");
sumnumbers.sort(function (a, b) { return a - b; });
console.log(sumnumbers[0] + sumnumbers[sumnumbers.length - 1]);
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
function getBrokenNumber() {
    var plum = fillArray(numbercounter);
    var brokenumber = 0;
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
            brokenumber = +searchnum;
            break;
        }
        else {
            plum = fillArray(numbercounter);
        }
    }
    return brokenumber;
}
