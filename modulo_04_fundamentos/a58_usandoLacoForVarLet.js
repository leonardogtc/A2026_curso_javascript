// =============================================================================
// A SOLUÇÃO ELEGANTE DE CLOSURE COM LET EM LAÇOS DE REPETIÇÃO
// =============================================================================
// No ECMAScript 2015 (ES6), a especificação do `let` dentro do laço `for`
// introduziu um comportamento especial fundamental para o funcionamento correto de Closures.
// =============================================================================

const funcs = []

for (let i = 0; i < 10; i++) {
    // Com `let`, o JavaScript cria um NOVO vínculo léxico (new lexical binding)
    // para a variável `i` a CADA iteração do laço!
    // Cada função anônima empurrada para o array cria uma closure que "lembra"
    // exatamente do valor de `i` da iteração específica em que ela foi instanciada.
    funcs.push(function () {
        console.log(i)
    })
}

// Ao executar as funções:
funcs[2]() // Saída: 2
funcs[8]() // Saída: 8

// POR QUE AGORA FUNCIONA CONFORME O ESPERADO?
// Porque a função no índice 2 fechou o escopo sobre a variável `i` que valia 2,
// e a função no índice 8 fechou sobre a variável `i` que valia 8.
//
// HISTÓRICO TECNOLÓGICO:
// Antes do ES6, para atingir esse mesmo resultado com `var`, os programadores
// precisavam recorrer a IIFEs (Immediately Invoked Function Expressions) para criar
// um novo escopo de função artificialmente a cada volta do laço. Com `let`, tornou-se nativo e simples!