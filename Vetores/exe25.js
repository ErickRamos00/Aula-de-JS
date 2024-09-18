// Transformar vetor de nomes em um objeto. Usando
// `reduce`, transforme um vetor de nomes (ex.: `['Ana',
// 'João', 'Pedro']`) em um objeto onde cada nome é uma
// chave e o valor é o comprimento do nome.

let nomes = ['Ana', 'João', 'Pedro']
let nomesObj = nomes.reduce((acumulador, nome) => {
    acumulador[nome] = nome.length
    return acumulador
}, {})
console.log(nomesObj)