let letValor = require("readline-sync");
let num1 = parseFloat(letValor.question("digite a nota 1 : "));
let num2 = parseFloat(letValor.question("digite a nota 2 : "));
let num3 = parseFloat(letValor.question("digite a nota 3 : "));
let media = ((num1 * 2)+(num2 * 3)+(num3*5))/10

console.log("media ponderada igual a :",media)