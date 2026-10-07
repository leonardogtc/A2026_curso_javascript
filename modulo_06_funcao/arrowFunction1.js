// =============================================================================
// FUNÇÕES ARROW (ARROW FUNCTIONS) - PARTE 1: SINTAXE E RETORNO IMPLÍCITO
// =============================================================================
// Introduzidas no ECMAScript 2015 (ES6), as Arrow Functions têm dois objetivos:
// 1. Sintaxe muito mais concisa e enxuta.
// 2. Ter um `this` léxico (não varia de acordo com quem chama a função).
// =============================================================================

// 1. Função tradicional anônima armazenada em variável:
let dobro = function (a) {
    return 2 * a
}

// 2. Arrow function básica (com corpo delimitado por chaves):
// O símbolo `=>` (seta) substitui a palavra-chave `function`.
dobro = (a) => {
    return 2 * a 
}

// 3. Arrow function com RETORNO IMPLÍCITO e parâmetro único:
// - Quando há exatamente um parâmetro, os parênteses `()` ao redor de `a` são opcionais.
// - Quando o corpo da função possui apenas uma única instrução/expressão,
//   podemos omitir as chaves `{}` e o resultado é retornado automaticamente (return implícito):
dobro = a => 2 * a // Altamente expressivo e legível!
console.log(dobro(Math.PI)) // Saída: ~6.283185307179586

// 4. Funções sem parâmetros:
let ola = function () {
    return 'Olá'
}

// Com arrow function sem parâmetros, os parênteses vazios `()` são obrigatórios:
ola = () => 'Olá'

// Variação alternativa usando underline `_`:
// O underline conta como um parâmetro formal (que é ignorado),
// permitindo omitir os parênteses, mas `() => ...` é a convenção mais recomendada:
ola = _ => 'Olá' 
console.log(ola()) // Saída: "Olá"