// =============================================================================
// A CENTRALIDADE DAS FUNÇÕES EM JAVASCRIPT
// =============================================================================
// Se você compreender o papel das Funções em JavaScript, compreenderá quase toda
// a arquitetura da linguagem. No JS, as funções são "Cidadãs de Primeira Classe"
// (First-Class Citizens) e servem de base para a criação de objetos e classes.
// =============================================================================

// `Object` (com 'O' maiúsculo) NÃO é um objeto literal, é uma FUNÇÃO construtora nativa!
// É a função a partir da qual novos objetos são instanciados (`new Object()`).
console.log(typeof Object) // Saída: function

// CLASSES SÃO APENAS "AÇÚCAR SINTÁTICO" (SYNTACTIC SUGAR):
// A palavra-chave `class` foi introduzida no ECMAScript 2015 (ES6) para tornar
// a sintaxe mais familiar para desenvolvedores vindos de Java, C# ou C++.
// Porém, internamente na engine do JavaScript, toda classe é convertida para uma FUNÇÃO
// construtora que utiliza a cadeia de protótipos (prototypal inheritance)!
class Produto {}

console.log(typeof Produto) // Saída: function

// CONCLUSÃO FUNDAMENTAL:
// Em JavaScript, quase tudo deriva de funções. Funções podem ser passadas como parâmetros,
// retornadas por outras funções, armazenadas em variáveis e usadas como moldes (construtores)
// para instanciar novos objetos.
