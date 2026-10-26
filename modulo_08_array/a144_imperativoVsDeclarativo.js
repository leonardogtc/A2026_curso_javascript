// =============================================================================
// PARADIGMAS: PROGRAMAÇÃO IMPERATIVA VS PROGRAMAÇÃO DECLARATIVA
// =============================================================================
// Um dos maiores divisores de águas no desenvolvimento moderno de software:
// - Imperativo: Foco em "COMO FAZER" (instruções passo a passo, controle de índices, estado mutável).
// - Declarativo: Foco em "O QUE FAZER" (expressar a intenção, funções puras e reutilizáveis).
// =============================================================================

const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// -----------------------------------------------------------------------------
// 1. ABORDAGEM IMPERATIVA:
// -----------------------------------------------------------------------------
// O desenvolvedor ensina o computador detalhe por detalhe:
// inicializa variável contadora, controla índice `i`, incrementa `i++`, acumula manualmente.
// É mais verboso e menos reutilizável:
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log('Média (Imperativo):', total1 / alunos.length) // Saída: 8.55

// -----------------------------------------------------------------------------
// 2. ABORDAGEM DECLARATIVA (FUNCIONAL):
// -----------------------------------------------------------------------------
// Isolamos pequenas funções puras que descrevem a intenção do domínio:
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

// Encadeamos as operações com clareza: extrair notas com .map() e somar com .reduce():
const total2 = alunos.map(getNota).reduce(soma)
console.log('Média (Declarativo):', total2 / alunos.length) // Saída: 8.55

// VANTAGENS DO CÓDIGO DECLARATIVO:
// 1. Reutilização: as funções `getNota` e `soma` podem ser usadas em diversos outros locais do sistema.
// 2. Testabilidade: funções puras sem efeitos colaterais são triviais de testar com testes unitários.
// 3. Legibilidade: você lê a intenção do código quase como linguagem natural (como uma consulta SQL: `SELECT AVG(nota) FROM alunos`).