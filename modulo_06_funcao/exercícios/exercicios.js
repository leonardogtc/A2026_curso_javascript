// =============================================================================
// CADERNO DE EXERCÍCIOS PRÁTICOS: MÓDULO 06 - FUNÇÕES EM JAVASCRIPT
// =============================================================================
// Diretório: modulo_06_funcao/exercícios/exercicios.js
// 
// INSTRUÇÕES GERAIS:
// 1. Cada seção contém 2 exercícios vinculados aos arquivos de aula (de a88 até a111).
// 2. Os enunciados indicam o arquivo de referência que você deve consultar.
// 3. Resolva os exercícios nos blocos designados.
// 4. Para testar suas soluções, execute:
//    node modulo_06_funcao/exercícios/exercicios.js
// 5. Consulte o arquivo 'barema_exercicios.md' para critérios de avaliação e gabarito.
// =============================================================================

console.log('=============================================================================')
console.log('INICIANDO EXECUÇÃO DO CADERNO DE EXERCÍCIOS - MÓDULO 06 (FUNÇÕES)')
console.log('=============================================================================\n')


// =============================================================================
// SEÇÃO 1: ARQUIVO DE REFERÊNCIA -> a88_cidadaoPrimeiraClasse.js
// CONCEITOS: Cidadão de Primeira Linha (First-Class Citizen), High-Order Functions,
//            Passar funções como parâmetro, Retornar funções.
// =============================================================================

/**
 * EXERCÍCIO 1.1
 * Baseando-se nas técnicas ensinadas no arquivo a88_cidadaoPrimeiraClasse.js:
 * 1. Crie uma função de alta ordem chamada `executarOperacao(a, b, operacao)`.
 * 2. Ela deve invocar `operacao(a, b)` e imprimir: "Resultado da operação: [resultado]".
 * 3. Teste passando funções anônimas literais para multiplicação e exponenciação.
 */
console.log('--- Exercício 1.1 (Ref: a88_cidadaoPrimeiraClasse.js) ---')
function exercicio1_1() {
    function executarOperacao(a, b, operacao) {
        const resultado = operacao(a, b)
        console.log(`Resultado da operação: ${resultado}`)
    }

    executarOperacao(5, 4, (x, y) => x * y)
    executarOperacao(2, 8, (x, y) => x ** y)
}
exercicio1_1()
console.log()

/**
 * EXERCÍCIO 1.2
 * Baseando-se nas técnicas ensinadas no arquivo a88_cidadaoPrimeiraClasse.js:
 * 1. Crie uma função que retorna outra função: `criarMultiplicador(fator)`.
 * 2. Ela deve retornar uma função interna que recebe `numero` e retorna `numero * fator`.
 * 3. Crie as instâncias `dobro = criarMultiplicador(2)` e `triplo = criarMultiplicador(3)` e teste-as com o valor 15.
 */
console.log('--- Exercício 1.2 (Ref: a88_cidadaoPrimeiraClasse.js) ---')
function exercicio1_2() {
    function criarMultiplicador(fator) {
        return function (numero) {
            return numero * fator
        }
    }

    const dobro = criarMultiplicador(2)
    const triplo = criarMultiplicador(3)

    console.log('Dobro de 15:', dobro(15))
    console.log('Triplo de 15:', triplo(15))
}
exercicio1_2()
console.log()


// =============================================================================
// SEÇÃO 2: ARQUIVO DE REFERÊNCIA -> a89_paramsERetornoSaoOpcionais.js
// CONCEITOS: Flexibilidade de parâmetros e retornos opcionais em JavaScript.
// =============================================================================

/**
 * EXERCÍCIO 2.1
 * Baseando-se nas técnicas ensinadas no arquivo a89_paramsERetornoSaoOpcionais.js:
 * 1. Crie uma função `calcularArea(largura, altura)` que calcula `largura * altura`.
 * 2. Se a área calculada for estritamente maior que 50 m², imprima:
 *    "Valor acima do permitido: [area]m²" e NÃO retorne nenhum valor (ou retorne undefined).
 * 3. Caso contrário, retorne o valor numérico da área calculada.
 * 4. Teste com: (5, 5), (10, 8) e sem passar argumentos.
 */
console.log('--- Exercício 2.1 (Ref: a89_paramsERetornoSaoOpcionais.js) ---')
function exercicio2_1() {
    function calcularArea(largura, altura) {
        const area = largura * altura
        if (area > 50) {
            console.log(`Valor acima do permitido: ${area}m²`)
        } else {
            return area
        }
    }

    console.log('Retorno para (5, 5):', calcularArea(5, 5))
    console.log('Retorno para (10, 8):', calcularArea(10, 8))
    console.log('Retorno sem parâmetros:', calcularArea())
}
exercicio2_1()
console.log()

/**
 * EXERCÍCIO 2.2
 * Baseando-se nas técnicas ensinadas no arquivo a89_paramsERetornoSaoOpcionais.js:
 * Demonstre que o JS aceita invocar uma função passando mais ou menos parâmetros do que o declarado:
 * 1. Crie `somarDois(a, b) { return (a || 0) + (b || 0) }`.
 * 2. Teste chamando com: `somarDois(5)`, `somarDois(5, 10)`, `somarDois(5, 10, 20, 30)` e sem nada `somarDois()`.
 */
console.log('--- Exercício 2.2 (Ref: a89_paramsERetornoSaoOpcionais.js) ---')
function exercicio2_2() {
    function somarDois(a, b) {
        return (a || 0) + (b || 0)
    }

    console.log('somarDois(5):', somarDois(5))
    console.log('somarDois(5, 10):', somarDois(5, 10))
    console.log('somarDois(5, 10, 20, 30):', somarDois(5, 10, 20, 30))
    console.log('somarDois():', somarDois())
}
exercicio2_2()
console.log()


// =============================================================================
// SEÇÃO 3: ARQUIVO DE REFERÊNCIA -> a90_paramsVariaveis.js
// CONCEITOS: Objeto implícito 'arguments' em funções tradicionais.
// =============================================================================

/**
 * EXERCÍCIO 3.1
 * Baseando-se nas técnicas ensinadas no arquivo a90_paramsVariaveis.js:
 * 1. Crie a função tradicional `somarTudo()` sem parâmetros formais declarados.
 * 2. Itere pelo array-like `arguments` somando todos os valores passados.
 * 3. Teste chamando: `somarTudo(1, 2, 3, 4, 5)` e `somarTudo()`.
 */
console.log('--- Exercício 3.1 (Ref: a90_paramsVariaveis.js) ---')
function exercicio3_1() {
    function somarTudo() {
        let soma = 0
        for (let i in arguments) {
            soma += arguments[i]
        }
        return soma
    }

    console.log('Soma de 1 a 5:', somarTudo(1, 2, 3, 4, 5))
    console.log('Soma vazia:', somarTudo())
}
exercicio3_1()
console.log()

/**
 * EXERCÍCIO 3.2
 * Baseando-se nas técnicas ensinadas no arquivo a90_paramsVariaveis.js:
 * 1. Crie uma função `concatenarTextos()` que percorre `arguments` e junta todas as strings
 *    separadas por hífen (`" - "`).
 * 2. Se um argumento não for do tipo string, ignore-o.
 * 3. Teste com: `concatenarTextos('JavaScript', 10, 'Node', true, 'Fullstack')`.
 */
console.log('--- Exercício 3.2 (Ref: a90_paramsVariaveis.js) ---')
function exercicio3_2() {
    function concatenarTextos() {
        const palavras = []
        for (let i in arguments) {
            if (typeof arguments[i] === 'string') {
                palavras.push(arguments[i])
            }
        }
        return palavras.join(' - ')
    }

    console.log('Textos concatenados:', concatenarTextos('JavaScript', 10, 'Node', true, 'Fullstack'))
}
exercicio3_2()
console.log()


// =============================================================================
// SEÇÃO 4: ARQUIVO DE REFERÊNCIA -> a91_paramPadrao.js
// CONCEITOS: Parâmetro Padrão do ES2015 vs Estratégias antigas (||, ternário).
// =============================================================================

/**
 * EXERCÍCIO 4.1
 * Baseando-se nas técnicas ensinadas no arquivo a91_paramPadrao.js:
 * 1. Mostre a clássica falha do operador lógico `||` para parâmetros padrão quando o valor passado é `0`:
 *    `function somaBugada(a, b, c) { a = a || 1; b = b || 1; c = c || 1; return a + b + c }`.
 * 2. Teste chamando `somaBugada(0, 0, 0)`. Observe que o retorno é 3 (quando deveria ser 0!).
 * 3. Refatore usando o padrão oficial moderno do ES2015 `(a = 1, b = 1, c = 1)` e mostre o resultado correto.
 */
console.log('--- Exercício 4.1 (Ref: a91_paramPadrao.js) ---')
function exercicio4_1() {
    function somaBugada(a, b, c) {
        a = a || 1
        b = b || 1
        c = c || 1
        return a + b + c
    }

    function somaPadraoModerno(a = 1, b = 1, c = 1) {
        return a + b + c
    }

    console.log('somaBugada(0, 0, 0):', somaBugada(0, 0, 0)) // 3 (bug!)
    console.log('somaPadraoModerno(0, 0, 0):', somaPadraoModerno(0, 0, 0)) // 0 (correto!)
}
exercicio4_1()
console.log()

/**
 * EXERCÍCIO 4.2
 * Baseando-se nas técnicas ensinadas no arquivo a91_paramPadrao.js:
 * Crie uma função `configurarServidor(porta = 8080, host = 'localhost', ssl = false)`.
 * Invoque-a sem parâmetros, apenas com a porta 3000, e com todas as opções configuradas.
 */
console.log('--- Exercício 4.2 (Ref: a91_paramPadrao.js) ---')
function exercicio4_2() {
    function configurarServidor(porta = 8080, host = 'localhost', ssl = false) {
        return `Servidor configurado em ${ssl ? 'https' : 'http'}://${host}:${porta}`
    }

    console.log('Padrão:', configurarServidor())
    console.log('Porta 3000:', configurarServidor(3000))
    console.log('Produção:', configurarServidor(443, 'meusite.com', true))
}
exercicio4_2()
console.log()


// =============================================================================
// SEÇÃO 5: ARQUIVO DE REFERÊNCIA -> a93_thisEBind1.js
// CONCEITOS: Dinamismo do 'this', Conflito de Paradigmas (OO vs Funcional), Função .bind().
// =============================================================================

/**
 * EXERCÍCIO 5.1
 * Baseando-se nas técnicas ensinadas no arquivo a93_thisEBind1.js:
 * 1. Crie um objeto `usuario` com `nome: 'Beatriz'` e método `cumprimentar() { console.log(`Olá, ${this.nome}!`) }`.
 * 2. Armazene o método em uma variável solta `const falar = usuario.cumprimentar`.
 * 3. Chame `falar()` e observe que `this.nome` resolve como `undefined` (conflito entre OO e Funcional).
 * 4. Resolva o conflito amarrando o objeto através de `.bind(usuario)`.
 */
console.log('--- Exercício 5.1 (Ref: a93_thisEBind1.js) ---')
function exercicio5_1() {
    const usuario = {
        nome: 'Beatriz',
        cumprimentar() {
            console.log(`Olá, ${this?.nome}!`)
        }
    }

    const falarSolto = usuario.cumprimentar
    falarSolto() // undefined

    const falarAmarrado = usuario.cumprimentar.bind(usuario)
    falarAmarrado() // Olá, Beatriz!
}
exercicio5_1()
console.log()

/**
 * EXERCÍCIO 5.2
 * Baseando-se nas técnicas ensinadas no arquivo a93_thisEBind1.js:
 * 1. Crie um objeto `calculadora` com `taxa: 0.15` e método `calcularImposto(valor) { return valor * this.taxa }`.
 * 2. Crie uma função externa que recebe um callback fiscal e o invoca para R$ 1000.
 * 3. Mostre o uso de `.bind(calculadora)` para garantir que a função de cálculo receba o `this.taxa` correto.
 */
console.log('--- Exercício 5.2 (Ref: a93_thisEBind1.js) ---')
function exercicio5_2() {
    const calculadora = {
        taxa: 0.15,
        calcularImposto(valor) {
            return valor * this.taxa
        }
    }

    function processarTributo(callbackCalculo, valor) {
        return callbackCalculo(valor)
    }

    const resultado = processarTributo(calculadora.calcularImposto.bind(calculadora), 1000)
    console.log('Imposto calculado com bind:', resultado)
}
exercicio5_2()
console.log()


// =============================================================================
// SEÇÃO 6: ARQUIVO DE REFERÊNCIA -> a94_thisEBind2.js
// CONCEITOS: O problema do 'this' em Temporizadores e a Técnica 'const self = this'.
// =============================================================================

/**
 * EXERCÍCIO 6.1
 * Baseando-se nas técnicas ensinadas no arquivo a94_thisEBind2.js:
 * 1. Crie uma função construtora `Relogio()` com propriedade `this.segundos = 0`.
 * 2. Resolva a perda de contexto amarrando o `this` através da técnica `const self = this`.
 * 3. Incremente `self.segundos` e simule 3 iterações (chamadas manuais ou teste unitário) exibindo o valor de `self.segundos`.
 */
console.log('--- Exercício 6.1 (Ref: a94_thisEBind2.js) ---')
function exercicio6_1() {
    function Relogio() {
        this.segundos = 0
        const self = this

        this.tique = function () {
            self.segundos++
            console.log(`Segundos (via self): ${self.segundos}`)
        }
    }

    const r = new Relogio()
    r.tique()
    r.tique()
    r.tique()
}
exercicio6_1()
console.log()

/**
 * EXERCÍCIO 6.2
 * Baseando-se nas técnicas ensinadas no arquivo a94_thisEBind2.js:
 * 1. Crie a mesma construtora `Cronometro()` com `this.contador = 0`.
 * 2. Desta vez, resolva o contexto utilizando `.bind(this)` na função de incremento.
 * 3. Teste executando a função amarrada 3 vezes.
 */
console.log('--- Exercício 6.2 (Ref: a94_thisEBind2.js) ---')
function exercicio6_2() {
    function Cronometro() {
        this.contador = 0
        this.incrementar = function () {
            this.contador++
            console.log(`Contador (via .bind(this)): ${this.contador}`)
        }.bind(this)
    }

    const c = new Cronometro()
    const passo = c.incrementar
    passo()
    passo()
    passo()
}
exercicio6_2()
console.log()


// =============================================================================
// SEÇÃO 7: ARQUIVO DE REFERÊNCIA -> a95_arrowFunction1.js
// CONCEITOS: Sintaxe Reduzida da Arrow Function, Retorno Implícito.
// =============================================================================

/**
 * EXERCÍCIO 7.1
 * Baseando-se nas técnicas ensinadas no arquivo a95_arrowFunction1.js:
 * 1. Refatore uma função clássica em Arrow Function de linha única com retorno implícito:
 *    Função original: `function calcularQuadrado(x) { return x * x }`.
 * 2. Crie uma arrow function sem parênteses no parâmetro único: `const quadrado = x => x * x`.
 * 3. Teste para os valores 4, 9 e 12.
 */
console.log('--- Exercício 7.1 (Ref: a95_arrowFunction1.js) ---')
function exercicio7_1() {
    const quadrado = x => x * x

    console.log('4² =', quadrado(4))
    console.log('9² =', quadrado(9))
    console.log('12² =', quadrado(12))
}
exercicio7_1()
console.log()

/**
 * EXERCÍCIO 7.2
 * Baseando-se nas técnicas ensinadas no arquivo a95_arrowFunction1.js:
 * Crie uma Arrow Function sem parâmetros chamada `obterDataHoraFormatada` que retorna
 * a data atual em formato ISO simplificado sem necessidade de chaves `{}` ou palavra `return`.
 */
console.log('--- Exercício 7.2 (Ref: a95_arrowFunction1.js) ---')
function exercicio7_2() {
    const obterDataHoraFormatada = () => new Date().toLocaleDateString('pt-BR')
    console.log('Data formatada:', obterDataHoraFormatada())
}
exercicio7_2()
console.log()


// =============================================================================
// SEÇÃO 8: ARQUIVO DE REFERÊNCIA -> a96_arrowFunction2.js
// CONCEITOS: 'this' Léxico Estático em Arrow Functions.
// =============================================================================

/**
 * EXERCÍCIO 8.1
 * Baseando-se nas técnicas ensinadas no arquivo a96_arrowFunction2.js:
 * 1. Crie uma função construtora `Pessoa()` com `this.idade = 0`.
 * 2. Crie o método `this.fazerAniversario = () => { this.idade++; console.log(this.idade) }` usando Arrow Function.
 * 3. Extraia o método para uma variável e execute-o. Comprove que o `this` léxico NÃO variou!
 */
console.log('--- Exercício 8.1 (Ref: a96_arrowFunction2.js) ---')
function exercicio8_1() {
    function Pessoa() {
        this.idade = 0
        this.fazerAniversario = () => {
            this.idade++
            console.log(`Idade atual da pessoa (this léxico): ${this.idade}`)
        }
    }

    const p = new Pessoa()
    const acao = p.fazerAniversario
    acao()
    acao()
}
exercicio8_1()
console.log()

/**
 * EXERCÍCIO 8.2
 * Baseando-se nas técnicas ensinadas no arquivo a96_arrowFunction2.js:
 * Compare: uma função normal perde seu `this` quando atribuída a um tratador externo,
 * enquanto a Arrow Function mantém fixo o contexto onde foi declarada.
 * Demonstre esse contraste em duas propriedades de um objeto `painel`: `normal: function() {}` e `arrow: () => {}`.
 */
console.log('--- Exercício 8.2 (Ref: a96_arrowFunction2.js) ---')
function exercicio8_2() {
    const painel = {
        titulo: 'Dashboard',
        normal: function () { return this?.titulo },
        arrow: () => this?.titulo
    }

    const fNormal = painel.normal
    console.log('Normal desvinculado:', fNormal()) // undefined
    console.log('Arrow desvinculado (léxico global):', painel.arrow()) // undefined (não aponta para painel!)
}
exercicio8_2()
console.log()


// =============================================================================
// SEÇÃO 9: ARQUIVO DE REFERÊNCIA -> a97_arrowFunction3.js
// CONCEITOS: Comparação Rigorosa de 'this' com global, module.exports e .bind().
// =============================================================================

/**
 * EXERCÍCIO 9.1
 * Baseando-se nas técnicas ensinadas no arquivo a97_arrowFunction3.js:
 * 1. Crie uma função tradicional `comparaComThis(param)` e teste `comparaComThis(global)`. Mostre que retorna `true`.
 * 2. Crie uma arrow function `comparaComThisArrow = param => console.log(this === param)`.
 * 3. Teste chamando com `global` e com `module.exports`. Mostre que para `module.exports` é `true` e para `global` é `false`!
 */
console.log('--- Exercício 9.1 (Ref: a97_arrowFunction3.js) ---')
let comparaComThisModulo = param => param === module.exports
function exercicio9_1() {
    let comparaComThis = function (param) {
        console.log('Função tradicional aponta para global?:', this === param)
    }
    comparaComThis(global)

    console.log('Arrow function definida no módulo aponta para global?:', comparaComThisModulo(global))
    console.log('Arrow function definida no módulo aponta para module.exports?:', comparaComThisModulo(module.exports))
}
exercicio9_1()
console.log()

/**
 * EXERCÍCIO 9.2
 * Baseando-se nas técnicas ensinadas no arquivo a97_arrowFunction3.js:
 * Tente forçar a alteração do `this` de uma Arrow Function usando `.bind()`:
 * `const arrowForcada = comparaComThisModulo.bind(objeto)`.
 * Mostre que o `.bind()` NÃO tem poder de sobrescrever o `this` léxico de uma Arrow Function!
 */
console.log('--- Exercício 9.2 (Ref: a97_arrowFunction3.js) ---')
function exercicio9_2() {
    const obj = {}
    let arrowForcada = comparaComThisModulo.bind(obj)

    console.log('Arrow function com bind(obj) aponta para obj?:', arrowForcada(obj)) // false!
    console.log('Arrow function com bind(obj) continua apontando para module.exports?:', arrowForcada(module.exports)) // true!
}
exercicio9_2()
console.log()


// =============================================================================
// SEÇÃO 10: ARQUIVO DE REFERÊNCIA -> a98_funcoesAnonimas.js
// CONCEITOS: Funções Anônimas em Variáveis, em Métodos e Passadas como Argumento.
// =============================================================================

/**
 * EXERCÍCIO 10.1
 * Baseando-se nas técnicas ensinadas no arquivo a98_funcoesAnonimas.js:
 * 1. Crie uma função `imprimirResultado(a, b, operacao = (x, y) => x + y)`.
 * 2. Teste chamando:
 *    - sem passar operação (usa a soma anônima padrão);
 *    - passando uma função anônima tradicional `function (x, y) { return x - y }`;
 *    - passando uma arrow function `(x, y) => x * y`.
 */
console.log('--- Exercício 10.1 (Ref: a98_funcoesAnonimas.js) ---')
function exercicio10_1() {
    const imprimirResultado = function (a, b, operacao = (x, y) => x + y) {
        console.log('Resultado:', operacao(a, b))
    }

    imprimirResultado(10, 5)
    imprimirResultado(10, 5, function (x, y) { return x - y })
    imprimirResultado(10, 5, (x, y) => x * y)
}
exercicio10_1()
console.log()

/**
 * EXERCÍCIO 10.2
 * Baseando-se nas técnicas ensinadas no arquivo a98_funcoesAnonimas.js:
 * Crie um objeto `pessoa` contendo uma função anônima atribuída a uma propriedade `falar`.
 * Execute `pessoa.falar()` exibindo uma mensagem.
 */
console.log('--- Exercício 10.2 (Ref: a98_funcoesAnonimas.js) ---')
function exercicio10_2() {
    const pessoa = {
        falar: function () {
            console.log('Executando função anônima em método de objeto!')
        }
    }
    pessoa.falar()
}
exercicio10_2()
console.log()


// =============================================================================
// SEÇÃO 11: ARQUIVO DE REFERÊNCIA -> a99_callback1.js
// CONCEITOS: Padrão Callback (chamar de volta mediante evento/iteração).
// =============================================================================

/**
 * EXERCÍCIO 11.1
 * Baseando-se nas técnicas ensinadas no arquivo a99_callback1.js:
 * 1. Dado o array de fabricantes: `const marcas = ['Mercedes', 'Audi', 'BMW']`.
 * 2. Crie uma função de callback nomeada `imprimirMarca(nome, indice) { console.log(`${indice + 1}. ${nome}`) }`.
 * 3. Itere sobre `marcas` usando `.forEach(imprimirMarca)`.
 */
console.log('--- Exercício 11.1 (Ref: a99_callback1.js) ---')
function exercicio11_1() {
    const marcas = ['Mercedes', 'Audi', 'BMW']

    function imprimirMarca(nome, indice) {
        console.log(`${indice + 1}. ${nome}`)
    }

    marcas.forEach(imprimirMarca)
}
exercicio11_1()
console.log()

/**
 * EXERCÍCIO 11.2
 * Baseando-se nas técnicas ensinadas no arquivo a99_callback1.js:
 * Crie uma função `processarLista(itens, callback)` que percorre cada item da lista
 * e executa o `callback(item)`. Teste passando uma lista de tarefas e um callback que as imprime.
 */
console.log('--- Exercício 11.2 (Ref: a99_callback1.js) ---')
function exercicio11_2() {
    function processarLista(itens, callback) {
        for (let i = 0; i < itens.length; i++) {
            callback(itens[i], i)
        }
    }

    const tarefas = ['Estudar JS', 'Criar Exercícios', 'Revisar Barema']
    processarLista(tarefas, (tarefa, idx) => console.log(`Tarefa #${idx + 1}: ${tarefa}`))
}
exercicio11_2()
console.log()


// =============================================================================
// SEÇÃO 12: ARQUIVO DE REFERÊNCIA -> a100_callback2.js
// CONCEITOS: Callback para Filtragem: Abordagem Imperativa vs Declarativa com .filter().
// =============================================================================

/**
 * EXERCÍCIO 12.1
 * Baseando-se nas técnicas ensinadas no arquivo a100_callback2.js:
 * 1. Dado o array de notas `const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]`.
 * 2. Extraia as notas baixas (< 7) usando a abordagem clássica com loop `for` e `push`.
 * 3. Extraia as notas baixas usando `.filter()` com callback arrow function.
 * 4. Imprima ambos os resultados e compare a concisão.
 */
console.log('--- Exercício 12.1 (Ref: a100_callback2.js) ---')
function exercicio12_1() {
    const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

    // Sem callback:
    const notasBaixas1 = []
    for (let i in notas) {
        if (notas[i] < 7) {
            notasBaixas1.push(notas[i])
        }
    }

    // Com callback (.filter):
    const notasBaixas2 = notas.filter(nota => nota < 7)

    console.log('Notas baixas (sem callback):', notasBaixas1)
    console.log('Notas baixas (com callback filter):', notasBaixas2)
}
exercicio12_1()
console.log()

/**
 * EXERCÍCIO 12.2
 * Baseando-se nas técnicas ensinadas no arquivo a100_callback2.js:
 * Crie uma função predicado externa reutilizável `const notaMenorQue7 = nota => nota < 7`.
 * Utilize essa função em dois arrays de notas diferentes aplicando `.filter(notaMenorQue7)`.
 */
console.log('--- Exercício 12.2 (Ref: a100_callback2.js) ---')
function exercicio12_2() {
    const notaMenorQue7 = nota => nota < 7

    const turmaA = [8.1, 5.5, 9.0, 6.8]
    const turmaB = [4.2, 7.5, 6.0, 3.8]

    console.log('Turma A notas baixas:', turmaA.filter(notaMenorQue7))
    console.log('Turma B notas baixas:', turmaB.filter(notaMenorQue7))
}
exercicio12_2()
console.log()


// =============================================================================
// SEÇÃO 13: ARQUIVO DE REFERÊNCIA -> a101_callback3.js
// CONCEITOS: Callbacks em Ambientes de Eventos (Simulação no Node.js).
// =============================================================================

/**
 * EXERCÍCIO 13.1
 * Baseando-se nas técnicas ensinadas no arquivo a101_callback3.js:
 * No navegador, o callback é registrado em eventos do DOM (ex: `document.onclick`).
 * Simule esse padrão no Node criando um objeto `emissorDeEventos`:
 * `const emissor = { callbacks: [], registrar(cb) { this.callbacks.push(cb) }, disparar(evento) { this.callbacks.forEach(cb => cb(evento)) } }`.
 * Registre um callback que imprime: "Evento capturado: [evento]" e dispare o evento.
 */
console.log('--- Exercício 13.1 (Ref: a101_callback3.js) ---')
function exercicio13_1() {
    const emissor = {
        callbacks: [],
        registrar(cb) {
            this.callbacks.push(cb)
        },
        disparar(evento) {
            this.callbacks.forEach(cb => cb(evento))
        }
    }

    emissor.registrar(e => console.log(`Evento capturado 1: Tipo ${e.tipo}`))
    emissor.registrar(e => console.log(`Evento capturado 2: Timestamp ${e.timestamp}`))

    emissor.disparar({ tipo: 'CLICK', timestamp: Date.now() })
}
exercicio13_1()
console.log()

/**
 * EXERCÍCIO 13.2
 * Baseando-se nas técnicas ensinadas no arquivo a101_callback3.js:
 * Crie uma função que simula um botão clicável:
 * `function criarBotao(rotulo) { return { clicar: function(callback) { callback(`Botão "${rotulo}" foi clicado!`) } } }`.
 * Teste clicando no botão e passando uma arrow function como callback.
 */
console.log('--- Exercício 13.2 (Ref: a101_callback3.js) ---')
function exercicio13_2() {
    function criarBotao(rotulo) {
        return {
            clicar: function (callback) {
                callback(`Botão "${rotulo}" foi clicado com sucesso!`)
            }
        }
    }

    const btnSalvar = criarBotao('Salvar Registro')
    btnSalvar.clicar(msg => console.log('Callback executado:', msg))
}
exercicio13_2()
console.log()


// =============================================================================
// SEÇÃO 14: ARQUIVO DE REFERÊNCIA -> a102_funcaoConstrutora.js
// CONCEITOS: Funções Construtoras, Atributos Privados com let/const vs Atributos Públicos com this.
// =============================================================================

/**
 * EXERCÍCIO 14.1
 * Baseando-se nas técnicas ensinadas no arquivo a102_funcaoConstrutora.js:
 * 1. Crie a função construtora `Carro(velocidadeMaxima = 200, delta = 5)`.
 * 2. Defina uma variável privada `let velocidadeAtual = 0`.
 * 3. Crie os métodos públicos no `this`:
 *    - `this.acelerar = function() { ... }` (respeitando a velocidade máxima);
 *    - `this.getVelocidadeAtual = function() { return velocidadeAtual }`.
 * 4. Instancie um carro popular e um esportivo (velMax: 300, delta: 20), acelere-os e exiba a velocidade.
 */
console.log('--- Exercício 14.1 (Ref: a102_funcaoConstrutora.js) ---')
function exercicio14_1() {
    function Carro(velocidadeMaxima = 200, delta = 5) {
        let velocidadeAtual = 0

        this.acelerar = function () {
            if (velocidadeAtual + delta <= velocidadeMaxima) {
                velocidadeAtual += delta
            } else {
                velocidadeAtual = velocidadeMaxima
            }
        }

        this.getVelocidadeAtual = function () {
            return velocidadeAtual
        }
    }

    const uno = new Carro()
    uno.acelerar()
    uno.acelerar()
    console.log('Velocidade Uno:', uno.getVelocidadeAtual())

    const ferrari = new Carro(350, 50)
    ferrari.acelerar()
    ferrari.acelerar()
    console.log('Velocidade Ferrari:', ferrari.getVelocidadeAtual())
}
exercicio14_1()
console.log()

/**
 * EXERCÍCIO 14.2
 * Baseando-se nas técnicas ensinadas no arquivo a102_funcaoConstrutora.js:
 * Demonstre que a variável privada de uma função construtora NÃO pode ser acessada diretamente:
 * Tente ler `uno.velocidadeAtual` e mostre que ela é `undefined`.
 */
console.log('--- Exercício 14.2 (Ref: a102_funcaoConstrutora.js) ---')
function exercicio14_2() {
    function Carro() {
        let velocidadeAtual = 100
        this.getVel = () => velocidadeAtual
    }

    const c = new Carro()
    console.log('Acesso direto ao atributo privado:', c.velocidadeAtual) // undefined
    console.log('Acesso via método getter público:', c.getVel()) // 100
}
exercicio14_2()
console.log()


// =============================================================================
// SEÇÃO 15: ARQUIVO DE REFERÊNCIA -> a103_tiposDeclaracao.js
// CONCEITOS: Tipos de Declaração de Funções e Hoisting (Function Declaration vs Expression).
// =============================================================================

/**
 * EXERCÍCIO 15.1
 * Baseando-se nas técnicas ensinadas no arquivo a103_tiposDeclaracao.js:
 * 1. Mostre que `Function Declaration` sofre hoisting (pode ser chamada antes de sua linha de definição).
 *    Invoque `somar(2, 3)` antes da função ser declarada no código.
 * 2. Declare `function somar(x, y) { return x + y }`.
 */
console.log('--- Exercício 15.1 (Ref: a103_tiposDeclaracao.js) ---')
function exercicio15_1() {
    console.log('Chamada antes da declaração (hoisting):', somar(2, 3))

    function somar(x, y) {
        return x + y
    }
}
exercicio15_1()
console.log()

/**
 * EXERCÍCIO 15.2
 * Baseando-se nas técnicas ensinadas no arquivo a103_tiposDeclaracao.js:
 * 1. Crie uma `Function Expression`: `const multiplicar = function(x, y) { return x * y }`.
 * 2. Crie uma `Named Function Expression`: `const dividir = function div(x, y) { return x / y }`.
 * 3. Explique por que `multiplicar` NÃO pode ser chamada antes de sua declaração (ela se comporta como variável const).
 */
console.log('--- Exercício 15.2 (Ref: a103_tiposDeclaracao.js) ---')
function exercicio15_2() {
    const multiplicar = function (x, y) {
        return x * y
    }
    const dividir = function div(x, y) {
        return x / y
    }

    console.log('Multiplicação com function expression:', multiplicar(6, 7))
    console.log('Divisão com named function expression:', dividir(40, 5))
    console.log('Explicação: Function Expressions são atribuídas a variáveis, portanto seguem a regra da TDZ (Temporal Dead Zone) do let/const.')
}
exercicio15_2()
console.log()


// =============================================================================
// SEÇÃO 16: ARQUIVO DE REFERÊNCIA -> a104_contextoLexico.js
// CONCEITOS: Contexto Léxico Estático (Onde a função foi escrita fisicamente).
// =============================================================================

/**
 * EXERCÍCIO 16.1
 * Baseando-se nas técnicas ensinadas no arquivo a104_contextoLexico.js:
 * 1. Declare uma constante `const valor = 'Global'`.
 * 2. Crie uma função `minhaFuncao()` que imprime `valor`.
 * 3. Crie uma segunda função `executar()` que define localmente `const valor = 'Local'` e chama `minhaFuncao()`.
 * 4. Execute `executar()` e comprove que o resultado impresso é 'Global' devido ao escopo léxico!
 */
console.log('--- Exercício 16.1 (Ref: a104_contextoLexico.js) ---')
function exercicio16_1() {
    const valor = 'Global'

    function minhaFuncao() {
        console.log('Valor acessado:', valor)
    }

    function executar() {
        const valor = 'Local'
        minhaFuncao()
    }

    executar()
}
exercicio16_1()
console.log()

/**
 * EXERCÍCIO 16.2
 * Baseando-se nas técnicas ensinadas no arquivo a104_contextoLexico.js:
 * Explique conceitualmente por que a função carrega consigo o contexto onde foi declarada,
 * e não o contexto do local onde foi executada. Imprima essa reflexão.
 */
console.log('--- Exercício 16.2 (Ref: a104_contextoLexico.js) ---')
function exercicio16_2() {
    console.log('Explicação do Escopo Léxico: JavaScript possui escopo estático (léxico). O escopo de identificadores é resolvido no momento da definição da função no código-fonte, não no momento da chamada em tempo de execução.')
}
exercicio16_2()
console.log()


// =============================================================================
// SEÇÃO 17: ARQUIVO DE REFERÊNCIA -> a105_closure.js
// CONCEITOS: Closure (Fechamento) e Memória de Escopo Circundante.
// =============================================================================

/**
 * EXERCÍCIO 17.1
 * Baseando-se nas técnicas ensinadas no arquivo a105_closure.js:
 * 1. Crie uma função `fora()` que contém uma variável local `const x = 'Fechamento Local'`.
 * 2. Dentro dela, defina e retorne a função `dentro() { return x }`.
 * 3. Chame `const resultadoFuncao = fora()` e depois execute `resultadoFuncao()`.
 * 4. Mostre que a função 'lembra' do valor de `x` mesmo após `fora()` ter finalizado sua execução.
 */
console.log('--- Exercício 17.1 (Ref: a105_closure.js) ---')
function exercicio17_1() {
    function fora() {
        const x = 'Fechamento Local'
        function dentro() {
            return x
        }
        return dentro
    }

    const resultadoFuncao = fora()
    console.log('Valor preservado pelo closure:', resultadoFuncao())
}
exercicio17_1()
console.log()

/**
 * EXERCÍCIO 17.2
 * Baseando-se nas técnicas ensinadas no arquivo a105_closure.js:
 * Crie uma função `criarContador(valorInicial = 0)`.
 * A função deve retornar um objeto com dois métodos: `incrementar()` e `getValor()`.
 * Use closure para manter a variável de contagem 100% privada e inacessível externamente.
 */
console.log('--- Exercício 17.2 (Ref: a105_closure.js) ---')
function exercicio17_2() {
    function criarContador(valorInicial = 0) {
        let cont = valorInicial
        return {
            incrementar() { cont++ },
            getValor() { return cont }
        }
    }

    const contador = criarContador(10)
    contador.incrementar()
    contador.incrementar()
    console.log('Contador encapsulado via closure:', contador.getValor())
}
exercicio17_2()
console.log()


// =============================================================================
// SEÇÃO 18: ARQUIVO DE REFERÊNCIA -> a106_factory1.js
// CONCEITOS: Padrão Função Factory Simples.
// =============================================================================

/**
 * EXERCÍCIO 18.1
 * Baseando-se nas técnicas ensinadas no arquivo a106_factory1.js:
 * 1. Crie uma Função Factory simples chamada `criarPessoaPadrao()`.
 * 2. Ela deve retornar um novo objeto literal com valores padrão: `{ nome: 'Anônimo', idade: 18, ativo: true }`.
 * 3. Crie duas instâncias e comprove que são objetos distintos em memória (`p1 !== p2`).
 */
console.log('--- Exercício 18.1 (Ref: a106_factory1.js) ---')
function exercicio18_1() {
    function criarPessoaPadrao() {
        return {
            nome: 'Anônimo',
            idade: 18,
            ativo: true
        }
    }

    const p1 = criarPessoaPadrao()
    const p2 = criarPessoaPadrao()
    console.log('P1:', p1)
    console.log('São instâncias distintas em memória?:', p1 !== p2)
}
exercicio18_1()
console.log()

/**
 * EXERCÍCIO 18.2
 * Baseando-se nas técnicas ensinadas no arquivo a106_factory1.js:
 * Explique qual a vantagem prática de usar uma função factory em vez de repetir a criação
 * literal `{ ... }` em vários pontos do sistema.
 */
console.log('--- Exercício 18.2 (Ref: a106_factory1.js) ---')
function exercicio18_2() {
    console.log('Vantagem da Factory: Evita duplicação de código na criação de instâncias de objetos com a mesma estrutura e permite centralizar regras de inicialização.')
}
exercicio18_2()
console.log()


// =============================================================================
// SEÇÃO 19: ARQUIVO DE REFERÊNCIA -> a107_factory2.js
// CONCEITOS: Função Factory Parametrizada com Desconto/Cálculo.
// =============================================================================

/**
 * EXERCÍCIO 19.1
 * Baseando-se nas técnicas ensinadas no arquivo a107_factory2.js:
 * 1. Crie uma factory parametrizada `criarProduto(nome, preco, descontoPadrao = 0.1)`.
 * 2. Ela deve retornar um objeto com `nome`, `preco`, `desconto` e o `precoFinal: preco * (1 - descontoPadrao)`.
 * 3. Instancie 'iPad' (preco: 4000) e 'Caneta' (preco: 10).
 */
console.log('--- Exercício 19.1 (Ref: a107_factory2.js) ---')
function exercicio19_1() {
    function criarProduto(nome, preco, descontoPadrao = 0.1) {
        return {
            nome,
            preco,
            desconto: descontoPadrao,
            precoFinal: preco * (1 - descontoPadrao)
        }
    }

    console.log(criarProduto('iPad', 4000))
    console.log(criarProduto('Caneta', 10))
}
exercicio19_1()
console.log()

/**
 * EXERCÍCIO 19.2
 * Baseando-se nas técnicas ensinadas no arquivo a107_factory2.js:
 * Crie a factory `criarUsuario(nome, perfil = 'PADRAO')` com um método `podeAcessarAdmin()`
 * que retorna `perfil === 'ADMIN'`. Teste com um usuário comum e um administrador.
 */
console.log('--- Exercício 19.2 (Ref: a107_factory2.js) ---')
function exercicio19_2() {
    function criarUsuario(nome, perfil = 'PADRAO') {
        return {
            nome,
            perfil,
            podeAcessarAdmin() {
                return this.perfil === 'ADMIN'
            }
        }
    }

    const u1 = criarUsuario('João')
    const u2 = criarUsuario('AdminRoot', 'ADMIN')

    console.log(`${u1.nome} pode acessar admin?:`, u1.podeAcessarAdmin())
    console.log(`${u2.nome} pode acessar admin?:`, u2.podeAcessarAdmin())
}
exercicio19_2()
console.log()


// =============================================================================
// SEÇÃO 20: ARQUIVO DE REFERÊNCIA -> a108_classeVsFactory.js
// CONCEITOS: Classe ES6 vs Função Factory no Controle de Escopo do 'this'.
// =============================================================================

/**
 * EXERCÍCIO 20.1
 * Baseando-se nas técnicas ensinadas no arquivo a108_classeVsFactory.js:
 * 1. Crie a classe `PessoaClasse` com `constructor(nome)` e método `falar() { console.log(`Meu nome é ${this.nome}`) }`.
 * 2. Crie a factory `criarPessoaFactory(nome)` com método `falar: () => console.log(`Meu nome é ${nome}`)`.
 * 3. Instancie ambas e execute `falar()`.
 */
console.log('--- Exercício 20.1 (Ref: a108_classeVsFactory.js) ---')
function exercicio20_1() {
    class PessoaClasse {
        constructor(nome) {
            this.nome = nome
        }
        falar() {
            console.log(`Meu nome é ${this.nome}`)
        }
    }

    function criarPessoaFactory(nome) {
        return {
            falar: () => console.log(`Meu nome é ${nome}`)
        }
    }

    const p1 = new PessoaClasse('Leonardo')
    const p2 = criarPessoaFactory('Leonardo')

    p1.falar()
    p2.falar()
}
exercicio20_1()
console.log()

/**
 * EXERCÍCIO 20.2
 * Baseando-se nas técnicas ensinadas no arquivo a108_classeVsFactory.js:
 * Explique por que a Factory tem uma vantagem em eventos de navegador em relação à Classe:
 * na Factory, a variável `nome` fica armazenada no closure léxico e não depende de quem chamou o `this`.
 */
console.log('--- Exercício 20.2 (Ref: a108_classeVsFactory.js) ---')
function exercicio20_2() {
    console.log('Vantagem da Factory: O acesso às variáveis pelo closure não varia com o chamador da função (sem risco de perda do `this` em callbacks de eventos no DOM).')
}
exercicio20_2()
console.log()


// =============================================================================
// SEÇÃO 21: ARQUIVO DE REFERÊNCIA -> a109_desafioFuncaoConstrutora.js
// CONCEITOS: Converter Classe ES6 em Função Construtora Equivalente.
// =============================================================================

/**
 * EXERCÍCIO 21.1
 * Baseando-se nas técnicas ensinadas no arquivo a109_desafioFuncaoConstrutora.js:
 * 1. Transforme a classe abaixo em uma Função Construtora tradicional:
 *    class Cliente { constructor(nome) { this.nome = nome } falar() { return `Cliente: ${this.nome}` } }
 * 2. Crie a função construtora `Cliente(nome)` e instancie com `new`.
 */
console.log('--- Exercício 21.1 (Ref: a109_desafioFuncaoConstrutora.js) ---')
function exercicio21_1() {
    function Cliente(nome) {
        this.nome = nome
        this.falar = function () {
            return `Cliente: ${this.nome}`
        }
    }

    const c = new Cliente('Geraldo')
    console.log(c.falar())
}
exercicio21_1()
console.log()

/**
 * EXERCÍCIO 21.2
 * Baseando-se nas técnicas ensinadas no arquivo a109_desafioFuncaoConstrutora.js:
 * Refatore a construtora do exercício anterior anexando o método `falar` diretamente ao
 * `Cliente.prototype.falar` em vez de criá-lo no corpo do construtor, economizando memória.
 */
console.log('--- Exercício 21.2 (Ref: a109_desafioFuncaoConstrutora.js) ---')
function exercicio21_2() {
    function Cliente(nome) {
        this.nome = nome
    }
    Cliente.prototype.falar = function () {
        return `Cliente (via prototype): ${this.nome}`
    }

    const c1 = new Cliente('Sofia')
    const c2 = new Cliente('Arthur')
    console.log(c1.falar())
    console.log(c2.falar())
    console.log('Compartilham mesma referência no prototype?:', c1.falar === c2.falar)
}
exercicio21_2()
console.log()


// =============================================================================
// SEÇÃO 22: ARQUIVO DE REFERÊNCIA -> a110_iife.js
// CONCEITOS: IIFE (Immediately Invoked Function Expression) e Isolamento de Escopo.
// =============================================================================

/**
 * EXERCÍCIO 22.1
 * Baseando-se nas técnicas ensinadas no arquivo a110_iife.js:
 * 1. Escreva uma IIFE: `(function() { ... })()`.
 * 2. Crie variáveis locais dentro dela e imprima uma mensagem comprovando sua execução imediata.
 * 3. Mostre que variáveis criadas dentro da IIFE não poluem o escopo externo.
 */
console.log('--- Exercício 22.1 (Ref: a110_iife.js) ---')
function exercicio22_1() {
    (function () {
        const segredoIIFE = 'Protegido da janela global!'
        console.log('Executando imediatamente com IIFE:', segredoIIFE)
    })()

    console.log('segredoIIFE existe fora da IIFE?:', typeof segredoIIFE === 'undefined')
}
exercicio22_1()
console.log()

/**
 * EXERCÍCIO 22.2
 * Baseando-se nas técnicas ensinadas no arquivo a110_iife.js:
 * Crie uma IIFE que recebe parâmetros na invocação imediata:
 * `(function(sistema, versao) { console.log(`Iniciando ${sistema} v${versao}`) })('AppCore', '2.5.0')`.
 */
console.log('--- Exercício 22.2 (Ref: a110_iife.js) ---')
function exercicio22_2() {
    (function (sistema, versao) {
        console.log(`Iniciando ${sistema} v${versao}`)
    })('AppCore', '2.5.0')
}
exercicio22_2()
console.log()


// =============================================================================
// SEÇÃO 23: ARQUIVO DE REFERÊNCIA -> a111_callApply.js
// CONCEITOS: Invocação Explícita com .call() e .apply(), Passagem de Argumentos.
// =============================================================================

/**
 * EXERCÍCIO 23.1
 * Baseando-se nas técnicas ensinadas no arquivo a111_callApply.js:
 * 1. Crie uma função `getPrecoFinal(imposto = 0, moeda = 'R$')` que calcula:
 *    `return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}``
 * 2. Crie o produto: `const notebook = { nome: 'Notebook', preco: 4000, desc: 0.1 }`.
 * 3. Execute a função usando `.call(notebook, 0.05, 'R$')`.
 * 4. Execute a função usando `.apply(notebook, [0.05, 'US$'])`.
 */
console.log('--- Exercício 23.1 (Ref: a111_callApply.js) ---')
function exercicio23_1() {
    function getPrecoFinal(imposto = 0, moeda = 'R$') {
        return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`
    }

    const notebook = { nome: 'Notebook', preco: 4000, desc: 0.1 }

    console.log('Com .call():', getPrecoFinal.call(notebook, 0.05, 'R$'))
    console.log('Com .apply():', getPrecoFinal.apply(notebook, [0.05, 'US$']))
}
exercicio23_1()
console.log()

/**
 * EXERCÍCIO 23.2
 * Baseando-se nas técnicas ensinadas no arquivo a111_callApply.js:
 * Explique a diferença exata entre `.call()` e `.apply()`:
 * Ambos definem o contexto do `this`, mas `.call` recebe os argumentos como parâmetros soltos
 * separados por vírgula, enquanto `.apply` recebe os argumentos empacotados dentro de um array.
 */
console.log('--- Exercício 23.2 (Ref: a111_callApply.js) ---')
function exercicio23_2() {
    console.log('Diferença entre Call e Apply: .call(contexto, arg1, arg2...) recebe argumentos avulsos; .apply(contexto, [arg1, arg2...]) recebe argumentos em formato de array.')
}
exercicio23_2()
console.log()

console.log('=============================================================================')
console.log('FIM DA EXECUÇÃO DO CADERNO DE EXERCÍCIOS DO MÓDULO 06!')
console.log('Consulte o arquivo barema_exercicios.md para o gabarito e critérios de pontuação.')
console.log('=============================================================================')
