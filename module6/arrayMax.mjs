import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef getal 1: '));
let getal2 = parseFloat(await userInput.question('Geef getal 2: '));
let getal3 = parseFloat(await userInput.question('Geef getal 3: '));

let getallen = [getal1, getal2, getal3];

function arrayMax (getallen) {
    let max = Math.max(...getallen);
    return max;
}

console.log(arrayMax(getallen));

process.exit();