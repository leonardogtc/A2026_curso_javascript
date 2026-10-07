// =============================================================================
// FUNDAMENTOS DE FUNÇÕES - PARTE 1
// =============================================================================
// Uma função é um bloco nomeado de código projetado para executar uma tarefa
// específica, podendo receber entradas (parâmetros) e produzir saídas (retorno).
// =============================================================================

// 1. FUNÇÃO SEM RETORNO EXPLÍCITO:
// Esta função apenas imprime o resultado no console.
function imprimeSoma(a, b) {
    console.log(a + b)
}

// Invocação padrão (passando os 2 argumentos esperados):
imprimeSoma(10, 20) // Saída: 30

// FLEXIBILIDADE DE ARGUMENTOS NO JAVASCRIPT:
// Em JS, a quantidade de argumentos passados não precisa bater com os parâmetros declarados!

// Caso 1: Passando menos argumentos:
// O parâmetro `b` ausente recebe automaticamente o valor `undefined`.
// 10 + undefined resulta no valor numérico especial NaN (Not a Number):
imprimeSoma(10) // Saída: NaN

// Caso 2: Passando mais argumentos:
// O JS usa os dois primeiros e simplesmente ignora os excedentes:
imprimeSoma(10, 20, 30, 40) // Saída: 30 (soma apenas 10 + 20)

// 2. FUNÇÃO COM VALOR PADRÃO (DEFAULT PARAMETERS - ES2015):
// Definimos um valor padrão para `b = 1` caso ele não seja enviado na chamada.
function soma(a, b = 1) {
    console.log(a + b)
}

// Como não passamos o segundo argumento, `b` assume o valor padrão 1:
soma(10) // Saída: 11 (10 + 1)

// O QUE ACONTECE COM O RETORNO QUANDO NÃO HÁ A PALAVRA `return`?
// Toda função em JavaScript que não possui um `return` explícito retorna `undefined`!
// Ao fazer `console.log(soma(10))`, acontecem duas coisas:
// 1º O `console.log` de dentro da função executa e exibe 11.
// 2º O `console.log` externo imprime o valor retornado pela função: undefined.
console.log(soma(10)) // Saídas: 11 seguido de undefined