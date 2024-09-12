var prompt = require('prompt-sync') ()

nt = Number(prompt("Insira o valor total da conta: "))
nc = Number(prompt("Insira a quantidade de clientes: "))
vc = nt/nc

console.log(`o valor por cliente é : ${vc.toFixed(2)}`)