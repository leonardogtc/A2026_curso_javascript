// =============================================================================
// ESTRUTURAS DE CONTROLE: CONDICIONAL IF (PARTE 1)
// =============================================================================
// A instrução `if` avalia uma expressão condicional entre parênteses.
// Se a expressão for verdadeira (ou se converter para um valor "truthy"),
// o bloco de código associado `{ ... }` é executado. Caso contrário, é ignorado.
// =============================================================================

// 1. Condicional com expressão relacional matemática:
function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // 8.1 >= 7 é verdadeiro (true) -> Executa o log
soBoaNoticia(6.1) // 6.1 >= 7 é falso (false) -> Não faz nada

// 2. Condicional avaliando coerção implícita para booleano (Truthy vs Falsy):
// No JavaScript, você não precisa passar explicitamente `if (valor === true)`.
// Qualquer valor passado para o `if` será internamente convertido para booleano.
function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

// VALORES "FALSY" (NÃO entram no if):
seForVerdadeEuFalo()          // Argumento não passado -> undefined (falsy)
seForVerdadeEuFalo(null)      // null é falsy
seForVerdadeEuFalo(undefined) // undefined é falsy
seForVerdadeEuFalo(NaN)       // NaN é falsy
seForVerdadeEuFalo('')        // String vazia é falsy
seForVerdadeEuFalo(0)         // O número zero é falsy

// VALORES "TRUTHY" (ENTRAM no if e executam):
seForVerdadeEuFalo(-1)        // Qualquer número diferente de zero é truthy
seForVerdadeEuFalo(' ')       // String com espaço NÃO está vazia -> truthy
seForVerdadeEuFalo('?')       // String com caractere -> truthy
seForVerdadeEuFalo([])        // Array (mesmo vazio) é um objeto em memória -> truthy
seForVerdadeEuFalo([1, 2])    // Array preenchido -> truthy
seForVerdadeEuFalo({})        // Objeto literal (mesmo vazio) -> truthy