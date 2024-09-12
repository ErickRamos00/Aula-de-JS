var prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite o valor para A: "))
let n2 = Number(prompt("Digite o valor para B: "))

let troca = n1
n1 = n2 
n2 = troca

console.log(`A variavel A contem o valor ${n1}`)
console.log(`A variavel B contem o valor ${n2}`)