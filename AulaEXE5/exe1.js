var prompt = require ('prompt-sync')()

let n1 = Number(prompt("Insira um numero: "))
let n2 = Number(prompt("Insira o segundo numero: "))
let n3 = Number(prompt(("Insira o terceiro numero: ")))

if(n1<n2 && n2<n3){
    console.log("Ordem crescente")
}
else if(n1>n2 && n2>n3){
    console.log("Ordem decrescente")
}
else{
    console.log("Ordem desordenada  ")
}