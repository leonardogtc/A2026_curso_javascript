// =============================================================================
// OPERADORES LÓGICOS E NOTAÇÃO LITERAL SIMPLIFICADA (ES2015)
// =============================================================================
// Operadores lógicos realizam operações da álgebra booleana (E, OU, NÃO, XOR)
// fundamentais para tomadas de decisão e regras de negócio.
// =============================================================================

function compras(trabalho1, trabalho2) {
    // 1. OU lógico (Disjunção - ||):
    // Verdadeiro se AO MENOS UM dos trabalhos der certo:
    const comprarSorvete = trabalho1 || trabalho2

    // 2. E lógico (Conjunção - &&):
    // Verdadeiro SOMENTE SE AMBOS os trabalhos derem certo:
    const comprarTv50 = trabalho1 && trabalho2

    // 3. OU EXCLUSIVO (XOR):
    // Verdadeiro se um for verdadeiro e o outro for falso (não podem ser ambos verdadeiros nem ambos falsos).
    // O JavaScript não possui um operador XOR estritamente lógico (o operador `^` opera em bits - bitwise).
    // Portanto, simular com a desigualdade `!=` é a forma mais limpa e idiomática de obter XOR entre booleanos:
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2

    // 4. NÃO lógico (Negação - !):
    // Operador unário que inverte o valor booleano: se comprou sorvete, NÃO manteve saudável:
    const manterSaudavel = !comprarSorvete

    // RECURSO ES2015 (OBJECT SHORT-HAND SYNTAX):
    // Quando o nome da chave do objeto é exatamente igual ao nome da constante/variável,
    // não precisamos escrever `{ comprarSorvete: comprarSorvete }`.
    // O JavaScript cria a chave e atribui o valor automaticamente:
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

// Simulando os 4 cenários possíveis da tabela-verdade:
console.log('1) Ambos deram certo:  ', compras(true, true))
console.log('2) Só o 1º deu certo:  ', compras(true, false))
console.log('3) Só o 2º deu certo:  ', compras(false, true))
console.log('4) Nenhum deu certo:   ', compras(false, false))