// =============================================================================
// OBJETO JAVASCRIPT VS JSON (JAVASCRIPT OBJECT NOTATION)
// =============================================================================
// Uma distinção conceitual vital em desenvolvimento de software:
// - Objeto JS: Estrutura viva em memória com dados e COMPORTAMENTOS (funções/métodos).
// - JSON: Formato puramente TEXTUAL e universal para tráfego e armazenamento de DADOS.
// =============================================================================

const obj = { 
    a: 1, 
    b: 2, 
    c: 3, 
    soma() { return this.a + this.b + this.c } 
}

// SERIALIZAÇÃO (JSON.stringify):
// Transforma o objeto JavaScript em uma string no formato JSON.
// ATENÇÃO: As funções/métodos são sumariamente IGNORADOS na conversão,
// pois JSON trafega apenas dados puros e não código executável:
console.log(JSON.stringify(obj)) // Saída: '{"a":1,"b":2,"c":3}' (a função 'soma' sumiu!)

// DESSERIALIZAÇÃO (JSON.parse):
// Converte uma string JSON em um Objeto JavaScript.
//
// REGRAS RÍGIDAS DE SINTAXE DO PADRÃO JSON:
// 1. TODAS as chaves DEVEM estar obrigatoriamente delimitadas por aspas DUPLAS ("...").
// 2. TODAS as strings textuais de valor também DEVEM usar aspas DUPLAS ("...").
// 3. Aspas simples ou chaves sem aspas causam SyntaxError imediato!

// Erros de sintaxe comentados:
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))   // Erro: chaves sem aspas duplas
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // Erro: aspas simples não são aceitas em JSON

// Formato válido:
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Saída: { a: 1, b: 2, c: 3 }

// TIPOS DE DADOS SUPORTADOS PELO JSON:
// Números, strings (com aspas duplas), booleanos (true/false), objetos aninhados ({}), arrays ([]) e null:
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
// Saída: { a: 1.7, b: 'string', c: true, d: {}, e: [] }