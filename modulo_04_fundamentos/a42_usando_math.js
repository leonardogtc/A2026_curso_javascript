// =============================================================================
// O OBJETO NATIVO MATH
// =============================================================================
// `Math` é um objeto global embutido no JavaScript que disponibiliza constantes
// e métodos para operações matemáticas e trigonométricas avançadas.
// Diferente de `Number` ou `Date`, `Math` NÃO é uma função construtora
// (não se usa `new Math()`).
// =============================================================================

const raio = 5.6;

// Math.PI: Constante com o valor aproximado do número Pi (~3.141592653589793).
// Math.pow(base, expoente): Calcula a base elevada à potência do expoente.
const area = Math.PI * Math.pow(raio, 2)

console.log(area) // Saída: ~98.5203456165759

// Curiosidade: Math é um objeto e não uma função/classe:
console.log(typeof Math) // Saída: object

// EVOLUÇÃO DO ECMASCRIPT (ES2016 / ES7):
// Foi introduzido o operador aritmético de exponenciação `**`.
// Logo, `Math.pow(raio, 2)` também pode ser escrito modernamente como: `raio ** 2`.