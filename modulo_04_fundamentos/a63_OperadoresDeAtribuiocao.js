// =============================================================================
// OPERADORES DE ATRIBUIÇÃO COMPOSTA (COMPOUND ASSIGNMENT OPERATORS)
// =============================================================================
// Operadores de atribuição combinam uma operação matemática com a reatribuição
// do novo valor à mesma variável. São atalhos sintáticos que tornam o código
// mais enxuto e expressivo.
// =============================================================================

const a = 7
let b = 3

// 1. Atribuição Aditiva (+=): Equivale a: b = b + a (3 + 7 = 10)
b += a
console.log(b) // Saída: 10

// 2. Atribuição Subtrativa (-=): Equivale a: b = b - 4 (10 - 4 = 6)
b -= 4
console.log(b) // Saída: 6

// 3. Atribuição Multiplicativa (*=): Equivale a: b = b * 2 (6 * 2 = 12)
b *= 2
console.log(b) // Saída: 12

// 4. Atribuição Divisiva (/=): Equivale a: b = b / 2 (12 / 2 = 6)
b /= 2
console.log(b) // Saída: 6

// 5. Atribuição Modular (%=): Equivale a: b = b % 2 (resto da divisão de 6 por 2)
// Como 6 dividido por 2 dá 3 com resto 0:
b %= 2
console.log(b) // Saída: 0

// APLICAÇÃO PRÁTICA DO OPERADOR MÓDULO (%):
// O operador de resto `%` é amplamente utilizado para verificar se um número é par ou ímpar
// (ex: `numero % 2 === 0` indica que o número é par) e para criar rotações circulares em listas.