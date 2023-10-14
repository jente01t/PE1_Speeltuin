import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let aantal = parseFloat(await userInput.question('Geef het aanntal termen: '));

let i = 3;
let getal1 = 0;
let getal2 = 1;
let volgendegetal = 0;

console.log(0);
console.log(1);

while (i <= aantal) {
    volgendegetal = getal1 + getal2;
    getal1 = getal2;
    getal2 = volgendegetal;
    i++;
    console.log(volgendegetal);
}

process.exit();