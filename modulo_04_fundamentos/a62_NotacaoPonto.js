// =============================================================================
// A NOTAÇÃO PONTO (.) EM JAVASCRIPT
// =============================================================================
// A notação ponto é a principal forma de acessar membros (propriedades e métodos)
// de objetos em JavaScript. Ela permite tanto a leitura quanto a escrita de atributos.
// =============================================================================

// 1. Acessando métodos de objetos nativos:
// Math.ceil(): Arredonda um número para cima (teto):
console.log(Math.ceil(6.1)) // Saída: 7

// 2. Criando propriedades dinamicamente em um objeto literal:
const obj1 = {}
obj1.nome = "Bola" // Cria dinamicamente a propriedade 'nome'
console.log(obj1.nome) // Lê a propriedade 'nome' -> Saída: "Bola"

// 3. Funções Construtoras e a palavra-chave `this`:
// O `this` dentro de uma função construtora representa a INSTÂNCIA específica
// que está sendo criada com a palavra-chave `new`.
function Obj(nome) {
    // Ao associar o atributo ao `this`, ele se torna PÚBLICO (visível fora da função via ponto):
    this.nome = nome
    
    // Podemos também associar funções (métodos) à instância:
    this.exec = function () {
        console.log('Exec...')
    }
}

// Instanciando dois objetos independentes a partir do mesmo molde:
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

// Cada objeto mantém suas próprias propriedades individuais:
console.log(obj2.nome) // Saída: Cadeira
console.log(obj3.nome) // Saída: Mesa

// Executando o método associado ao objeto:
obj3.exec() // Saída: Exec...

// VISIBILIDADE (ENCAPSULAMENTO):
// Se tivéssemos declarado `const valorPrivado = 123` dentro de `Obj`, ela seria privada
// e inacessível via notação ponto (`obj2.valorPrivado` resultaria em undefined).