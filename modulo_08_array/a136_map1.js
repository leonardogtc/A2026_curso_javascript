// =============================================================================
// TRANSFORMAÇÃO DE DADOS: O MÉTODO MAP - PARTE 1
// =============================================================================
// O `.map()` é um dos métodos mais importantes da programação funcional.
// Ele serve para transformar os elementos de um array, gerando um NOVO array
// com EXATAMENTE a mesma quantidade de elementos do array original.
//
// REGRA FUNDAMENTAL:
// O callback do `.map()` DEVE OBRIGATORIAMENTE retornar um valor!
// Se você esquecer a instrução `return`, o novo array será preenchido com `undefined`.
// =============================================================================

const nums = [1, 2, 3, 4, 5]

// 1. Mapeando números para o seu dobro:
// O array original `nums` permanece 100% inalterado (princípio da Imutabilidade):
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado) // Saída: [ 2, 4, 6, 8, 10 ]
console.log(nums)      // Saída: [ 1, 2, 3, 4, 5 ] (intacto!)

// 2. COMPOSIÇÃO DE PIPELINES FUNCIONAIS (ENCADEAMENTO DE MAPS):
// Criamos funções puras e independentes com responsabilidade única:
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Encadeamos as transformações em sequência:
// 1º Soma 10 a cada número: [11, 12, 13, 14, 15]
// 2º Multiplica por 3:      [33, 36, 39, 42, 45]
// 3º Formata como moeda:    ['R$ 33,00', 'R$ 36,00', ...]
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
// Saída: [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]