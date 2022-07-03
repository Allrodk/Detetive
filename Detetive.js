console.clear();

const prompt = require("prompt-sync")();

const perguntas = [
  "1 - Telefonou para a vítima [S/N]? ",
  "2 - Esteve no local do crime [S/N])?",
  "3 - Mora perto da vítima [S/N]?",
  "4 - Devia para a vítima [S/N]",
  "5 - Já trabalhou com a vítima [S/N]?",
];

console.log("PROJETO DETETIVE");
console.log();

// Perguntas
let cont = 0;
let contSim = 0;
let pergunta = "";
while (perguntas.length > cont) {
  do {
    pergunta = prompt(`${perguntas[cont]} `);
  } while (pergunta.toLowerCase() !== "s" && pergunta.toLowerCase() !== "n");
  if (pergunta.toLowerCase() === "s") {
    contSim++;
  }
  cont++;
}

// Resultado
console.log();
if (contSim >= 4) {
  console.log("O interrogado é culpado.");
} else if (contSim == 3) {
  console.log("O interrogado é suspeito.");
} else {
  console.log("O interrogado é inocente.");
}
console.log();
