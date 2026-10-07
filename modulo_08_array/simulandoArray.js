// =============================================================================
// DESMISTIFICANDO ARRAYS: SIMULANDO UM ARRAY COM UM OBJETO
// =============================================================================
// Este exemplo demonstra como a estrutura interna de um Array em JavaScript
// é na verdade um Objeto com índices numéricos como chaves.
// =============================================================================

// Criando um objeto com chaves numéricas que imitam os índices de um array:
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray) // Saída: { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

// Customizando a representação textual do objeto para simular a saída de um array:
// Usamos `enumerable: false` para que o método `toString` não apareça nas iterações de propriedades:
Object.defineProperty(quaseArray, 'toString', {
    value: function () { 
        return Object.values(this) 
    },
    enumerable: false
})

// Acessando pela notação de colchetes indexada (funciona igual a um array!):
console.log(quaseArray[0]) // Saída: "Rafael"

// Comparando a saída da nossa simulação com um array nativo real:
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)
// Saída: [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]

// CONCLUSÃO:
// A diferença primária entre um array real e um objeto "array-like" é que o array
// nativo herda de `Array.prototype`, dispondo de métodos como `.map()`, `.filter()`,
// `.reduce()` e do gerenciamento automático da propriedade `.length`.