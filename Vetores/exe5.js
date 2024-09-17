// 5. Crie um vetor de cinco números inteiros. Calcule e exiba a soma de todos os números.
const numeros = [1, 2, 15, 100, 57];


let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}


console.log(`A soma é: ${soma}`);