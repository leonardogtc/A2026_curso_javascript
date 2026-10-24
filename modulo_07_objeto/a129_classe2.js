// =============================================================================
// HERANÇA COM CLASSES: PALAVRAS-CHAVE EXTENDS E SUPER - PARTE 2
// =============================================================================
// No ES2015 (ES6), a herança entre classes é declarada através da palavra-chave `extends`.
// Por trás dos panos, o JavaScript continua utilizando a mesma Prototype Chain (cadeia de protótipos).
// =============================================================================

// 1. Classe Base (Superclasse / Ancestral):
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// 2. Subclasse que herda de Avo:
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // A palavra-chave `super()` invoca o construtor da superclasse (`Avo`):
        super(sobrenome)
        this.profissao = profissao
    }
}

// 3. Subclasse que herda de Pai:
class Filho extends Pai {
    constructor() {
        // Invoca o construtor de `Pai`, passando o sobrenome fixo 'Silva':
        super('Silva')
        // Como 'profissao' não foi passada, assumirá o padrão 'Professor'
    }
}

// Instanciando o Filho:
const filho = new Filho
console.log(filho) // Saída: Filho { sobrenome: 'Silva', profissao: 'Professor' }

// REGRA OBRIGATÓRIA DO ECMASCRIPT (ES6):
// Em qualquer classe que use `extends`, se você definir um método `constructor()`,
// é MANDATÓRIO chamar `super(...)` ANTES de tentar acessar ou usar o `this`!
// Tentar usar `this.qualquerCoisa` antes de `super()` dispara um erro fatal em tempo de execução:
// `ReferenceError: Must call super constructor in derived class before accessing 'this'`.