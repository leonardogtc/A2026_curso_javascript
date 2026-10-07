// =============================================================================
// OPERADORES UNÁRIOS: INCREMENTO, DECREMENTO E PRECEDÊNCIA
// =============================================================================
// Operadores unários operam sobre um único operando.
// A posição do operador (pré-fixada ou pós-fixada) altera completamente
// a ordem de execução e a precedência da avaliação.
// =============================================================================

let num1 = 1
let num2 = 2

// 1. Forma Pós-fixada (Postfix): Incrementa o valor da variável:
num1++
console.log(num1) // Saída: 2

// 2. Forma Pré-fixada (Prefix): Decrementa o valor da variável:
--num1
console.log(num1) // Saída: 1

// 3. ARMADILHA DE PRECEDÊNCIA E MOMENTO DE AVALIAÇÃO:
// O que acontece na comparação abaixo?
// - `++num1` (pré-fixado): tem ALTA precedência. `num1` é incrementado para 2 ANTES da comparação!
// - `num2--` (pós-fixado): tem BAIXA precedência. O valor atual de `num2` (2) é utilizado NA comparação,
//   e o decremento de `num2` só é executado DEPOIS que a linha for avaliada!
// Portanto, a comparação realizada na hora é: 2 === 2 -> resulta em TRUE!
console.log(++num1 === num2--) // Saída: true

// Imediatamente após a linha anterior, o decremento de `num2` foi concluído (num2 virou 1).
// Agora `num1` vale 2 e `num2` vale 1:
console.log(num1 === num2) // Saída: false (2 === 1 é falso)

// LIÇÃO DE CLEAN CODE (CÓDIGO LIMPO):
// Evite escrever código excessivamente enigmático como `++a === b--`.
// Separe os incrementos das comparações em linhas distintas para garantir
// que qualquer outro desenvolvedor consiga ler e manter seu código com facilidade.