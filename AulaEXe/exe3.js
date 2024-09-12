var prompt = require('prompt-sync') ()

n1 = Number(prompt("Insira o numero de dias da viagem: "))

hd = n1 * 24 

hm = hd * 60 

console.log(`A viagem durou ${n1} dias`)
console.log(`A viagem durou ${hd} horas`)
console.log(`A viagem durou ${hm} minutos`)