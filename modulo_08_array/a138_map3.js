// =============================================================================
// TRANSFORMAÇÃO DE DADOS: O MÉTODO MAP - PARTE 3 (IMPLEMENTANDO SEU PRÓPRIO MAP)
// =============================================================================
// Implementando artesanalmente o método `.map2()` dentro de `Array.prototype`
// para entender exatamente como a engine do JavaScript constrói o novo array.
// =============================================================================

// Adicionando o método `map2` ao protótipo de Array:
Array.prototype.map2 = function (callback) {
    // 1. Cria um novo array vazio para não modificar o array original (imutabilidade):
    const newArray = []
    
    // 2. Itera por todos os elementos do array que invocou a função (this):
    for (let i = 0; i < this.length; i++) {
        // Executa o callback e adiciona o retorno da função no novo array:
        newArray.push(callback(this[i], i, this))
    }
    
    // 3. Retorna o novo array populado com o mesmo número de elementos:
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

// Testando nosso `.map2()` caseiro:
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado) // Saída: [ 3.45, 13.9, 41.22, 7.5 ]