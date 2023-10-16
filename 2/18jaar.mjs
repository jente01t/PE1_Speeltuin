import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let leeftijd = parseFloat(await userInput.question('Geef je leeftijd: '));

if (leeftijd >= 18) {
    console.log('Je bent meerderjarig.');
} else {    
    console.log('Je bent minderjarig.');
}

process.exit();