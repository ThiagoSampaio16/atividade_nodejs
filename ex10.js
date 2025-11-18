let lerValor = require("readline-sync")

let totalSegundos = parseInt(lerValor.question("digite a quantidade de segundos: "))

let horas = Math.floor(totalSegundos/3600)
let minutos = Math.floor((totalSegundos%3600)/60)
let segundos = totalSegundos%60

console.log(horas,"h",minutos,"m",segundos,"s")