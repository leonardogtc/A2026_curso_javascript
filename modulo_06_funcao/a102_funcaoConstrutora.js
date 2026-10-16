// =============================================================================
// FUNÇÃO CONSTRUTORA E ENCAPSULAMENTO (MEMBROS PÚBLICOS E PRIVADOS)
// =============================================================================
// Uma Função Construtora funciona como uma "planta arquitetônica" (classe) em JS.
// Podemos controlar o encapsulamento de forma precisa:
// - Variáveis declaradas com `let` ou `const` tornam-se MEMBROS PRIVADOS.
// - Variáveis ou funções atribuídas ao `this` tornam-se MEMBROS PÚBLICOS.
// =============================================================================

function Carro(velocidadeMaxima = 200, delta = 5) {
    // 1. ATRIBUTO PRIVADO:
    // Acessível apenas dentro do escopo desta função.
    // Qualquer tentativa de acesso externo (`uno.velocidadeAtual`) resultará em `undefined`:
    let velocidadeAtual = 0

    // 2. MÉTODO PÚBLICO (INTERFACE DO OBJETO):
    // Como foi declarado aqui dentro, ele tem acesso à variável privada via Closure:
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // 3. MÉTODO PÚBLICO GETTER:
    // Expõe a leitura do atributo privado sem permitir alteração direta indesejada:
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Instanciando o primeiro carro (com os valores padrão: max 200, delta 5):
// Nota: Os parênteses são opcionais na instanciação sem argumentos (`new Carro` ou `new Carro()`):
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // Saída: 5

// Instanciando o segundo carro com parâmetros customizados (max 350, delta 20):
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // Saída: 60 (20 + 20 + 20)

// Inspecionando os tipos:
console.log(typeof Carro)   // Saída: function (é o molde construtor)
console.log(typeof ferrari) // Saída: object   (é o objeto gerado em memória)