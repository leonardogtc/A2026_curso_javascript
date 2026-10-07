// =============================================================================
// ESTRUTURAS DE CONTROLE: SELEÇÃO MÚLTIPLA COM SWITCH / CASE
// =============================================================================
// A instrução `switch` é utilizada para tomada de decisões baseada na igualdade
// exata de valores discretos.
//
// CARACTERÍSTICAS FUNDAMENTAIS DO SWITCH EM JAVASCRIPT:
// 1. Comparação Estrita (===): Ele compara o valor da expressão com cada `case`
//    usando estrita igualdade (compara valor e tipo sem coerção automática).
// 2. Não avalia intervalos diretamente (não aceita > ou < nos cases).
//    Para testar intervalos contínuos, usamos `Math.floor()` para discretizar o número.
// =============================================================================

const imprimirResultado = function (nota) {
    // Math.floor() arredonda para o inteiro menor (ex: 8.9 vira 8; 6.55 vira 6):
    switch (Math.floor(nota)) {
        // AGRUPAMENTO DE CASES (FALL-THROUGH INTENCIONAL):
        // Se a nota for 10 ou 9, executa o mesmo bloco de código:
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // O `break` encerra o switch. Sem ele, a execução "cairia" nos cases abaixo!
            
        case 8: case 7: // Sintaxe em uma única linha para cases agrupados
            console.log('Aprovado')
            break
            
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
            
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
            
        // CLÁUSULA DEFAULT:
        // Executada caso nenhum dos cases acima corresponda ao valor avaliado (equivalente ao else):
        default:
            console.log('Nota inválida')
            // O break aqui é opcional por ser o último elemento do bloco
    }
}

// Testes:
imprimirResultado(10)   // Saída: Quadro de Honra
imprimirResultado(8.9)  // Math.floor(8.9) = 8 -> Saída: Aprovado
imprimirResultado(6.55) // Math.floor(6.55) = 6 -> Saída: Recuperação
imprimirResultado(2.3)  // Math.floor(2.3) = 2 -> Saída: Reprovado
imprimirResultado(-1)   // Cai no default -> Saída: Nota inválida
imprimirResultado(11)   // Cai no default -> Saída: Nota inválida

// DICA TÉCNICA SOBRE O BREAK:
// Esquecer o `break` por acidente é um dos erros clássicos em programação.
// A execução continuará executando todas as instruções dos cases subsequentes
// até encontrar um break ou o fechamento do bloco switch.