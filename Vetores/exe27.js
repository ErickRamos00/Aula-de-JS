// Multiplicar valores de uma matriz por 2. Usando `map`,
// multiplique todos os valores de uma matriz (vetor de
// vetores) por 2.

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let matrizMultiplicada = matriz.map((vetor) => {
    return vetor.map((valor) => {
        return valor * 2
    })
})
console.log(matrizMultiplicada)