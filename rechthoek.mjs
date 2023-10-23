import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Geef hoogte: "));
let breedte = parseFloat(await userInput.question("Geef breedte: "));

function oppervlakteRechthoek(hoogte, breedte) {
  for (let i = 0; i < hoogte; i++) {
    let rij = '';
    for (let j = 0; j < breedte; j++) {
        if (i == 0 || i == hoogte - 1 || j == 0 || j == breedte - 1) {
      rij += '*';
        } else {
            rij += ' ';
        }
    }
    console.log(rij);
    }
}

oppervlakteRechthoek(hoogte, breedte);

process.exit();
