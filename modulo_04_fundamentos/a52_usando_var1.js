// =============================================================================
// COMPORTAMENTO DE ESCOPO COM VAR: AUSÊNCIA DE ESCOPO DE BLOCO
// =============================================================================
// Uma das características mais perigosas do `var` no JavaScript tradicional é que
// ele NÃO respeita escopo de bloco (delimitado por `{}`).
//
// O `var` só possui dois níveis possíveis de escopo:
// 1. Escopo de Função: Visível apenas dentro da função onde foi criado.
// 2. Escopo Global: Se criado fora de uma função, fica visível no escopo global inteiro.
// =============================================================================

var numero = 1

{
    // Este bloco `{}` NÃO cria um novo escopo para a palavra-chave `var`!
    // Portanto, `var numero = 2` está na verdade redeclarando e sobrescrevendo
    // a MESMA variável `numero` existente no escopo superior:
    var numero = 2
    console.log('Dentro = ', numero) // Saída: 2
}

// Como o bloco não isolou a variável, o valor global/superior foi alterado:
console.log('Fora = ', numero) // Saída: 2 (e NÃO 1!)

// MOTIVO DA CRIAÇÃO DO LET NO ES6:
// Este comportamento de sobrescrever variáveis acidentalmente era causa frequente
// de bugs em aplicações grandes, o que motivou a criação do `let` com escopo de bloco.