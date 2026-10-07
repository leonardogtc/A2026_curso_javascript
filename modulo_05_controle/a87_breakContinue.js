// =============================================================================
// ESTRUTURAS DE CONTROLE: DESVIOS DE FLUXO COM BREAK, CONTINUE E LABELS
// =============================================================================
// As palavras-chave `break` e `continue` causam desvios no fluxo de execução padrão
// dos laços de repetição (`for`, `while`, `do...while`) e do `switch`.
// =============================================================================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. O COMANDO BREAK:
// O `break` INTERROMPE e ENCERRA completamente o laço atual mais interno.
// O fluxo pula imediatamente para fora do bloco de repetição:
console.log('--- Demonstração com BREAK ---')
for (let x in nums) {
    if (x == 5) {
        break // Sai do laço imediatamente ao atingir o índice 5
    }
    console.log(`${x} = ${nums[x]}`) // Imprime os índices de 0 a 4
}

// 2. O COMANDO CONTINUE:
// O `continue` NÃO encerra o laço; ele interrompe apenas a iteração ATUAL
// e pula imediatamente para a próxima repetição:
console.log('\n--- Demonstração com CONTINUE ---')
for (let y in nums) {
    if (y == 5) {
        continue // Pula apenas a volta do índice 5; não executa o console.log para ele
    }
    console.log(`${y} = ${nums[y]}`) // Imprime 0 a 4 e depois 6 a 9 (pula o 5)
}

// 3. RÓTULOS (LABELS) EM LAÇOS:
// Por padrão, `break` e `continue` afetam apenas o laço mais interno imediato.
// Com um rótulo (label), podemos nomear um laço externo para que um `break` interno
// consiga encerrar o laço mais de fora:
console.log('\n--- Demonstração com RÓTULO (LABEL) ---')
externo: // Define um rótulo para o primeiro for
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // Interrompe o laço 'externo' inteiro e não apenas o laço 'b'
        }
        console.log(`Par = ${a},${b}`)
    }
}

// AVISO DE DESIGN DE CÓDIGO (CLEAN CODE):
// O uso de rótulos (labels) com `break` e `continue` deve ser EVITADO na quase totalidade
// dos projetos reais. Essa estrutura remonta ao antigo comando `goto`, que dificulta
// a compreensão do fluxo e aumenta a complexidade cognitiva.
// Caso precise interromper múltiplos laços, prefira encapsular a lógica em uma função e utilizar `return`.