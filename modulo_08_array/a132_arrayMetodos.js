// =============================================================================
// MÉTODOS IMPORTANTES DE MANIPULAÇÃO DE ARRAYS (MUTÁVEIS VS IMUTÁVEIS)
// =============================================================================
// O JavaScript possui métodos que alteram o array original (mutáveis) e métodos
// que geram um novo array preservando o original intacto (imutáveis).
// =============================================================================

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// 1. .pop(): Remove o ÚLTIMO elemento do array (mutável):
pilotos.pop() // Remove 'Massa'
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

// 2. .push(): Adiciona elemento(s) no FINAL do array (mutável):
pilotos.push('Verstappen')
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// 3. .shift(): Remove o PRIMEIRO elemento do array (índice 0) (mutável):
pilotos.shift() // Remove 'Vettel' e desloca os demais índices para a esquerda
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// 4. .unshift(): Adiciona elemento(s) no INÍCIO do array (índice 0) (mutável):
pilotos.unshift('Hamilton') // Desloca os existentes para a direita
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// 5. .splice(): Pode adicionar e remover simultaneamente em qualquer ponto:
// A) ADICIONAR: A partir do índice 2, exclua 0 elementos e insira 'Bottas' e 'Massa':
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// B) REMOVER: A partir do índice 3, exclua 1 elemento ('Massa'):
pilotos.splice(3, 1)
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// =============================================================================
// MÉTODOS IMUTÁVEIS: .slice()
// =============================================================================
// .slice(inicio, fim) extrai uma "fatia" do array e RETORNA UM NOVO ARRAY,
// sem modificar o array original em absolutamente nada!

// Extrai do índice 2 em diante até o fim:
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

// Extrai do índice 1 até o índice 4 (o índice final NÃO é incluído):
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2) // [ 'Alonso', 'Bottas', 'Raikkonen' ]