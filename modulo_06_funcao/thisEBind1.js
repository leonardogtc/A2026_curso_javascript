// =============================================================================
// O THIS E O MÉTODO BIND - PARTE 1
// =============================================================================
// O comportamento do `this` em funções tradicionais é dinâmico e depende de como
// a função é invocada (o "chamador" ou contexto de execução).
// O método `.bind()` resolve conflitos amarrando o `this` a um objeto específico.
// =============================================================================

const pessoa = {
    saudacao: 'Bom dia!',
    // Sintaxe ES2015 para definição de método no objeto:
    falar() {
        console.log(this.saudacao)
    }
}

// 1. Invocação direta pelo objeto proprietário:
// O `this` aponta diretamente para `pessoa`:
pessoa.falar() // Saída: "Bom dia!"

// 2. Extraindo a função e armazenando em uma variável independente:
// CONFLITO ENTRE PARADIGMAS (Orientação a Objetos vs Programação Funcional):
const falar = pessoa.falar

// Ao invocar `falar()`, a função não é mais chamada através do objeto `pessoa`.
// O contexto de invocação agora é o escopo global. No global, não existe `saudacao`,
// logo `this.saudacao` resulta em undefined (ou TypeError no modo estrito "use strict"):
falar() // Saída: undefined

// 3. A SOLUÇÃO COM .bind():
// O método `.bind(pessoa)` retorna uma NOVA função idêntica, mas com o seu `this`
// permanentemente amarrado (vinculado) ao objeto `pessoa`, não importando quem a chame:
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Saída: "Bom dia!"