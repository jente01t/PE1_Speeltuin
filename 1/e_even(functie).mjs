import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { get } from "node:http";
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question('Is dit getal even: '));
let evengetal = true;

function isEven(getal) {
    if (getal % 2 == 0) {
        evengetal = true;
    } else {
        evengetal = false;
    }
    return evengetal;
} 

isEven(getal);

console.log(evengetal);

process.exit();