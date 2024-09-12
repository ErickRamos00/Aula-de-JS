var prompt = require('prompt-sync')()


let venda1 = Number(prompt("Vendas do primeiro mês:"))
let venda2 = Number(prompt("Vendas do segundo mês:"))
let venda3 = Number(prompt("Vendas do terceiro mês:"))


let total = venda1 + venda2 + venda3
let resultado


if(total < 5000){
    resultado =  total * 0
}
else if (total >= 5000 && total <= 10000) {
    resultado = total * 0.05
}
else{
    resultado = total * 0.10
}


console.log(`Sua comissão é de R$: ${resultado}`)