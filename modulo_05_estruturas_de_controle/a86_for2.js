// =============================================================================
// ESTRUTURAS DE CONTROLE: LAÇO FOR...IN
// =============================================================================
// O laço `for...in` foi projetado para iterar sobre as propriedades enumeráveis
// (chaves/índices) de um objeto ou array.
// =============================================================================

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// 1. FOR...IN APLICADO A ARRAYS:
// ATENÇÃO: O `for...in` não percorre os valores diretamente!
// A variável `i` recebe os ÍNDICES (posições '0', '1', '2'...) em formato de string.
// Para ler o valor do elemento, usamos a notação indexada: `notas[i]`:
for (let i in notas) {
    console.log(i, notas[i]) // Saída: 0 6.7, 1 7.4, etc.
}

// 2. FOR...IN APLICADO A OBJETOS LITERAIS:
// Este é o caso de uso principal e ideal do `for...in`!
// Ele itera sobre cada CHAVE / ATRIBUTO do objeto:
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    // NOTAÇÃO DE COLCHETES:
    // Como o nome da propriedade está guardado em uma variável dinâmica (`atributo`),
    // precisamos usar `pessoa[atributo]`. A notação ponto (`pessoa.atributo`) não funcionaria,
    // pois procuraria literalmente uma chave chamada 'atributo':
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// BOAS PRÁTICAS MODERNAS:
// 1. Sempre declare a variável de controle com `let` (ex: `let atributo in pessoa`)
//    para evitar que ela vaze para o escopo global.
// 2. Para arrays no JavaScript moderno, prefira o `for...of` (que percorre os VALORES diretamente)
//    ou funções de alta ordem (como `.forEach()`, `.map()`, `.filter()`).