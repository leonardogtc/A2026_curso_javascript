// =============================================================================
// PAR NOME/VALOR (KEY/VALUE) E CONTEXTO LÉXICO
// =============================================================================
// Em JavaScript, praticamente tudo se resume a pares Chave/Valor (Identificador/Dado).
// O "Contexto Léxico" refere-se ao local físico no código-fonte onde uma variável
// ou função foi declarada, determinando onde ela é visível e acessível.
// =============================================================================

// Contexto Léxico 1: Escopo do Módulo / Arquivo (nível superior)
const saudacao = "Olá"

function exec() {
    // Contexto Léxico 2: Escopo da Função `exec`
    // Embora tenha o mesmo nome da constante externa, ela pertence a um contexto léxico
    // diferente. Elas coexistem sem conflito:
    const saudacao = "E ai!"
    return saudacao
}

// Objetos são grupos estruturados e aninhados de pares nome (chave) e valor:
const cliente = {
    nome: 'Pedro',     // Chave: 'nome', Valor: 'Pedro'
    idade: 32,         // Chave: 'idade', Valor: 32
    peso: 90,          // Chave: 'peso', Valor: 90
    endereco: {        // O valor desta chave é outro objeto aninhado com seus próprios pares!
        logradouro: 'Rua do Pedro',
        numero: 123
    }
}

console.log(saudacao) // Acessa a variável do Contexto Léxico 1 -> Saída: "Olá"
console.log(exec())     // Executa a função e retorna o valor do Contexto Léxico 2 -> Saída: "E ai!"
console.log(cliente.endereco.logradouro) // Acessando pares aninhados via notação ponto