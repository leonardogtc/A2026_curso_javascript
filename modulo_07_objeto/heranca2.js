// =============================================================================
// HERANÇA EM JAVASCRIPT - PARTE 2: CADEIA DE PROTÓTIPOS E SHADOWING
// =============================================================================
// Demonstração da busca em cascata na "Prototype Chain", sombreamento de
// propriedades (Shadowing), o método `Object.setPrototypeOf()` e a palavra-chave `super`.
// =============================================================================

// ATENÇÃO: Adicionar atributos diretamente a `Object.prototype` impacta TODOS
// os objetos do sistema. Evite fazer isso em projetos reais!
Object.prototype.attr0 = '0'

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

// RESOLUÇÃO NA CADEIA DE PROTÓTIPOS:
// - `filho.attr0`: Encontrado no Object.prototype (topo).
// - `filho.attr1`: Não achou no filho, nem no pai; achou no avô ('A').
// - `filho.attr2`: Achou no pai ('B').
// - `filho.attr3`: O filho tem seu próprio 'attr3' ('C'), ocorrendo o SOMBREAMENTO (Shadowing)
//   do 'attr3' do pai:
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // Saída: 0 A B C

console.log('---------------------------------')

// EXEMPLO PRÁTICO: MODELAGEM DE VEÍCULOS
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Sombreia (sobrescreve) a velMax padrão de 200 do carro!
}

const volvo = {
    modelo: 'V40',
    status() {
        // A palavra-chave `super` invoca o método do protótipo ancestral (carro):
        return `${this.modelo}: ${super.status()}`
    }
}

// Object.setPrototypeOf(objeto, prototipo):
// Define formalmente a relação de herança entre os objetos literais:
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// Ao inspecionar o objeto no console, apenas as propriedades PRÓPRIAS são exibidas diretamente:
console.log(ferrari) // { modelo: 'F40', velMax: 324 }
console.log(volvo)   // { modelo: 'V40', status: [Function: status] }

// O método acelerarMais() é herdado do protótipo `carro`, mas o `this` opera no objeto específico:
volvo.acelerarMais(100)
console.log(volvo.status()) // Saída: V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) // Saída: 300Km/h de 324Km/h (usou a velMax própria da Ferrari)