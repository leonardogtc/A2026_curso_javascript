// =============================================================================
// DECLARAÇÃO DE IDENTIFICADORES: VAR, LET E CONST
// =============================================================================
// Em JavaScript temos três palavras-chave para armazenar dados em memória:
// - `var`: Forma legada (anterior ao ES6 / 2015). Escopo de função/global e permite redeclaração.
// - `let`: Padrão moderno (ES6). Escopo de bloco, não permite redeclaração no mesmo escopo.
// - `const`: Padrão moderno (ES6). Cria uma constante cujo binding (atribuição) não pode ser reatribuído.
// =============================================================================

// Declaração inicial:
var a = 3
let b = 4

// Peculiaridade do `var`:
// O JavaScript permite redeclarar a mesma variável com `var` dentro do mesmo escopo
// sem disparar erros, o que historicamente causou muitos bugs difíceis de rastrear.
var a = 30

// Com `let`, você NÃO pode fazer `let b = 40` no mesmo escopo (geraria SyntaxError: Identifier 'b' has already been declared).
// Apenas reatribuímos o novo valor à variável já existente:
b = 40

console.log(a, b) // Saída: 30 40

// Reatribuindo novos valores:
a = 300
b = 400

console.log(a, b) // Saída: 300 400

// CONSTANTES:
// Use `const` para valores que não devem mudar após a inicialização.
// Uma constante deve ser obrigatoriamente inicializada no momento em que é declarada.
const c = 5

// Se tentarmos reatribuir:
// c = 50 // Erro em tempo de execução: TypeError: Assignment to constant variable.

console.log(c) // Saída: 5

// REGRA GERAL NO DESENVOLVIMENTO MODERNO:
// 1. Sempre prefira `const` como escolha padrão.
// 2. Se a variável realmente precisar mudar de valor ao longo do tempo, use `let`.
// 3. Evite `var` em códigos modernos.
