var prompt = require('prompt-sync')()


let ano;

do {
    ano = Number(prompt("Digite um ano (ou 0 para sair): "), 10);


    if (ano === 0) {
        break;
    }

    
    if (ano < 1930) {
        console.log(`${ano} não é um ano de Copa do Mundo.`);
    } 

    else if (ano === 1942 || ano === 1946) {
        console.log(`${ano} não é um ano de Copa do Mundo, porque foi o ano que aconteceu a segunda guerra mundial`);
    } 

    else if ((ano - 1930) % 4 === 0) {
        console.log(`${ano} é um ano de Copa do Mundo.`);
    } 
    else {
        console.log(`${ano} não é um ano de Copa do Mundo.`);
    }
} while (ano !== 0);
