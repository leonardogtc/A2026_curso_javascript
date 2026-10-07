// =============================================================================
// AGREGAÇÃO DE DADOS: O MÉTODO REDUCE - PARTE 1
// =============================================================================
// O método `.reduce()` transforma/agrega um array inteiro em um ÚNICO resultado final.
// Ele funciona através do conceito de um "ACUMULADOR":
// - A função callback recebe o resultado acumulado das iterações anteriores
//   e o elemento atual.
// - O valor que o callback retorna é repassado como o novo "acumulador" da próxima volta.
// =============================================================================

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// 1. Extraindo apenas as notas com .map():
console.log(alunos.map(a => a.nota)) // [ 7.3, 9.2, 9.8, 8.7 ]

// 2. Somando todas as notas com .reduce():
// Passamos o valor inicial 0 como segundo argumento do reduce:
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(`Acumulador: ${acumulador}, Atual: ${atual}`)
    return acumulador + atual // O retorno torna-se o acumulador da próxima iteração
}, 0)

// Passo a passo das iterações:
// Volta 1: Acumulador: 0,   Atual: 7.3 -> Retorna 7.3
// Volta 2: Acumulador: 7.3, Atual: 9.2 -> Retorna 16.5
// Volta 3: Acumulador: 16.5, Atual: 9.8 -> Retorna 26.3
// Volta 4: Acumulador: 26.3, Atual: 8.7 -> Retorna 35.0

console.log('Total das notas:', resultado) // Saída: 35