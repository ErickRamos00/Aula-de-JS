var prompt = require('prompt-sync')()

 let numero = Number(prompt("Insira um numero: "))

 let resultado = 1

 for (let i = 1; i <= numero; i++){

    resultado *= i

 }
console.log(`O fatorial de ${numero} é ${resultado}`)


