// =============================================================================
// COMENTÁRIOS DE CÓDIGO EM JAVASCRIPT
// =============================================================================
// Comentários são ignorados pela engine (como V8 no Node/Chrome) durante a
// execução e interpretação do código. Servem para documentar, explicar raciocínios
// complexos e guiar outros desenvolvedores (ou a si mesmo no futuro).
// =============================================================================

// 1. Comentário de uma única linha:
// Tudo o que vier após as duas barras inclinadas (//) nesta linha será ignorado.
console.log("Linha 01")

/* 
    2. Comentário de múltiplas linhas (ou em bloco):
    Tudo o que estiver entre a abertura `/*` e o fechamento `* /` será ignorado,
    permitindo que você escreva parágrafos explicativos maiores.
*/
console.log("Linha 02")

// DICA DE BOA PRÁTICA:
// Em sistemas reais de produção, priorize código limpo e legível (nomes claros de
// variáveis e funções). Comente os "porquês" (decisões arquiteturais e regras de negócio)
// e não o "o quê" (o que o próprio código já deixa óbvio).