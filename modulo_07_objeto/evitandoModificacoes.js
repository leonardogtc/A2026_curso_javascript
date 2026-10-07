// =============================================================================
// EVITANDO MODIFICAÇÕES EM OBJETOS: PREVENTEXTENSIONS, SEAL E FREEZE
// =============================================================================
// O JavaScript oferece 3 níveis progressivos de proteção e controle sobre
// a mutabilidade dos objetos.
// =============================================================================

// -----------------------------------------------------------------------------
// NÍVEL 1: Object.preventExtensions()
// -----------------------------------------------------------------------------
// - Impede a ADIÇÃO de novos atributos no objeto.
// - Permite ALTERAR valores de propriedades existentes.
// - Permite DELETAR propriedades existentes.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Saída: false

produto.nome = 'Borracha'                 // Permitido: altera propriedade existente
produto.descricao = 'Borracha escolar'   // Bloqueado: não permite adicionar novas propriedades!
delete produto.tag                        // Permitido: deleta propriedade existente
console.log(produto)                      // { nome: 'Borracha', preco: 1.99 }

console.log('---------------------------------')

// -----------------------------------------------------------------------------
// NÍVEL 2: Object.seal() (SELAR)
// -----------------------------------------------------------------------------
// - Impede a ADIÇÃO de novos atributos.
// - Impede a DELEÇÃO de atributos existentes.
// - Permite APENAS ALTERAR os valores das propriedades existentes.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Saída: true

pessoa.sobrenome = 'Silva' // Bloqueado: não adiciona
delete pessoa.nome         // Bloqueado: não deleta
pessoa.idade = 29          // Permitido: altera valor existente
console.log(pessoa)        // { nome: 'Juliana', idade: 29 }

console.log('---------------------------------')

// -----------------------------------------------------------------------------
// NÍVEL 3: Object.freeze() (CONGELAMENTO TOTAL)
// -----------------------------------------------------------------------------
// Equivale a um objeto SELADO com valores CONSTANTES (`writable: false`):
// - Não adiciona atributos
// - Não deleta atributos
// - Não altera valores existentes (100% imutável)