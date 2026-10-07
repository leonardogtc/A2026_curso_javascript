// =============================================================================
// OPERADOR DE DESESTRUTURAÇÃO (DESTRUCTURING) COM OBJETOS - ES2015 / ES6
// =============================================================================
// O operador de desestruturação permite extrair valores de propriedades de dentro
// de um objeto e atribuí-los a variáveis independentes de maneira concisa e elegante,
// eliminando a necessidade de repetições como `const nome = pessoa.nome`.
// =============================================================================

const pessoa = {
    nome: 'Ana',
    idade: 29,
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
}

// 1. Extração básica por correspondência de chaves:
// As chaves `{ nome, idade }` indicam: "tire do objeto `pessoa` os atributos com esses nomes".
const { nome, idade } = pessoa
console.log(nome, idade) // Saída: Ana 29

// 2. Renomeando variáveis durante a desestruturação:
// Sintaxe `{ chaveOriginal: novoNomeDaVariavel }`.
// Muito útil para evitar colisões com variáveis já existentes no mesmo escopo:
const { nome: n, idade: i } = pessoa
console.log(n, i) // Saída: Ana 29

// 3. Desestruturação de Objetos Aninhados:
// Podemos descer na hierarquia para extrair propriedades internas diretamente:
// ATENÇÃO: A variável intermediária `endereco` NÃO é criada aqui; apenas `rua` e `numero` viram variáveis:
const { endereco: { rua, numero } } = pessoa
console.log(rua, numero) // Saída: Rua A 123

// CUIDADO IMPORTANTE COM DESESTRUTURAÇÃO ANINHADA:
// Para desestruturar propriedades filhas, o objeto pai precisa existir!
// Se tentássemos `{ conta: { agencia, num } } = pessoa`, como `conta` é undefined,
// o JavaScript dispararia `TypeError: Cannot read properties of undefined`.
