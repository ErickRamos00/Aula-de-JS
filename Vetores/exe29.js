// Encontrar a pessoa mais velha. Dado um vetor de
// objetos com pessoas (com `nome` e `idade`), use `reduce`
// para encontrar a pessoa mais velha.

let pessoas = [{nome: 'João', idade: 20}, {nome: 'Maria', idade: 30}, {nome: 'José', idade: 40}]
let pessoaMaisVelha = pessoas.reduce((pessoaMaisVelha, pessoa) => {
    return pessoa.idade > pessoaMaisVelha.idade ? pessoa : pessoaMaisVelha
})
console.log(pessoaMaisVelha)