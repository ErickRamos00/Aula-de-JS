var prompt = require('prompt-sync')()

let valorC = Number(prompt("Insira o valor da compra: R$"))
let ValorT = Number(prompt("Insira o valor pago pelo cliente: R$ "))

let troco = ValorT - valorC

if(ValorT < valorC){

    console.log(`Falta pagar R$: ${Math.abs(troco)}`)
}
else {
    
    console.log(`Valor a ser devolvido é ${troco}`)
}
