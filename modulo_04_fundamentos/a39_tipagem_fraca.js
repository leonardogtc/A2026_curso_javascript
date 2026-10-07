// =============================================================================
// TIPAGEM DINÂMICA E TIPAGEM FRACA NO JAVASCRIPT
// =============================================================================
// JavaScript é uma linguagem de:
// 1. Tipagem Dinâmica: O tipo é vinculado ao VALOR e não à variável.
//    A mesma variável pode receber tipos diferentes durante o ciclo de vida.
// 2. Tipagem Fraca: Permite conversões automáticas (coerção implícita) entre
//    tipos diferentes sem acusar erro imediatamente (ex: somar texto com número).
//
// O operador `typeof` serve para inspecionar em tempo de execução o tipo do dado.
// =============================================================================

// Inicialmente, a variável armazena uma String (texto):
let qualquer = 'legal';
console.log(qualquer)
console.log(typeof qualquer) // Saída: string
console.log("------------")

// A mesma variável agora recebe um Number (ponto flutuante / decimal):
qualquer = 3.14151619;
console.log(qualquer)
console.log(typeof qualquer) // Saída: number
console.log("------------")

// No JavaScript, não existe tipo separado para inteiros (int) e decimais (float):
// Ambos são tratados primitivamente como o tipo `number` (IEEE 754 de 64 bits):
qualquer = 3;
console.log(qualquer)
console.log(typeof qualquer) // Saída: number
console.log("------------")

// Agora a variável recebe um Booleano (true ou false):
qualquer = false;
console.log(qualquer)
console.log(typeof qualquer) // Saída: boolean

// DICA DE ENGENHARIA DE SOFTWARE:
// Embora a flexibilidade da tipagem dinâmica seja poderosa, variáveis que mudam
// de tipo constantemente dificultam a manutenção. No desenvolvimento profissional,
// utilize nomes claros e significativos (evite nomes genéricos como 'qualquer', 'valor', 'dado')
// e mantenha a consistência do tipo que aquela variável foi criada para representar.