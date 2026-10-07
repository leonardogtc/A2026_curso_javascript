// =============================================================================
// FUNÇÕES ARROW - PARTE 3: COMPARAÇÃO DO THIS E IMUTABILIDADE DO BIND
// =============================================================================
// Este arquivo compara o comportamento do `this` em funções normais versus
// Arrow Functions no ambiente Node.js, demonstrando que o `this` de uma Arrow Function
// NÃO pode ser alterado nem mesmo pelo método `.bind()`.
// =============================================================================

// 1. FUNÇÃO TRADICIONAL:
let comparaComThis = function (param) {
    console.log(this === param)
}

// No Node.js, em uma função comum chamada no escopo global, o `this` aponta para o objeto `global`
// (no navegador, apontaria para `window`):
comparaComThis(global) // Saída: true

// Usando o método `.bind(obj)` para mudar a referência do `this`:
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // Saída: false (não aponta mais para global)
comparaComThis(obj)    // Saída: true  (agora aponta para 'obj')

console.log('---------------------------------')

// 2. ARROW FUNCTION:
// No Node.js, o contexto do arquivo é um módulo (CommonJS).
// O `this` no corpo do arquivo aponta para `module.exports` (ou simplesmente `exports`):
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)         // Saída: false (arrow function não aponta para global)
comparaComThisArrow(module.exports) // Saída: true  (aponta para o objeto module.exports do arquivo atual)

// 3. TENTANDO FORÇAR A MUDANÇA DO THIS COM .bind() NA ARROW FUNCTION:
// O JavaScript IGNORA o `.bind()` quando aplicado a uma Arrow Function!
// O `this` de uma arrow function é soberano e 100% amarrado ao seu contexto de criação:
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)            // Saída: false (o bind NÃO funcionou!)
comparaComThisArrow(module.exports) // Saída: true  (continua apontando firmemente para module.exports)