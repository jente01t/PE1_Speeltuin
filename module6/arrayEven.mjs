import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef getal 1: '));
let getal2 = parseFloat(await userInput.question('Geef getal 2: '));
let getal3 = parseFloat(await userInput.question('Geef getal 3: '));
let getal4 = parseFloat(await userInput.question('Geef getal 4: '));
let getal5 = parseFloat(await userInput.question('Geef getal 5: '));

let getallen = [getal1, getal2, getal3];

function arrayEven (getallen) {
    let even = [];
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] % 2 == 0)
        even.push(getallen[i]);
    }
    return even;
}

console.log(arrayEven(getallen));

process.exit();