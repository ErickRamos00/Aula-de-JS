var prompt = require('prompt-sync')()

n1 = Number(prompt("Insira um numero: "))

nD = n1 * 2 
n2 = n1 / 3 

console.log(`O numero é ${n1}`)
console.log(`O dobro é ${nD}`)
console.log(`a terça parte é ${n2.toFixed(3)}`)