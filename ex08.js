let letValor = require("readline-sync");
let num1 = parseInt(letValor.question("digite o valor : "));
let contador = 0

for(let i=0;i<=num1;i++){
    contador +=i
}
console.log("soma: ",contador);