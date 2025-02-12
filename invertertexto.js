// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const prompt = require('prompt-sync')();

const texto = prompt('Digite um texto para inverter: ');

let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log(`Texto original: ${texto}\nTexto invertido: ${textoInvertido}`);