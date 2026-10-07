// =============================================================================
// ITERAÇÃO COM FOREACH - PARTE 1: SINTAXE E PARÂMETROS
// =============================================================================
// O método `.forEach()` é a forma mais tradicional do paradigma funcional para
// iterar sobre os elementos de um array executando um efeito colateral (side-effect).
//
// PARÂMETROS AUTOMÁTICOS DO CALLBACK:
// A cada repetição, o `.forEach()` invoca sua função callback passando 3 argumentos:
// 1º O elemento atual
// 2º O índice numérico atual
// 3º O próprio array completo que está sendo percorrido
// =============================================================================

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// 1. Passando uma função anônima tradicional consumindo elemento e índice:
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
// Saída:
// 1) Agatha
// 2) Aldo
// 3) Daniel
// 4) Raquel

// 2. Passando uma Arrow Function anônima consumindo apenas o elemento:
aprovados.forEach(nome => console.log(nome))

// 3. Passando uma função nomeada pré-definida:
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// NOTA FUNDAMENTAL DE ARQUITETURA:
// O método `.forEach()` SEMPRE retorna `undefined`!
// Ele NÃO foi feito para transformar ou filtrar dados (para isso existem `.map()` e `.filter()`).
// Use `.forEach()` exclusivamente quando você quiser apenas executar uma ação para cada elemento.