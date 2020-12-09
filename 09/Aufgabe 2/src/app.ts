import { sign } from 'crypto';
import * as fs from 'fs';
let numbercounter: number = 0
let file: string[] = fs.readFileSync("input.txt", "utf-8").split("\n")
let jumps: number = 25

let broke: number = getBrokenNumber()
let sumnum: number = 0
let numberinclude: number = 2
let sumnumbers: number[] = []
do {
    for (let i = 0; i < file.length; i++) {
        let sum : number = 0
        sumnumbers = []
        for (let ii = i; ii < i+numberinclude; ii++) {
            sum += +file[ii]
            sumnumbers.push(+file[ii])
        }
        if(+sum == +broke) {
            sumnum = +sum
            break;
        }
    }
    numberinclude += 1
    if(numberinclude > file.length) break;
} while (+broke != +sumnum);

console.log("loop durch")
sumnumbers.sort((a,b) => a-b)
console.log(sumnumbers[0]+ sumnumbers[sumnumbers.length-1])

function fillArray(num: number = 0) {

    let returnArr: string[] = []
    if (num + jumps >= file.length) {
        for (let i = num; i < file.length; i++) {
            returnArr.push(file[i].split("\r")[0])
        }
    } else {

        for (let i = num; i < num + jumps; i++) {
            returnArr.push(file[i].split("\r")[0])
        }
    }
    numbercounter += 1
    return returnArr;

}

function getBrokenNumber() {
    let plum: string[] = fillArray(numbercounter)
    let brokenumber: number = 0
    for (let i = jumps; i < file.length; i++) {
        const searchnum = file[i];
        let found: boolean = false;
        for (let ii = 0; ii < plum.length; ii++) {
            const arr1 = plum[ii];
            if (found) break;
            for (let iii = 0; iii < plum.length; iii++) {
                const arr2 = plum[iii];
                if ((+arr1) + (+arr2) == +searchnum) {
                    found = true;
                    break;
                }
            }


        }
        if (!found) {
            brokenumber = +searchnum;
            break;
        } else {
            plum = fillArray(numbercounter)
        }
    }
    return brokenumber
}