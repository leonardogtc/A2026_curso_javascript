// =============================================================================
// ESTRATÉGIAS PARA CRIAÇÃO DE OBJETOS EM JAVASCRIPT
// =============================================================================
// O JavaScript oferece múltiplos caminhos para instanciar objetos, cada um com
// características próprias de encapsulamento, herança e flexibilidade.
// =============================================================================

// 1. NOTAÇÃO LITERAL:
// A forma mais comum, rápida e direta no dia a dia:
const obj1 = {}
console.log(obj1)

// 2. FUNÇÃO CONSTRUTORA NATIVA (Object):
// `Object` é uma função construtora nativa da linguagem:
console.log(typeof Object, typeof new Object) // Saída: function object
const obj2 = new Object
console.log(obj2)

// 3. FUNÇÕES CONSTRUTORAS PERSONALIZADAS:
// Permite membros públicos (com `this`) e membros privados (com parâmetros/let):
function Produto(nome, preco, desc) {
    this.nome = nome // Atributo público (visível externamente)
    
    // Método público que acessa `preco` e `desc` (privados) por Closure:
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4. FUNÇÃO FACTORY (PADRÃO FÁBRICA):
// Função que retorna um novo objeto literal a cada chamada:
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// 5. Object.create():
// Cria um novo objeto permitindo especificar diretamente o seu protótipo.
// Ao passar `null`, o objeto criado NÃO herda nem mesmo os métodos de `Object.prototype`:
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // [Object: null prototype] { nome: 'Ana' }

// 6. DESSERIALIZAÇÃO DE DADOS VIA JSON.parse():
// Converte uma string no padrão JSON em um objeto JavaScript vivo na memória:
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // Saída: "Sou um JSON"