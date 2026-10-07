// =============================================================================
// FILTRAGEM DE DADOS: O MÉTODO FILTER - PARTE 2 (IMPLEMENTANDO SEU PRÓPRIO FILTER)
// =============================================================================
// Criando manualmente a função `filter2` no protótipo de Array para entender
// como a filtragem condicional é executada pela engine do JavaScript.
// =============================================================================

// Adicionando o método `filter2` ao protótipo de Array:
Array.prototype.filter2 = function (callback) {
    // 1. Cria um novo array que armazenará apenas os elementos aprovados:
    const newArray = []
    
    // 2. Itera sobre cada elemento do array original (this):
    for (let i = 0; i < this.length; i++) {
        // 3. Testa se o callback retornou verdadeiro para o elemento atual:
        if (callback(this[i], i, this)) {
            newArray.push(this[i]) // Adiciona o elemento apenas se passar no teste!
        }
    }
    
    // 4. Retorna o novo array filtrado:
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

// Testando nosso `.filter2()` personalizado:
console.log(produtos.filter2(caro).filter2(fragil))
// Saída idêntica à do método nativo:
// [
//   { nome: 'Notebook', preco: 2499, fragil: true },
//   { nome: 'iPad Pro', preco: 4199, fragil: true }
// ]