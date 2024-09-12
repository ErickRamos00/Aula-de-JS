var prompt = require('prompt-sync')()

const pi = 3.14

let raio = Number(prompt("Insira o raio do circulo: "))

let Area = pi * (raio**2)

console.log (`À area do circulo é ${Area}`)