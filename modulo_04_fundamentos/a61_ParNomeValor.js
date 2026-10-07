const saudacao = "Olá"  // Contexto lexico 1

function exec() {
    const saudacao = "E ai!"    // Contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de nome e valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua do Pedro',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())