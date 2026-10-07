// =============================================================================
// ESTRUTURAS DE CONTROLE: CONDICIONAL COMPOSTA (IF / ELSE)
// =============================================================================
// A estrutura `if / else` cria dois caminhos mutuamente exclusivos no fluxo:
// - Se a condição for verdadeira, executa o bloco do `if`.
// - Se for falsa, executa obrigatoriamente o bloco do `else`.
// =============================================================================

const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10) // 10 >= 7 é true -> Imprime "Aprovado!"
imprimirResultado(4)  // 4 >= 7 é false -> Imprime "Reprovado!"

// CUIDADO COM TIPAGEM FRACA E COMPARAÇÕES INESPERADAS:
// O que acontece ao passar uma string textual como 'Epa!'?
// 1. O JavaScript tenta converter 'Epa!' para número na comparação `'Epa!' >= 7`.
// 2. A conversão de texto não-numérico resulta no valor especial `NaN` (Not a Number).
// 3. Qualquer comparação relacional matemática envolvendo `NaN` retorna SEMPRE `false`!
// 4. Como a condição deu false, o código cai no bloco `else` e imprime "Reprovado!".
imprimirResultado('Epa!') // Saída: "Reprovado!" (comportamento logicamente incorreto!)

// LIÇÃO DE PROGRAMAÇÃO DEFENSIVA:
// Como o JavaScript não possui checagem estática de tipos em tempo de compilação,
// funções públicas devem validar suas entradas antes de aplicar regras de negócio:
// Exemplo: if (typeof nota !== 'number' || Number.isNaN(nota)) throw new TypeError('Nota inválida!');