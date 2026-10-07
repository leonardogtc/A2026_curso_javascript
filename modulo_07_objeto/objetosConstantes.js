// =============================================================================
// OBJETOS CONSTANTES E O MÉTODO OBJECT.FREEZE
// =============================================================================
// Uma dúvida muito comum em iniciantes é:
// "Se declarei um objeto com `const`, por que consigo alterar seus atributos?"
//
// A explicação está em como a memória funciona:
// - A constante `pessoa` armazena um ENDEREÇO DE MEMÓRIA (ex: ponteiro 123).
// - O objeto em si reside no endereço 123 da memória Heap.
// - `pessoa.nome = 'Pedro'` altera os dados DENTRO do endereço 123 (permitido).
// - `pessoa = { nome: 'Ana' }` tentaria mudar o ponteiro para o endereço 456 (proibido!).
// =============================================================================

// pessoa -> aponta para o endereço 123 -> { nome: 'Joao' }
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // Modifica o atributo do objeto existente
console.log(pessoa)   // Saída: { nome: 'Pedro' }

// Se tentássemos reatribuir o identificador da constante:
// pessoa = { nome: 'Ana' } // TypeError: Assignment to constant variable.

// CONGELANDO O OBJETO COM Object.freeze():
// O método `Object.freeze()` torna o conteúdo do próprio objeto 100% IMUTÁVEL!
// A partir desta linha, o objeto não aceita adição, remoção nem alteração de propriedades:
Object.freeze(pessoa)

// Todas as tentativas abaixo serão sumariamente IGNORADAS pelo JavaScript
// (ou dispararão `TypeError` se você estiver rodando em modo estrito "use strict"):
pessoa.nome = 'Maria'   // Tentativa de alteração (ignorada)
pessoa.end = 'Rua ABC'  // Tentativa de adição (ignorada)
delete pessoa.nome      // Tentativa de deleção (ignorada)

console.log(pessoa.nome) // Saída: "Pedro" (permaneceu inalterado)
console.log(pessoa)      // Saída: { nome: 'Pedro' }

// Criando um objeto já 100% congelado desde o nascimento:
const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria' // Ignorado
console.log(pessoaConstante)   // Saída: { nome: 'Joao' }