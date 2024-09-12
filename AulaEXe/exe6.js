var prompt = require('prompt-sync') ()

n1 = Number(prompt("Insira a primeira nota: "))
n2 = Number(prompt("Insira a segunda nota: "))
n3 = Number(prompt("Insira a terceira nota: "))

media = (n1 + n2 + n3) / 3

console.log(`A média do aluno é ${media.toFixed(2)}`)
