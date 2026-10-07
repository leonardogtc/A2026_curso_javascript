// =============================================================================
// OS CONCEITOS DE NULL E UNDEFINED (E ATRIBUIÇÃO POR REFERÊNCIA)
// =============================================================================
// Entender a diferença entre null e undefined é crucial no JavaScript:
// - `undefined`: A variável foi declarada, mas NUNCA foi inicializada com valor.
//   É o padrão gerado automaticamente pela própria engine do JavaScript.
// - `null`: Ausência INTENCIONAL de valor. O programador atribuiu explicitamente
//   para indicar que a variável está vazia ou não aponta para nenhum objeto na memória.
// =============================================================================

// Variável declarada, mas sem atribuição:
let valor
console.log(valor) // Saída: undefined (indica que não foi inicializada)

// Atribuindo explicitamente ausência de endereço de memória / objeto:
valor = null
console.log(valor) // Saída: null

// CUIDADO: TENTATIVA DE ACESSO A PROPRIEDADES DE NULL / UNDEFINED
// Como null e undefined não possuem protótipo nem propriedades, tentar invocar
// qualquer método ou propriedade neles causa erro fatal que quebra o código:
// console.log(valor.toString()) // TypeError: Cannot read properties of null (reading 'toString')

const produto = {}
// Acessar uma propriedade inexistente em um objeto existente retorna undefined:
console.log(produto.preco) // Saída: undefined
console.log(produto)       // Saída: {} (objeto vazio)

// Definindo a propriedade:
produto.preco = 3.50
console.log(produto)       // Saída: { preco: 3.5 }

// REGRA PRÁTICA:
// 1. Evite atribuir `undefined` manualmente; deixe o motor do JS lidar com ele.
// 2. Se precisar resetar uma variável de referência ou indicar vazio intencional, use `null`.
// 3. No JS moderno (ES2020), use o operador de Encadeamento Opcional (Optional Chaining `?.`)
//    para ler propriedades sem medo de quebrar se o pai for null/undefined (ex: `produto?.preco`).
