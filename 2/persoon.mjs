import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

const persoon = {
    naam: "John Doe",
    leeftijd: 30,
    woonplaats: "Brussel"
  };
  
  for (const eigenschap in persoon) {
    console.log(`${eigenschap}: ${persoon[eigenschap]}`);
  }

process.exit();