import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal: "));
let som = 1;

while (getal >= 0) {
    if (getal % 4 == 0 && getal != 0) {
        console.log('het getal is deelbaar door 4')
        som = som * getal;
        getal = parseFloat(await userInput.question("Geef een getal: "));
    } else {
        console.log('het getal is niet deelbaar door 4')
        getal = parseFloat(await userInput.question("Geef een getal: "));
    }
}

console.log('Het product is ' + som + '.');

process.exit();