// =============================================================================
// DESESTRUTURAÇÃO DE ARRAYS: VALORES PADRÃO E TROCA DE VARIÁVEIS (SWAP)
// =============================================================================
// Este exemplo demonstra um dos truques mais elegantes do ECMAScript 2015:
// a inversão do valor de duas variáveis (Swap) sem precisar de variável temporária!
// =============================================================================

function rand([min = 0, max = 1000] = []) {
    // SWAP DE VARIÁVEIS COM DESTRUCTURING:
    // Se o valor mínimo for maior que o máximo (ex: passou [50, 20]),
    // nós invertemos as duas variáveis em uma única linha usando desestruturação:
    // Cria um array `[max, min]` e imediatamente desestrutura para `[min, max]`.
    // (Antigamente, era obrigatório criar uma variável temporária: let temp = min; min = max; max = temp;)
    if (min > max) [min, max] = [max, min];

    // Fórmula para número aleatório inteiro entre min e max (inclusivo):
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

// Testes:
console.log(rand([50, 20]));  // Inverte automaticamente para min=20 e max=50
console.log(rand([20, 100])); // min=20 e max=100
console.log(rand([990]));     // min=990 e max=1000 (usa o padrão do max)
console.log(rand());          // Sem argumentos: usa o array padrão `[]`, logo min=0 e max=1000