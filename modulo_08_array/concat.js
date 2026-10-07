// =============================================================================
// CONCATENAÇÃO DE ARRAYS: O MÉTODO CONCAT
// =============================================================================
// O método `.concat()` cria e retorna um NOVO array resultante da junção de
// múltiplos arrays e/ou valores individuais, sem modificar nenhum dos arrays originais.
// =============================================================================

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

// Concatena 'filhas' com 'filhos':
const todos = filhas.concat(filhos)

// Os arrays originais permanecem 100% intactos (Imutabilidade):
console.log('Todos:', todos)   // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ]
console.log('Filhas:', filhas) // [ 'Ualeskah', 'Cibalena' ]
console.log('Filhos:', filhos) // [ 'Uoxiton', 'Uesclei' ]

console.log('---------------------------------')

// COMPORTAMENTO DE ACHATAMENTO DE PRIMEIRO NÍVEL:
// O `.concat()` desempacota arrays simples de 1 nível ([1, 2] e [3, 4]), adiciona valores soltos (5),
// mas preserva matrizes aninhadas mais profundas ([[6, 7]] permanece como array dentro do array):
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
// Saída: [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

// NOTA MODERNA (ES2015 / SPREAD OPERATOR):
// No JavaScript moderno, concatenar arrays é frequentemente realizado usando o Operador Spread (`...`):
// const todosModerno = [...filhas, ...filhos]