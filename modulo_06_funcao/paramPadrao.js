// =============================================================================
// EVOLUÇÃO DOS PARÂMETROS PADRÃO (DEFAULT PARAMETERS) EM JAVASCRIPT
// =============================================================================
// Uma análise histórica de como os desenvolvedores lidavam com valores padrão
// antes e depois do ECMAScript 2015 (ES6).
// =============================================================================

// ESTRATÉGIA 1: OPERADOR LÓGICO OU (||) - PRÉ-ES6
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// O BUG DO ZERO COM O OPERADOR OU:
console.log(soma1(), soma1(3), soma1(1, 2, 3)) // Saídas normais: 3, 5, 6
// Mas repare no que acontece ao passar zeros:
// Como o número 0 é "falsy", a expressão `0 || 1` escolhe o valor 1!
console.log(soma1(0, 0, 0)) // Saída: 3 (incorreto! deveria ser 0)

// ESTRATÉGIAS 2, 3 E 4: TERNÁRIOS E CHECAGENS DEFENSIVAS
function soma2(a, b, c) {
    // Estratégia 2: Checar estritamente contra undefined
    a = a !== undefined ? a : 1
    
    // Estratégia 3: Checar se o índice do argumento existe no objeto `arguments`
    b = 1 in arguments ? b : 1
    
    // Estratégia 4: Checar se o valor não é um número (mais segura para operações numéricas)
    c = isNaN(c) ? 1 : c
    
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3)) // Saídas: 3, 5, 6
console.log(soma2(0, 0, 0)) // Saída: 0 (agora calculou corretamente!)

// ESTRATÉGIA PADRÃO DO ES2015 (ES6):
// A sintaxe padrão moderna oficial da linguagem. É concisa, elegante e resolve
// todos os problemas anteriores automaticamente (assume o padrão apenas se o argumento for omitido ou `undefined`):
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3)) // Saídas: 3, 5, 6
console.log(soma3(0, 0, 0)) // Saída: 0 (perfeito!)