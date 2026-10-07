// =============================================================================
// IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION
// =============================================================================
// Uma IIFE é uma função anônima que é executada no exato momento em que é definida.
//
// SINTAXE:
// 1. Envolve-se a função em parênteses: `(function() { ... })`
//    Isso força o interpretador a tratá-la como uma EXPRESSÃO de função (evitando erro de sintaxe por não ter nome).
// 2. Adicionam-se parênteses ao final: `()` para invocá-la imediatamente.
// =============================================================================

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    
    // Qualquer variável criada aqui dentro fica estritamente isolada:
    const dadoSensivel = "Segredo local"
})()

// IMPORTÂNCIA HISTÓRICA E ARQUITETURAL:
// No desenvolvimento web frontend clássico (antes dos módulos ES6 com `import`/`export`),
// qualquer script carregado na página compartilhava o mesmo objeto global `window`.
// As IIFEs eram o padrão absoluto da indústria para criar módulos isolados,
// encapsular bibliotecas e impedir que variáveis de scripts diferentes colidissem entre si.