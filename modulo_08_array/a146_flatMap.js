// =============================================================================
// TRANSFORMAÇÃO E ACHATAMENTO: O MÉTODO FLATMAP
// =============================================================================
// O `flatMap` combina uma operação de mapeamento (`.map()`) com um achatamento
// de 1 nível de profundidade (`.flat()` / `.concat()`), convertendo matrizes aninhadas
// em um único array linear unidimensional.
// =============================================================================

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

// O PROBLEMA DE USAR APENAS .map():
// O .map() gera um array de arrays (uma matriz aninhada):
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) // Saída: [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

// Demonstração de como .concat() une múltiplos arrays em um único plano:
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])) // Saída: [ 8.1, 9.3, 8.9, 7.3 ]

// =============================================================================
// IMPLEMENTAÇÃO MANUAL DO FLATMAP:
// =============================================================================
// Usamos `.apply([], ...)` para passar a matriz resultante do `.map()`
// como argumentos individuais desempacotados para o `.concat()`:
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) // Saída: [ 8.1, 9.3, 8.9, 7.3 ] (perfeitamente achatado!)

// NOTA DE EVOLUÇÃO (ECMASCRIPT 2019 / ES10):
// Modernamente, os métodos `Array.prototype.flat()` e `Array.prototype.flatMap()`
// foram adicionados nativamente à especificação oficial do JavaScript!