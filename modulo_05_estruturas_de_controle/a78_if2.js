// =============================================================================
// ESTRUTURAS DE CONTROLE: CUIDADOS E ARMADILHAS DE SINTAXE NO IF (PARTE 2)
// =============================================================================
// Este arquivo demonstra duas das armadilhas mais comuns de sintaxe que geram bugs
// silenciosos em programas JavaScript:
// 1. Omitir as chaves `{}` no bloco condicional.
// 2. Colocar ponto e vírgula `;` logo após a condição do `if`.
// =============================================================================

// ARMADILHA 1: OMITIR AS CHAVES `{}`
function teste1(num) {
    // Quando omitimos as chaves, o `if` controla APENAS a PRIMEIRA sentença seguinte!
    // A indentação no editor engana os olhos, mas não muda a lógica da engine:
    if (num > 7)
        console.log(num) // Esta linha só executa se num > 7
    
    // Esta linha NÃO faz parte do if! Ela SEMPRE será executada:
    console.log('Final')
}

teste1(6) // 6 não é > 7 (não imprime 6, mas imprime 'Final')
teste1(8) // 8 é > 7 (imprime 8 e depois imprime 'Final')

// ARMADILHA 2: COLOCAR PONTO E VÍRGULA (;) APÓS O IF
function teste2(num) {
    // CUIDADO EXTREMO: O ponto e vírgula `;` finaliza uma sentença vazia associada ao `if`!
    // A engine interpreta como: `if (num > 7) { /* sentença vazia */ }`
    // O bloco `{ console.log(num) }` que vem em seguida torna-se um bloco solto e independente,
    // que SEMPRE será executado, independentemente da condição!
    if (num > 7); { 
        console.log(num)
    }
}

teste2(6) // Imprime 6 (mesmo 6 não sendo maior que 7!)
teste2(8) // Imprime 8

// BOA PRÁTICA INEGOCIÁVEL DE ENGENHARIA DE SOFTWARE:
// 1. NUNCA coloque ponto e vírgula `;` imediatamente após os parênteses de estruturas de controle (if, for, while).
// 2. SEMPRE utilize chaves `{ ... }` para delimitar o corpo do `if`, mesmo que ele contenha apenas uma linha.