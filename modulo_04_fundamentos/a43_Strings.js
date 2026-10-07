// =============================================================================
// MANIPULAÇÃO DE STRINGS (CADEIAS DE CARACTERES)
// =============================================================================
// Strings são tipos primitivos imutáveis em JavaScript indexados a partir de 0.
// Ao chamar métodos como .replace() ou .substring(), a string original NÃO é
// alterada; uma nova string resultante é retornada.
// =============================================================================

const escola = "Leonardo" // Índices: 0:'L', 1:'e', 2:'o', 3:'n', 4:'a', 5:'r', 6:'d', 7:'o'

// charAt(indice): Retorna o caractere localizado na posição indicada (base 0).
console.log(escola.charAt(4)) // Saída: 'a'
console.log(escola.charAt(5)) // Saída: 'r'
console.log(typeof escola.charAt(5)) // Saída: string (no JS não existe tipo 'char' isolado)

// charCodeAt(indice): Retorna o código numérico do caractere na tabela Unicode/ASCII.
console.log(escola.charCodeAt(0)) // Saída: 76 (código ASCII da letra maiúscula 'L')

// indexOf(valor): Retorna a posição/índice da primeira ocorrência.
// Se não encontrar o caractere procurado, retorna -1.
console.log(escola.indexOf(3)) // Saída: -1 (o caractere '3' não existe em "Leonardo")

// substring(inicio, fim): Extrai um trecho da string.
// Sem segundo parâmetro: vai do índice especificado até o final da string.
console.log(escola.substring(1)) // Saída: "eonardo" (do índice 1 em diante)
// Com índice final: extrai a partir do índice inicial até o índice final (SEM incluí-lo).
console.log(escola.substring(0, 3)) // Saída: "Leo" (índices 0, 1 e 2)

// concat(): Concatena strings (embora o operador `+` ou Template Strings sejam mais comuns no dia a dia).
console.log('Escola: '.concat(escola).concat("!")) // Saída: "Escola: Leonardo!"

// Coerção com o operador `+`:
// Quando há ao menos uma string na operação de soma, o JS prioriza a concatenação textual:
console.log("2" + 3) // Saída: "23" (string) e não 5!

// replace(antigo, novo): Substitui caracteres.
console.log(escola.replace('L', 'x')) // Saída: "xeonardo"

// Uso de Expressões Regulares (RegEx) com replace:
// `/\d/` encontra o primeiro dígito numérico:
console.log("Cod3r".replace(/\d/, 'e')) // Saída: "Coder"

// `/\w/g` encontra qualquer caractere alfanumérico; a flag 'g' (global) substitui todas as ocorrências:
console.log("Elite".replace(/\w/g, 'e')) // Saída: "eeeee"

// split(separador): Quebra a string em partes e as agrupa em um Array:
console.log("Leonardo, Ivonete, Lúcia, Oliver".split(',')) 
// Saída: [ 'Leonardo', ' Ivonete', ' Lúcia', ' Oliver' ]