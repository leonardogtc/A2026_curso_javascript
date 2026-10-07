// =============================================================================
// PADRÃO DE PROJETO: FUNÇÃO FACTORY (FÁBRICA) - PARTE 1
// =============================================================================
// Uma "Função Factory" é uma função simples que tem como único propósito
// "fabricar" e retornar um novo objeto literal a cada invocação.
// =============================================================================

// Factory Simples (sem parâmetros):
function criarPessoa() {
    // Retorna uma nova instância de objeto em memória a cada chamada:
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

// Invocação:
console.log(criarPessoa()) // Saída: { nome: 'Ana', sobrenome: 'Silva' }

// POR QUE USAR FACTORIES?
// 1. Evita duplicação de código ao instanciar múltiplos objetos com a mesma estrutura.
// 2. Não exige o uso do operador `new` (menos chances de erros de contexto de invocação).
// 3. Facilita o encapsulamento e a criação de atributos privados através de closures.