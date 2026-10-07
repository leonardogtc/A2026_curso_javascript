// =============================================================================
// O TIPO BOOLEAN E OS CONCEITOS DE "TRUTHY" E "FALSY"
// =============================================================================
// No JavaScript, além dos literais primitivos booleanos `true` e `false`,
// qualquer valor pode ser convertido e interpretado logicamente como verdadeiro
// ("truthy") ou falso ("falsy") dentro de contextos condicionais.
// =============================================================================

let isAtivo = false
console.log(isAtivo) // Saída: false

isAtivo = true
console.log(isAtivo) // Saída: true

// OPERADOR DE DUPLA NEGAÇÃO (!!):
// A exclamação simples (!) inverte a lógica do valor e o converte para booleano.
// A dupla exclamação (!!) inverte de volta, servindo como uma forma prática
// e idiomática de forçar a conversão de qualquer tipo para seu booleano correspondente.
isAtivo = 1
console.log(!!isAtivo) // 1 vira true

console.log("Valores que resolvem para VERDADEIRO (Truthy):")
console.log(!!3)                  // Qualquer número inteiro positivo (diferente de 0)
console.log(!!-1)                 // Qualquer número negativo
console.log(!!' ')                // Strings com pelo menos um caractere (inclusive espaço vazio)
console.log(!![])                 // Arrays (mesmo vazios!) são objetos na memória
console.log(!!{})                 // Objetos (mesmo vazios!) são referências válidas
console.log(!!Infinity)           // O valor especial Infinity
console.log(!!(isAtivo = true))   // O resultado de uma atribuição é o próprio valor atribuído

console.log("\nValores que resolvem para FALSO (Falsy):")
console.log(!!0)                  // O número zero é falsy
console.log(!!'')                 // String vazia (sem nenhum caractere ou espaço)
console.log(!!null)               // A ausência intencional de objeto
console.log(!!NaN)                // Not a Number
console.log(!!undefined)          // Variável declarada mas não inicializada
console.log(!!(isAtivo = false))  // O resultado da atribuição aqui é false

// APLICAÇÃO PRÁTICA: OPERADOR LÓGICO OU (||) COMO VALOR PADRÃO (FALLBACK)
// O operador `||` avalia da esquerda para a direita e retorna o PRIMEIRO valor truthy
// que encontrar. Se a variável 'nome' for uma string vazia (falsy), ele avalia e retorna 'Desconhecido':
let nome = ''
console.log(nome || 'Desconhecido') // Saída: "Desconhecido"

// NOTA MODERNA (ES2020):
// Modernamente, para verificar estritamente `null` ou `undefined` sem tratar strings vazias
// ou o número zero como falsos, utiliza-se o Operador de Coalescência Nula (??):
// Exemplo: `nome ?? 'Desconhecido'`
