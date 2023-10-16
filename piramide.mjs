import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Hoe hoog moet de piramide zijn? '));
let  rij = '';


for(let j = 1; j <= hoogte; j++) {
    rij += '*';
    console.log(rij);
}


process.exit();