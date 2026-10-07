// =============================================================================
// CUIDADOS E PECULIARIDADES COM O TIPO NUMBER
// =============================================================================
// Devido à especificação IEEE 754 e à tipagem fraca do JavaScript,
// certas operações aritméticas apresentam comportamentos singulares que todo
// desenvolvedor precisa conhecer para evitar surpresas em produção.
// =============================================================================

// 1. Divisão por zero:
// Em muitas linguagens (como Java ou Python), dividir por 0 gera uma exceção/erro.
// No JavaScript, o resultado é o valor especial `Infinity` (ou `-Infinity`).
console.log(7 / 0) // Saída: Infinity

// 2. Coerção implícita de strings em operações aritméticas:
// Como o operador `/` só existe para divisão matemática, o JavaScript converte
// automaticamente a string "10" para número e realiza o cálculo:
console.log("10" / 2) // Saída: 5
// ATENÇÃO: Se fosse `"10" + 2`, o resultado seria `"102"`, pois o operador `+`
// tem dupla função: adição numérica e concatenação de strings (onde a string tem preferência).

// 3. Not a Number (NaN):
// Quando a conversão para número é impossível, o JS retorna o valor especial `NaN`.
// Uma curiosidade do JS é que `typeof NaN` é do tipo 'number'!
console.log("Texto" * 2) // Saída: NaN

// 4. Imprecisão de Ponto Flutuante (IEEE 754):
// O JS adota a especificação binária de precisão dupla IEEE 754 para máxima velocidade.
// Certas frações decimais (como 0.1 e 0.7) se tornam dízimas periódicas em binário,
// gerando uma pequena imprecisão de arredondamento:
console.log(0.1 + 0.7) // Saída: 0.7999999999999999 (e NÃO 0.8 exato!)

// DICA PARA SISTEMAS FINANCEIROS / E-COMMERCE:
// Para trabalhar com valores monetários sem erro de arredondamento,
// armazene centavos como inteiros (ex: R$ 10,50 vira 1050) ou utilize bibliotecas
// especializadas em precisão decimal arbitrária (como `decimal.js` ou `big.js`).