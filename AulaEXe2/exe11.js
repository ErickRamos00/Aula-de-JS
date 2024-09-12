var prompt = require ('prompt-sync')()

cigarrosD = Number(prompt("Insira quantos cigarros voce fuma por dia: "))

AnosF = Number(prompt("Por quantos anos voce fuma: "))

let totalCigarros = cigarrosD* 365 * AnosF;
let minutosPerdidos = totalCigarros * 11;
let diasPerdidos = minutosPerdidos / (24 * 60);

let anos = diasPerdidos / 365

console.log(`Fumo ${cigarrosD} Cigarros por dia`)
console.log(`Fumo à ${AnosF} anos`),
console.log(`Voce perdeu ${diasPerdidos.toFixed(0)} dias de vida`)
console.log(`Você ja fumou ${totalCigarros} cigarros até agora na sua vida`)
console.log (`Voce ja perdeu ${anos.toFixed(0)} anos de vida`)