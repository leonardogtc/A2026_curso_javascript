// =============================================================================
// HERANÇA EM JAVASCRIPT - PARTE 4: FUNÇÕES CONSTRUTORAS E PROTOTYPE
// =============================================================================
// Análise aprofundada de como instâncias criadas com `new` conectam-se ao `.prototype`
// da sua função construtora e a cadeia hierárquica global da linguagem.
// =============================================================================

function MeuObjeto() {}
console.log(MeuObjeto.prototype) // Objeto vazio inicial {}

// Instanciando dois objetos a partir do mesmo molde:
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Todas as instâncias criadas a partir da mesma função construtora compartilham o MESMO protótipo:
console.log(obj1.__proto__ === obj2.__proto__)          // Saída: true
console.log(MeuObjeto.prototype === obj1.__proto__)      // Saída: true

// COMPARTILHAMENTO DE ATRIBUTOS E MÉTODOS VIA PROTÓTIPO:
// Ao adicionar membros a `MeuObjeto.prototype`, todas as instâncias ganham acesso instantaneamente:
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

// obj1 não possui atributo 'nome' próprio, então busca no protótipo ('Anônimo'):
obj1.falar() // Saída: "Bom dia! Meu nome é Anônimo!"

// obj2 define seu próprio atributo 'nome', que sombreia o 'Anônimo' do protótipo:
obj2.nome = 'Rafael'
obj2.falar() // Saída: "Bom dia! Meu nome é Rafael!"

// Conectando manualmente o protótipo de um objeto literal:
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // Saída: "Bom dia! Meu nome é Obj3!"

console.log('---------------------------------')
// =============================================================================
// RESUMINDO A CADEIA COMPLETA DE PROTÓTIPOS DO JAVASCRIPT:
// =============================================================================
// 1. Uma instância tem como protótipo o prototype da sua função construtora:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true

// 2. A própria função construtora é uma função e herda de Function.prototype:
console.log(MeuObjeto.__proto__ === Function.prototype)         // true

// 3. Function.prototype é um objeto e herda de Object.prototype:
console.log(Function.prototype.__proto__ === Object.prototype)  // true

// 4. O topo absoluto da cadeia é nulo (não tem protótipo):
console.log(Object.prototype.__proto__ === null)                // true