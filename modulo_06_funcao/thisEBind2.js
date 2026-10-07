// =============================================================================
// O THIS E O MÉTODO BIND - PARTE 2: A ESTRATÉGIA "SELF = THIS"
// =============================================================================
// Quando passamos uma função tradicional como callback para um temporizador
// como `setInterval`, o disparo da função é feito pelo próprio mecanismo do timer.
// Consequentemente, o `this` dentro do callback deixa de apontar para o objeto instanciado.
// =============================================================================

function Pessoa() {
    this.idade = 0

    // ESTRATÉGIA HISTÓRICA CLÁSSICA (MUITO COMUM ANTES DO ES6):
    // Como a variável `self` é uma constante comum (e não a palavra-chave dinâmica `this`),
    // nós guardamos a referência do objeto atual nela.
    // A função anônima do setInterval fecha uma CLOSURE sobre `self`,
    // garantindo acesso seguro à instância:
    const self = this
    
    setInterval(function () {
        self.idade++
        console.log(self.idade) // Incrementa 1, 2, 3... a cada 1 segundo
    }/*.bind(this)*/, 1000) // Alternativa comentada: também funcionaria usando .bind(this)
}

new Pessoa

// RESUMO DAS 3 FORMAS DE RESOLVER O THIS EM CALLBACKS:
// 1. Usar a técnica `const self = this` (antiga, mas muito vista em códigos legados).
// 2. Usar o método `.bind(this)` na função anônima.
// 3. Usar uma Arrow Function `() => { this.idade++ }` (a forma moderna e recomendada no ES6).