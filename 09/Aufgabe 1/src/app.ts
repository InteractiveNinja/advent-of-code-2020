import * as fs from 'fs';
let numbercounter: number = 0
let file: string[] = fs.readFileSync("input.txt", "utf-8").split("\n")

let jumps : number = 25
let plum: string[] = fillArray(numbercounter)
for (let i = jumps; i < file.length; i++) {
    const searchnum = file[i];
    let found : boolean = false;
    for (let ii = 0; ii < plum.length; ii++) {
        const arr1 = plum[ii];
        if(found) break;
        for (let iii = 0; iii < plum.length; iii++) {
            const arr2 = plum[iii];
            if((+arr1) + (+arr2) == +searchnum) {
                found = true;
                break;
            }
        }
        
        
    }
    if(!found) {
        console.log("Zahl die nicht gefunden wurden ist", searchnum)
        break;
    } else {
        plum = fillArray(numbercounter)
    }
}

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
    numbercounter+= 1
    return returnArr;

}