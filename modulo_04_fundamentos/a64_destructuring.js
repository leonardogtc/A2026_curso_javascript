// Recurso introduzido no ES2015
const pessoa = {
    nome: 'Ana',
    idade: 29,
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { rua, numero } } = pessoa
console.log(rua, numero)

