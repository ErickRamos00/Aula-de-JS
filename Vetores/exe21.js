// Filtrar produtos caros. Dado um vetor de objetos
// representando produtos (com `nome`, `preco` e
// `categoria`), use `filter` para retornar os produtos que
// custam mais de R$100.

let produtos = [ {nome: 'Notebook', preco: 2500, categoria: 'Eletrônicos'},
                 {nome: 'Celular', preco: 1500, categoria: 'Eletrônicos'},
                 {nome: 'Camisa', preco: 80, categoria: 'Vestuário'},
                 {nome: 'Tênis', preco: 200, categoria: 'Vestuário'},
                 {nome: 'Geladeira', preco: 3000, categoria: 'Eletrodomésticos'}]
                 produtosCaros = produtos.filter((produto) => {
                     return produto.preco > 100
                 })
                 console.log(produtosCaros)      