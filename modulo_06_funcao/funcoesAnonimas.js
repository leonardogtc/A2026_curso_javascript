// =============================================================================
// FUNÇÕES ANÔNIMAS EM JAVASCRIPT
// =============================================================================
// Uma "Função Anônima" é uma função que não possui um nome identificador na sua declaração.
// Elas são amplamente utilizadas em JavaScript para callbacks, funções de alta ordem,
// métodos de objetos e expressões de atribuição.
// =============================================================================

// 1. Atribuindo uma função anônima a uma constante:
const soma = function (x, y) {
    return x + y
}

// 2. Função que recebe outra função como parâmetro com valor padrão:
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

// Sem passar o 3º parâmetro: assume `soma` por padrão:
imprimirResultado(3, 4) // Saída: 7

// Passando a função `soma` explicitamente:
imprimirResultado(3, 4, soma) // Saída: 7

// 3. Passando uma função anônima tradicional criada diretamente na chamada (inline):
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // Saída: -1

// 4. Passando uma Arrow Function anônima com retorno implícito:
imprimirResultado(3, 4, (x, y) => x * y) // Saída: 12

// 5. Função anônima como método dentro de um objeto literal:
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
    // Nota ES2015: também poderia ser escrita diretamente como: falar() { console.log('Opa') }
}

pessoa.falar() // Saída: "Opa"