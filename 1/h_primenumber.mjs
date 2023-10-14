import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let n = parseFloat(await userInput.question('Geef een getal: '));

function isPrime(number) {
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        } return true;
    }
}

function printPrime(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printPrime(n);


process.exit();