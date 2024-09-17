// 8. Crie um script que recebe um vetor e um elemento, e retorna true
// se o elemento estiver presente no vetor, caso contrário, retorna
// false.

var prompt = require('prompt-sync')()

let vetor = [1,2,15,100,300,960]

let elemento = Number(prompt("Digite um número: "))  

let presente = false

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] == elemento){
        presente = true
        break
    }
}console.log(presente)