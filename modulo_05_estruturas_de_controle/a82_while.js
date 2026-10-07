// =============================================================================
// ESTRUTURAS DE CONTROLE: LAÇO DE REPETIÇÃO WHILE
// =============================================================================
// A instrução `while` repete a execução de um bloco de código ENQUANTO uma
// condição permanecer verdadeira.
//
// QUANDO USAR WHILE?
// É ideal para situações com quantidade INDETERMINADA de repetições
// (quando você não sabe previamente quantas vezes o ciclo precisará rodar).
//
// CARACTERÍSTICA CRUCIAL:
// A condição é testada no INÍCIO de cada iteração. Se a condição for falsa
// logo na primeira verificação, o corpo do laço NUNCA será executado.
// =============================================================================

// Função utilitária para gerar um número inteiro pseudo-aleatório no intervalo [min, max):
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Inicializamos a variável de controle com um valor diferente da condição de saída (-1):
let opcao = 0

// O laço continuará executando enquanto 'opcao' for diferente de -1:
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

// CUIDADO COM LOOP INFINITO (INFINITE LOOP):
// Se você esquecer de atualizar a variável testada na condição dentro do bloco,
// a condição permanecerá verdadeira eternamente, congelando a thread única
// (Event Loop) do JavaScript e travando o navegador ou o servidor Node.js.