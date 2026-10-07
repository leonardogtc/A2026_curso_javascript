// =============================================================================
// OPERADORES RELACIONAIS: IGUALDADE, IDENTIDADE E REFERÊNCIA DE MEMÓRIA
// =============================================================================
// Os operadores relacionais comparam dois valores e sempre retornam um booleano (true ou false).
// Um dos maiores pontos de atenção no JavaScript é a diferença entre igualdade (`==`)
// e estrita igualdade (`===`).
// =============================================================================

// 1. IGUALDADE AMPLA / COERCIVA (==) vs ESTRITA IGUALDADE (===):
// O operador `==` compara apenas o VALOR, realizando conversão implícita de tipos se necessário:
console.log('01)', '1' == 1)  // Saída: true (converteu a string '1' para número 1)

// O operador `===` (estritamente igual) compara tanto o VALOR quanto o TIPO:
console.log('02)', '1' === 1) // Saída: false (pois um é string e o outro é number)

// O mesmo vale para a desigualdade:
console.log('03)', '3' != 3)  // Saída: false (os valores são considerados iguais com coerção)
console.log('04)', '3' !== 3) // Saída: true (são estritamente diferentes porque os tipos diferem)

// 2. OPERADORES RELACIONAIS MATEMÁTICOS DE ORDENAÇÃO:
console.log('05)', 3 < 2)  // Saída: false (3 menor que 2)
console.log('06)', 3 > 2)  // Saída: true  (3 maior que 2)
console.log('07)', 3 <= 2) // Saída: false (3 menor ou igual a 2)
console.log('08)', 3 >= 2) // Saída: true  (3 maior ou igual a 2)

// 3. COMPARAÇÃO DE OBJETOS: VALOR VS REFERÊNCIA DE MEMÓRIA
// `new Date(0)` cria a data do Marco Zero UNIX (01/01/1970 00:00:00 UTC):
const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1)
console.log(d2)

// ATENÇÃO: Por que d1 === d2 e d1 == d2 são FALSOS?
// Porque variáveis que guardam objetos armazenam ENDEREÇOS DE MEMÓRIA (referências)!
// Como 'd1' e 'd2' foram alocados em locais de memória distintos pelo operador `new`,
// a comparação de referência sempre avalia como falso:
console.log('09)', d1 === d2) // Saída: false
console.log('10)', d1 == d2)  // Saída: false

// Para comparar se duas datas representam o mesmo instante de tempo,
// comparamos os valores primitivos (milissegundos via .getTime()):
console.log('11)', d1.getTime() === d2.getTime()) // Saída: true (0 === 0)

// 4. COMPARAÇÃO ENTRE NULL E UNDEFINED:
console.log('12)', undefined == null)  // Saída: true (ambos representam ausência de valor na igualdade ampla)
console.log('13)', undefined === null) // Saída: false (possuem tipos primitivos diferentes na estrita igualdade)

// REGRA DE OURO DA ENGENHARIA DE SOFTWARE:
// Sempre utilize operadores estritos (`===` e `!==`) para evitar conversões mágicas e imprevistos!