// =============================================================================
// ENCAPSULAMENTO: MÉTODOS GETTERS E SETTERS
// =============================================================================
// Getters (`get`) e Setters (`set`) são funções especiais que interceptam
// o acesso de leitura e de escrita de uma propriedade, mantendo a sintaxe limpa
// de acesso como se fossem atributos comuns (`objeto.propriedade`).
//
// VANTAGENS:
// 1. Validação de dados antes da atribuição (evita estados inválidos no objeto).
// 2. Encapsulamento de regras de negócio sem quebrar a interface externa do objeto.
// =============================================================================

const sequencia = {
    // CONVENÇÃO DO UNDERLINE (_):
    // Em JavaScript, adicionar um underline no início do identificador (_valor)
    // é uma forte convenção da comunidade para sinalizar a outros desenvolvedores
    // que este atributo deve ser tratado como "privado/interno":
    _valor: 1,

    // GETTER: Executado automaticamente ao LER `sequencia.valor`:
    // Retorna o valor atual e depois o incrementa (pós-fixado):
    get valor() {
        return this._valor++
    },

    // SETTER: Executado automaticamente ao ATRIBUIR `sequencia.valor = novoValor`:
    // Permite aplicar validações defensivas:
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
        // Se o valor for menor ou igual, a atribuição é ignorada com segurança
    }
}

// 1. Primeira leitura (lê 1 e incrementa para 2; na próxima leitura lê 2 e incrementa para 3):
console.log(sequencia.valor, sequencia.valor) // Saída: 1 2

// 2. Atribuição válida (1000 é maior que o valor interno atual):
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // Saída: 1000 1001

// 3. Atribuição inválida pela regra de negócio (900 não é maior que 1002):
sequencia.valor = 900 // O setter bloqueia a alteração
console.log(sequencia.valor, sequencia.valor) // Saída: 1002 1003 (continua a sequência!)