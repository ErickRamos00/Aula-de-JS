// Filtrar e transformar valores de uma matriz. Usando
// `map` e `filter`, crie um algorimot que filtre os números
// pares de uma matriz e multiplique-os por 3.

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let paresMultiplicados = matriz.map((vetor) => {
    return vetor.filter((numero) => {
        return numero % 2 === 0
    }).map((numero) => {
        return numero * 3
    })
})
console.log(paresMultiplicados)