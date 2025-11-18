let letValor = require("readline-sync");
let base = parseInt(letValor.question("digite a base do retangulo "));
let altura = parseInt(letValor.question("digite a altura do retangulo "));

let area = base*altura
let perimetro = 2*(base+altura)

console.log("area: ",area)
console.log("perimetro: ",perimetro)