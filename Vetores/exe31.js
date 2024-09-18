// Somar valores positivos de uma matriz. Dado um vetor
// de vetors com números inteiros (incluindo negativos),
// use `reduce` para somar apenas os números positivos.

let matriz = [[1, 2, 3], [-1, -2, -3], [4, 5, 6], [-4, -5, -6]]

let somaPositivos = matriz.reduce((soma, vetor) => {
    let somar = vetor.reduce((soma, numero) => {
        return numero > 0 ? soma + numero : soma
    }, 0)
    return soma + somar
}, 0)
console.log(somaPositivos)