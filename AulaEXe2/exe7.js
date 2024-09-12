var prompt = require ('prompt-sync')()

n1 = Number(prompt("Insira o valor que você tem na carteira: R$:"))

nD = n1 / 5.48
 
console.log(`O valor em reais é R$: ${n1}`)

console.log(`O valor em dolar é U$: ${nD.toFixed(2)}`)