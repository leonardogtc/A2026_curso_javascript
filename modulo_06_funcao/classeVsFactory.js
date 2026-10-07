// =============================================================================
// PARADIGMAS: CLASSE VS FUNÇÃO FACTORY (E A VARIÂNCIA DO THIS)
// =============================================================================
// Este exemplo ilustra a diferença prática entre instanciar objetos via Classes (OO)
// e via Funções Factory com Closures (paradigma funcional), principalmente no que
// tange à estabilidade da referência do `this`.
// =============================================================================

// 1. ABORDAGEM COM CLASSE (ES6):
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        // Depende da palavra-chave `this`:
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() // Saída: "Meu nome é João"

// O PROBLEMA DO THIS NA CLASSE:
// Se você passar `p1.falar` como callback de um clique de botão no navegador
// (`botao.onclick = p1.falar`), quem invocará o método será o elemento botão do DOM!
// O `this` passará a apontar para o botão, onde `this.nome` não existe (imprimindo "undefined").
// Para contornar isso, seria necessário usar `p1.falar.bind(p1)`.

console.log('---------------------------------')

// 2. ABORDAGEM COM FUNÇÃO FACTORY (E CLOSURE):
const criarPessoa = nome => {
    return {
        // A Arrow function aqui NÃO usa `this`!
        // Ela acessa a variável `nome` diretamente pelo ESCOPO LÉXICO (Closure):
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar() // Saída: "Meu nome é João"

// A GRANDE VANTAGEM DA FACTORY:
// Como o método da Factory não depende de `this`, você pode passá-lo como callback
// para qualquer evento do navegador ou temporizador: ele SEMPRE lembrará com segurança
// do valor de `nome`, sem nenhuma necessidade de `.bind()`.