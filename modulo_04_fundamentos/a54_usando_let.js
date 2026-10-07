// =============================================================================
// ESCOPO DE BLOCO COM LET (ES2015 / ES6)
// =============================================================================
// Variáveis declaradas com `let` possuem três níveis de escopo:
// 1. Escopo Global
// 2. Escopo de Função
// 3. Escopo de Bloco (qualquer par de chaves `{ ... }`)
// =============================================================================

let numero = 1 // Variável no escopo externo

{
    // O `let` respeita este bloco `{}` e cria um novo contexto independente.
    // Aqui ocorre o chamado "Shadowing" (sombreamento): a variável interna
    // coexiste com a externa sem colidir e sem sobrescrever a de fora:
    let numero = 2
    console.log('Dentro = ', numero) // Saída: 2 (pega a variável do escopo local mais próximo)
}

// Ao sair do bloco, a variável interna deixa de existir no registro de ativação.
// A variável externa permanece intacta:
console.log('Fora = ', numero) // Saída: 1

// MECANISMO DE BUSCA (SCOPE CHAIN):
// O JavaScript sempre procura a variável primeiro no escopo mais interno (local).
// Se não encontrar, ele sobe progressivamente pelos escopos pais até o escopo global.
// Se ainda assim não encontrar, dispara `ReferenceError`.