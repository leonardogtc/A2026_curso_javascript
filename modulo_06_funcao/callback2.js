// =============================================================================
// FUNÇÕES CALLBACK - PARTE 2: FILTRAGEM (IMPERATIVO VS DECLARATIVO COM .FILTER)
// =============================================================================
// Comparação prática entre a abordagem imperativa tradicional e a abordagem funcional
// declarativa utilizando o método `.filter()` com funções de callback.
// =============================================================================

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// 1. ABORDAGEM IMPERATIVA (SEM CALLBACK):
// Foco no "COMO FAZER": criamos manualmente um array auxiliar, controlamos
// o laço de repetição e inserimos os dados com `.push()`.
// É mais verboso e suscetível a erros de estado mutável:
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1) // Saída: [ 6.5, 5.2, 3.6 ]

// 2. ABORDAGEM FUNCIONAL DECLARATIVA (COM CALLBACK E .filter()):
// Foco no "O QUE QUEREMOS": o método `.filter()` recebe uma função de callback
// (chamada de função predicado) que deve retornar `true` ou `false`.
// Se retornar true, o elemento é incluído no novo array resultante (o array original permanece intacto!):
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2) // Saída: [ 6.5, 5.2, 3.6 ]

// 3. ABORDAGEM MODERNA ELEGANTE:
// Isolamos a regra em uma Arrow Function pura e reutilizável:
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3) // Saída: [ 6.5, 5.2, 3.6 ]