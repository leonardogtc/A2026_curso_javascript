// =============================================================================
// OPERADOR DE DESESTRUTURAÇÃO (DESTRUCTURING) COM ARRAYS E REST - ES2015
// =============================================================================
// Diferente dos objetos (onde a extração ocorre pelo NOME da chave), nos Arrays
// a desestruturação é baseada na POSIÇÃO (índice ordenado) dos elementos.
// =============================================================================

// 1. Extração posicional simples:
// 'a' recebe o elemento da posição 0 (1), e 'b' recebe o da posição 1 (2):
const [a, b] = [1, 2]
console.log(a, b) // Saída: 1 2

// 2. Pulando elementos com vírgulas vazias:
// É possível ignorar posições intermediárias apenas deixando o espaço entre as vírgulas:
const [n1, , n3, , n5] = [10, 20, 30, 40, 50]
console.log(n1, n3, n5) // Saída: 10 30 50

// 3. Operador Rest (...) na desestruturação:
// O operador rest agrupa "o restante" dos elementos em um novo array:
const [, , , ...resto] = [1, 2, 3, 4, 5] // Pula os 3 primeiros e coleta o resto
console.log(resto) // Saída: [ 4, 5 ]

// 4. Desestruturação de Array aplicada aos parâmetros de uma função:
// A função espera um array e já desestrutura seus elementos diretamente na assinatura,
// fornecendo valores padrão caso os elementos não venham:
function rand([min = 0, max = 1] = []) { // Adicionado `= []` como valor padrão para evitar erro caso nenhum argumento seja passado!
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 100])) // Gera número entre 50 e 100
console.log(rand([, 10]))    // Pula o primeiro elemento: min assume o padrão 0 e max vira 10
console.log(rand([]))        // Array vazio: min=0 e max=1
console.log(rand())          // Sem argumentos: graças ao default `= []`, não quebra o programa!
