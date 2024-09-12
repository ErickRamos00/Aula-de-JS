var prompt = require('prompt-sync')()  

let linhas = Number(prompt("insira o numero de linhas: "))


    for (let i = 1; i <= linhas; i++) {
   
        let linha = '';

    
    for (let j = 1; j <= (linhas - i); j++) {
        linha += ' ';
    }

    
    for (let k = 1; k <= (2 * i - 1); k++) {
        linha += '*';
    }

    console.log(linha);
}
