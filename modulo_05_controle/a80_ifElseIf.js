// =============================================================================
// ESTRUTURAS DE CONTROLE: IF / ELSE IF / ELSE E PROTOTYPE CHAIN
// =============================================================================
// Quando temos mais de duas ramificações possíveis no fluxo, encadeamos condições
// com `else if`. O interpretador avalia as condições de cima para baixo e executa
// APENAS o primeiro bloco cuja condição for verdadeira, ignorando todos os demais.
// Se nenhuma condição coincidir, o bloco `else` final é executado como fallback.
// =============================================================================

// EXTENSÃO DE PROTÓTIPO NATIVO (MONKEY PATCHING):
// Adicionando um novo método diretamente ao protótipo da função construtora `Number`.
// A partir daqui, qualquer valor do tipo number ganha a capacidade de invocar `.entre()`!
// A palavra-chave `this` dentro do método aponta para o próprio valor numérico que o invocou:
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        // Bloco padrão caso nenhuma das faixas acima seja satisfeita:
        console.log('Nota inválida')
    }
}

// Testando todas as faixas e os limites inválidos:
imprimirResultado(10)   // Saída: Quadro de Honra
imprimirResultado(8.9)  // Saída: Aprovado
imprimirResultado(6.55) // Saída: Recuperação
imprimirResultado(2.3)  // Saída: Reprovado
imprimirResultado(-1)   // Saída: Nota inválida (fora da faixa de 0 a 10)
imprimirResultado(11)   // Saída: Nota inválida (acima de 10)

// AVISO DE ARQUITETURA SOBRE EXTENSÃO DE PROTÓTIPOS (MONKEY PATCHING):
// Embora adicionar métodos ao protótipo nativo (`Number.prototype`) seja didático e poderoso,
// em projetos reais de grande porte isso é desencorajado. Se duas bibliotecas diferentes
// tentarem definir um método com o mesmo nome no protótipo nativo, haverá colisão e bugs difíceis de rastrear.