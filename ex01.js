let letValor = require("readline-sync");
let num1 = parseInt(letValor.question("digite o valor : "));

if (num1 > 0){
    console.log("número positivo");
} else if (num1 < 0){
    console.log("número negativo");
}else{
    console.log("númeoro igual a zero")
}