import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question('Geef een getal: '));
let faculteit1 = 1;

function faculteit(getal) {
    for (let i = 1; i <= getal; i++) {
        faculteit1 = faculteit1 * i;
    }return faculteit1;
} 


console.log(faculteit(getal));

process.exit();