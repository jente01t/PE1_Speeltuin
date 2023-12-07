import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question('Geef een getal: '));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal: '));
let getal3 = parseFloat(await userInput.question('Geef een derde getal: '));
let getal4 = parseFloat(await userInput.question('Geef een vierde getal: '));
let som = 0;
let numbers = [getal, getal2, getal3, getal4];

for (let i = 0; i < numbers.length; i++) {
    som += numbers[i];
}



console.log('De som van de getallen is: ' + som);

process.exit();