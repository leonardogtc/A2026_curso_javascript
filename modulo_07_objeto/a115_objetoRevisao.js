// =============================================================================
// REVISÃO SOBRE OBJETOS: COLEÇÕES DINÂMICAS DE CHAVE/VALOR
// =============================================================================
// Em JavaScript, um Objeto é uma coleção dinâmica de pares Chave/Valor.
// Propriedades e métodos podem ser criados, alterados ou removidos
// a qualquer momento durante a execução do programa.
// =============================================================================

// 1. Criação de objeto com a função construtora `new Object`:
const produto = new Object

// Adicionando propriedades via Notação Ponto:
produto.nome = 'Cadeira'

// Adicionando propriedades via Notação de Colchetes:
// Essencial para nomes de chave com espaços ou caracteres especiais:
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// O operador `delete` remove completamente a chave e o valor do objeto:
delete produto.preco
delete produto['marca do produto']
console.log(produto) // Restou apenas { nome: 'Cadeira' }

console.log('---------------------------------')

// 2. Criação literal de estruturas complexas e aninhadas:
// Objetos podem conter outros objetos, arrays e funções (métodos):
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // Regra de cálculo do seguro...
    }
}

// Alterando propriedades em objetos aninhados:
// Forma 1: Usando Notação Ponto encadeada:
carro.proprietario.endereco.numero = 1000

// Forma 2: Usando Notação de Colchetes encadeada:
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// Deletando propriedades e métodos aninhados:
// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

// Acessando propriedades existentes:
console.log(carro.condutores)        // Array com os condutores
console.log(carro.condutores.length) // Saída: 2

// CUIDADO COM PROPRIEDADES INDEFINIDAS:
// Se tentarmos acessar `carro.proprietario.endereco.numero`, como `endereco`
// foi deletado anteriormente, `carro.proprietario.endereco` é `undefined`.
// Tentar ler `.numero` em `undefined` disparará `TypeError: Cannot read properties of undefined`!