// =============================================================================
// ORIENTAÇÃO A OBJETOS COM CLASSES (ES2015 / ES6) - PARTE 1
// =============================================================================
// A palavra-chave `class` introduzida no ES6 simplifica a sintaxe de orientação
// a objetos em JavaScript, funcionando como um "açúcar sintático" elegante
// sobre o sistema tradicional de funções construtoras e protótipos.
// =============================================================================

// Classe simples que representa um registro financeiro:
class Lancamento {
    // O método `constructor` é chamado no momento em que instanciamos `new Lancamento`:
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

// Classe que agrega lançamentos e calcula balanços financeiros:
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] // Array para armazenar as instâncias de Lancamento
    }

    // Método que utiliza o operador REST (...lancamentos) para receber
    // múltiplos lançamentos separados por vírgula e agrupá-los em um array:
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    // Método de agregação e consolidamento de saldo:
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// Criando instâncias de Lancamento:
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220) // Lançamentos de despesa são negativos

// Criando a instância do ciclo financeiro do mês 6 de 2018:
const contas = new CicloFinanceiro(6, 2018)

// Adicionando múltiplos lançamentos de uma só vez:
contas.addLancamentos(salario, contaDeLuz)

// Calculando o saldo consolidado (45000 - 220 = 44780):
console.log(contas.sumario()) // Saída: 44780

// NOTA ARQUITETURAL:
// Métodos declarados dentro do corpo da `class` (como `addLancamentos` e `sumario`)
// são inseridos automaticamente no `CicloFinanceiro.prototype`, sendo compartilhados
// de forma otimizada por todas as instâncias da classe.