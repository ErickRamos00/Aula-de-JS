var prompt = require('prompt-sync')()


let peso = Number(prompt("Digite seu peso em kg:"))
let altura = Number(prompt("Digite sua altura em metros:"))


let imc = peso / (altura * altura)




let resultado
if (imc < 18.5) {  
    resultado = "Você está abaixo do peso recomendado."
}
else if (imc >= 18.5 && imc < 25) {  
    resultado = "Você está com o peso normal."
}
else if (imc >= 25 && imc < 30) {  
    resultado = "Você está com sobrepeso."
}
else if (imc >= 30 && imc < 35) {
    resultado = "Você está com obesidade grau I."
}
else if (imc >= 35 && imc < 40) {    
    resultado = "Você está com obesidade grau II."
}
else {
    resultado = "Você está com obesidade grau III."
}


console.log(`Seu IMC é ${imc.toFixed(1)} ${resultado}`)