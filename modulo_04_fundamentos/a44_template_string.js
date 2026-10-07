// =============================================================================
// TEMPLATE STRINGS (TEMPLATE LITERALS - ES2015 / ES6)
// =============================================================================
// Template Strings são delimitadas por crases (backticks: `` ` ``) e revolucionaram
// a manipulação textual no JavaScript, resolvendo limitações antigas da concatenação.
// Principais vantagens:
// 1. Interpolação direta de variáveis e expressões usando a sintaxe `${expressão}`.
// 2. Suporte nativo a quebras de linha (multiline) sem precisar de caracteres como `\n`.
// =============================================================================

const nome = "Rebeca"

// Forma tradicional (concatenação com operador `+`):
// Tende a ficar confusa e ilegível quando há muitas variáveis e textos intercalados.
const concatenacao = 'Olá ' + nome + '!'

// Usando Template String:
// Note que as quebras de linha reais no editor são preservadas na saída final!
const template = `Olá 
${nome}!`
console.log(template)

// Qualquer expressão JavaScript válida pode ser interpolada dentro de `${}`:
// 1. Operações matemáticas e lógicas:
console.log(`1 + 1 = ${1 + 1}`) // Saída: "1 + 1 = 2"

// 2. Chamadas de funções:
// Definindo uma arrow function que transforma texto em maiúsculas:
const up = s => s.toUpperCase()

// A função é executada imediatamente e seu retorno é inserido na string:
console.log(`Ei... ${up('Cuidado')}!`) // Saída: "Ei... CUIDADO!"