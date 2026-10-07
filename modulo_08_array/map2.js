// =============================================================================
// TRANSFORMAÇÃO DE DADOS: O MÉTODO MAP - PARTE 2 (CASO DE USO COM JSON)
// =============================================================================
// Exemplo clássico do mundo real: processando dados recebidos de uma API web.
// Desafio: A partir de um array de strings JSON representando itens de um carrinho,
// extrair exclusivamente um array contendo os preços numéricos.
// =============================================================================

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// 1. Função que converte o texto JSON em um objeto JavaScript vivo:
const paraObjeto = json => JSON.parse(json)

// 2. Função que extrai apenas a propriedade 'preco' do objeto:
const apenasPreco = produto => produto.preco

// 3. Pipeline de mapeamento:
// O primeiro `.map()` gera um array de Objetos.
// O segundo `.map()` consome esse array e gera um array de Números:
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado) // Saída: [ 3.45, 13.9, 41.22, 7.5 ]