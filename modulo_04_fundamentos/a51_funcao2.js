// =============================================================================
// FUNDAMENTOS DE FUNÇÕES - PARTE 2: EXPRESSIONS E ARROW FUNCTIONS
// =============================================================================
// O JavaScript oferece múltiplas maneiras de definir funções.
// Compreender expressões de função e Arrow Functions é fundamental para a
// programação funcional e o ecossistema moderno (React, Node, etc.).
// =============================================================================

// 1. ARMAZENANDO UMA FUNÇÃO ANÔNIMA EM UMA VARIÁVEL (FUNCTION EXPRESSION):
// Como funções são cidadãs de primeira classe, podemos atribuí-las a constantes.
// A função em si não tem nome (anônima); o nome é a própria constante que a armazena.
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // Saída: 5

// 2. ARROW FUNCTION (FUNÇÃO SETA - ES2015 / ES6):
// Substitui a palavra `function` pelo símbolo da seta `=>`.
// Além da sintaxe reduzida, a Arrow Function tem a característica fundamental
// de possuir `this` LÉXICO (ela não cria seu próprio `this`, mas herda do escopo onde nasceu).
const soma = (a, b) => {
    return a + b // Com bloco `{ ... }`, o comando `return` é obrigatório para devolver valor
}

console.log(soma(2, 3)) // Saída: 5

// 3. RETORNO IMPLÍCITO (IMPLICIT RETURN):
// Se a função executa apenas uma linha de instrução/expressão, podemos omitir as chaves `{}`.
// O resultado da expressão após a seta `=>` é automaticamente retornado:
const subtracao = (a, b) => a - b // Muito mais conciso e legível!

console.log(subtracao(3, 2)) // Saída: 1

// 4. ARROW FUNCTION COM UM ÚNICO PARÂMETRO:
// Quando a função recebe exatamente um parâmetro, os parênteses `()` ao redor do parâmetro
// tornam-se opcionais:
const imprime = a => console.log(a)

imprime("Olá Mundo! De novo!") // Saída: Olá Mundo! De novo!