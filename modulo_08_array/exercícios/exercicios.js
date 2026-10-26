// =============================================================================
// CADERNO DE EXERCÍCIOS PRÁTICOS: MÓDULO 08 - ARRAYS EM JAVASCRIPT
// =============================================================================
// Curso: JavaScript Completo - Cod3r
// Diretório: modulo_08_array/exercícios/exercicios.js
// 
// INSTRUÇÕES GERAIS:
// 1. Cada seção abaixo contém no mínimo 2 exercícios práticos diretamente vinculados
//    aos arquivos de aula (de a131_array.js até a146_flatMap.js).
// 2. Os enunciados especificam o arquivo de referência que você deve consultar
//    para aplicar as técnicas e padrões ensinados.
// 3. Resolva os exercícios escrevendo seu código nos espaços designados (// SUA RESOLUÇÃO AQUI).
// 4. Para testar e verificar suas respostas, execute este arquivo no terminal com:
//    node modulo_08_array/exercícios/exercicios.js
// 5. Consulte o arquivo 'barema_exercicios.md' para conferir os critérios de
//    avaliação, pontuação detalhada e o gabarito oficial comentado.
// =============================================================================

console.log('=============================================================================')
console.log('INICIANDO EXECUÇÃO DO CADERNO DE EXERCÍCIOS - MÓDULO 08 (ARRAYS)')
console.log('=============================================================================\n')


// =============================================================================
// SEÇÃO 1: ARQUIVO DE REFERÊNCIA -> a131_array.js
// CONCEITOS: Natureza do Array, Notação Literal vs Construtora, Arrays Esparsos,
//            Ordenação com .sort(), Exclusão com delete vs .splice().
// =============================================================================

/**
 * EXERCÍCIO 1.1
 * Baseando-se nas técnicas ensinadas no arquivo a131_array.js:
 * 1. Crie um array literal chamado `equipamentos` com 3 itens: 'Bola', 'Rede', 'Chuteira'.
 * 2. Atribua o valor 'Uniforme' diretamente ao índice 6 (criando um array esparso).
 * 3. Verifique e imprima o tamanho (length) atual do array e confirme via comparação estrita (===)
 *    se o índice 4 possui o valor `undefined`.
 * 4. Por fim, aplique o método `.sort()` para ordenar alfabeticamente e imprima o array,
 *    observando a mutação sofrida pelo array original.
 */
console.log('--- Exercício 1.1 (Ref: a131_array.js) ---')
function exercicio1_1() {
    // SUA RESOLUÇÃO AQUI
    let equipamentos = ['Bola', 'Rede', 'Chuteira']
    equipamentos[6] = 'Uniforme'
    
    console.log('Tamanho do array:', equipamentos.length)
    console.log('Índice 4 é undefined?', equipamentos[4] === undefined)
    
    equipamentos.sort()
    console.log('Array ordenado (.sort):', equipamentos)
}
exercicio1_1()
console.log()

/**
 * EXERCÍCIO 1.2
 * Baseando-se nas técnicas ensinadas no arquivo a131_array.js:
 * Demonstre a diferença fundamental entre o operador `delete` e o método `.splice()`:
 * 1. Crie um array `cidadesA` com ['Curitiba', 'Recife', 'Manaus', 'Salvador', 'Brasília'].
 *    Exclua o elemento do índice 2 usando `delete`. Imprima o array, o seu `length` e
 *    o valor em `cidadesA[2]`.
 * 2. Crie um array `cidadesB` idêntico ao original. Use `.splice()` a partir do índice 2
 *    para remover 1 elemento e adicionar simultaneamente 'Florianópolis' e 'Fortaleza'.
 *    Imprima o array resultante e seu novo `length`.
 */
console.log('--- Exercício 1.2 (Ref: a131_array.js) ---')
function exercicio1_2() {
    // SUA RESOLUÇÃO AQUI
    let cidadesA = ['Curitiba', 'Recife', 'Manaus', 'Salvador', 'Brasília']
    delete cidadesA[2]
    console.log('delete -> Array:', cidadesA, '| Length:', cidadesA.length, '| cidadesA[2]:', cidadesA[2])

    let cidadesB = ['Curitiba', 'Recife', 'Manaus', 'Salvador', 'Brasília']
    cidadesB.splice(2, 1, 'Florianópolis', 'Fortaleza')
    console.log('splice -> Array:', cidadesB, '| Length:', cidadesB.length)
}
exercicio1_2()
console.log()


// =============================================================================
// SEÇÃO 2: ARQUIVO DE REFERÊNCIA -> a132_arrayMetodos.js
// CONCEITOS: Métodos Mutáveis (.pop, .push, .shift, .unshift, .splice) vs
//            Métodos Imutáveis (.slice).
// =============================================================================

/**
 * EXERCÍCIO 2.1
 * Baseando-se nas técnicas ensinadas no arquivo a132_arrayMetodos.js:
 * Simule o controle de uma fila de atendimento bancário:
 * 1. Inicialize a fila com: ['Maria', 'João', 'Eduardo'].
 * 2. Chegaram dois clientes prioritários: adicione 'Helena' e depois 'Carlos' no INÍCIO da fila.
 * 3. Chegou um cliente convencional: adicione 'Beatriz' no FINAL da fila.
 * 4. Atenda o primeiro cliente da fila (remova do início) e guarde em uma variável `atendido`.
 * 5. O último cliente da fila desistiu de esperar (remova do final) e guarde em `desistente`.
 * 6. Um gerente inseriu um cliente VIP 'Arthur' exatamente na posição 2 (sem remover ninguém).
 * Imprima o cliente atendido, o desistente e a fila final resultante.
 */
console.log('--- Exercício 2.1 (Ref: a132_arrayMetodos.js) ---')
function exercicio2_1() {
    // SUA RESOLUÇÃO AQUI
    const fila = ['Maria', 'João', 'Eduardo']
    fila.unshift('Helena')
    fila.unshift('Carlos')
    fila.push('Beatriz')
    const atendido = fila.shift()
    const desistente = fila.pop()
    fila.splice(2, 0, 'Arthur')

    console.log('Atendido:', atendido)
    console.log('Desistente:', desistente)
    console.log('Fila Final:', fila)
}
exercicio2_1()
console.log()

/**
 * EXERCÍCIO 2.2
 * Baseando-se nas técnicas ensinadas no arquivo a132_arrayMetodos.js:
 * Trabalhe com o método imutável `.slice()`:
 * 1. Dado o array `linguagens = ['JS', 'Python', 'Go', 'Rust', 'Java', 'C#', 'Ruby', 'Kotlin']`.
 * 2. Crie uma nova variável `blocoIntermediario` contendo os elementos do índice 2 até o 5 (inclusive o 2, sem incluir o 5).
 * 3. Crie uma nova variável `ultimasLinguagens` extraindo apenas os 3 últimos elementos utilizando índice negativo.
 * 4. Imprima as duas novas variáveis e imprima `linguagens` comprovando que o array original permaneceu intacto.
 */
console.log('--- Exercício 2.2 (Ref: a132_arrayMetodos.js) ---')
function exercicio2_2() {
    // SUA RESOLUÇÃO AQUI
    const linguagens = ['JS', 'Python', 'Go', 'Rust', 'Java', 'C#', 'Ruby', 'Kotlin']
    const blocoIntermediario = linguagens.slice(2, 5)
    const ultimasLinguagens = linguagens.slice(-3)

    console.log('Bloco Intermediário (2 a 5):', blocoIntermediario)
    console.log('Últimas 3 linguagens:', ultimasLinguagens)
    console.log('Array original intacto?:', linguagens.length === 8, linguagens)
}
exercicio2_2()
console.log()


// =============================================================================
// SEÇÃO 3: ARQUIVO DE REFERÊNCIA -> a133_simulandoArray.js
// CONCEITOS: Estrutura Interna de Array como Objeto, Índices Numéricos como Chaves,
//            Object.defineProperty com enumerable: false, Simulação de Array-like.
// =============================================================================

/**
 * EXERCÍCIO 3.1
 * Baseando-se nas técnicas ensinadas no arquivo a133_simulandoArray.js:
 * 1. Crie um objeto `colecaoFrutas` com as propriedades: { 0: 'Maçã', 1: 'Banana', 2: 'Morango', 3: 'Manga' }.
 * 2. Adicione a ele, utilizando `Object.defineProperty`, o método `toString` que retorne
 *    `Object.values(this)`, configurando a propriedade como não enumerável (`enumerable: false`).
 * 3. Acesse o elemento do índice 1 usando colchetes `colecaoFrutas[1]`.
 * 4. Execute `Object.keys(colecaoFrutas)` e mostre no console que a propriedade `toString`
 *    não aparece na lista de chaves enumeradas.
 */
console.log('--- Exercício 3.1 (Ref: a133_simulandoArray.js) ---')
function exercicio3_1() {
    // SUA RESOLUÇÃO AQUI
    const colecaoFrutas = { 0: 'Maçã', 1: 'Banana', 2: 'Morango', 3: 'Manga' }
    Object.defineProperty(colecaoFrutas, 'toString', {
        value: function () {
            return Object.values(this)
        },
        enumerable: false
    })

    console.log('Item no índice 1:', colecaoFrutas[1])
    console.log('Representação toString():', colecaoFrutas.toString())
    console.log('Chaves enumeráveis (Object.keys):', Object.keys(colecaoFrutas))
}
exercicio3_1()
console.log()

/**
 * EXERCÍCIO 3.2
 * Baseando-se nas técnicas ensinadas no arquivo a133_simulandoArray.js:
 * Aprofunde a simulação de array criando um objeto array-like completo:
 * 1. Crie um objeto `pseudoVetor` com { 0: 'Vermelho', 1: 'Verde', 2: 'Azul' }.
 * 2. Utilize `Object.defineProperty` para criar um getter `length` (não enumerável)
 *    que retorne dinamicamente a contagem de propriedades com chaves numéricas existentes no objeto.
 * 3. Teste acessando `pseudoVetor.length`.
 * 4. Adicione manualmente `pseudoVetor[3] = 'Amarelo'` e verifique se `pseudoVetor.length` agora reflete 4.
 */
console.log('--- Exercício 3.2 (Ref: a133_simulandoArray.js) ---')
function exercicio3_2() {
    // SUA RESOLUÇÃO AQUI
    const pseudoVetor = { 0: 'Vermelho', 1: 'Verde', 2: 'Azul' }
    Object.defineProperty(pseudoVetor, 'length', {
        get: function () {
            return Object.keys(this).filter(k => !isNaN(k)).length
        },
        enumerable: false
    })

    console.log('Length inicial:', pseudoVetor.length)
    pseudoVetor[3] = 'Amarelo'
    console.log('Length após adicionar índice 3:', pseudoVetor.length)
    console.log('pseudoVetor[3]:', pseudoVetor[3])
}
exercicio3_2()
console.log()


// =============================================================================
// SEÇÃO 4: ARQUIVO DE REFERÊNCIA -> a134_foreach1.js
// CONCEITOS: Iteração funcional com .forEach(), Parâmetros do Callback
//            (elemento, índice, array), Arrow Functions e Efeitos Colaterais.
// =============================================================================

/**
 * EXERCÍCIO 4.1
 * Baseando-se nas técnicas ensinadas no arquivo a134_foreach1.js:
 * 1. Dado o array de funcionários:
 *    const funcionarios = [
 *        { nome: 'Ana', salario: 4500 },
 *        { nome: 'Bruno', salario: 7200 },
 *        { nome: 'Carla', salario: 3100 },
 *        { nome: 'Daniel', salario: 5800 }
 *    ]
 * 2. Utilize o `.forEach()` consumindo os 3 parâmetros da função callback (elemento, índice e array completo).
 * 3. Para cada funcionário, imprima:
 *    "Registro [indice + 1] de [array.length]: [nome] ganha R$ [salario.toFixed(2)]"
 */
console.log('--- Exercício 4.1 (Ref: a134_foreach1.js) ---')
function exercicio4_1() {
    // SUA RESOLUÇÃO AQUI
    const funcionarios = [
        { nome: 'Ana', salario: 4500 },
        { nome: 'Bruno', salario: 7200 },
        { nome: 'Carla', salario: 3100 },
        { nome: 'Daniel', salario: 5800 }
    ]

    funcionarios.forEach((funcionario, indice, arrayCompleto) => {
        console.log(`Registro ${indice + 1} de ${arrayCompleto.length}: ${funcionario.nome} ganha R$ ${funcionario.salario.toFixed(2)}`)
    })
}
exercicio4_1()
console.log()

/**
 * EXERCÍCIO 4.2
 * Baseando-se nas técnicas ensinadas no arquivo a134_foreach1.js:
 * 1. Crie uma função nomeada externa chamada `classificarTemperatura(temp)`.
 *    A função deve imprimir:
 *    - "< temp >°C: Frio" para temperaturas abaixo de 18°C;
 *    - "< temp >°C: Agradável" entre 18°C e 26°C;
 *    - "< temp >°C: Quente" para temperaturas acima de 26°C.
 * 2. Itere sobre `[12, 22, 31, 17, 25]` passando essa função nomeada como callback do `.forEach()`.
 * 3. Mostre também que atribuir o retorno de `.forEach()` a uma variável resulta estritamente em `undefined`.
 */
console.log('--- Exercício 4.2 (Ref: a134_foreach1.js) ---')
function exercicio4_2() {
    // SUA RESOLUÇÃO AQUI
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
    console.log('Retorno do forEach é undefined?:', retorno === undefined)
}
exercicio4_2()
console.log()


// =============================================================================
// SEÇÃO 5: ARQUIVO DE REFERÊNCIA -> a135_foreach2.js
// CONCEITOS: Implementação Artesanal de Métodos no Array.prototype,
//            Uso do 'this', Invocação de Callbacks com Parâmetros Corretos.
// =============================================================================

/**
 * EXERCÍCIO 5.1
 * Baseando-se nas técnicas ensinadas no arquivo a135_foreach2.js:
 * 1. Crie no protótipo nativo de Array um método chamado `meuForEach`.
 * 2. O método deve iterar sobre a instância (`this`) usando um loop `for` tradicional
 *    e invocar a função de callback fornecida com os 3 argumentos esperados:
 *    elemento atual, índice atual e o array inteiro.
 * 3. Teste seu método em um array `['Uva', 'Pera', 'Maçã']` imprimindo cada fruta com seu índice.
 */
console.log('--- Exercício 5.1 (Ref: a135_foreach2.js) ---')
function exercicio5_1() {
    // SUA RESOLUÇÃO AQUI
    Array.prototype.meuForEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)
        }
    }

    const frutas = ['Uva', 'Pera', 'Maçã']
    frutas.meuForEach((fruta, i) => {
        console.log(`Fruta no índice ${i}: ${fruta}`)
    })
}
exercicio5_1()
console.log()

/**
 * EXERCÍCIO 5.2
 * Baseando-se nas técnicas ensinadas no arquivo a135_foreach2.js:
 * 1. Implemente uma versão mais robusta chamada `forEachSeguro` no `Array.prototype`.
 * 2. Antes de iniciar a iteração, valide se o callback é uma função (`typeof callback === 'function'`).
 *    Caso não seja, lance um erro com `throw new TypeError('Callback fornecido não é uma função!')`.
 * 3. Use o `forEachSeguro` em um array `[10, 20, 30]` para somar os valores em uma variável externa.
 * 4. Envolva em um bloco `try / catch` uma chamada inválida passando `null` como callback e exiba a mensagem de erro capturada.
 */
console.log('--- Exercício 5.2 (Ref: a135_foreach2.js) ---')
function exercicio5_2() {
    // SUA RESOLUÇÃO AQUI
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
    console.log('Soma com forEachSeguro:', soma)

    try {
        ;[1, 2, 3].forEachSeguro(null)
    } catch (err) {
        console.log('Exceção capturada com sucesso:', err.message)
    }
}
exercicio5_2()
console.log()


// =============================================================================
// SEÇÃO 6: ARQUIVO DE REFERÊNCIA -> a136_map1.js
// CONCEITOS: Transformação 1:1 com .map(), Imutabilidade, Encadeamento de Maps,
//            Pipelines de Funções Puras.
// =============================================================================

/**
 * EXERCÍCIO 6.1
 * Baseando-se nas técnicas ensinadas no arquivo a136_map1.js:
 * 1. Dado o array de preços brutos: `const precos = [100.0, 45.5, 230.0, 89.9, 12.0]`.
 * 2. Crie três funções puras:
 *    - `aplicarDesconto`: subtrai 10% do valor.
 *    - `adicionarFrete`: soma uma taxa fixa de R$ 8.50.
 *    - `formatarReal`: converte o número para o padrão monetário brasileiro `"R$ XX,XX"`.
 * 3. Encadeie os três métodos `.map()` a partir do array `precos`.
 * 4. Imprima o array resultante e o array original `precos`, comprovando a imutabilidade.
 */
console.log('--- Exercício 6.1 (Ref: a136_map1.js) ---')
function exercicio6_1() {
    // SUA RESOLUÇÃO AQUI
    const precos = [100.0, 45.5, 230.0, 89.9, 12.0]

    const aplicarDesconto = val => val * 0.90
    const adicionarFrete = val => val + 8.50
    const formatarReal = val => `R$ ${val.toFixed(2).replace('.', ',')}`

    const precosFinais = precos.map(aplicarDesconto).map(adicionarFrete).map(formatarReal)

    console.log('Preços Finais Formatados:', precosFinais)
    console.log('Array original intacto?:', precos)
}
exercicio6_1()
console.log()

/**
 * EXERCÍCIO 6.2
 * Baseando-se nas técnicas ensinadas no arquivo a136_map1.js:
 * Crie um pipeline funcional para processar um array de strings:
 * 1. Dado `const palavras = ['javascript', 'typescript', 'react', 'nodejs', 'docker']`.
 * 2. Crie a função `capitalizar`: transforma a primeira letra em maiúscula (ex: 'javascript' -> 'Javascript').
 * 3. Crie a função `adicionarTamanho`: anexa ao final a quantidade de caracteres entre colchetes (ex: 'Javascript [10]').
 * 4. Encadeie as duas funções usando `.map()` e imprima o array transformado.
 */
console.log('--- Exercício 6.2 (Ref: a136_map1.js) ---')
function exercicio6_2() {
    // SUA RESOLUÇÃO AQUI
    const palavras = ['javascript', 'typescript', 'react', 'nodejs', 'docker']

    const capitalizar = p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
    const adicionarTamanho = p => `${p} [${p.length}]`

    const resultado = palavras.map(capitalizar).map(adicionarTamanho)
    console.log('Palavras transformadas:', resultado)
}
exercicio6_2()
console.log()


// =============================================================================
// SEÇÃO 7: ARQUIVO DE REFERÊNCIA -> a137_map2.js
// CONCEITOS: Parsing de JSON com JSON.parse(), Extração e Mapeamento de Atributos.
// =============================================================================

/**
 * EXERCÍCIO 7.1
 * Baseando-se nas técnicas ensinadas no arquivo a137_map2.js:
 * Simule a extração de dados recebidos de uma API REST:
 * 1. Dado o array de strings JSON representando usuários:
 *    const usuariosJSON = [
 *        '{ "id": 1, "nome": "Larissa", "setor": "Financeiro", "ativo": true }',
 *        '{ "id": 2, "nome": "Marcos", "setor": "TI", "ativo": false }',
 *        '{ "id": 3, "nome": "Renata", "setor": "RH", "ativo": true }'
 *    ]
 * 2. Crie a função `parseJSON` para converter cada string em objeto JavaScript.
 * 3. Crie a função `gerarCracha` que recebe o objeto de usuário e retorna a string:
 *    "[NOME] (Setor: [SETOR])"
 * 4. Encadeie os métodos `.map()` e exiba o array final com os crachás.
 */
console.log('--- Exercício 7.1 (Ref: a137_map2.js) ---')
function exercicio7_1() {
    // SUA RESOLUÇÃO AQUI
    const usuariosJSON = [
        '{ "id": 1, "nome": "Larissa", "setor": "Financeiro", "ativo": true }',
        '{ "id": 2, "nome": "Marcos", "setor": "TI", "ativo": false }',
        '{ "id": 3, "nome": "Renata", "setor": "RH", "ativo": true }'
    ]

    const parseJSON = json => JSON.parse(json)
    const gerarCracha = user => `${user.nome} (Setor: ${user.setor})`

    const crachas = usuariosJSON.map(parseJSON).map(gerarCracha)
    console.log('Crachás gerados:', crachas)
}
exercicio7_1()
console.log()

/**
 * EXERCÍCIO 7.2
 * Baseando-se nas técnicas ensinadas no arquivo a137_map2.js:
 * 1. Dado o array de itens faturados em formato JSON:
 *    const itensNota = [
 *        '{ "produto": "Monitor 27", "quantidade": 2, "valorUnitario": 1200.00 }',
 *        '{ "produto": "Cabo HDMI", "quantidade": 5, "valorUnitario": 35.50 }',
 *        '{ "produto": "Suporte Articulado", "quantidade": 1, "valorUnitario": 180.00 }'
 *    ]
 * 2. Crie um pipeline funcional utilizando `.map()` que transforme essas strings em objetos
 *    e calcule o subtotal de cada item (`quantidade * valorUnitario`).
 * 3. O pipeline deve retornar um array de números contendo apenas os subtotais calculados.
 */
console.log('--- Exercício 7.2 (Ref: a137_map2.js) ---')
function exercicio7_2() {
    // SUA RESOLUÇÃO AQUI
    const itensNota = [
        '{ "produto": "Monitor 27", "quantidade": 2, "valorUnitario": 1200.00 }',
        '{ "produto": "Cabo HDMI", "quantidade": 5, "valorUnitario": 35.50 }',
        '{ "produto": "Suporte Articulado", "quantidade": 1, "valorUnitario": 180.00 }'
    ]

    const converterParaObjeto = str => JSON.parse(str)
    const calcularSubtotal = item => item.quantidade * item.valorUnitario

    const subtotais = itensNota.map(converterParaObjeto).map(calcularSubtotal)
    console.log('Subtotais calculados:', subtotais)
}
exercicio7_2()
console.log()


// =============================================================================
// SEÇÃO 8: ARQUIVO DE REFERÊNCIA -> a138_map3.js
// CONCEITOS: Implementação Manual do .map() no Protótipo (map2), Imutabilidade,
//            Criação de Novo Array Populado via Callback.
// =============================================================================

/**
 * EXERCÍCIO 8.1
 * Baseando-se nas técnicas ensinadas no arquivo a138_map3.js:
 * 1. Implemente o método `map2` no `Array.prototype`.
 * 2. O método deve criar internamente um novo array (`const novoArray = []`),
 *    iterar pelos elementos do array original chamando o callback com `(this[i], i, this)`,
 *    fazer o `.push()` do resultado no novo array e retorná-lo ao final.
 * 3. Teste seu método em um array `numeros = [2, 4, 6, 8]` para calcular o cubo ($x^3$) de cada número.
 * 4. Mostre que `numeros` não foi mutado.
 */
console.log('--- Exercício 8.1 (Ref: a138_map3.js) ---')
function exercicio8_1() {
    // SUA RESOLUÇÃO AQUI
    Array.prototype.map2 = function (callback) {
        const novoArray = []
        for (let i = 0; i < this.length; i++) {
            novoArray.push(callback(this[i], i, this))
        }
        return novoArray
    }

    const numeros = [2, 4, 6, 8]
    const cubos = numeros.map2(n => n ** 3)

    console.log('Cubos com map2:', cubos)
    console.log('Array original intacto?:', numeros)
}
exercicio8_1()
console.log()

/**
 * EXERCÍCIO 8.2
 * Baseando-se nas técnicas ensinadas no arquivo a138_map3.js:
 * 1. Utilizando a sua implementação de `map2`, processe o seguinte array de alunos:
 *    const estudantes = [
 *        { nome: 'Pedro', notas: [8.0, 7.0, 9.0] },
 *        { nome: 'Carla', notas: [6.0, 5.5, 7.5] },
 *        { nome: 'Tiago', notas: [9.5, 9.0, 10.0] }
 *    ]
 * 2. O callback deve transformar cada estudante em um novo objeto no formato:
 *    `{ nome: estudante.nome, media: [Média calculada com 1 casa decimal] }`
 * 3. Imprima o array resultante produzido pelo `map2`.
 */
console.log('--- Exercício 8.2 (Ref: a138_map3.js) ---')
function exercicio8_2() {
    // SUA RESOLUÇÃO AQUI
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

    console.log('Estudantes com Médias Calculadas:', medias)
}
exercicio8_2()
console.log()


// =============================================================================
// SEÇÃO 9: ARQUIVO DE REFERÊNCIA -> a139_filter1.js
// CONCEITOS: Filtragem com .filter(), Funções Predicado Puras, Retorno Booleano,
//            Composição e Encadeamento de Filtros.
// =============================================================================

/**
 * EXERCÍCIO 9.1
 * Baseando-se nas técnicas ensinadas no arquivo a139_filter1.js:
 * 1. Dado o catálogo de veículos:
 *    const veiculos = [
 *        { modelo: 'Sedan Confort', ano: 2021, eletrico: true, preco: 145000 },
 *        { modelo: 'Compacto Eco', ano: 2018, eletrico: false, preco: 52000 },
 *        { modelo: 'SUV Premium', ano: 2023, eletrico: true, preco: 280000 },
 *        { modelo: 'Hatch Sport', ano: 2019, eletrico: false, preco: 78000 },
 *        { modelo: 'Crossover EV', ano: 2022, eletrico: true, preco: 195000 }
 *    ]
 * 2. Crie duas funções predicado:
 *    - `isSeminovo`: veículos fabricados a partir de 2021 (`ano >= 2021`).
 *    - `isEletrico`: veículos que possuem `eletrico === true`.
 * 3. Encadeie `.filter(isSeminovo).filter(isEletrico)` e exiba a lista de veículos aprovados.
 */
console.log('--- Exercício 9.1 (Ref: a139_filter1.js) ---')
function exercicio9_1() {
    // SUA RESOLUÇÃO AQUI
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
    console.log('Veículos seminovos e elétricos:', selecionados)
}
exercicio9_1()
console.log()

/**
 * EXERCÍCIO 9.2
 * Baseando-se nas técnicas ensinadas no arquivo a139_filter1.js:
 * 1. Dado o array de transações financeiras:
 *    const transacoes = [
 *        { id: 'T1', valor: 350.0, tipo: 'CREDITO', confirmada: true },
 *        { id: 'T2', valor: 1200.0, tipo: 'DEBITO', confirmada: true },
 *        { id: 'T3', valor: 5400.0, tipo: 'CREDITO', confirmada: false },
 *        { id: 'T4', valor: 850.0, tipo: 'CREDITO', confirmada: true },
 *        { id: 'T5', valor: 3000.0, tipo: 'DEBITO', confirmada: false }
 *    ]
 * 2. Crie predicados para filtrar apenas transações que sejam de 'CREDITO' e que estejam `confirmadas`.
 * 3. Demonstre também no console o comportamento de um predicado que retorna sempre `false` (array vazio)
 *    e um predicado que retorna sempre `true` (array com todos os elementos).
 */
console.log('--- Exercício 9.2 (Ref: a139_filter1.js) ---')
function exercicio9_2() {
    // SUA RESOLUÇÃO AQUI
    const transacoes = [
        { id: 'T1', valor: 350.0, tipo: 'CREDITO', confirmada: true },
        { id: 'T2', valor: 1200.0, tipo: 'DEBITO', confirmada: true },
        { id: 'T3', valor: 5400.0, tipo: 'CREDITO', confirmada: false },
        { id: 'T4', valor: 850.0, tipo: 'CREDITO', confirmada: true },
        { id: 'T5', valor: 3000.0, tipo: 'DEBITO', confirmada: false }
    ]

    const isCredito = t => t.tipo === 'CREDITO'
    const isConfirmada = t => t.confirmada

    console.log('Créditos confirmados:', transacoes.filter(isCredito).filter(isConfirmada))
    console.log('Filtro sempre false:', transacoes.filter(() => false))
    console.log('Filtro sempre true (comprimento):', transacoes.filter(() => true).length)
}
exercicio9_2()
console.log()


// =============================================================================
// SEÇÃO 10: ARQUIVO DE REFERÊNCIA -> a140_filter2.js
// CONCEITOS: Implementação Artesanal de .filter() no Protótipo (filter2),
//            Condicional de Inclusão, Retorno de Subconjunto Filtrado.
// =============================================================================

/**
 * EXERCÍCIO 10.1
 * Baseando-se nas técnicas ensinadas no arquivo a140_filter2.js:
 * 1. Implemente o método `filter2` no `Array.prototype`.
 * 2. O método deve iterar sobre `this` e, para cada item onde `callback(this[i], i, this)`
 *    retornar um valor truthy, fazer o `.push()` do elemento no novo array filtrado.
 * 3. Teste em uma lista de números inteiros `[-15, 6, 0, 9, -4, 18, 22, 27]`.
 * 4. Filtre apenas os números que sejam POSITIVOS (> 0) e MÚLTIPLOS DE 3 (`num % 3 === 0`).
 */
console.log('--- Exercício 10.1 (Ref: a140_filter2.js) ---')
function exercicio10_1() {
    // SUA RESOLUÇÃO AQUI
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

    console.log('Positivos múltiplos de 3 (com filter2):', numeros.filter2(positivoMultiploDe3))
}
exercicio10_1()
console.log()

/**
 * EXERCÍCIO 10.2
 * Baseando-se nas técnicas ensinadas no arquivo a140_filter2.js:
 * 1. Utilizando o método `filter2` criado no exercício anterior, filtre um acervo de livros:
 *    const biblioteca = [
 *        { titulo: 'Clean Code', paginas: 464, disponivel: true },
 *        { titulo: 'O Guia do Mochileiro', paginas: 208, disponivel: false },
 *        { titulo: 'Padrões de Projeto', paginas: 448, disponivel: true },
 *        { titulo: 'Refactoring', paginas: 448, disponivel: false },
 *        { titulo: 'Expressões Regulares', paginas: 160, disponivel: true }
 *    ]
 * 2. Filtre os livros que possuem MAIS DE 300 PÁGINAS e que estejam DISPONÍVEIS para empréstimo.
 * 3. Mostre que o array `biblioteca` original permaneceu intacto com seus 5 itens.
 */
console.log('--- Exercício 10.2 (Ref: a140_filter2.js) ---')
function exercicio10_2() {
    // SUA RESOLUÇÃO AQUI
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
    console.log('Livros disponíveis com mais de 300 páginas:', livrosParaEmprestimo)
    console.log('Biblioteca original preservada?:', biblioteca.length === 5)
}
exercicio10_2()
console.log()


// =============================================================================
// SEÇÃO 11: ARQUIVO DE REFERÊNCIA -> a141_reduce1.js
// CONCEITOS: Agregação com .reduce(), Acumulador e Elemento Atual,
//            Valor Inicial e Rastreamento das Iterações.
// =============================================================================

/**
 * EXERCÍCIO 11.1
 * Baseando-se nas técnicas ensinadas no arquivo a141_reduce1.js:
 * 1. Dado o array de despesas domésticas:
 *    const despesas = [
 *        { descricao: 'Aluguel', valor: 1800.00, categoria: 'Moradia' },
 *        { descricao: 'Supermercado', valor: 950.50, categoria: 'Alimentação' },
 *        { descricao: 'Internet Fibra', valor: 149.90, categoria: 'Utilidades' },
 *        { descricao: 'Energia Elétrica', valor: 280.40, categoria: 'Utilidades' }
 *    ]
 * 2. Utilize `.map()` para extrair apenas os valores numéricos.
 * 3. Aplique `.reduce()` fornecendo um valor inicial `0`. Dentro do callback, faça um
 *    `console.log` exibindo o acumulador e o valor atual em cada iteração para auditar o cálculo.
 * 4. Imprima o valor total final acumulado.
 */
console.log('--- Exercício 11.1 (Ref: a141_reduce1.js) ---')
function exercicio11_1() {
    // SUA RESOLUÇÃO AQUI
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

    console.log('Total das despesas:', totalDespesas.toFixed(2))
}
exercicio11_1()
console.log()

/**
 * EXERCÍCIO 11.2
 * Baseando-se nas técnicas ensinadas no arquivo a141_reduce1.js:
 * 1. Dado um array de pontuações desordenadas: `const scores = [85, 42, 98, 73, 91, 64]`.
 * 2. Utilize `.reduce()` para encontrar o MAIOR valor do array (sem usar `Math.max(...scores)`).
 * 3. Utilize `.reduce()` para encontrar o MENOR valor do array (sem usar `Math.min(...scores)`).
 * 4. Imprima o maior e o menor valor encontrados demonstrando o papel do acumulador.
 */
console.log('--- Exercício 11.2 (Ref: a141_reduce1.js) ---')
function exercicio11_2() {
    // SUA RESOLUÇÃO AQUI
    const scores = [85, 42, 98, 73, 91, 64]

    const maior = scores.reduce((acc, curr) => curr > acc ? curr : acc)
    const menor = scores.reduce((acc, curr) => curr < acc ? curr : acc)

    console.log('Maior pontuação:', maior)
    console.log('Menor pontuação:', menor)
}
exercicio11_2()
console.log()


// =============================================================================
// SEÇÃO 12: ARQUIVO DE REFERÊNCIA -> a142_reduce2.js
// CONCEITOS: Agregações Lógicas Booleanas com .reduce(), Desafios "Todos são... ?"
//            usando && (every) e "Algum é... ?" usando || (some).
// =============================================================================

/**
 * EXERCÍCIO 12.1
 * Baseando-se nas técnicas ensinadas no arquivo a142_reduce2.js:
 * 1. Dado o estoque de produtos:
 *    const itensEstoque = [
 *        { nome: 'Teclado Mecânico', emEstoque: true },
 *        { nome: 'Mouse sem Fio', emEstoque: true },
 *        { nome: 'Monitor 144Hz', emEstoque: false },
 *        { nome: 'Headset Gamer', emEstoque: true }
 *    ]
 * 2. Extraia o array de booleanos correspondente com `.map(item => item.emEstoque)`.
 * 3. Desafio 1: Utilizando `.reduce()` com operador `&&`, responda: "Todos os produtos estão em estoque?"
 * 4. Desafio 2: Utilizando `.reduce()` com operador `||`, responda: "Algum produto está em estoque?"
 * 5. Compare as respostas com os métodos nativos `.every()` e `.some()`.
 */
console.log('--- Exercício 12.1 (Ref: a142_reduce2.js) ---')
function exercicio12_1() {
    // SUA RESOLUÇÃO AQUI
    const itensEstoque = [
        { nome: 'Teclado Mecânico', emEstoque: true },
        { nome: 'Mouse sem Fio', emEstoque: true },
        { nome: 'Monitor 144Hz', emEstoque: false },
        { nome: 'Headset Gamer', emEstoque: true }
    ]

    const statusEstoque = itensEstoque.map(i => i.emEstoque)

    const todosEmEstoque = statusEstoque.reduce((acc, val) => acc && val)
    const algumEmEstoque = statusEstoque.reduce((acc, val) => acc || val)

    console.log('Todos em estoque? (reduce):', todosEmEstoque, '| .every():', itensEstoque.every(i => i.emEstoque))
    console.log('Algum em estoque? (reduce):', algumEmEstoque, '| .some():', itensEstoque.some(i => i.emEstoque))
}
exercicio12_1()
console.log()

/**
 * EXERCÍCIO 12.2
 * Baseando-se nas técnicas ensinadas no arquivo a142_reduce2.js:
 * 1. Dado o processo seletivo de uma empresa com os candidatos:
 *    const candidatos = [
 *        { nome: 'Alice', graduado: true, experienciaMaisDe2Anos: true },
 *        { nome: 'Bernardo', graduado: true, experienciaMaisDe2Anos: false },
 *        { nome: 'Camila', graduado: false, experienciaMaisDe2Anos: true },
 *        { nome: 'Diego', graduado: true, experienciaMaisDe2Anos: true }
 *    ]
 * 2. Crie uma função redutora booleana `todosSao` que opera com `&&`.
 * 3. Crie uma função redutora booleana `aoMenosUm` que opera com `||`.
 * 4. Responda via pipeline `.map().reduce()`:
 *    a) Todos os candidatos são graduados?
 *    b) Ao menos um candidato tem mais de 2 anos de experiência?
 */
console.log('--- Exercício 12.2 (Ref: a142_reduce2.js) ---')
function exercicio12_2() {
    // SUA RESOLUÇÃO AQUI
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

    console.log('Todos são graduados?:', todosGraduados)
    console.log('Ao menos um tem >2 anos de experiência?:', algumComExperiencia)
}
exercicio12_2()
console.log()


// =============================================================================
// SEÇÃO 13: ARQUIVO DE REFERÊNCIA -> a143_reduce3.js
// CONCEITOS: Implementação Artesanal de .reduce() no Protótipo (reduce2),
//            Tratamento de 'valorInicial' e Definição Dinâmica do Índice Inicial.
// =============================================================================

/**
 * EXERCÍCIO 13.1
 * Baseando-se nas técnicas ensinadas no arquivo a143_reduce3.js:
 * 1. Implemente o método `reduce2` no `Array.prototype`.
 * 2. ATENÇÃO: Faça um tratamento robusto do `valorInicial` verificando `valorInicial !== undefined`.
 *    (Motivo técnico: se `valorInicial` for o número `0`, uma checagem simples com `||` consideraria `0` falsy).
 * 3. Se `valorInicial !== undefined`, o loop começa no índice 0 com `acumulador = valorInicial`.
 *    Caso contrário, começa no índice 1 com `acumulador = this[0]`.
 * 4. Teste em `[10, 20, 30, 40]`:
 *    - com valorInicial = 0;
 *    - sem fornecer valorInicial.
 */
console.log('--- Exercício 13.1 (Ref: a143_reduce3.js) ---')
function exercicio13_1() {
    // SUA RESOLUÇÃO AQUI
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

    console.log('Com valorInicial 0:', valores.reduce2(soma, 0))
    console.log('Sem valorInicial:', valores.reduce2(soma))
}
exercicio13_1()
console.log()

/**
 * EXERCÍCIO 13.2
 * Baseando-se nas técnicas ensinadas no arquivo a143_reduce3.js:
 * 1. Utilize a implementação de `reduce2` para processar uma lista de tags:
 *    const tags = ['javascript', 'web', 'frontend', 'programacao']
 * 2. Concatene as tags em uma única string formatada como hashtags separadas por espaço,
 *    por exemplo: `"#javascript #web #frontend #programacao"`.
 * 3. Teste a agregação passando a string inicial `""` e sem passar valor inicial.
 */
console.log('--- Exercício 13.2 (Ref: a143_reduce3.js) ---')
function exercicio13_2() {
    // SUA RESOLUÇÃO AQUI
    const tags = ['javascript', 'web', 'frontend', 'programacao']

    const hashtags = tags.reduce2((acc, tag) => `${acc} #${tag}`, '').trim()
    console.log('Hashtags agregadas:', hashtags)
}
exercicio13_2()
console.log()


// =============================================================================
// SEÇÃO 14: ARQUIVO DE REFERÊNCIA -> a144_imperativoVsDeclarativo.js
// CONCEITOS: Paradigma Imperativo ("COMO FAZER", loops manuais, mutabilidade) vs
//            Paradigma Declarativo ("O QUE FAZER", funções puras, pipelines).
// =============================================================================

/**
 * EXERCÍCIO 14.1
 * Baseando-se nas técnicas ensinadas no arquivo a144_imperativoVsDeclarativo.js:
 * Considere o seguinte relatório de vendas:
 * const vendas = [
 *     { id: 101, valor: 350.00, status: 'pago' },
 *     { id: 102, valor: 120.00, status: 'cancelado' },
 *     { id: 103, valor: 890.00, status: 'pago' },
 *     { id: 104, valor: 450.00, status: 'pago' },
 *     { id: 105, valor: 210.00, status: 'pendente' }
 * ]
 * 1. Implementação Imperativa:
 *    Calcule a média de valor das vendas PAGAS utilizando um laço `for` tradicional,
 *    variáveis mutáveis acumuladoras e controle manual de contador.
 * 2. Implementação Declarativa:
 *    Crie funções puras reutilizáveis (`isPago`, `getValor`, `somar`) e obtenha a mesma média
 *    encadeando `.filter()`, `.map()` e `.reduce()`.
 * Imprima o resultado de ambas as abordagens.
 */
console.log('--- Exercício 14.1 (Ref: a144_imperativoVsDeclarativo.js) ---')
function exercicio14_1() {
    // SUA RESOLUÇÃO AQUI
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
    console.log('Média (Imperativa):', mediaImperativa.toFixed(2))

    // 2. DECLARATIVO:
    const isPago = v => v.status === 'pago'
    const getValor = v => v.valor
    const somar = (acc, cur) => acc + cur

    const vendasPagas = vendas.filter(isPago)
    const mediaDeclarativa = vendasPagas.map(getValor).reduce(somar) / vendasPagas.length
    console.log('Média (Declarativa):', mediaDeclarativa.toFixed(2))
}
exercicio14_1()
console.log()

/**
 * EXERCÍCIO 14.2
 * Baseando-se nas técnicas ensinadas no arquivo a144_imperativoVsDeclarativo.js:
 * 1. Dado um array de nomes: `const clientes = ['Ana', 'Guilherme', 'Bia', 'Leonardo', 'Clara', 'Sebastião']`.
 * 2. Crie uma solução Imperativa para contar quantos nomes têm mais de 5 caracteres.
 * 3. Crie uma solução Declarativa utilizando `.filter()` para a mesma tarefa.
 * 4. Imprima as duas contagens comprovando a equivalência e refletindo sobre a legibilidade do código declarativo.
 */
console.log('--- Exercício 14.2 (Ref: a144_imperativoVsDeclarativo.js) ---')
function exercicio14_2() {
    // SUA RESOLUÇÃO AQUI
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

    console.log('Nomes com mais de 5 letras (Imperativo):', contadorImperativo)
    console.log('Nomes com mais de 5 letras (Declarativo):', contadorDeclarativo)
}
exercicio14_2()
console.log()


// =============================================================================
// SEÇÃO 15: ARQUIVO DE REFERÊNCIA -> a145_concat.js
// CONCEITOS: Concatenação com .concat(), Imutabilidade, Achatamento de 1º Nível,
//            Comparação com Spread Operator (...).
// =============================================================================

/**
 * EXERCÍCIO 15.1
 * Baseando-se nas técnicas ensinadas no arquivo a145_concat.js:
 * 1. Crie os arrays de participantes por departamento:
 *    const design = ['Paula', 'Lucas']
 *    const dev = ['Mateus', 'Camila']
 *    const qa = ['Juliana']
 * 2. Utilize o método `.concat()` para unificar todas as equipes em um array `timeCompleto`,
 *    adicionando também o diretor externo `'Dr. Fernando'` como argumento avulso.
 * 3. Mostre que os arrays originais `design`, `dev` e `qa` permanecem intactos.
 * 4. Refaça a junção dos arrays utilizando a sintaxe moderna do Spread Operator (`...`).
 */
console.log('--- Exercício 15.1 (Ref: a145_concat.js) ---')
function exercicio15_1() {
    // SUA RESOLUÇÃO AQUI
    const design = ['Paula', 'Lucas']
    const dev = ['Mateus', 'Camila']
    const qa = ['Juliana']

    const timeCompleto = design.concat(dev, qa, 'Dr. Fernando')
    console.log('Time Completo (.concat):', timeCompleto)
    console.log('Arrays originais preservados?:', design.length === 2 && dev.length === 2 && qa.length === 1)

    const timeSpread = [...design, ...dev, ...qa, 'Dr. Fernando']
    console.log('Time Completo (Spread ...):', timeSpread)
}
exercicio15_1()
console.log()

/**
 * EXERCÍCIO 15.2
 * Baseando-se nas técnicas ensinadas no arquivo a145_concat.js:
 * Compreenda e teste o comportamento de "Achatamento de 1º nível" do `.concat()`:
 * 1. Execute a expressão: `[].concat([10, 20], 30, [40, [50, 60]])`.
 * 2. Imprima o array resultante e explique por que os elementos 10, 20 e 30 ficaram no nível raiz,
 *    enquanto `[50, 60]` permaneceu empacotado dentro de um subarray secundário.
 */
console.log('--- Exercício 15.2 (Ref: a145_concat.js) ---')
function exercicio15_2() {
    // SUA RESOLUÇÃO AQUI
    const resultado = [].concat([10, 20], 30, [40, [50, 60]])
    console.log('Resultado do concat:', resultado)
    console.log('Explicação: .concat() desempacota apenas 1 nível de profundidade. Matrizes aninhadas além do 1º nível são preservadas como arrays.')
}
exercicio15_2()
console.log()


// =============================================================================
// SEÇÃO 16: ARQUIVO DE REFERÊNCIA -> a146_flatMap.js
// CONCEITOS: Mapeamento e Achatamento de Estruturas Aninhadas (Matrizes),
//            Implementação de .flatMap() via concat.apply, Métodos Modernos .flat().
// =============================================================================

/**
 * EXERCÍCIO 16.1
 * Baseando-se nas técnicas ensinadas no arquivo a146_flatMap.js:
 * 1. Implemente o método `meuFlatMap` no `Array.prototype` usando a técnica da aula:
 *    `Array.prototype.concat.apply([], this.map(callback))`
 * 2. Dado o seguinte cadastro de cursos e módulos:
 *    const plataforma = [
 *        { curso: 'JavaScript Master', modulos: ['Fundamentos', 'Objetos', 'Arrays'] },
 *        { curso: 'Node.js Pro', modulos: ['HTTP', 'Express', 'Prisma'] },
 *        { curso: 'DevOps Cloud', modulos: ['Docker', 'Kubernetes'] }
 *    ]
 * 3. Mostre primeiro o resultado de usar apenas `.map(c => c.modulos)` (matriz de arrays).
 * 4. Em seguida, utilize o seu `meuFlatMap(c => c.modulos)` para extrair uma lista única linear
 *    e achatada de todos os módulos da plataforma.
 */
console.log('--- Exercício 16.1 (Ref: a146_flatMap.js) ---')
function exercicio16_1() {
    // SUA RESOLUÇÃO AQUI
    Array.prototype.meuFlatMap = function (callback) {
        return Array.prototype.concat.apply([], this.map(callback))
    }

    const plataforma = [
        { curso: 'JavaScript Master', modulos: ['Fundamentos', 'Objetos', 'Arrays'] },
        { curso: 'Node.js Pro', modulos: ['HTTP', 'Express', 'Prisma'] },
        { curso: 'DevOps Cloud', modulos: ['Docker', 'Kubernetes'] }
    ]

    const modulosMatriz = plataforma.map(c => c.modulos)
    console.log('Apenas .map (matriz aninhada):', modulosMatriz)

    const modulosAchatados = plataforma.meuFlatMap(c => c.modulos)
    console.log('Com meuFlatMap (linear):', modulosAchatados)
}
exercicio16_1()
console.log()

/**
 * EXERCÍCIO 16.2
 * Baseando-se nas técnicas ensinadas no arquivo a146_flatMap.js:
 * 1. Dado o array de posts de redes sociais contendo hashtags agrupadas:
 *    const posts = [
 *        { id: 1, tags: ['#js', '#web'] },
 *        { id: 2, tags: ['#programacao', '#coding', '#js'] },
 *        { id: 3, tags: ['#dev', '#frontend'] }
 *    ]
 * 2. Utilize o `meuFlatMap` (ou o método nativo moderno `.flatMap()`) para obter uma única
 *    lista linear com todas as tags de todos os posts.
 * 3. Desafio extra: A partir da lista linear de tags, filtre apenas as tags que NÃO sejam repetidas
 *    (ou converta para `[...new Set(tags)]`).
 * 4. Imprima o resultado achatado e o conjunto final com tags únicas.
 */
console.log('--- Exercício 16.2 (Ref: a146_flatMap.js) ---')
function exercicio16_2() {
    // SUA RESOLUÇÃO AQUI
    const posts = [
        { id: 1, tags: ['#js', '#web'] },
        { id: 2, tags: ['#programacao', '#coding', '#js'] },
        { id: 3, tags: ['#dev', '#frontend'] }
    ]

    const todasTags = posts.meuFlatMap(p => p.tags)
    const tagsUnicas = [...new Set(todasTags)]

    console.log('Todas as tags (achatadas):', todasTags)
    console.log('Tags únicas (sem duplicações):', tagsUnicas)
}
exercicio16_2()
console.log()

console.log('=============================================================================')
console.log('FIM DA EXECUÇÃO DO CADERNO DE EXERCÍCIOS!')
console.log('Consulte o arquivo barema_exercicios.md para o gabarito e critérios de pontuação.')
console.log('=============================================================================')
