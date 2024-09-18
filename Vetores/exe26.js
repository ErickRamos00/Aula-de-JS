// Obter a soma total de preços. Dado um vetor de objetos
// representando produtos (com `nome` e `preco`), utilize
// `reduce` para calcular o valor total de todos os produtos.

let produtos = [ { nome: 'Notebook', preco: 2500},
                 { nome: 'Celular', preco: 1500},
                 { nome: 'Camisa', preco: 80},
                 { nome: 'Tênis', preco: 200},
                 { nome: 'Geladeira', preco: 3000},
                 { nome: 'Televisão', preco: 2000}]
      let soma = produtos.reduce((acumulador, produto) => {
          return acumulador + produto.preco
      }, 0)
      console.log(soma)