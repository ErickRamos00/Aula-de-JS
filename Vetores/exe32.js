// Transformar lista de objetos em string. Usando `map`,
// transforme um vetor de objetos (com `nome` e `idade`)
// em um vetor de strings formatadas como `"Nome: X,
// Idade: Y"`

let pessoas = [{nome: 'João', idade: 20}, {nome: 'Maria', idade: 30}, {nome: 'José', idade: 40}]
let pessoasFormatadas = pessoas.map((pessoa) => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`
})
console.log(pessoasFormatadas)