// =============================================================================
// MELHORIAS NA NOTAÇÃO LITERAL DE OBJETOS (ECMASCRIPT 2015 / ES6)
// =============================================================================
// O ES2015 trouxe novos recursos para tornar a criação de objetos literais
// mais concisa, dinâmica e expressiva.
// =============================================================================

const a = 1
const b = 2
const c = 3

// 1. NOTAÇÃO REDUZIDA DE ATRIBUTOS (PROPERTY SHORTHAND):
// Forma antiga: precisava repetir o nome da variável como chave e valor:
const obj1 = { a: a, b: b, c: c }

// Forma moderna (ES6): se o nome da chave for igual ao da variável, basta citá-la:
const obj2 = { a, b, c }
console.log(obj1, obj2) // Ambos produzem: { a: 1, b: 2, c: 3 }

// 2. NOMES DE PROPRIEDADES COMPUTADOS (COMPUTED PROPERTY NAMES):
const nomeAttr = 'nota'
const valorAttr = 7.87

// Forma antiga: precisava criar o objeto primeiro e usar colchetes depois:
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) // Saída: { nota: 7.87 }

// Forma moderna (ES6): colchetes diretamente DENTRO da definição literal do objeto:
const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4) // Saída: { nota: 7.87 }

// 3. DEFINIÇÃO CONCISA DE MÉTODOS:
const obj5 = {
    // Forma tradicional (chave associada a uma função anônima):
    funcao1: function () {
        return 'Forma tradicional'
    },
    // Forma moderna ES6 (sintaxe direta de método):
    funcao2() {
        return 'Forma moderna'
    }
}
console.log(obj5)