var prompt = require('prompt-sync')()   

nome = prompt("Insira o seu nome: ")

n1 = Number(prompt("Insira o numero de dias trabalhado: "))

nh = n1 * 8 
 
ns = nh * 25

console.log(`Numero de dias trabalhados ${n1}`)

console.log(`Numero de horas trabalhadas ${nh}`)

console.log (`Salario do funcionario ${nome} a receber é R$ ${ns.toFixed(2)}`)