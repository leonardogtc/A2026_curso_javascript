// =============================================================================
// FUNÇÕES ESTÁTICAS IMPORTANTES DO OBJETO OBJECT
// =============================================================================
// A função construtora nativa `Object` fornece métodos estáticos utilitários
// essenciais para introspecção, manipulação de propriedades e clonagem de objetos.
// =============================================================================

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// 1. Object.keys(obj): Retorna um array com todas as chaves (nomes das propriedades):
console.log(Object.keys(pessoa)) // Saída: [ 'nome', 'idade', 'peso' ]

// 2. Object.values(obj): Retorna um array com todos os valores das propriedades:
console.log(Object.values(pessoa)) // Saída: [ 'Rebeca', 2, 13 ]

// 3. Object.entries(obj): Retorna um array de subarrays no formato [chave, valor]:
console.log(Object.entries(pessoa)) // Saída: [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

// Iterando sobre as entradas usando Destructuring de Array:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// 4. Object.defineProperty(obj, prop, descriptor):
// Permite definir uma propriedade com controle granular sobre seus metadados:
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,     // Define se a propriedade será listada em Object.keys() e loops
    writable: false,       // Define se o valor pode ser alterado (false = somente leitura!)
    value: '01/01/2019'    // O valor atribuído
})

pessoa.dataNascimento = '01/01/2017' // Tentativa de alteração (bloqueada por writable: false)
console.log(pessoa.dataNascimento)   // Saída: "01/01/2019" (permaneceu inalterada)
console.log(Object.keys(pessoa))     // Como enumerable é true, ela aparece na lista de chaves

// 5. Object.assign(destino, ...fontes) - ECMAScript 2015:
// Copia todas as propriedades de um ou mais objetos de origem para um objeto de destino.
// Se houver chaves repetidas, o valor do último objeto prevalece (sobrescreve):
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // A chave 'a' sobrescreverá o valor 1 do destino
const obj = Object.assign(dest, o1, o2)

// Congelando o objeto resultante:
Object.freeze(obj)
obj.c = 1234 // Tentativa de alteração ignorada
console.log(obj) // Saída: { a: 4, b: 2, c: 3 }