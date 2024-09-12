var prompt = require('prompt-sync')()

valorC = Number(prompt("Insira o valor da compra: "))
valorD = valorC * 0.15
valorA = valorC - valorD
valorP = valorC / 3 

console.log(`O valor da compra é ${valorC.toFixed(2)}`)
console.log(`O valor avista é ${valorA.toFixed(2)}`)
console.log(`O valor parcelado em 3x é ${valorP.toFixed(2)}`)
