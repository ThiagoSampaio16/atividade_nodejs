let letValor = require("readline-sync");
let palavra = letValor.question("digite uma palavra: ").toLowerCase();
let vogais = "aeiou"
let contador = 0

for(let i=0;i<palavra.length;i++){
    if (vogais.includes(palavra[i])){
        contador++
    }
}

console.log("Quantidade de vogais:", contador)