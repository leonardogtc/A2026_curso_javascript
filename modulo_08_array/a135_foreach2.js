// =============================================================================
// ITERAÇÃO COM FOREACH - PARTE 2: IMPLEMENTANDO NOSSO PRÓPRIO FOREACH
// =============================================================================
// Para entender profundamente como funções de alta ordem funcionam, nada melhor
// do que recriá-las manualmente no protótipo nativo de `Array`.
// =============================================================================

// Adicionamos o método `forEach2` ao protótipo de Array:
Array.prototype.forEach2 = function (callback) {
    // A palavra-chave `this` dentro deste método aponta para a instância do array que o invocou:
    for (let i = 0; i < this.length; i++) {
        // Invoca o callback passando exatamente os 3 parâmetros esperados pelo padrão do JS:
        // 1º this[i] (elemento atual)
        // 2º i       (índice atual)
        // 3º this    (o array completo)
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Testando nosso método artesanal:
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
// Saída:
// 1) Agatha
// 2) Aldo
// 3) Daniel
// 4) Raquel