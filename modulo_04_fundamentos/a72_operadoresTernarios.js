// =============================================================================
// OPERADOR TERNÁRIO EM JAVASCRIPT
// =============================================================================
// O operador ternário (`? :`) é o ÚNICO operador em JavaScript composto por
// três partes (operandos). Ele funciona como uma forma compacta e expressiva de `if/else`.
//
// Estrutura:
//    expressãoCondicional ? valorSeVerdadeiro : valorSeFalso
// =============================================================================

// Aqui combinamos uma Arrow Function de retorno implícito com o operador ternário:
// 1ª parte: `nota >= 7` (expressão que retorna verdadeiro ou falso)
// 2ª parte: `'Aprovado'` (retornado se a condição for true)
// 3ª parte: `'Reprovado'` (retornado se a condição for false)
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1)) // Saída: "Aprovado"
console.log(resultado(6.7)) // Saída: "Reprovado"

// DIFERENÇA FUNDAMENTAL ENTRE OPERADOR TERNÁRIO E O BLOCO IF/ELSE:
// - O bloco `if / else` é uma DECLARAÇÃO (statement): executa ações mas não devolve valor diretamente.
// - O operador ternário é uma EXPRESSÃO (expression): ele produz um valor direto,
//   permitindo que seu resultado seja atribuído a variáveis ou retornado em arrow functions.

// DICA DE BOA PRÁTICA:
// Evite encadear vários ternários aninhados (ex: `cond1 ? val1 : cond2 ? val2 : val3`),
// pois torna o código difícil de ler. Se precisar de múltiplas condições, prefira `if/else if` ou `switch`.