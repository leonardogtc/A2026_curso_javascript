// =============================================================================
// FORMAS DE DECLARAÇÃO DE FUNÇÃO E O IMPACTO DO HOISTING
// =============================================================================
// Em JavaScript, a forma como você declara uma função afeta diretamente
// a ordem em que ela pode ser chamada no arquivo devido ao mecanismo de Hoisting (içamento).
// =============================================================================

// 1. FUNCTION DECLARATION (DECLARAÇÃO DE FUNÇÃO TRADICIONAL):
// Por que podemos invocar `soma` ANTES da sua declaração no código?
// Porque funções declaradas com a sintaxe `function nome() { ... }` sofrem HOISTING COMPLETO!
// A engine do JavaScript carrega previamente tanto o nome quanto o corpo inteiro da função
// na fase de compilação, antes de iniciar a execução linha por linha:
console.log(soma(3, 4)) // Saída: 7 (funciona perfeitamente!)

function soma(x, y) {
    return x + y
}

// 2. FUNCTION EXPRESSION (EXPRESSÃO DE FUNÇÃO):
// Atribuímos uma função anônima a uma variável/constante.
// Aqui, a variável `sub` está sujeita às regras normais de `const` (Temporal Dead Zone).
// Se tentássemos chamar `sub(3, 4)` antes desta linha, receberíamos um `ReferenceError`:
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4)) // Saída: -1 (só pode ser chamada após ser declarada)

// 3. NAMED FUNCTION EXPRESSION (EXPRESSÃO DE FUNÇÃO NOMEADA):
// É uma variação da Function Expression onde a função recebe um nome explícito interno (`mult`).
// Vantagem: Facilita a depuração em ferramentas de debug (o nome da função aparece no Stack Trace)
// e permite chamadas recursivas usando o próprio nome da função internamente:
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4)) // Saída: 12