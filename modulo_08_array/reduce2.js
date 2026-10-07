// =============================================================================
// REDUCE - PARTE 2: DESAFIOS COM OPERAÇÕES LÓGICAS BOOLEANAS
// =============================================================================
// O `.reduce()` não serve apenas para somar números. Ele é extremamente poderoso
// para agregações lógicas booleanas que determinam o estado de uma coleção inteira.
// =============================================================================

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Extraindo o array de booleanos com .map(): [ false, true, false, true ]

// =============================================================================
// DESAFIO 1: TODOS OS ALUNOS SÃO BOLSISTAS?
// =============================================================================
// Usamos o operador E lógico (&&): se houver ao menos um `false`, o resultado final é `false`:
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) // Saída: false

// NOTA: No JS moderno, este comportamento equivale ao método nativo `.every()`:
// console.log(alunos.every(a => a.bolsista)) // false

// =============================================================================
// DESAFIO 2: ALGUM ALUNO É BOLSISTA?
// =============================================================================
// Usamos o operador OU lógico (||): se houver ao menos um `true`, o resultado final é `true`:
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) // Saída: true

// NOTA: No JS moderno, este comportamento equivale ao método nativo `.some()`:
// console.log(alunos.some(a => a.bolsista)) // true