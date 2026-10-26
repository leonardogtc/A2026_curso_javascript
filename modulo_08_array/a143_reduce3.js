// =============================================================================
// REDUCE - PARTE 3: IMPLEMENTANDO SEU PRÓPRIO REDUCE
// =============================================================================
// Implementação artesanal da função `reduce2` no protótipo de Array,
// gerenciando dinamicamente o valor inicial e o ponto de partida do acumulador.
// =============================================================================

// Adicionando `reduce2` ao protótipo de Array:
Array.prototype.reduce2 = function (callback, valorInicial) {
    // 1. Define o índice inicial e o ponto de partida do acumulador:
    // Se o usuário passou um valorInicial, começamos no índice 0 usando esse valor.
    // Se não passou, o primeiro elemento do array (this[0]) torna-se o acumulador inicial
    // e o loop começa a partir do índice 1:
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]

    // 2. Itera sobre os elementos executando a agregação:
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    // 3. Retorna o valor consolidado final:
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6] // Soma de 1 a 6 é 21

// Testando com valor inicial 21: (21 inicial + 21 da soma = 42)
console.log(nums.reduce2(soma, 21)) // Saída: 42

// Testando sem valor inicial:
console.log(nums.reduce2(soma))     // Saída: 21 (usa nums[0]=1 como acumulador e começa no índice 1)