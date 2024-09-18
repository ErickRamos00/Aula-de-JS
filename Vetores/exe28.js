// Concatenar listas de strings. Dado um vetor de vetores
// de strings, use `reduce` para concatenar todas as strings
// em uma única lista.

let matriz = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
let listaConcatenada = matriz.reduce((acumulador, vetor) => {
    return acumulador.concat(vetor)
}, [])
console.log(listaConcatenada)