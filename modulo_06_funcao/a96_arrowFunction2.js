// =============================================================================
// FUNÇÕES ARROW - PARTE 2: THIS LÉXICO EM TEMPORIZADORES (SETINTERVAL)
// =============================================================================
// Em funções tradicionais do JavaScript, o `this` varia dinamicamente de acordo
// com o contexto de invocação. Funções passadas como callbacks para temporizadores
// (como `setInterval`) perdem a referência da instância e apontam para o escopo global.
//
// A Arrow Function resolve isso de forma nativa por possuir "THIS LÉXICO":
// Ela captura e preserva permanentemente o `this` do contexto onde foi DEFINIDA!
// =============================================================================

function Pessoa() {
    this.idade = 0

    // A Arrow function abaixo foi escrita no contexto léxico da função `Pessoa`.
    // Portanto, o `this` dentro da arrow function SEMPRE apontará para a instância de `Pessoa`,
    // independentemente de quem disparar o temporizador:
    setInterval(() => {
        this.idade++
        console.log(this.idade) // Incrementa 1, 2, 3... a cada 1000ms (1 segundo)
    }, 1000)
}

// Ao instanciar `new Pessoa`, o temporizador começa a rodar imediatamente:
new Pessoa