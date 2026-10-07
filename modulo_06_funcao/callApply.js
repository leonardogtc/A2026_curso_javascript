// =============================================================================
// FORMAS DE INVOCAR FUNÇÕES: MÉTODOS CALL E APPLY
// =============================================================================
// Além da chamada tradicional `funcao()`, o JavaScript disponibiliza métodos nativos
// em todas as funções para definir explicitamente qual objeto será o `this`:
// - `.call()`: Passa o objeto do contexto e os parâmetros separados por VÍRGULA.
// - `.apply()`: Passa o objeto do contexto e os parâmetros agrupados em um ARRAY.
// =============================================================================

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // Notação resumida de método (aponta para a função getPreco)
}

// 1. Invocação direta no escopo global:
// Se chamado diretamente, `this` busca as propriedades no objeto global:
global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Saída: R$ 18 (calcula usando global.preco e global.desc)

// 2. Invocação como método de um objeto:
// O `this` aponta automaticamente para o dono do método (`produto`):
console.log(produto.getPreco()) // Saída: R$ 3900.65

// 3. INVOCANDO COM .call() E .apply():
const carro = { preco: 49990, desc: 0.20 }

// Sem passar parâmetros adicionais (apenas o contexto do objeto `carro`):
console.log(getPreco.call(carro))  // Saída: R$ 39992
console.log(getPreco.apply(carro)) // Saída: R$ 39992

// 4. A DIFERENÇA NA PASSAGEM DE ARGUMENTOS:
// - Com `.call()`, os parâmetros são passados normalmente separados por vírgula:
console.log(getPreco.call(carro, 0.17, '$')) // Saída: $ 46790.64

// - Com `.apply()`, os parâmetros OBRIGATORIAMENTE são passados dentro de um array `[...]`:
console.log(getPreco.apply(global, [0.17, '$'])) // Saída: $ 21.06

// DICA MNEMÔNICA:
// - Call  -> Começa com "C" de Comma (vírgula).
// - Apply -> Começa com "A" de Array.