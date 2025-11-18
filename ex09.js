let lerValor = require("readline-sync")
let user = lerValor.question("digite o usuário: ").toLowerCase();
let senha = lerValor.question("digite a senha: ").toLowerCase();

if (user == "admin" && senha == "1234"){
    console.log("login realizado com sucesso")
}else{
    console.log("usuario ou senha incorretos")
}