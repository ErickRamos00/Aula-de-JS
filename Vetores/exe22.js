// Calcular a média de idade. Dado um vetor de objetos
// com pessoas (com `nome`, `idade` e `profissao`), utilize
// `reduce` para calcular a média de idade das pessoas.

let pessoas = [ {nome: 'João', idade: 25, profissao: 'Engenheiro'},
                {nome: 'Maria', idade: 30, profissao: 'Professora'},
                {nome: 'José', idade: 20, profissao: 'Estudante'},
                {nome: 'Ana', idade: 40, profissao: 'Médica'},
                {nome: 'Pedro', idade: 35, profissao: 'Advogado'}]
                let somaIdade = pessoas.reduce((acumulador, pessoa) => {
                    return acumulador + pessoa.idade
                }, 0)
                let mediaIdade = somaIdade / pessoas.length
                console.log(mediaIdade)