// =============================================================================
// DESAFIO: CONVERTENDO UMA CLASSE PARA FUNÇÃO CONSTRUTORA
// =============================================================================
// Este exercício demonstra a equivalência entre a sintaxe moderna de `class` (ES6)
// e a abordagem clássica de Funções Construtoras em JavaScript.
// =============================================================================

// Função Construtora que atua como molde do objeto:
// (Por convenção da comunidade, funções construtoras iniciam com letra MAIÚSCULA - PascalCase)
function Pessoa(nome) {
    // Propriedade pública vinculada à instância via `this`:
    this.nome = nome
    
    // Método público associado diretamente à instância:
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// Instanciando o objeto com o operador `new`:
const p1 = new Pessoa('João')

p1.falar()           // Executa o método -> Saída: "Meu nome é João"
console.log(p1.nome) // Acessa o atributo público -> Saída: "João"

// DICA DE OTIMIZAÇÃO DE MEMÓRIA (PROTOTYPE):
// Se você instanciar 1.000 pessoas, definir o método dentro da função (`this.falar = ...`)
// criará 1.000 cópias da mesma função na memória.
// Para compartilhar uma única função entre todas as instâncias, utilize o protótipo:
// Pessoa.prototype.falar = function() { console.log(`Meu nome é ${this.nome}`) }