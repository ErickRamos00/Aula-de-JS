let prompt = require('prompt-sync')()
let linhas = 2;
let colunas = 3; 

let matriz = [];

for (let i = 0; i < linhas; i++) {
    matriz[i] = []; 
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i}][${j}]`));
    }
}


let maior = matriz[0][0];
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
        }
    }
}


console.log(`O maior valor é: ${maior}`);
console.log(matriz);
