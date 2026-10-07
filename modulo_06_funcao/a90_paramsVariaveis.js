// =============================================================================
// PARÂMETROS VARIÁVEIS E O OBJETO ARGUMENTS
// =============================================================================
// Mesmo sem declarar nenhum parâmetro formal na assinatura de uma função tradicional,
// o JavaScript disponibiliza internamente um objeto nativo chamado `arguments`.
// =============================================================================

function soma() {
    let soma = 0
    // O objeto `arguments` é uma estrutura "Array-like" (parecida com array)
    // que contém todos os argumentos passados na invocação da função:
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())              // Sem argumentos -> Saída: 0
console.log(soma(1))             // Um argumento -> Saída: 1
console.log(soma(1.1, 2.2, 3.3)) // Três números -> Saída: 6.6

// CUIDADO COM COERÇÃO E CONCATENAÇÃO DE STRINGS:
// 1.1 + 2.2 = 3.3; ao somar com a string "Teste", ocorre concatenação:
console.log(soma(1.1, 2.2, "Teste")) // Saída: "3.3Teste"

// Como a variável 'soma' começou com o número 0, ao somar com strings:
console.log(soma('a', 'b', 'c')) // Saída: "0abc"

// RECURSO MODERNO (ES2015 / REST PARAMETERS):
// No JavaScript moderno, o uso de `arguments` foi amplamente substituído
// pelo operador REST (`...args`). Além de mais legível, o operador Rest gera
// um ARRAY REAL (com acesso a métodos como .reduce()) e funciona perfeitamente em Arrow Functions:
// const somaModerna = (...numeros) => numeros.reduce((acc, num) => acc + num, 0)