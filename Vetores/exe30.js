// Filtrar produtos por categoria. Usando `filter`, crie uma
// função que retorna apenas os produtos de uma
// categoria específica a partir de um vetor de produtos
// (com `nome`, `preco` e `categoria`).

let produtos = [{nome: 'Notebook', preco: 2499, categoria: 'informática'}, {nome: 'Smartphone', preco: 999, categoria: 'telefonia'}, {nome: 'TV', preco: 1549, categoria: 'eletrônicos'}, {nome: 'Ar condicionado', preco: 1999, categoria: 'eletrodomésticos'}]

let produtosFiltrados = produtos.filter((produto) => {
    return produto.categoria === 'eletrônicos'
}) 
console.log(produtosFiltrados)