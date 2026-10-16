// =============================================================================
// PADRÃO DE PROJETO: FUNÇÃO FACTORY COM PARÂMETROS - PARTE 2
// =============================================================================
// Uma Factory torna-se verdadeiramente útil quando parametrizada, permitindo
// personalizar os dados de cada novo objeto criado e definir valores padrão.
// =============================================================================

function criarProduto(nome, preco) {
    return {
        // ES2015 Object Shorthand:
        // Como o nome do parâmetro é idêntico ao da chave, podemos omitir `nome: nome`:
        nome,
        preco,
        desconto: 0.1 // Atributo com valor padrão compartilhado na criação
    }
}

// Fabricando múltiplos objetos personalizados de forma rápida e concisa:
console.log(criarProduto('Notebook', 2199.49))
// Saída: { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }

console.log(criarProduto('iPad', 1199.49))
// Saída: { nome: 'iPad', preco: 1199.49, desconto: 0.1 }