// Adicionar um desconto aos produtos. Usando `map`,
// adicione um desconto de 10% a todos os produtos de
// um vetor de objetos (com `nome` e `preco`), criando um
// novo vetor com os produtos descontados.

let produtos = [ {nome: 'Notebook', preco: 2500},
                 {nome: 'Celular', preco: 1500},
                 {nome: 'Camisa', preco: 80},
                 {nome: 'Tênis', preco: 200}]
                    produtosComDesconto = produtos.map((produto) => {
                        return {nome: produto.nome, preco: produto.preco * 0.9}
                    })
                    console.log(produtosComDesconto)

                    