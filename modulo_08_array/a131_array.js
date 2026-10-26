// =============================================================================
// ESTRUTURAS DE DADOS: VISÃO GERAL DE ARRAYS EM JAVASCRIPT
// =============================================================================
// No JavaScript, o Array é uma estrutura de dados indexada (base 0), dinâmica
// (cresce e diminui automaticamente) e heterogênea (aceita qualquer tipo de dado).
// Sob o capô da engine (ex: V8), um Array é um tipo especial de OBJETO!
// =============================================================================

// Tipos: Array é uma função construtora; instâncias e literais são objetos:
console.log(typeof Array, typeof new Array, typeof []) // Saída: function object object

// 1. Instanciando via função construtora `new Array`:
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// 2. Instanciando via Notação Literal `[...]` (forma recomendada):
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Saída: Bia
console.log(aprovados[1]) // Saída: Carlos
console.log(aprovados[2]) // Saída: Ana
console.log(aprovados[3]) // Índice inexistente -> Saída: undefined (não lança erro!)

// 3. Inserindo elementos:
aprovados[3] = 'Paulo' // Atribuição direta por índice
aprovados.push('Abia')  // Adiciona no final do array (mais idiomático)
console.log(aprovados.length) // Saída: 5

// 4. Arrays Esparsos (Sparse Arrays):
// Se atribuirmos a um índice distante, o JS cria "buracos" (empty items) intermediários:
aprovados[9] = 'Rafael'
console.log(aprovados.length) // Saída: 10
console.log(aprovados[8] === undefined) // Saída: true (posições vazias retornam undefined)
console.log(aprovados) // Exibe os 5 primeiros, 4 posições vazias (<4 empty items>) e 'Rafael'

// 5. Ordenação com `.sort()`:
// IMPORTANTE: .sort() altera o array ORIGINAL (mutável) e, por padrão,
// converte os elementos em texto e os ordena em ordem alfabética/lexicográfica:
aprovados.sort()
console.log(aprovados)

// 6. Exclusão com operador `delete`:
// O operador `delete` remove o elemento daquela posição, mas NÃO reorganiza os índices!
// A posição torna-se vazia (`undefined`):
delete aprovados[1]
console.log(aprovados[1]) // Saída: undefined
console.log(aprovados[2]) // Continua no mesmo índice sem alteração

// 7. Manipulação com `.splice()`:
// O método `.splice(indice, qtdExcluir, ...elementosAdicionar)` é o canivete suíço dos arrays!
// Ele exclui, adiciona ou substitui elementos REORGANIZANDO todos os índices:
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // A partir do índice 1, exclua 1 elemento ('Carlos')
console.log(aprovados) // Saída: [ 'Bia', 'Ana' ] (os índices foram ajustados!)