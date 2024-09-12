var prompt = require('prompt-sync')()

let n1 = Number(prompt("Insira o valor da temperatura em Celsius: "))

let fahrenheit = (n1*9/5) + 32

console.log(`A temperatua de ${n1}ºCelsius é ${fahrenheit} Fahrenheit`)
