let letValor = require("readline-sync");
let num1 = parseInt(letValor.question("digite o valor : "));

console.log("numeros pares:" )
for (let i=0; i<=num1; i++){
    if (i%2 == 0){
        console.log(i)
    }
}