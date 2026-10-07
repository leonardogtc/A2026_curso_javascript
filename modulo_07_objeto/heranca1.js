// =============================================================================
// HERANÇA EM JAVASCRIPT - PARTE 1: O CONCEITO DE PROTÓTIPO (__PROTO__)
// =============================================================================
// Em JavaScript, a herança NÃO é baseada em classes tradicionais, mas sim em
// PROTÓTIPOS (Prototypal Inheritance).
//
// CONCEITO CENTRAL:
// Todo objeto possui uma referência oculta para outro objeto ancestral chamado de
// seu protótipo. Quando tentamos acessar uma propriedade em um objeto que ele não
// possui, a engine procura automaticamente no seu protótipo (e nos protótipos do protótipo).
// =============================================================================

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// 1. A PROPRIEDADE .prototype PERTENCE APENAS A FUNÇÕES:
// Um objeto comum NÃO possui `.prototype`:
console.log(ferrari.prototype) // Saída: undefined

// 2. A PROPRIEDADE `__proto__` APONTA PARA O PROTÓTIPO DO OBJETO:
// Todo objeto criado de forma literal `{}` aponta por padrão para `Object.prototype`:
console.log(ferrari.__proto__)                        // Exibe o objeto protótipo padrão
console.log(ferrari.__proto__ === Object.prototype)  // Saída: true
console.log(volvo.__proto__ === Object.prototype)    // Saída: true

// 3. O TOPO DA CADEIA DE PROTÓTIPOS:
// `Object.prototype` é o ancestral máximo em JavaScript; ele próprio não possui protótipo:
console.log(Object.prototype.__proto__ === null)     // Saída: true

// 4. FUNÇÕES POSSUEM TANTO `__proto__` QUANTO `prototype`:
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)         // Saída: function function
console.log(Object.prototype, MeuObjeto.prototype)   // Ambos possuem um objeto `.prototype`

// DISTINÇÃO IMPORTANTE:
// - `__proto__`: Propriedade de instâncias/objetos que aponta para quem ele herdou.
// - `.prototype`: Propriedade exclusiva de FUNÇÕES que define o molde para novas instâncias criadas com `new`.