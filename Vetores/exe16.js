// Ler um vetor de 10 nomes. Entrar com o nome de uma pessoa
// pelo prompt. Escrever a mensagem “ACHEI” se o nome estiver no
// vetor e “NÃO ACHEI” caso contrário.

let prompt = require('prompt-sync')()

let vetor = []

for(let i = 0; i < 10; i++){
    vetor.push(prompt("Digite um nome: ").toLowerCase())
}
if(vetor.includes(prompt("Digite um nome para saber esta no vetor: ").toLowerCase())){
    console.log("ACHEI")}
    else{ console.log("NÃO ACHEI")}