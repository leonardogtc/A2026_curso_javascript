// =============================================================================
// FILTRAGEM DE DADOS: O MÉTODO FILTER - PARTE 1
// =============================================================================
// O método `.filter()` é utilizado para filtrar os elementos de um array com base
// em uma condição lógica, retornando um NOVO array (com tamanho menor ou igual ao original).
//
// REGRA DO CALLBACK (FUNÇÃO PREDICADO):
// A cada elemento, a função callback deve retornar:
// - `true`: se o elemento DEVE ser incluído no novo array.
// - `false`: se o elemento DEVE ser descartado.
// =============================================================================

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Se a função callback retornar sempre `false`, nenhum elemento passa pelo filtro:
console.log(produtos.filter(function (p) {
    return false
})) // Saída: [] (array vazio)

// COMPOSIÇÃO DE FILTROS COM ARROW FUNCTIONS:
// Criamos pequenas funções predicado puras e legíveis:
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // Avalia diretamente o booleano de fragil (true/false)

// Encadeando filtros:
// 1º Filtra apenas produtos com preço >= 500 (Notebook, iPad Pro)
// 2º Filtra apenas produtos frágeis (ambos são frágeis):
console.log(produtos.filter(caro).filter(fragil))
// Saída:
// [
//   { nome: 'Notebook', preco: 2499, fragil: true },
//   { nome: 'iPad Pro', preco: 4199, fragil: true }
// ]