let letValor = require("readline-sync");
let celsius = parseFloat(letValor.question("digite a temperatura em C°: "));
let f = (1.8*celsius)+32

console.log("temperatura em F°: ",f,"°")