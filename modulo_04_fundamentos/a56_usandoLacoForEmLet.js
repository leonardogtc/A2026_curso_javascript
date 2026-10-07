// =============================================================================
// LAÇO FOR UTILIZANDO LET: ESCOPO DE BLOCO E ENCAPSULAMENTO
// =============================================================================
// Ao utilizar `let` no controle do laço `for`, a variável fica restrita
// única e exclusivamente ao escopo do laço, garantindo que ela não polua o escopo externo.
// =============================================================================

for (let i = 0; i < 10; i++) {
    console.log('i = ', i) // Imprime de 0 até 9
}

// O QUE ACONTECE FORA DO FOR?
// Como `i` foi declarada com `let`, ela não existe fora do laço for.
// Tentar acessá-la aqui fora dispara: `ReferenceError: i is not defined`.
// (A linha abaixo é intencionalmente mantida para ilustrar o erro de escopo):
console.log('i = ', i) // Disparará ReferenceError: i is not defined

// CONCLUSÃO:
// Sempre declare variáveis contadoras de laços (`for`, `for...of`, `for...in`) com `let`!
// Isso garante isolamento e evita bugs de reutilização acidental de contadores.