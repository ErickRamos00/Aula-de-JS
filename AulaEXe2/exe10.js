var prompt = require('prompt-sync')()

n1 = Number(prompt("Insira o numero de dias que ficou com o carro "))
nK = Number(prompt("Insira a quantidade Km rodadados com o carro: "))

valorD = n1 * 90
valorK = nK * 0.20 
valorT = valorD + valorK

console.log(`A quantida de dias que alugou o carro é ${n1}`)
console.log(`A quantida de Km rodados é ${nK}`)
console.log(`O valor total a pagar pelo carro é ${valorT.toFixed(2)}`)