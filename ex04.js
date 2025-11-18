let letValor = require("readline-sync");
let num1 = parseInt(letValor.question("digite o valor : "));
let fatorial=1


for(let i=1;i<=num1;i++){
    fatorial *= i
}
 console.log(fatorial)