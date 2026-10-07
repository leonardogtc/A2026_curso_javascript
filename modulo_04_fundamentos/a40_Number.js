// =============================================================================
// O TIPO NUMBER E MÉTODOS ÚTEIS
// =============================================================================
// No JavaScript, todos os números pertencem ao tipo primitivo `number`
// (padrão de precisão dupla de 64 bits - IEEE 754).
// A função global `Number` serve tanto como função de conversão (casting)
// quanto como objeto que expõe constantes e métodos utilitários.
// =============================================================================

const peso1 = 1.0
// Usando a função Number para converter uma string com valor numérico em number:
const peso2 = Number('2.0')

console.log(typeof(peso1)) // Saída: number
console.log(typeof(peso2)) // Saída: number

console.log(peso1, peso2) // Saída: 1 2

// Number.isInteger() verifica se o valor numérico é inteiro.
// Observe que 1.0 e 2.0 são inteiros para o JS, pois a parte fracionária é zero:
console.log(Number.isInteger(peso1)) // Saída: true
console.log(Number.isInteger(peso2)) // Saída: true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

// Cálculo de média ponderada (atenção à precedência matemática dos operadores):
const total = avaliacao1 * peso1 + avaliacao2 + peso2
const media = total / (peso1 + peso2)

// toFixed(n): Formata o número com a quantidade 'n' de casas decimais desejadas.
// IMPORTANTE: toFixed() retorna uma STRING e não altera o valor numérico original!
console.log(media.toFixed(2)) // Ex: 6.25 (formato string)
console.log(typeof(media))     // Saída: number (o valor original 'media' continua numérico)
console.log(media)             // Exibe o número com sua precisão real completa

// DICA EXTRA:
// media.toString(2) -> Converte o valor para sua representação em binário!
// media.toString()  -> Converte para string decimal comum.
