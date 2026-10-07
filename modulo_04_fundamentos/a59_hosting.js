// =============================================================================
// O CONCEITO DE HOISTING (IÇAMENTO OU ELEVAÇÃO)
// =============================================================================
// Hoisting é o comportamento padrão do JavaScript de mover as DECLARAÇÕES de variáveis
// e funções para o topo do seu escopo antes da execução do código.
// Isso decorre das duas fases da engine do JavaScript (ex: V8):
// 1. Fase de Compilação/Criação: Lê o arquivo e aloca as declarações na memória.
// 2. Fase de Execução: Executa o código linha por linha.
// =============================================================================

// 1. HOISTING COM `var`:
// A declaração `var a` é içada para o topo e inicializada com `undefined`.
// A atribuição (`a = 2`) permanece na linha original.
// O código é interpretado como se fosse:
//    var a;
//    console.log('a = ', a);
//    a = 2;
//    console.log('a = ', a);
console.log('a = ', a) // Saída: a = undefined (não dá erro de variável não definida!)
var a = 2
console.log('a = ', a) // Saída: a = 2

console.log('-----------------')

// 2. O QUE ACONTECE COM `let` E `const`? (TEMPORAL DEAD ZONE - TDZ)
// Variáveis declaradas com `let` e `const` também sofrem o içamento na fase de compilação,
// MAS NÃO são inicializadas com `undefined`.
// Elas entram na chamada "Zona Morta Temporal" (Temporal Dead Zone - TDZ).
// Tentar ler a variável antes da sua linha de declaração resulta em:
// `ReferenceError: Cannot access 'b' before initialization`.
//
// (A linha abaixo é intencionalmente demonstrativa do erro de TDZ):
console.log('b = ', b) // Dispara ReferenceError
let b = 2
console.log('b = ', b)

// BOA PRÁTICA:
// Sempre declare todas as suas variáveis no início do seu escopo antes de utilizá-las.
// Não dependa de hoisting com `var` em projetos reais!