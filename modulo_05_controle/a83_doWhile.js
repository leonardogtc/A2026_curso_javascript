// =============================================================================
// ESTRUTURAS DE CONTROLE: LAÇO DE REPETIÇÃO DO / WHILE
// =============================================================================
// A estrutura `do / while` é uma variação do laço `while`.
// A diferença fundamental é o momento em que a condição é testada:
// - No `while`: o teste ocorre no INÍCIO (pode rodar zero vezes).
// - No `do / while`: o teste ocorre no FINAL (garante rodar AO MENOS UMA vez).
// =============================================================================

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Observe que inicializamos `opcao` com -1 (o exato valor que encerra a repetição!).
// Em um `while` tradicional, o bloco NUNCA seria executado:
let opcao = -1

do {
    // Este bloco executa OBRIGATORIAMENTE ao menos uma vez antes do primeiro teste!
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1); // O teste ocorre apenas aqui no final da volta

console.log('Até a próxima!')

// CASO DE USO TÍPICO:
// Menus interativos de linha de comando ou sistemas de entrada de dados,
// onde você precisa exibir a pergunta ou menu ao usuário ao menos uma vez antes
// de checar se ele optou por sair.