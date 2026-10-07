// =============================================================================
// FUNÇÃO VS OBJETO: INSTANCIAÇÃO COM O OPERADOR NEW
// =============================================================================
// Em linguagens baseadas em classes tradicionais (como Java), o molde é a classe.
// Em JavaScript, tradicionalmente o molde para criar objetos é a FUNÇÃO!
// Quando usamos o operador `new`, instanciamos um novo objeto a partir de uma função.
// =============================================================================

// 1. Função construtora nativa `Object`:
console.log(typeof Object)       // Saída: function (é o molde)
console.log(typeof new Object()) // Saída: object   (é a instância criada a partir do molde)

// 2. Função construtora personalizada:
// Podemos criar nossos próprios moldes de objetos usando funções:
const Cliente = function () { }
console.log(typeof Cliente)      // Saída: function
console.log(typeof new Cliente)  // Saída: object (ao invocar com `new`, gera uma nova instância)

// 3. Classes do ECMAScript 2015 (ES6):
// A palavra reservada `class` é apenas uma forma moderna e elegante de escrever
// uma função construtora.
class Produto {}
console.log(typeof Produto)      // Saída: function (internamente continua sendo uma função!)
console.log(typeof new Produto)  // Saída: object   (instância da classe Produto)

// O QUE O OPERADOR `new` FAZ SOB O CAPÔ?
// 1. Cria um objeto vazio em memória `{}`.
// 2. Conecta o protótipo (`__proto__`) desse novo objeto ao `.prototype` da função construtora.
// 3. Executa a função apontando a palavra-chave `this` para o novo objeto.
// 4. Retorna o objeto recém-criado.