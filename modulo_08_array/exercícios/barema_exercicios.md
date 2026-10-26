# Barema de Avaliação e Gabarito Oficial: Módulo 08 (Arrays em JavaScript)

Este documento estabelece os **critérios de avaliação (barema)**, a **distribuição de pontos**, as **competências técnicas avaliadas** e o **gabarito oficial comentado** para todos os exercícios práticos do **Módulo 08 - Arrays**.

Todos os exercícios foram elaborados com referência direta aos arquivos de aula da pasta `modulo_08_array`, cobrindo desde a estrutura de objetos subjacente aos arrays até pipelines funcionais avançados (`map`, `filter`, `reduce`, `flatMap`).

---

## 1. Diretrizes Gerais do Barema

A pontuação total é calculada com base em **100 pontos**, distribuídos entre os 32 exercícios (aproximadamente 3,125 pontos por exercício, arredondados conforme os blocos temáticos).

### Critérios de Correção por Exercício:
1. **Correção Funcional e Resultado Esperado (40%)**:
   - O código executa sem erros em ambiente Node.js.
   - Produz exatamente a saída lógica requerida pelas especificações do enunciado.
2. **Aderência às Técnicas do Arquivo de Referência (35%)**:
   - Aplicação rigorosa dos conceitos lecionados no arquivo correspondente (ex: uso correto do protótipo `Array.prototype`, manipulação precisa do acumulador em `reduce`, respeito à imutabilidade com `map`/`slice`/`filter`).
   - Evitar o uso de recursos não adequados ao objetivo pedagógico (ex: não usar loops `for` em exercícios de paradigma declarativo).
3. **Boas Práticas e Qualidade de Código (15%)**:
   - Funções puras, nomes expressivos de variáveis e callbacks.
   - Uso apropriado de Arrow Functions e operadores modernos (ex: destructuring, spread, template literals).
4. **Tratamento de Casos de Borda e Compreensão da Engine (10%)**:
   - Tratamento adequado de valores falsy (como `0` ou `undefined` em `reduce`), integridade de arrays esparsos e preservação do array original.

---

## 2. Tabela Consolidada de Pontuação (Barema)

| Seção | Arquivo de Referência | Exercício | Foco Temático Principal | Pontuação |
| :---: | :--- | :---: | :--- | :---: |
| **01** | `a131_array.js` | **1.1** | Array esparso, `.length`, detecção de `undefined` e `.sort()` | **3,0 pts** |
| | | **1.2** | Operador `delete` vs método `.splice()` e reorganização de índices | **3,0 pts** |
| **02** | `a132_arrayMetodos.js` | **2.1** | Manipulação de fila com `.push`, `.pop`, `.unshift`, `.shift` e `.splice` | **3,0 pts** |
| | | **2.2** | Imutabilidade e fatiamento com `.slice()` e índices negativos | **3,0 pts** |
| **03** | `a133_simulandoArray.js`| **3.1** | Objeto array-like, chaves numéricas e `Object.defineProperty` | **3,0 pts** |
| | | **3.2** | Implementação de getter dinâmico `.length` não-enumerável | **3,5 pts** |
| **04** | `a134_foreach1.js` | **4.1** | Callback com os 3 argumentos `(elemento, indice, array)` | **3,0 pts** |
| | | **4.2** | Callback nomeado, efeitos colaterais e retorno `undefined` do `.forEach` | **3,0 pts** |
| **05** | `a135_foreach2.js` | **5.1** | Implementação artesanal de `meuForEach` no `Array.prototype` | **3,5 pts** |
| | | **5.2** | Validação de tipo de callback com `TypeError` no protótipo | **3,5 pts** |
| **06** | `a136_map1.js` | **6.1** | Pipeline funcional de transformação 1:1 e formatação monetária | **3,0 pts** |
| | | **6.2** | Encadeamento de funções puras para transformação de strings | **3,0 pts** |
| **07** | `a137_map2.js` | **7.1** | Deserialização de JSON (`JSON.parse`) e extração de atributos | **3,0 pts** |
| | | **7.2** | Processamento e cálculo de subtotais a partir de strings JSON | **3,0 pts** |
| **08** | `a138_map3.js` | **8.1** | Implementação artesanal de `Array.prototype.map2` | **3,5 pts** |
| | | **8.2** | Aplicação de `map2` em estruturas compostas (cálculo de médias) | **3,5 pts** |
| **09** | `a139_filter1.js` | **9.1** | Filtragem composta por funções predicado puras | **3,0 pts** |
| | | **9.2** | Filtros multicritério e análise de predicados booleanos extremos | **3,0 pts** |
| **10** | `a140_filter2.js` | **10.1** | Implementação artesanal de `Array.prototype.filter2` | **3,5 pts** |
| | | **10.2** | Filtragem de catálogo complexo com verificação de imutabilidade | **3,0 pts** |
| **11** | `a141_reduce1.js` | **11.1** | Redução com acumulador, valor inicial e auditoria de voltas | **3,0 pts** |
| | | **11.2** | Obtenção de valores extremos (máximo e mínimo) via `.reduce` | **3,0 pts** |
| **12** | `a142_reduce2.js` | **12.1** | Redução booleana universal (`&&`) e existencial (`\|\|`) vs `every`/`some` | **3,0 pts** |
| | | **12.2** | Validação de condições de perfil em pipeline `.map().reduce()` | **3,0 pts** |
| **13** | `a143_reduce3.js` | **13.1** | Implementação artesanal de `reduce2` com tratamento de `valorInicial` | **4,0 pts** |
| | | **13.2** | Agregação textual e formatação de hashtags com `reduce2` | **3,0 pts** |
| **14** | `a144_imperativoVsDeclarativo.js`| **14.1** | Refatoração de cálculo imperativo para declarativo funcional | **3,5 pts** |
| | | **14.2** | Contagem condicional comparativa: laço `for` vs `.filter()` | **3,0 pts** |
| **15** | `a145_concat.js` | **15.1** | União imutável com `.concat()` e comparação com Spread (`...`) | **3,0 pts** |
| | | **15.2** | Compreensão e diagnóstico do achatamento de 1º nível de `.concat()` | **3,0 pts** |
| **16** | `a146_flatMap.js` | **16.1** | Implementação de `flatMap` com `concat.apply` e achatamento | **3,5 pts** |
| | | **16.2** | Extração de tags aninhadas e deduplicação com `Set` | **3,5 pts** |
| **TOTAL** | | | **32 Exercícios Práticos** | **100,0 pts** |

---

## 3. Gabarito Oficial e Resoluções Comentadas

---

### Seção 1: Arquivo `a131_array.js`
> **Tema Central**: Natureza dinâmica e heterogênea do Array em JavaScript, criação via literal `[]` e construtora `new Array()`, arrays esparsos (*sparse arrays*), ordenação lexicográfica e exclusão via `delete` vs `.splice()`.

#### Exercício 1.1 (3,0 pontos)
- **Objetivo**: Demonstrar arrays esparsos, mutação com `.sort()` e o comportamento de índices não definidos.
- **Resolução de Referência**:
```javascript
let equipamentos = ['Bola', 'Rede', 'Chuteira']
equipamentos[6] = 'Uniforme' // Cria buracos intermediários (índices 3, 4 e 5)

console.log('Tamanho do array:', equipamentos.length) // 7
console.log('Índice 4 é undefined?:', equipamentos[4] === undefined) // true

equipamentos.sort() // Ordena alfabeticamente; posições vazias vão para o final
console.log('Array ordenado (.sort):', equipamentos)
// Saída: [ 'Bola', 'Chuteira', 'Rede', 'Uniforme', <3 empty items> ]
```
- **Critérios de Correção**:
  - Atribuição correta ao índice 6 (1,0 pt).
  - Verificação correta do `length` e comparação estrita `=== undefined` (1,0 pt).
  - Execução e compreensão da mutação do `.sort()` (1,0 pt).
- **Pegadinha da Engine**: O `.sort()` converte os valores para strings e os ordena lexicograficamente. Itens vazios (*empty slots*) são empurrados para o final do array.

---

#### Exercício 1.2 (3,0 pontos)
- **Objetivo**: Contrastar `delete` (remoção pontual sem reindexação) contra `.splice()` (reorganização estrutural).
- **Resolução de Referência**:
```javascript
let cidadesA = ['Curitiba', 'Recife', 'Manaus', 'Salvador', 'Brasília']
delete cidadesA[2]
console.log(cidadesA) // ['Curitiba', 'Recife', <1 empty item>, 'Salvador', 'Brasília']
console.log(cidadesA.length) // 5 (o tamanho NÃO muda!)
console.log(cidadesA[2]) // undefined

let cidadesB = ['Curitiba', 'Recife', 'Manaus', 'Salvador', 'Brasília']
cidadesB.splice(2, 1, 'Florianópolis', 'Fortaleza')
console.log(cidadesB) // ['Curitiba', 'Recife', 'Florianópolis', 'Fortaleza', 'Salvador', 'Brasília']
console.log(cidadesB.length) // 6 (índices reorganizados)
```
- **Critérios de Correção**:
  - Demonstração do `delete` mantendo o `length` inalterado e o slot vazio (1,5 pts).
  - Uso correto do `.splice(2, 1, ...)` adicionando novos elementos e ajustando índices (1,5 pts).

---

### Seção 2: Arquivo `a132_arrayMetodos.js`
> **Tema Central**: Métodos mutáveis (`push`, `pop`, `shift`, `unshift`, `splice`) vs método imutável (`slice`).

#### Exercício 2.1 (3,0 pontos)
- **Objetivo**: Gerenciamento de filas (FIFO) combinando adições/remoções no início e final.
- **Resolução de Referência**:
```javascript
const fila = ['Maria', 'João', 'Eduardo']
fila.unshift('Helena')  // Adiciona no início
fila.unshift('Carlos')  // Adiciona antes de Helena
fila.push('Beatriz')    // Adiciona no fim

const atendido = fila.shift()    // Remove 'Carlos' do início
const desistente = fila.pop()    // Remove 'Beatriz' do fim
fila.splice(2, 0, 'Arthur')      // Insere 'Arthur' no índice 2 sem remover ninguém

console.log('Atendido:', atendido) // Carlos
console.log('Desistente:', desistente) // Beatriz
console.log('Fila Final:', fila) // [ 'Helena', 'Maria', 'Arthur', 'João', 'Eduardo' ]
```
- **Critérios de Correção**:
  - Sequência correta de `unshift` e `push` (1,0 pt).
  - Remoção correta com `shift` e `pop` capturando os valores retornados (1,0 pt).
  - Inserção intermediária com `splice(2, 0, 'Arthur')` (1,0 pt).

---

#### Exercício 2.2 (3,0 pontos)
- **Objetivo**: Operação imutável com `.slice()` e fatiamento por índices positivos e negativos.
- **Resolução de Referência**:
```javascript
const linguagens = ['JS', 'Python', 'Go', 'Rust', 'Java', 'C#', 'Ruby', 'Kotlin']
const blocoIntermediario = linguagens.slice(2, 5) // Do índice 2 até o 4 (5 é exclusivo)
const ultimasLinguagens = linguagens.slice(-3)     // Pega os 3 últimos elementos

console.log('Bloco Intermediário:', blocoIntermediario) // [ 'Go', 'Rust', 'Java' ]
console.log('Últimas 3:', ultimasLinguagens) // [ 'C#', 'Ruby', 'Kotlin' ]
console.log('Original Intacto?:', linguagens.length === 8) // true
```
- **Critérios de Correção**:
  - Extração precisa do intervalo `[2, 5)` (1,0 pt).
  - Uso idiomático de índice negativo `.slice(-3)` (1,0 pt).
  - Verificação da preservação do array original (1,0 pt).

---

### Seção 3: Arquivo `a133_simulandoArray.js`
> **Tema Central**: Desmistificação da estrutura interna do array (objeto com chaves numéricas) e manipulação de descritores de propriedade com `Object.defineProperty`.

#### Exercício 3.1 (3,0 pontos)
- **Objetivo**: Criar objeto com chaves numéricas e método `toString` não enumerável.
- **Resolução de Referência**:
```javascript
const colecaoFrutas = { 0: 'Maçã', 1: 'Banana', 2: 'Morango', 3: 'Manga' }
Object.defineProperty(colecaoFrutas, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

console.log(colecaoFrutas[1]) // 'Banana'
console.log(colecaoFrutas.toString()) // [ 'Maçã', 'Banana', 'Morango', 'Manga' ]
console.log(Object.keys(colecaoFrutas)) // [ '0', '1', '2', '3' ] ('toString' oculto)
```
- **Critérios de Correção**:
  - Estrutura com chaves numéricas (0,8 pt).
  - Configuração de `enumerable: false` no descritor (1,2 pts).
  - Acesso indexado por colchetes e verificação com `Object.keys` (1,0 pt).

---

#### Exercício 3.2 (3,5 pontos)
- **Objetivo**: Simular a propriedade dinâmica `.length` via getter não-enumerável.
- **Resolução de Referência**:
```javascript
const pseudoVetor = { 0: 'Vermelho', 1: 'Verde', 2: 'Azul' }
Object.defineProperty(pseudoVetor, 'length', {
    get: function () {
        return Object.keys(this).filter(k => !isNaN(k)).length
    },
    enumerable: false
})

console.log(pseudoVetor.length) // 3
pseudoVetor[3] = 'Amarelo'
console.log(pseudoVetor.length) // 4
```
- **Critérios de Correção**:
  - Implementação do acessor `get` para calcular o tamanho dinamicamente (2,0 pts).
  - Garantia de que `length` não seja enumerável (0,5 pt).
  - Demonstração da atualização automática ao inserir novo índice (1,0 pt).

---

### Seção 4: Arquivo `a134_foreach1.js`
> **Tema Central**: Iteração funcional com `.forEach()`, assinatura do callback `(elemento, indice, arrayCompleto)` e efeito colateral.

#### Exercício 4.1 (3,0 pontos)
- **Objetivo**: Consumir os 3 parâmetros do callback do `.forEach()` em relatório formatado.
- **Resolução de Referência**:
```javascript
const funcionarios = [
    { nome: 'Ana', salario: 4500 },
    { nome: 'Bruno', salario: 7200 },
    { nome: 'Carla', salario: 3100 },
    { nome: 'Daniel', salario: 5800 }
]

funcionarios.forEach((funcionario, indice, arrayCompleto) => {
    console.log(`Registro ${indice + 1} de ${arrayCompleto.length}: ${funcionario.nome} ganha R$ ${funcionario.salario.toFixed(2)}`)
})
```
- **Critérios de Correção**:
  - Passagem e uso explícito dos 3 parâmetros (1,5 pts).
  - Formatação e interpolação de strings correta (1,5 pts).

---

#### Exercício 4.2 (3,0 pontos)
- **Objetivo**: Usar função nomeada como callback e comprovar que `.forEach()` retorna `undefined`.
- **Resolução de Referência**:
```javascript
const classificarTemperatura = temp => {
    if (temp < 18) {
        console.log(`${temp}°C: Frio`)
    } else if (temp <= 26) {
        console.log(`${temp}°C: Agradável`)
    } else {
        console.log(`${temp}°C: Quente`)
    }
}

const temperaturas = [12, 22, 31, 17, 25]
const retorno = temperaturas.forEach(classificarTemperatura)
console.log('Retorno do forEach é undefined?:', retorno === undefined) // true
```
- **Critérios de Correção**:
  - Declaração de função externa limpa e modular (1,5 pts).
  - Verificação inequívoca de que o retorno é `undefined` (1,5 pts).

---

### Seção 5: Arquivo `a135_foreach2.js`
> **Tema Central**: Implementação artesanal de métodos de alta ordem no `Array.prototype` e controle do contexto de execução `this`.

#### Exercício 5.1 (3,5 pontos)
- **Objetivo**: Criar manualmente `meuForEach` no protótipo nativo.
- **Resolução de Referência**:
```javascript
Array.prototype.meuForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const frutas = ['Uva', 'Pera', 'Maçã']
frutas.meuForEach((fruta, i) => {
    console.log(`Fruta no índice ${i}: ${fruta}`)
})
```
- **Critérios de Correção**:
  - Definição no protótipo usando função tradicional (preservando o `this`) (2,0 pts).
  - Repasse dos 3 argumentos no callback (1,0 pt).
  - Teste funcional bem-sucedido (0,5 pt).
- **Atenção**: Métodos no protótipo que dependem de `this` **não** podem ser declarados como Arrow Functions!

---

#### Exercício 5.2 (3,5 pontos)
- **Objetivo**: Robustez defensiva em métodos de protótipo validando o tipo do callback com `TypeError`.
- **Resolução de Referência**:
```javascript
Array.prototype.forEachSeguro = function (callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback fornecido não é uma função!')
    }
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

let soma = 0
;[10, 20, 30].forEachSeguro(num => { soma += num })

try {
    ;[1, 2, 3].forEachSeguro(null)
} catch (err) {
    console.log('Exceção capturada:', err.message)
}
```
- **Critérios de Correção**:
  - Validação `typeof callback !== 'function'` (1,5 pts).
  - Lançamento de `TypeError` com mensagem clara (1,0 pt).
  - Teste com bloco `try/catch` para capturar a falha controlada (1,0 pt).

---

### Seção 6: Arquivo `a136_map1.js`
> **Tema Central**: Transformação de dados 1:1, imutabilidade e pipelines de funções puras encadeadas.

#### Exercício 6.1 (3,0 pontos)
- **Objetivo**: Compor 3 transformações funcionais independentes encadeadas em sequência.
- **Resolução de Referência**:
```javascript
const precos = [100.0, 45.5, 230.0, 89.9, 12.0]

const aplicarDesconto = val => val * 0.90
const adicionarFrete = val => val + 8.50
const formatarReal = val => `R$ ${val.toFixed(2).replace('.', ',')}`

const precosFinais = precos
    .map(aplicarDesconto)
    .map(adicionarFrete)
    .map(formatarReal)

console.log(precosFinais)
// [ 'R$ 98,50', 'R$ 49,45', 'R$ 215,50', 'R$ 89,41', 'R$ 19,30' ]
```
- **Critérios de Correção**:
  - Criação de funções puras desacopladas (1,5 pts).
  - Encadeamento correto de `.map()` (1,0 pt).
  - Preservação intacta do array original (0,5 pt).

---

#### Exercício 6.2 (3,0 pontos)
- **Objetivo**: Pipeline de transformação textual mantendo consistência de comprimento.
- **Resolução de Referência**:
```javascript
const palavras = ['javascript', 'typescript', 'react', 'nodejs', 'docker']

const capitalizar = p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
const adicionarTamanho = p => `${p} [${p.length}]`

const resultado = palavras.map(capitalizar).map(adicionarTamanho)
console.log(resultado)
// [ 'Javascript [10]', 'Typescript [10]', 'React [5]', 'Nodejs [6]', 'Docker [6]' ]
```
- **Critérios de Correção**:
  - Lógica de capitalização correta (1,0 pt).
  - Adição do comprimento em caracteres (1,0 pt).
  - Encadeamento funcional sem mutações (1,0 pt).

---

### Seção 7: Arquivo `a137_map2.js`
> **Tema Central**: Processamento de coleções JSON, deserialização e extração funcional de propriedades de domínio.

#### Exercício 7.1 (3,0 pontos)
- **Objetivo**: Deserializar array de strings JSON e compor strings de crachás.
- **Resolução de Referência**:
```javascript
const usuariosJSON = [
    '{ "id": 1, "nome": "Larissa", "setor": "Financeiro", "ativo": true }',
    '{ "id": 2, "nome": "Marcos", "setor": "TI", "ativo": false }',
    '{ "id": 3, "nome": "Renata", "setor": "RH", "ativo": true }'
]

const parseJSON = json => JSON.parse(json)
const gerarCracha = user => `${user.nome} (Setor: ${user.setor})`

const crachas = usuariosJSON.map(parseJSON).map(gerarCracha)
console.log(crachas)
// [ 'Larissa (Setor: Financeiro)', 'Marcos (Setor: TI)', 'Renata (Setor: RH)' ]
```
- **Critérios de Correção**:
  - Conversão com `JSON.parse` (1,5 pts).
  - Função de mapeamento formatando o texto de crachá (1,5 pts).

---

#### Exercício 7.2 (3,0 pontos)
- **Objetivo**: Calcular métricas de faturamento item a item (`qtd * valorUnitario`) a partir de JSON bruto.
- **Resolução de Referência**:
```javascript
const itensNota = [
    '{ "produto": "Monitor 27", "quantidade": 2, "valorUnitario": 1200.00 }',
    '{ "produto": "Cabo HDMI", "quantidade": 5, "valorUnitario": 35.50 }',
    '{ "produto": "Suporte Articulado", "quantidade": 1, "valorUnitario": 180.00 }'
]

const converterParaObjeto = str => JSON.parse(str)
const calcularSubtotal = item => item.quantidade * item.valorUnitario

const subtotais = itensNota.map(converterParaObjeto).map(calcularSubtotal)
console.log(subtotais) // [ 2400, 177.5, 180 ]
```
- **Critérios de Correção**:
  - Deserialização funcional dos objetos (1,5 pts).
  - Cálculo aritmético correto dos subtotais (1,5 pts).

---

### Seção 8: Arquivo `a138_map3.js`
> **Tema Central**: Implementação artesanal do método `map` no protótipo nativo (`map2`).

#### Exercício 8.1 (3,5 pontos)
- **Objetivo**: Recriar o algoritmo de mapeamento gerando novo array com retorno do callback.
- **Resolução de Referência**:
```javascript
Array.prototype.map2 = function (callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const numeros = [2, 4, 6, 8]
const cubos = numeros.map2(n => n ** 3)

console.log(cubos) // [ 8, 64, 216, 512 ]
console.log(numeros) // [ 2, 4, 6, 8 ] (original intacto)
```
- **Critérios de Correção**:
  - Criação de novo array para garantir imutabilidade (1,5 pts).
  - Invocação e armazenamento correto do retorno do callback (1,5 pts).
  - Retorno do novo array com mesmo número de itens (0,5 pt).

---

#### Exercício 8.2 (3,5 pontos)
- **Objetivo**: Aplicar o `map2` artesanal em estruturas de dados reais para consolidar médias.
- **Resolução de Referência**:
```javascript
const estudantes = [
    { nome: 'Pedro', notas: [8.0, 7.0, 9.0] },
    { nome: 'Carla', notas: [6.0, 5.5, 7.5] },
    { nome: 'Tiago', notas: [9.5, 9.0, 10.0] }
]

const medias = estudantes.map2(estudante => {
    const somaNotas = estudante.notas.reduce((acc, curr) => acc + curr, 0)
    const mediaFinal = (somaNotas / estudante.notas.length).toFixed(1)
    return {
        nome: estudante.nome,
        media: parseFloat(mediaFinal)
    }
})

console.log(medias)
// [ { nome: 'Pedro', media: 8 }, { nome: 'Carla', media: 6.3 }, { nome: 'Tiago', media: 9.5 } ]
```
- **Critérios de Correção**:
  - Uso do método `map2` customizado (1,5 pts).
  - Cálculo correto da média com `reduce` e formatação (1,5 pts).
  - Retorno do novo formato de objeto projetado (0,5 pt).

---

### Seção 9: Arquivo `a139_filter1.js`
> **Tema Central**: Filtragem declarativa com `.filter()`, funções predicado (retorno booleano estrito) e composição.

#### Exercício 9.1 (3,0 pontos)
- **Objetivo**: Encadeamento de múltiplos filtros com predicados puramente declarativos.
- **Resolução de Referência**:
```javascript
const veiculos = [
    { modelo: 'Sedan Confort', ano: 2021, eletrico: true, preco: 145000 },
    { modelo: 'Compacto Eco', ano: 2018, eletrico: false, preco: 52000 },
    { modelo: 'SUV Premium', ano: 2023, eletrico: true, preco: 280000 },
    { modelo: 'Hatch Sport', ano: 2019, eletrico: false, preco: 78000 },
    { modelo: 'Crossover EV', ano: 2022, eletrico: true, preco: 195000 }
]

const isSeminovo = v => v.ano >= 2021
const isEletrico = v => v.eletrico

const selecionados = veiculos.filter(isSeminovo).filter(isEletrico)
console.log(selecionados)
// Retorna os 3 veículos seminovos que também são 100% elétricos
```
- **Critérios de Correção**:
  - Criação de predicados isolados de responsabilidade única (1,5 pts).
  - Encadeamento correto de `.filter()` (1,5 pts).

---

#### Exercício 9.2 (3,0 pontos)
- **Objetivo**: Compreensão dos casos extremos de filtragem (todos descartados vs todos mantidos).
- **Resolução de Referência**:
```javascript
const transacoes = [
    { id: 'T1', valor: 350.0, tipo: 'CREDITO', confirmada: true },
    { id: 'T2', valor: 1200.0, tipo: 'DEBITO', confirmada: true },
    { id: 'T3', valor: 5400.0, tipo: 'CREDITO', confirmada: false },
    { id: 'T4', valor: 850.0, tipo: 'CREDITO', confirmada: true },
    { id: 'T5', valor: 3000.0, tipo: 'DEBITO', confirmada: false }
]

const isCredito = t => t.tipo === 'CREDITO'
const isConfirmada = t => t.confirmada

console.log(transacoes.filter(isCredito).filter(isConfirmada)) // 2 transações aprovadas
console.log(transacoes.filter(() => false)) // [] (array vazio)
console.log(transacoes.filter(() => true).length) // 5 (todos mantidos)
```
- **Critérios de Correção**:
  - Filtro correto de transações de crédito confirmadas (1,5 pts).
  - Demonstração empírica dos comportamentos extremos de `false` e `true` (1,5 pts).

---

### Seção 10: Arquivo `a140_filter2.js`
> **Tema Central**: Implementação artesanal de `Array.prototype.filter2` e testes de integridade de dados.

#### Exercício 10.1 (3,5 pontos)
- **Objetivo**: Implementar manualmente o mecanismo condicional de filtragem.
- **Resolução de Referência**:
```javascript
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const numeros = [-15, 6, 0, 9, -4, 18, 22, 27]
const positivoMultiploDe3 = n => n > 0 && n % 3 === 0

console.log(numeros.filter2(positivoMultiploDe3)) // [ 6, 9, 18, 27 ]
```
- **Critérios de Correção**:
  - Implementação no protótipo respeitando a assinatura e condicional (2,0 pts).
  - Teste matemático com números positivos e múltiplos de 3 (1,5 pts).

---

#### Exercício 10.2 (3,0 pontos)
- **Objetivo**: Filtrar catálogo complexo garantindo que o array original permaneça inalterado.
- **Resolução de Referência**:
```javascript
const biblioteca = [
    { titulo: 'Clean Code', paginas: 464, disponivel: true },
    { titulo: 'O Guia do Mochileiro', paginas: 208, disponivel: false },
    { titulo: 'Padrões de Projeto', paginas: 448, disponivel: true },
    { titulo: 'Refactoring', paginas: 448, disponivel: false },
    { titulo: 'Expressões Regulares', paginas: 160, disponivel: true }
]

const livroExtenso = l => l.paginas > 300
const livroDisponivel = l => l.disponivel

const livrosParaEmprestimo = biblioteca.filter2(livroExtenso).filter2(livroDisponivel)
console.log(livrosParaEmprestimo) // Clean Code e Padrões de Projeto
console.log(biblioteca.length === 5) // true (preservado)
```
- **Critérios de Correção**:
  - Encadeamento de `filter2` artesanal (2,0 pts).
  - Validação da preservação de integridade do acervo original (1,0 pt).

---

### Seção 11: Arquivo `a141_reduce1.js`
> **Tema Central**: Agregação cumulativa com `.reduce()`, controle de acumulador, valor inicial e rastreamento iterativo.

#### Exercício 11.1 (3,0 pontos)
- **Objetivo**: Somar despesas com `.reduce()`, auditar cada volta no console e usar valor inicial.
- **Resolução de Referência**:
```javascript
const despesas = [
    { descricao: 'Aluguel', valor: 1800.00, categoria: 'Moradia' },
    { descricao: 'Supermercado', valor: 950.50, categoria: 'Alimentação' },
    { descricao: 'Internet Fibra', valor: 149.90, categoria: 'Utilidades' },
    { descricao: 'Energia Elétrica', valor: 280.40, categoria: 'Utilidades' }
]

const totalDespesas = despesas
    .map(d => d.valor)
    .reduce((acumulador, atual) => {
        console.log(`Auditoria -> Acumulador: ${acumulador.toFixed(2)}, Atual: ${atual.toFixed(2)}`)
        return acumulador + atual
    }, 0)

console.log('Total das despesas:', totalDespesas.toFixed(2)) // 3180.80
```
- **Critérios de Correção**:
  - Mapeamento e redução com valor inicial `0` (1,5 pts).
  - Log auditável das iterações exibindo o progresso do acumulador (1,5 pts).

---

#### Exercício 11.2 (3,0 pontos)
- **Objetivo**: Extrair máximos e mínimos comparativos através do acumulador de `.reduce()`.
- **Resolução de Referência**:
```javascript
const scores = [85, 42, 98, 73, 91, 64]

const maior = scores.reduce((acc, curr) => curr > acc ? curr : acc)
const menor = scores.reduce((acc, curr) => curr < acc ? curr : acc)

console.log('Maior:', maior) // 98
console.log('Menor:', menor) // 42
```
- **Critérios de Correção**:
  - Lógica ternária ou condicional correta dentro do acumulador (2,0 pts).
  - Execução limpa sem depender de `Math.max`/`Math.min` com spread (1,0 pt).

---

### Seção 12: Arquivo `a142_reduce2.js`
> **Tema Central**: Operações lógicas booleanas em coleções com `.reduce()` (`&&` para validação universal e `||` para validação existencial).

#### Exercício 12.1 (3,0 pontos)
- **Objetivo**: Responder às perguntas "Todos são... ?" e "Algum é... ?" comparando com `.every()` e `.some()`.
- **Resolução de Referência**:
```javascript
const itensEstoque = [
    { nome: 'Teclado Mecânico', emEstoque: true },
    { nome: 'Mouse sem Fio', emEstoque: true },
    { nome: 'Monitor 144Hz', emEstoque: false },
    { nome: 'Headset Gamer', emEstoque: true }
]

const statusEstoque = itensEstoque.map(i => i.emEstoque)

const todosEmEstoque = statusEstoque.reduce((acc, val) => acc && val)
const algumEmEstoque = statusEstoque.reduce((acc, val) => acc || val)

console.log('Todos em estoque?:', todosEmEstoque) // false
console.log('Algum em estoque?:', algumEmEstoque) // true
```
- **Critérios de Correção**:
  - Extração do array de booleanos com `.map()` (1,0 pt).
  - Uso correto do operador `&&` para equivalência com `.every()` (1,0 pt).
  - Uso correto do operador `||` para equivalência com `.some()` (1,0 pt).

---

#### Exercício 12.2 (3,0 pontos)
- **Objetivo**: Modularizar funções redutoras booleanas puras para avaliar elegibilidade de candidatos.
- **Resolução de Referência**:
```javascript
const candidatos = [
    { nome: 'Alice', graduado: true, experienciaMaisDe2Anos: true },
    { nome: 'Bernardo', graduado: true, experienciaMaisDe2Anos: false },
    { nome: 'Camila', graduado: false, experienciaMaisDe2Anos: true },
    { nome: 'Diego', graduado: true, experienciaMaisDe2Anos: true }
]

const todosSao = (acc, atual) => acc && atual
const aoMenosUm = (acc, atual) => acc || atual

const todosGraduados = candidatos.map(c => c.graduado).reduce(todosSao)
const algumComExperiencia = candidatos.map(c => c.experienciaMaisDe2Anos).reduce(aoMenosUm)

console.log('Todos são graduados?:', todosGraduados) // false
console.log('Ao menos um tem >2 anos de experiência?:', algumComExperiencia) // true
```
- **Critérios de Correção**:
  - Funções redutoras reutilizáveis `todosSao` e `aoMenosUm` (1,5 pts).
  - Aplicação correta do pipeline funcional (1,5 pts).

---

### Seção 13: Arquivo `a143_reduce3.js`
> **Tema Central**: Implementação artesanal de `reduce2` no protótipo nativo tratando adequadamente o ponto de partida e o `valorInicial`.

#### Exercício 13.1 (4,0 pontos)
- **Objetivo**: Construir `reduce2` tratando especificamente valores como `0` com `valorInicial !== undefined`.
- **Resolução de Referência**:
```javascript
Array.prototype.reduce2 = function (callback, valorInicial) {
    const temValorInicial = valorInicial !== undefined
    const indiceInicial = temValorInicial ? 0 : 1
    let acumulador = temValorInicial ? valorInicial : this[0]

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const valores = [10, 20, 30, 40]
const soma = (total, n) => total + n

console.log(valores.reduce2(soma, 0)) // 100 (iniciou com 0 no índice 0)
console.log(valores.reduce2(soma))    // 100 (iniciou com 10 no índice 1)
```
- **Critérios de Correção**:
  - Checagem robusta `valorInicial !== undefined` (não usar apenas `valorInicial || this[0]`) (2,0 pts).
  - Seleção dinâmica do `indiceInicial` (0 ou 1) (1,0 pt).
  - Testes com e sem valor inicial produzindo a soma correta (1,0 pt).

---

#### Exercício 13.2 (3,0 pontos)
- **Objetivo**: Agregar strings e tags em formato hashtag usando o `reduce2` artesanal.
- **Resolução de Referência**:
```javascript
const tags = ['javascript', 'web', 'frontend', 'programacao']

const hashtags = tags.reduce2((acc, tag) => `${acc} #${tag}`, '').trim()
console.log(hashtags) // "#javascript #web #frontend #programacao"
```
- **Critérios de Correção**:
  - Acumulação de texto concatenado formatado (1,5 pts).
  - Utilização da string inicial vazia `''` evitando prefixo indevido (1,5 pts).

---

### Seção 14: Arquivo `a144_imperativoVsDeclarativo.js`
> **Tema Central**: Paradigmas de Programação: Imperativo (*Como Fazer*, controle manual de laços e estados) vs Declarativo (*O Que Fazer*, intenção, reuso e funções puras).

#### Exercício 14.1 (3,5 pontos)
- **Objetivo**: Comparar o cálculo de média de faturamento sob as duas abordagens.
- **Resolução de Referência**:
```javascript
const vendas = [
    { id: 101, valor: 350.00, status: 'pago' },
    { id: 102, valor: 120.00, status: 'cancelado' },
    { id: 103, valor: 890.00, status: 'pago' },
    { id: 104, valor: 450.00, status: 'pago' },
    { id: 105, valor: 210.00, status: 'pendente' }
]

// 1. IMPERATIVO:
let totalImperativo = 0
let qtdPagasImperativo = 0
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i].status === 'pago') {
        totalImperativo += vendas[i].valor
        qtdPagasImperativo++
    }
}
const mediaImperativa = totalImperativo / qtdPagasImperativo

// 2. DECLARATIVO:
const isPago = v => v.status === 'pago'
const getValor = v => v.valor
const somar = (acc, cur) => acc + cur

const vendasPagas = vendas.filter(isPago)
const mediaDeclarativa = vendasPagas.map(getValor).reduce(somar) / vendasPagas.length

console.log('Média Imperativa:', mediaImperativa.toFixed(2)) // 563.33
console.log('Média Declarativa:', mediaDeclarativa.toFixed(2)) // 563.33
```
- **Critérios de Correção**:
  - Código imperativo correto com controle manual de laço (1,5 pts).
  - Código declarativo elegante com composição funcional pura (2,0 pts).

---

#### Exercício 14.2 (3,0 pontos)
- **Objetivo**: Contagem de strings por predicado demonstrando a concisão da programação funcional.
- **Resolução de Referência**:
```javascript
const clientes = ['Ana', 'Guilherme', 'Bia', 'Leonardo', 'Clara', 'Sebastião']

// Imperativo:
let contadorImperativo = 0
for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].length > 5) {
        contadorImperativo++
    }
}

// Declarativo:
const temMaisDe5Letras = nome => nome.length > 5
const contadorDeclarativo = clientes.filter(temMaisDe5Letras).length

console.log(contadorImperativo) // 3
console.log(contadorDeclarativo) // 3
```
- **Critérios de Correção**:
  - Implementação imperativa via loop `for` (1,0 pt).
  - Implementação declarativa via `.filter()` e `.length` (2,0 pts).

---

### Seção 15: Arquivo `a145_concat.js`
> **Tema Central**: Concatenação imutável com `.concat()`, desempacotamento de primeiro nível e comparação com o Spread Operator (`...`).

#### Exercício 15.1 (3,0 pontos)
- **Objetivo**: Unir múltiplos arrays mantendo imutabilidade e comparar com sintaxe ES6 de espalhamento.
- **Resolução de Referência**:
```javascript
const design = ['Paula', 'Lucas']
const dev = ['Mateus', 'Camila']
const qa = ['Juliana']

const timeCompleto = design.concat(dev, qa, 'Dr. Fernando')
const timeSpread = [...design, ...dev, ...qa, 'Dr. Fernando']

console.log(timeCompleto)
// [ 'Paula', 'Lucas', 'Mateus', 'Camila', 'Juliana', 'Dr. Fernando' ]
console.log(design.length === 2 && dev.length === 2 && qa.length === 1) // true (imutabilidade)
```
- **Critérios de Correção**:
  - Uso correto de `.concat()` com múltiplos arrays e argumento avulso (1,5 pts).
  - Implementação equivalente com operador Spread (`...`) (1,0 pt).
  - Comprovação da imutabilidade dos arrays originais (0,5 pt).

---

#### Exercício 15.2 (3,0 pontos)
- **Objetivo**: Diagnosticar o comportamento de achatamento raso (1º nível) do `.concat()`.
- **Resolução de Referência**:
```javascript
const resultado = [].concat([10, 20], 30, [40, [50, 60]])
console.log(resultado)
// Saída: [ 10, 20, 30, 40, [ 50, 60 ] ]
```
- **Análise Técnica**:
  - O método `.concat()` desempacota automaticamente arrays simples passados como argumento (1 nível).
  - Matrizes aninhadas com 2 ou mais níveis de profundidade (como `[[50, 60]]`) têm apenas a camada externa removida, preservando o subarray interno `[50, 60]` intacto.
- **Critérios de Correção**:
  - Expressão executada e resultado correto (1,5 pts).
  - Explicação técnica sobre o desempacotamento de 1 único nível (1,5 pts).

---

### Seção 16: Arquivo `a146_flatMap.js`
> **Tema Central**: Mapeamento combinado com achatamento de matrizes multidimensionais (`flatMap`) via `.apply` e métodos modernos.

#### Exercício 16.1 (3,5 pontos)
- **Objetivo**: Implementar `flatMap` artesanal com `concat.apply` e linearizar matriz de módulos de cursos.
- **Resolução de Referência**:
```javascript
Array.prototype.meuFlatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const plataforma = [
    { curso: 'JavaScript Master', modulos: ['Fundamentos', 'Objetos', 'Arrays'] },
    { curso: 'Node.js Pro', modulos: ['HTTP', 'Express', 'Prisma'] },
    { curso: 'DevOps Cloud', modulos: ['Docker', 'Kubernetes'] }
]

const modulosMatriz = plataforma.map(c => c.modulos)
// Saída: [ [ 'Fundamentos', ... ], [ 'HTTP', ... ], [ 'Docker', ... ] ]

const modulosAchatados = plataforma.meuFlatMap(c => c.modulos)
// Saída: [ 'Fundamentos', 'Objetos', 'Arrays', 'HTTP', 'Express', 'Prisma', 'Docker', 'Kubernetes' ]
```
- **Critérios de Correção**:
  - Implementação de `meuFlatMap` usando `Array.prototype.concat.apply([], ...)` (2,0 pts).
  - Demonstração do problema da matriz aninhada com `.map` (0,5 pt).
  - Extração linear bem-sucedida com o método artesanal (1,0 pt).

---

#### Exercício 16.2 (3,5 pontos)
- **Objetivo**: Extrair tags aninhadas com `flatMap` e deduplicar os valores finais com `Set`.
- **Resolução de Referência**:
```javascript
const posts = [
    { id: 1, tags: ['#js', '#web'] },
    { id: 2, tags: ['#programacao', '#coding', '#js'] },
    { id: 3, tags: ['#dev', '#frontend'] }
]

const todasTags = posts.meuFlatMap(p => p.tags)
const tagsUnicas = [...new Set(todasTags)]

console.log('Todas as tags:', todasTags)
// [ '#js', '#web', '#programacao', '#coding', '#js', '#dev', '#frontend' ]
console.log('Tags únicas:', tagsUnicas)
// [ '#js', '#web', '#programacao', '#coding', '#dev', '#frontend' ]
```
- **Critérios de Correção**:
  - Achatamento correto de todas as listas de tags (2,0 pts).
  - Deduplicação de elementos via `new Set()` e reestruturação em array (1,5 pts).

---

## 4. Guia Rápido de Boas Práticas e Anti-patterns em Arrays

1. **Evite forçar loops manuais quando existir método declarativo**:
   - ❌ Anti-pattern: Usar `for (let i = 0; i < arr.length; i++)` para filtrar ou transformar elementos.
   -  Padrão Recomendado: Usar `.map()` para transformar e `.filter()` para selecionar.

2. **Cuidado com a Imutabilidade**:
   - Métodos **mutáveis** (alteram o array original): `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`, `.sort()`, `.reverse()`.
   - Métodos **imutáveis** (retornam um novo array): `.map()`, `.filter()`, `.slice()`, `.concat()`, `.flat()`, `.flatMap()`.

3. **Cuidado com o `return` no callback de `.map()`**:
   - Se o callback de um `.map()` não retornar nada explicitamente, o novo array será preenchido com `undefined`.

4. **Tratamento de `valorInicial` no `.reduce()`**:
   - Sempre forneça o segundo argumento de `.reduce()` quando operar em arrays de objetos ou quando esperar um tipo de retorno diferente dos elementos do array (ex: somar objetos retornando um número).
