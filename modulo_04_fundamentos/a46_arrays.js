// =============================================================================
// ARRAYS EM JAVASCRIPT (VETORES)
// =============================================================================
// No JavaScript, Arrays são estruturas indexadas (base 0), de tamanho dinâmico
// e heterogêneas (permitem armazenar múltiplos tipos de dados diferentes no mesmo array).
// Sob o capô da V8, um Array em JS é na verdade um tipo especial de Objeto.
// =============================================================================

// Criação literal de um array:
const valores = [2.3, 4.7, 7.7, 9.8]

// Acesso por índice numérico:
console.log(valores[0], valores[3]) // Saída: 2.3 9.8

// Acessar uma posição que não existe NÃO gera erro em JavaScript:
// O interpretador simplesmente retorna `undefined`.
console.log(valores[5]) // Saída: undefined

// Adicionando um elemento em uma posição específica:
valores[4] = 10.1
console.log(valores)
// A propriedade .length informa a quantidade de posições no array:
console.log(valores.length) // Saída: 5

// MÉTODO .push():
// Adiciona um ou mais elementos no final do array.
// Note que o JS permite misturar tipos (objeto, booleano, null, string):
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// MÉTODO .pop():
// Remove o ÚLTIMO elemento do array e o retorna:
console.log(valores.pop()) // Removeu e imprimiu 'teste'

// OPERADOR delete:
// O operador `delete` remove o conteúdo daquela posição, mas NÃO reordena o array!
// A posição 0 passa a conter um espaço vazio (`<empty item>` / `undefined`):
delete valores[0]

// Em JavaScript, todo array é formalmente do tipo 'object':
console.log(typeof valores) // Saída: object
console.log(valores)

// BOAS PRÁTICAS:
// 1. Embora o JS permita misturar tipos diferentes num mesmo array, na prática
//    mantenha sempre arrays homogêneos (ex: apenas números, apenas objetos de clientes, etc.).
// 2. Para remover elementos ajustando os índices corretamente, use `.splice()` em vez de `delete`.
// 3. Para checar se uma variável é de fato um array, prefira `Array.isArray(valores)`.
