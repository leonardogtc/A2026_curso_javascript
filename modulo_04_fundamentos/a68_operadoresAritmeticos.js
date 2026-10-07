// =============================================================================
// OPERADORES ARITMÉTICOS EM JAVASCRIPT
// =============================================================================
// Operadores aritméticos são operadores binários (trabalham com dois operandos)
// que utilizam notação infixa (o operador fica entre os dois valores: a + b).
// =============================================================================

// Inicializando quatro constantes de uma só vez usando destructuring de array:
const [a, b, c, d] = [3, 5, 1, 15]

// 1. Adição (+):
const soma = a + b + c + d // 3 + 5 + 1 + 15 = 24

// 2. Subtração (-):
const subtracao = d - b // 15 - 5 = 10

// 3. Multiplicação (*):
const multiplicacao = a * b // 3 * 5 = 15

// 4. Divisão (/):
const divisao = d / a // 15 / 3 = 5

// 5. Módulo / Resto da divisão (%):
const modulo = a % 2 // 3 % 2 = 1 (3 dividido por 2 dá 1 com resto 1)

// OPERADOR UNÁRIO DE NEGAÇÃO ARITMÉTICA (-):
// Observe o `-divisao` no console.log: ele é um operador UNÁRIO (opera em um único operando)
// que inverte o sinal aritmético do número (de +5 para -5):
console.log(soma, subtracao, multiplicacao, -divisao, modulo)
// Saída: 24 10 15 -5 1