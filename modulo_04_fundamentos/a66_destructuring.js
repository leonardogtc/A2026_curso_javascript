// =============================================================================
// DESESTRUTURAÇÃO DE OBJETOS EM PARÂMETROS DE FUNÇÃO E VALORES PADRÃO
// =============================================================================
// Este exemplo ilustra a evolução do JavaScript:
// De abordagens antigas com operador OU (`||`) para a moderna sintaxe de
// desestruturação com valores padrão nos parâmetros (ES2015 / ES6).
// =============================================================================

// 1. FORMA ANTIGA (Pré-ES6):
// Usava o operador lógico `||` para atribuir fallbacks caso o argumento fosse falsy.
// PROBLEMA TÉCNICO: Se alguém passasse legitimamente o número 0, como 0 é "falsy",
// a variável assumiria incorretamente o valor padrão 1!
function randAntigo(min, max) {
    min = min || 1;
    max = max || 1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obj = {
    min: 1,
    max: 100
};

// 2. FORMA MODERNA (ES6 com Destructuring):
// A função recebe um objeto e desestrutura `min` e `max` diretamente no parâmetro.
//
// ENTENDA A SINTAXE `{ min = 1, max = 100 } = {}`:
// - `{ min = 1, max = 100 }`: Define fallbacks para as PROPRIEDADES caso não existam no objeto passado.
// - `= {}`: Define um OBJETO VAZIO PADRÃO para o argumento como um todo!
//   Isso é vital: sem o `= {}`, se chamarmos `rand()` sem parâmetros, o interpretador tentará
//   desestruturar `undefined`, disparando um erro fatal (`TypeError`).
function rand({ min = 1, max = 100 } = {}) {
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

// Testando com diferentes chamadas:
console.log(rand(obj));      // Passando objeto completo { min: 1, max: 100 }
console.log(rand({ min: 955 })); // Passando apenas 'min'; 'max' assume o padrão 100
console.log(rand({}));       // Passando objeto vazio: usa min = 1 e max = 100
console.log(rand());         // Chamando sem argumentos: o `= {}` entra em ação e evita quebrar o código!