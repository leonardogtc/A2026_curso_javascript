// =============================================================================
// ESTRUTURAS DE CONTROLE: LAÇO FOR TRADICIONAL
// =============================================================================
// O laço `for` é a estrutura de repetição preferencial quando temos um número
// DETERMINADO (conhecido ou fixo) de iterações.
// Ele condensa as 3 partes fundamentais de um contador em uma única linha:
//    for (inicialização; condição; incremento) { ... }
// =============================================================================

// 1. COMPARATIVO: Fazendo uma contagem com `while`:
// Note como a inicialização, a condição e o incremento ficam espalhados:
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++ // Se esquecer esta linha, vira loop infinito!
}

// 2. A MESMA CONTAGEM COM `for`:
// Muito mais limpo, autoexplicativo e seguro contra loops acidentais:
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// 3. PERCORRENDO UM ARRAY COM FOR TRADICIONAL:
// Como arrays são indexados a partir de 0, iniciamos com `i = 0`
// e repetimos enquanto `i < array.length` (estritamente menor, pois o último índice é length - 1):
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

// DICA DE ESCOPO:
// Sempre declare o contador com `let` dentro do `for` (`let i = 0`).
// Isso garante que a variável `i` exista apenas durante a execução do laço,
// sem vazar para o restante do programa.