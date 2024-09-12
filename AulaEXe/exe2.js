var prompt = require ('prompt-sync') ()

valor1 = Number(prompt("Insira o valor total da conta: R$: "))

tg = valor1 * 0.15

total = tg + valor1

console.log(`O valor da conta é R$: ${valor1.toFixed(2)}`)

console.log(`O valor pago ao garçom é ${tg.toFixed(2)}`)

console.log(`O valor total da conta é ${total.toFixed(2)}`)