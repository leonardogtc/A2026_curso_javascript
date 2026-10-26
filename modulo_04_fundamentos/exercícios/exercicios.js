// =============================================================================
// CADERNO DE EXERCÍCIOS PRÁTICOS: MÓDULO 04 - FUNDAMENTOS DO JAVASCRIPT
// =============================================================================
// Diretório: modulo_04_fundamentos/exercícios/exercicios.js
// 
// INSTRUÇÕES GERAIS:
// 1. Cada seção abaixo contém no mínimo 2 exercícios práticos vinculados
//    aos 37 arquivos de aula de fundamentos (de a35 até a74).
// 2. Os enunciados indicam o arquivo de referência que você deve consultar.
// 3. Resolva os exercícios nos espaços designados.
// 4. Para testar suas soluções, execute este arquivo com:
//    node modulo_04_fundamentos/exercícios/exercicios.js
// 5. Consulte o arquivo 'barema_exercicios.md' para conferir critérios e gabarito.
// =============================================================================

console.log('=============================================================================')
console.log('INICIANDO EXECUÇÃO DO CADERNO DE EXERCÍCIOS - MÓDULO 04 (FUNDAMENTOS)')
console.log('=============================================================================\n')


// --- Seção 1: a35_organizacao.js ---
console.log('--- Exercício 1.1 (Ref: a35_organizacao.js) ---')
function exercicio1_1() {
    // Bloco de código delimitado por chaves agrupando sentenças:
    {
        console.log('Sentença 1 dentro do bloco')
        console.log('Sentença 2 dentro do bloco')
    }
}
exercicio1_1()

console.log('--- Exercício 1.2 (Ref: a35_organizacao.js) ---')
function exercicio1_2() {
    // Blocos aninhados:
    {
        const nivel1 = 'Nível 1'
        {
            const nivel2 = 'Nível 2'
            console.log(`Hierarquia: ${nivel1} -> ${nivel2}`)
        }
    }
}
exercicio1_2()
console.log()


// --- Seção 2: a37_comentarios.js ---
console.log('--- Exercício 2.1 (Ref: a37_comentarios.js) ---')
function exercicio2_1() {
    // Comentário de uma linha explicando o cálculo do frete:
    const valorBase = 100
    const frete = 15 // Adicional logístico
    console.log('Total com frete:', valorBase + frete)
}
exercicio2_1()

console.log('--- Exercício 2.2 (Ref: a37_comentarios.js) ---')
function exercicio2_2() {
    /*
     * Comentário de múltiplas linhas:
     * Função utilitária para conversão cambial.
     */
    const cotacaoDolar = 5.20
    const reais = 52.00
    console.log('Valor em dólares:', (reais / cotacaoDolar).toFixed(2))
}
exercicio2_2()
console.log()


// --- Seção 3: a38_variaveis_e_constantes.js ---
console.log('--- Exercício 3.1 (Ref: a38_variaveis_e_constantes.js) ---')
function exercicio3_1() {
    var a = 10
    let b = 20
    var a = 30 // var aceita ser redeclarada
    b = 40     // let aceita apenas reatribuição, não redeclaração
    console.log('Valores finais de a e b:', a, b)
}
exercicio3_1()

console.log('--- Exercício 3.2 (Ref: a38_variaveis_e_constantes.js) ---')
function exercicio3_2() {
    const c = 50
    console.log('Constante c:', c)
    console.log('Explicação: Variáveis declaradas com const não podem receber nova atribuição em tempo de execução.')
}
exercicio3_2()
console.log()


// --- Seção 4: a39_tipagem_fraca.js ---
console.log('--- Exercício 4.1 (Ref: a39_tipagem_fraca.js) ---')
function exercicio4_1() {
    let dado = 'Sou um texto'
    console.log(`Valor: ${dado} | Tipo: ${typeof dado}`)
    dado = 3.1415
    console.log(`Valor: ${dado} | Tipo: ${typeof dado}`)
    dado = false
    console.log(`Valor: ${dado} | Tipo: ${typeof dado}`)
}
exercicio4_1()

console.log('--- Exercício 4.2 (Ref: a39_tipagem_fraca.js) ---')
function exercicio4_2() {
    console.log('Boas práticas: Evitar nomes genéricos como `valor`, `data`, `numero`. Prefira `precoProduto`, `dataNascimento`.')
}
exercicio4_2()
console.log()


// --- Seção 5: a40_Number.js ---
console.log('--- Exercício 5.1 (Ref: a40_Number.js) ---')
function exercicio5_1() {
    const peso1 = 1.0
    const peso2 = Number('2.0')
    console.log('peso1 é inteiro?:', Number.isInteger(peso1))
    console.log('peso2 é inteiro?:', Number.isInteger(peso2))
}
exercicio5_1()

console.log('--- Exercício 5.2 (Ref: a40_Number.js) ---')
function exercicio5_2() {
    const media = 7.849312
    console.log('Média toFixed(2):', media.toFixed(2))
    console.log('Média em binário toString(2):', Math.floor(media).toString(2))
}
exercicio5_2()
console.log()


// --- Seção 6: a41_Number_alguns_cuidados.js ---
console.log('--- Exercício 6.1 (Ref: a41_Number_alguns_cuidados.js) ---')
function exercicio6_1() {
    console.log('7 / 0 =', 7 / 0) // Infinity
    console.log('"10" / 2 =', "10" / 2) // Coerção para número (5)
    console.log('"Show!" * 2 =', "Show!" * 2) // NaN
}
exercicio6_1()

console.log('--- Exercício 6.2 (Ref: a41_Number_alguns_cuidados.js) ---')
function exercicio6_2() {
    console.log('0.1 + 0.7 =', 0.1 + 0.7) // Imprecisão IEEE 754
    console.log('Correção com toFixed:', (0.1 + 0.7).toFixed(1))
}
exercicio6_2()
console.log()


// --- Seção 7: a42_usando_math.js ---
console.log('--- Exercício 7.1 (Ref: a42_usando_math.js) ---')
function exercicio7_1() {
    const raio = 5.6
    const area = Math.PI * Math.pow(raio, 2)
    console.log('Área da circunferência:', area.toFixed(2))
}
exercicio7_1()

console.log('--- Exercício 7.2 (Ref: a42_usando_math.js) ---')
function exercicio7_2() {
    console.log('Raiz quadrada de 144:', Math.sqrt(144))
    console.log('Arredondamento para baixo Math.floor(9.9):', Math.floor(9.9))
}
exercicio7_2()
console.log()


// --- Seção 8: a43_Strings.js ---
console.log('--- Exercício 8.1 (Ref: a43_Strings.js) ---')
function exercicio8_1() {
    const escola = 'Cod3r'
    console.log('charAt(4):', escola.charAt(4))
    console.log('charCodeAt(3):', escola.charCodeAt(3))
    console.log('indexOf("3"):', escola.indexOf('3'))
    console.log('substring(1):', escola.substring(1))
}
exercicio8_1()

console.log('--- Exercício 8.2 (Ref: a43_Strings.js) ---')
function exercicio8_2() {
    const nomes = 'Ana,Maria,Pedro,Carlos'
    const arrayNomes = nomes.split(',')
    console.log('Array após split:', arrayNomes)
    console.log('Replace dígito:', 'Cod3r'.replace(/\d/, 'e'))
}
exercicio8_2()
console.log()


// --- Seção 9: a44_template_string.js ---
console.log('--- Exercício 9.1 (Ref: a44_template_string.js) ---')
function exercicio9_1() {
    const nome = 'Rebeca'
    const saudacao = `Olá, ${nome}! Seja bem-vinda.`
    console.log(saudacao)
}
exercicio9_1()

console.log('--- Exercício 9.2 (Ref: a44_template_string.js) ---')
function exercicio9_2() {
    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}! O resultado de 1 + 1 é ${1 + 1}.`)
}
exercicio9_2()
console.log()


// --- Seção 10: a45_Booleanos.js ---
console.log('--- Exercício 10.1 (Ref: a45_Booleanos.js) ---')
function exercicio10_1() {
    let ativo = false
    console.log('Booleano literal:', ativo)
    ativo = 1
    console.log('!!1 é verdadeiro?:', !!ativo)
    console.log('!!0 é falso?:', !!0)
}
exercicio10_1()

console.log('--- Exercício 10.2 (Ref: a45_Booleanos.js) ---')
function exercicio10_2() {
    const nomePadrao = ''
    console.log('Valor retornado via ||:', nomePadrao || 'Desconhecido')
}
exercicio10_2()
console.log()


// --- Seção 11: a46_arrays.js ---
console.log('--- Exercício 11.1 (Ref: a46_arrays.js) ---')
function exercicio11_1() {
    const valores = [7.7, 8.9, 6.3, 9.2]
    console.log('Primeiro e quarto elemento:', valores[0], valores[3])
    valores[4] = 10
    console.log('Array com 5 elementos:', valores, '| Length:', valores.length)
}
exercicio11_1()

console.log('--- Exercício 11.2 (Ref: a46_arrays.js) ---')
function exercicio11_2() {
    const dados = [1, 'dois', { id: 3 }, false]
    dados.push('novoItem')
    const excluido = dados.pop()
    console.log('Item excluído via pop():', excluido)
    delete dados[0]
    console.log('Array com slot vazio após delete:', dados)
}
exercicio11_2()
console.log()


// --- Seção 12: a47_objects.js ---
console.log('--- Exercício 12.1 (Ref: a47_objects.js) ---')
function exercicio12_1() {
    const produto = {}
    produto.nome = 'Celular Ultra'
    produto.preco = 4999.90
    produto['desconto legal'] = 0.20
    console.log('Produto montado dinamicamente:', produto)
}
exercicio12_1()

console.log('--- Exercício 12.2 (Ref: a47_objects.js) ---')
function exercicio12_2() {
    const cliente = {
        nome: 'Marcos',
        endereco: { logradouro: 'Rua das Flores', numero: 123 }
    }
    console.log('Objeto aninhado:', cliente)
}
exercicio12_2()
console.log()


// --- Seção 13: a48_null_and_undefined.js ---
console.log('--- Exercício 13.1 (Ref: a48_null_and_undefined.js) ---')
function exercicio13_1() {
    let valor
    console.log('Variável declarada sem atribuição:', valor) // undefined
    valor = null
    console.log('Variável com ausência intencional de valor:', valor) // null
}
exercicio13_1()

console.log('--- Exercício 13.2 (Ref: a48_null_and_undefined.js) ---')
function exercicio13_2() {
    const objA = { nome: 'Objeto Original' }
    const objB = objA // atribuição por referência
    objB.nome = 'Alterado em B'
    console.log('objA.nome foi afetado por B?:', objA.nome)
}
exercicio13_2()
console.log()


// --- Seção 14: a49_funcaiEmQuaseTudo.js ---
console.log('--- Exercício 14.1 (Ref: a49_funcaiEmQuaseTudo.js) ---')
function exercicio14_1() {
    console.log('typeof Object:', typeof Object)
    class Produto {}
    console.log('typeof Produto (classe):', typeof Produto)
}
exercicio14_1()

console.log('--- Exercício 14.2 (Ref: a49_funcaiEmQuaseTudo.js) ---')
function exercicio14_2() {
    console.log('Conclusão: Em JavaScript, funções governam tanto os tipos estruturais quanto a criação de instâncias de objetos.')
}
exercicio14_2()
console.log()


// --- Seção 15: a50_funcao1.js ---
console.log('--- Exercício 15.1 (Ref: a50_funcao1.js) ---')
function exercicio15_1() {
    function imprimirSoma(a, b) {
        console.log('Soma impressa:', a + b)
    }
    imprimirSoma(2, 3)
}
exercicio15_1()

console.log('--- Exercício 15.2 (Ref: a50_funcao1.js) ---')
function exercicio15_2() {
    function somarRetornando(a, b = 0) {
        return a + b
    }
    console.log('Retorno de somarRetornando(10):', somarRetornando(10))
    console.log('Retorno de somarRetornando(10, 5):', somarRetornando(10, 5))
}
exercicio15_2()
console.log()


// --- Seção 16: a51_funcao2.js ---
console.log('--- Exercício 16.1 (Ref: a51_funcao2.js) ---')
function exercicio16_1() {
    const subtrair = function (a, b) {
        return a - b
    }
    console.log('Subtração (function expression):', subtrair(10, 3))
}
exercicio16_1()

console.log('--- Exercício 16.2 (Ref: a51_funcao2.js) ---')
function exercicio16_2() {
    const multiplicar = (a, b) => a * b
    console.log('Multiplicação com retorno implícito:', multiplicar(4, 5))
}
exercicio16_2()
console.log()


// --- Seção 17: a52_usando_var1.js ---
console.log('--- Exercício 17.1 (Ref: a52_usando_var1.js) ---')
function exercicio17_1() {
    {
        {
            var visivelFora = 'Estou visível fora dos blocos!'
        }
    }
    console.log(visivelFora)
}
exercicio17_1()

console.log('--- Exercício 17.2 (Ref: a52_usando_var1.js) ---')
function exercicio17_2() {
    function testeEscopoFuncao() {
        var local = 'Privado da função'
        return local
    }
    console.log('Retorno da função:', testeEscopoFuncao())
    console.log('local existe fora?:', typeof local === 'undefined')
}
exercicio17_2()
console.log()


// --- Seção 18: a54_usando_let.js ---
console.log('--- Exercício 18.1 (Ref: a54_usando_let.js) ---')
function exercicio18_1() {
    let numero = 1
    {
        let numero = 2
        console.log('Dentro do bloco com let:', numero)
    }
    console.log('Fora do bloco com let:', numero)
}
exercicio18_1()

console.log('--- Exercício 18.2 (Ref: a54_usando_let.js) ---')
function exercicio18_2() {
    console.log('Regra de ouro: Variáveis declaradas com let têm escopo global, escopo de função e escopo de bloco!')
}
exercicio18_2()
console.log()


// --- Seção 19: a55_usandoLacoForEmVar.js ---
console.log('--- Exercício 19.1 (Ref: a55_usandoLacoForEmVar.js) ---')
function exercicio19_1() {
    for (var i = 0; i < 5; i++) {}
    console.log('Valor de i fora do for (com var):', i)
}
exercicio19_1()

console.log('--- Exercício 19.2 (Ref: a55_usandoLacoForEmVar.js) ---')
function exercicio19_2() {
    console.log('Explicação: Como var não tem escopo de bloco, a variável contadora vaza para o escopo circundante.')
}
exercicio19_2()
console.log()


// --- Seção 20: a56_usandoLacoForEmLet.js ---
console.log('--- Exercício 20.1 (Ref: a56_usandoLacoForEmLet.js) ---')
function exercicio20_1() {
    for (let j = 0; j < 5; j++) {}
    console.log('j existe fora do laço for com let?:', typeof j === 'undefined')
}
exercicio20_1()

console.log('--- Exercício 20.2 (Ref: a56_usandoLacoForEmLet.js) ---')
function exercicio20_2() {
    console.log('Vantagem do let no for: Previne poluição do escopo e evita conflitos com outras variáveis do mesmo nome.')
}
exercicio20_2()
console.log()


// --- Seção 21: a57_usandoLacoForVarLet.js ---
console.log('--- Exercício 21.1 (Ref: a57_usandoLacoForVarLet.js) ---')
function exercicio21_1() {
    const funcs = []
    for (var k = 0; k < 5; k++) {
        funcs.push(function () {
            return k
        })
    }
    console.log('funcs[1]() com var:', funcs[1]()) // 5
    console.log('funcs[4]() com var:', funcs[4]()) // 5
}
exercicio21_1()

console.log('--- Exercício 21.2 (Ref: a57_usandoLacoForVarLet.js) ---')
function exercicio21_2() {
    console.log('Diagnóstico: Como var compartilha o mesmo escopo externo, todas as funções acessam a mesma referência de k após o término do loop.')
}
exercicio21_2()
console.log()


// --- Seção 22: a58_usandoLacoForVarLet.js ---
console.log('--- Exercício 22.1 (Ref: a58_usandoLacoForVarLet.js) ---')
function exercicio22_1() {
    const funcsLet = []
    for (let m = 0; m < 5; m++) {
        funcsLet.push(function () {
            return m
        })
    }
    console.log('funcsLet[1]() com let:', funcsLet[1]()) // 1
    console.log('funcsLet[4]() com let:', funcsLet[4]()) // 4
}
exercicio22_1()

console.log('--- Exercício 22.2 (Ref: a58_usandoLacoForVarLet.js) ---')
function exercicio22_2() {
    console.log('Diagnóstico: Com let, o JavaScript cria uma nova variável m a cada iteração do loop, preservando seu valor no closure de cada função.')
}
exercicio22_2()
console.log()


// --- Seção 23: a59_hosting.js ---
console.log('--- Exercício 23.1 (Ref: a59_hosting.js) ---')
function exercicio23_1() {
    console.log('Valor de a antes da atribuição (com var):', a)
    var a = 2
    console.log('Valor de a após atribuição:', a)
}
exercicio23_1()

console.log('--- Exercício 23.2 (Ref: a59_hosting.js) ---')
function exercicio23_2() {
    console.log('Hoisting com let: A declaração é içada, mas a variável entra em TDZ (Temporal Dead Zone) e gera ReferenceError se acessada antes da inicialização.')
}
exercicio23_2()
console.log()


// --- Seção 24: a60_funcao_x_objeto.js ---
console.log('--- Exercício 24.1 (Ref: a60_funcao_x_objeto.js) ---')
function exercicio24_1() {
    function Cliente() {}
    console.log('typeof Cliente:', typeof Cliente)
    console.log('typeof new Cliente():', typeof new Cliente())
}
exercicio24_1()

console.log('--- Exercício 24.2 (Ref: a60_funcao_x_objeto.js) ---')
function exercicio24_2() {
    console.log('typeof Object:', typeof Object)
    console.log('typeof new Object():', typeof new Object())
}
exercicio24_2()
console.log()


// --- Seção 25: a61_ParNomeValor.js ---
console.log('--- Exercício 25.1 (Ref: a61_ParNomeValor.js) ---')
function exercicio25_1() {
    const saudacao = 'Opa' // contexto léxico 1

    function exec() {
        const saudacao = 'Falaaa' // contexto léxico 2
        return saudacao
    }

    console.log('Saudação externa:', saudacao)
    console.log('Saudação interna de exec():', exec())
}
exercicio25_1()

console.log('--- Exercício 25.2 (Ref: a61_ParNomeValor.js) ---')
function exercicio25_2() {
    const cliente = {
        nome: 'Pedro',
        idade: 32,
        endereco: { logradouro: 'Rua Muito Legal', numero: 123 }
    }
    console.log('Pares nome/valor aninhados:', cliente)
}
exercicio25_2()
console.log()


// --- Seção 26: a62_NotacaoPonto.js ---
console.log('--- Exercício 26.1 (Ref: a62_NotacaoPonto.js) ---')
function exercicio26_1() {
    const obj = {}
    obj.nome = 'Bola'
    console.log('Acesso via notação ponto:', obj.nome)
}
exercicio26_1()

console.log('--- Exercício 26.2 (Ref: a62_NotacaoPonto.js) ---')
function exercicio26_2() {
    function Construtora(nome) {
        this.nome = nome
        this.exec = function () {
            return `Executando ${this.nome}`
        }
    }
    const instancia = new Construtora('Motor')
    console.log(instancia.exec())
}
exercicio26_2()
console.log()


// --- Seção 27: a63_OperadoresDeAtribuiocao.js ---
console.log('--- Exercício 27.1 (Ref: a63_OperadoresDeAtribuiocao.js) ---')
function exercicio27_1() {
    let b = 10
    b += 5  // b = b + 5
    b -= 4  // b = b - 4
    b *= 2  // b = b * 2
    b /= 2  // b = b / 2
    b %= 2  // b = b % 2
    console.log('Resultado final de b:', b)
}
exercicio27_1()

console.log('--- Exercício 27.2 (Ref: a63_OperadoresDeAtribuiocao.js) ---')
function exercicio27_2() {
    let texto = 'Aprender '
    texto += 'JavaScript '
    texto += 'é show!'
    console.log(texto)
}
exercicio27_2()
console.log()


// --- Seção 28: a64_destructuring.js ---
console.log('--- Exercício 28.1 (Ref: a64_destructuring.js) ---')
function exercicio28_1() {
    const pessoa = { nome: 'Ana', idade: 25, endereco: { cidade: 'Campinas' } }
    const { nome, idade } = pessoa
    console.log('Extração com destructuring:', nome, idade)
}
exercicio28_1()

console.log('--- Exercício 28.2 (Ref: a64_destructuring.js) ---')
function exercicio28_2() {
    const pessoa = { nome: 'Ana', endereco: { cidade: 'Campinas' } }
    const { nome: n, sobrenome: sn = 'Não informado' } = pessoa
    const { endereco: { cidade } } = pessoa
    console.log(`Nome renomeado: ${n}, Sobrenome padrão: ${sn}, Cidade aninhada: ${cidade}`)
}
exercicio28_2()
console.log()


// --- Seção 29: a65_destructuring.js ---
console.log('--- Exercício 29.1 (Ref: a65_destructuring.js) ---')
function exercicio29_1() {
    const [a, b, c] = [10, 20, 30]
    console.log('Destructuring em array posicional:', a, b, c)
}
exercicio29_1()

console.log('--- Exercício 29.2 (Ref: a65_destructuring.js) ---')
function exercicio29_2() {
    const [, [, elemento]] = [[1, 2], [3, 4]]
    console.log('Extraindo elemento de matriz com destructuring:', elemento) // 4
}
exercicio29_2()
console.log()


// --- Seção 30: a66_destructuring.js ---
console.log('--- Exercício 30.1 (Ref: a66_destructuring.js) ---')
function exercicio30_1() {
    function rand({ min = 0, max = 1000 } = {}) {
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
    console.log('rand({ min: 40, max: 50 }):', rand({ min: 40, max: 50 }))
    console.log('rand({ min: 950 }):', rand({ min: 950 }))
    console.log('rand():', rand())
}
exercicio30_1()

console.log('--- Exercício 30.2 (Ref: a66_destructuring.js) ---')
function exercicio30_2() {
    function exibirPerfil({ nome, cargo = 'Colaborador' }) {
        return `${nome} - Cargo: ${cargo}`
    }
    console.log(exibirPerfil({ nome: 'Felipe', cargo: 'Tech Lead' }))
    console.log(exibirPerfil({ nome: 'Amanda' }))
}
exercicio30_2()
console.log()


// --- Seção 31: a67_destructuring.js ---
console.log('--- Exercício 31.1 (Ref: a67_destructuring.js) ---')
function exercicio31_1() {
    function randArray([min = 0, max = 1000] = []) {
        if (min > max) [min, max] = [max, min]
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
    console.log('randArray([50, 40]):', randArray([50, 40]))
    console.log('randArray([992]):', randArray([992]))
}
exercicio31_1()

console.log('--- Exercício 31.2 (Ref: a67_destructuring.js) ---')
function exercicio31_2() {
    function inverterValores(a, b) {
        let x = a
        let y = b
        ;[x, y] = [y, x]
        return [x, y]
    }
    console.log('Valores invertidos com destructuring:', inverterValores(10, 20))
}
exercicio31_2()
console.log()


// --- Seção 32: a68_operadoresAritmeticos.js ---
console.log('--- Exercício 32.1 (Ref: a68_operadoresAritmeticos.js) ---')
function exercicio32_1() {
    const [a, b, c, d] = [3, 5, 1, 15]
    const soma = a + b + c + d
    const subtracao = d - b
    const multiplicacao = a * b
    const divisao = d / a
    const modulo = a % 2
    console.log({ soma, subtracao, multiplicacao, divisao, modulo })
}
exercicio32_1()

console.log('--- Exercício 32.2 (Ref: a68_operadoresAritmeticos.js) ---')
function exercicio32_2() {
    const base = 2
    const expoente = 10
    console.log('Exponenciação ES2016 (2 ** 10):', base ** expoente)
}
exercicio32_2()
console.log()


// --- Seção 33: a69_operadoresRelacionais.js ---
console.log('--- Exercício 33.1 (Ref: a69_operadoresRelacionais.js) ---')
function exercicio33_1() {
    console.log('"01" == 1:', '01' == 1)   // true (com coerção)
    console.log('"01" === 1:', '01' === 1) // false (estrito)
    console.log('3 != 3:', 3 != 3)         // false
    console.log('3 !== "3":', 3 !== '3')   // true
}
exercicio33_1()

console.log('--- Exercício 33.2 (Ref: a69_operadoresRelacionais.js) ---')
function exercicio33_2() {
    const d1 = new Date(0)
    const d2 = new Date(0)
    console.log('d1 === d2:', d1 === d2) // false (referências de memória distintas)
    console.log('d1.getTime() === d2.getTime():', d1.getTime() === d2.getTime()) // true
}
exercicio33_2()
console.log()


// --- Seção 34: a70_operadoresLogicos.js ---
console.log('--- Exercício 34.1 (Ref: a70_operadoresLogicos.js) ---')
function exercicio34_1() {
    function compras(trabalho1, trabalho2) {
        const comprarSorvete = trabalho1 || trabalho2
        const comprarTv50 = trabalho1 && trabalho2
        const comprarTv32 = trabalho1 != trabalho2 // XOR (OU Exclusivo)
        const manterSaudavel = !comprarSorvete

        return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    }

    console.log('Trabalhos (true, true):', compras(true, true))
    console.log('Trabalhos (true, false):', compras(true, false))
}
exercicio34_1()

console.log('--- Exercício 34.2 (Ref: a70_operadoresLogicos.js) ---')
function exercicio34_2() {
    console.log('Curto-circuito lógico: Em "false && expressao", a expressão à direita nem é avaliada!')
    let executou = false
    const teste = false && (executou = true)
    console.log('A variável executou foi alterada?:', executou)
}
exercicio34_2()
console.log()


// --- Seção 35: a71_operadoresUnarios.js ---
console.log('--- Exercício 35.1 (Ref: a71_operadoresUnarios.js) ---')
function exercicio35_1() {
    let num1 = 1
    let num2 = 2
    num1++
    console.log('num1 após pós-fixado:', num1)
    --num1
    console.log('num1 após pré-fixado:', num1)
    console.log('++num1 === num2++?:', ++num1 === num2++) // true (cuidado com precedência)
}
exercicio35_1()

console.log('--- Exercício 35.2 (Ref: a71_operadoresUnarios.js) ---')
function exercicio35_2() {
    console.log('Boa prática: Evite instruções complexas com incrementos embutidos em comparações. Deixe o código limpo e direto.')
}
exercicio35_2()
console.log()


// --- Seção 36: a72_operadoresTernarios.js ---
console.log('--- Exercício 36.1 (Ref: a72_operadoresTernarios.js) ---')
function exercicio36_1() {
    const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
    console.log('Nota 7.1:', resultado(7.1))
    console.log('Nota 6.7:', resultado(6.7))
}
exercicio36_1()

console.log('--- Exercício 36.2 (Ref: a72_operadoresTernarios.js) ---')
function exercicio36_2() {
    const statusEntrega = distanciaKm => distanciaKm <= 5 ? 'Grátis' : distanciaKm <= 15 ? 'R$ 10,00' : 'R$ 25,00'
    console.log('Distância 3km:', statusEntrega(3))
    console.log('Distância 12km:', statusEntrega(12))
    console.log('Distância 30km:', statusEntrega(30))
}
exercicio36_2()
console.log()


// --- Seção 37: a74_erros.js ---
console.log('--- Exercício 37.1 (Ref: a74_erros.js) ---')
function exercicio37_1() {
    function tratarErroELancar(erro) {
        throw new Error(`Erro processado: ${erro.message}`)
    }

    function imprimirNomeGritado(obj) {
        try {
            console.log(obj.name.toUpperCase() + '!!!')
        } catch (e) {
            console.log('Exceção capturada com sucesso no bloco catch!')
        } finally {
            console.log('Bloco finally executado obrigatoriamente!')
        }
    }

    imprimirNomeGritado({ nome: 'Carlos' }) // Propriedade 'nome' incorreta (esperava 'name')
}
exercicio37_1()

console.log('--- Exercício 37.2 (Ref: a74_erros.js) ---')
function exercicio37_2() {
    function validarIdade(idade) {
        if (idade < 0) {
            throw { id: 400, msg: 'Idade não pode ser negativa!', data: new Date() }
        }
        return `Idade válida: ${idade}`
    }

    try {
        validarIdade(-5)
    } catch (err) {
        console.log('Objeto de erro personalizado capturado:', err.msg)
    }
}
exercicio37_2()
console.log()

console.log('=============================================================================')
console.log('FIM DA EXECUÇÃO DO CADERNO DE EXERCÍCIOS DO MÓDULO 04!')
console.log('Consulte o arquivo barema_exercicios.md para o gabarito e critérios de pontuação.')
console.log('=============================================================================')
