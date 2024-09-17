// Crie um vetor de cinco números aleatórios. Ordene o vetor em
// ordem crescente e exiba o resultado.
let prompt = require('prompt-sync')();

let vetor = [];
for(let i = 0; i < 5; i++){
    num = Number(prompt("Digite um número: "));
    vetor.push(num);
}   
vetor.sort((a, b) => a - b); 
console.log(vetor);