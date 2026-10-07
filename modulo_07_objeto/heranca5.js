// =============================================================================
// HERANÇA EM JAVASCRIPT - PARTE 5: EXTENSÃO DE TIPOS NATIVOS E SEUS PERIGOS
// =============================================================================
// Como `String`, `Array` e `Object` são funções construtoras nativas,
// nós podemos estender suas capacidades adicionando novos métodos diretamente
// aos seus protótipos (`.prototype`).
// =============================================================================

console.log(typeof String) // Saída: function
console.log(typeof Array)  // Saída: function
console.log(typeof Object) // Saída: function

// 1. ADICIONANDO UM NOVO MÉTODO AO PROTÓTIPO DE STRING:
// O método `.reverse()` não existe nativamente para strings:
String.prototype.reverse = function () {
    // Quebra em array de caracteres, inverte a ordem do array e junta tudo de volta:
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) // Saída: "r3doC alocsE"

// 2. ADICIONANDO UM NOVO MÉTODO AO PROTÓTIPO DE ARRAY:
Array.prototype.first = function () {
    return this[0] // Retorna o primeiro elemento do array
}

console.log([1, 2, 3, 4, 5].first()) // Saída: 1
console.log(['a', 'b', 'c'].first()) // Saída: 'a'

// =============================================================================
// CUIDADO EXTREMO: NUNCA SOBRESCREVA MÉTODOS NATIVOS EXISTENTES!
// =============================================================================
// Modificar o comportamento de métodos padrão como `.toString()`, `.map()`, `.push()`
// quebra dependências globais de bibliotecas e do próprio ambiente de execução:
String.prototype.toString = function () {
    return 'Lascou tudo'
}

// Ao chamar `.reverse()`, que internamente depende da representação textual da string,
// o resultado agora é bizarro e inesperado:
console.log('Escola Cod3r'.reverse()) // Saída: "odut uocsaL" (inverteu a string "Lascou tudo"!)