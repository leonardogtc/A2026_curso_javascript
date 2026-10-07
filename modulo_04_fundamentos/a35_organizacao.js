// =============================================================================
// ESTRUTURA BÁSICA E ORGANIZAÇÃO DE CÓDIGO EM JAVASCRIPT
// =============================================================================
// O JavaScript é organizado fundamentalmente em duas estruturas visuais e lógicas:
// 1. Sentenças de código (declarações/expressões)
// 2. Blocos de código (agrupamentos delimitados por chaves `{}`)
// =============================================================================

// Sentença de código: Uma instrução que realiza uma ação no programa.
// No JavaScript, o ponto e vírgula (;) no final da sentença é opcional na maioria
// dos casos graças ao mecanismo ASI (Automatic Semicolon Insertion) do interpretador,
// mas a convenção varia de acordo com o estilo do projeto/equipe.
console.log("Sentença de Código");

// Blocos de código: Agrupam uma ou mais sentenças de código.
// São delimitados por um par de chaves `{ ... }`.
// Blocos podem ser aninhados (um dentro do outro) e definem escopos de execução
// quando usados com certas estruturas (como funções, estruturas de controle, ou `let`/`const`).
{
    {
        console.log("Olá");
        console.log("Mundo!"); // Cada console.log é uma sentença de código individual
    }
}