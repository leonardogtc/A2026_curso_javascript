// =============================================================================
// HERANÇA EM JAVASCRIPT - PARTE 3: OBJECT.CREATE E HASOWNPROPERTY
// =============================================================================
// O método `Object.create()` cria um novo objeto utilizando um objeto existente
// como protótipo. Além disso, permite definir propriedades com descritores refinados.
// =============================================================================

const pai = { nome: 'Pedro', corCabelo: 'preto' }

// 1. Cria o objeto `filha1` tendo `pai` como protótipo direto:
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // Herdado do pai -> Saída: "preto"

// 2. Object.create com descritores de propriedades adicionais:
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome) // Saída: "Bia"
filha2.nome = 'Carla'    // Ignorado porque `writable: false` impede alterações
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Saída: "Bia tem cabelo preto"

// 3. Object.keys() lista APENAS as propriedades do próprio objeto (que sejam enumeráveis):
console.log(Object.keys(filha1)) // Saída: [ 'nome' ]
console.log(Object.keys(filha2)) // Saída: [ 'nome' ]

// 4. DISTINGUINDO PROPRIEDADES PRÓPRIAS DE HERDADAS COM .hasOwnProperty():
// O laço `for...in` percorre todas as propriedades enumeráveis, INCLUSIVE as herdadas do protótipo.
// Para saber se o atributo pertence de fato à instância ou se veio da herança:
for (let key in filha2) {
    filha2.hasOwnProperty(key)
        ? console.log(`Própria: ${key}`)
        : console.log(`Por herança: ${key}`)
}
// Saída:
// Própria: nome
// Por herança: corCabelo