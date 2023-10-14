import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Geef een getal: '));
let getal2 = parseFloat(await userInput.question('Geef een getal: '));
let getal3 = parseFloat(await userInput.question('Geef een getal: '));
let getal4 = parseFloat(await userInput.question('Geef een getal: '));
let getal5 = parseFloat(await userInput.question('Geef een getal: '));
let nummers = [];


function duplicatie(getal1, getal2, getal3, getal4, getal5) {
    if ((getal1 == getal2) || (getal1 == getal3) || (getal1 == getal4) || (getal1 == getal5) || (getal2 == getal3) || (getal2 == getal4) || (getal2 == getal5) || (getal3 == getal4) || (getal3 == getal5) || (getal4 == getal5)) {
        return true;
    } else {
        return false;
    }
}

console.log('Zijn er twee getallen gelijk? ' + duplicatie(getal1, getal2, getal3, getal4, getal5));

process.exit(); 