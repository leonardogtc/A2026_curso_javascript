// =============================================================================
// FUNÇÃO EM JAVASCRIPT: CIDADÃ DE PRIMEIRA CLASSE (FIRST-CLASS CITIZEN)
// =============================================================================
// Em Ciência da Computação, dizer que funções são "Cidadãs de Primeira Classe"
// significa que elas podem ser tratadas exatamente como qualquer outro tipo de dado:
// podem ser passadas por parâmetro, retornadas por outras funções e atribuídas a variáveis.
//
// Funções que recebem ou retornam outras funções são chamadas de:
// "Higher-Order Functions" (Funções de Alta Ordem).
// =============================================================================

// 1. Criar de forma literal:
function fun1() { }

// 2. Armazenar em uma variável (Function Expression):
const fun2 = function () { }

// 3. Armazenar como elementos dentro de um Array:
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3)) // Invoca a função da posição 0 -> Saída: 5

// 4. Armazenar como propriedade/método de um objeto:
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // Saída: "Opa"

// 5. Passar uma função como parâmetro para outra função:
function run(fun) {
    fun() // Executa a função recebida
}

run(function () { console.log('Executando...') }) // Saída: "Executando..."

// 6. Uma função pode retornar outra função (Higher-Order Function):
// Este padrão é a base do conceito funcional de "Currying" e execução postergada:
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// Invocação encadeada direta:
soma(2, 3)(4) // soma(2, 3) retorna a função interna, que é imediatamente chamada com (4) -> Saída: 9

// Invocação dividida em etapas (reaproveitando o cálculo prévio):
const cincoMais = soma(2, 3) // Guarda a função interna memorizando a + b (5)
cincoMais(4) // Saída: 9
cincoMais(10) // Saída: 15