// =============================================================================
// CADERNO DE EXERCÍCIOS PRÁTICOS: MÓDULO 05 - ESTRUTURAS DE CONTROLE (JAVASCRIPT)
// =============================================================================
// Diretório: modulo_05_controle/exercícios/exercicios.js
// 
// INSTRUÇÕES GERAIS:
// 1. Cada seção abaixo contém no mínimo 2 exercícios práticos diretamente vinculados
//    aos arquivos de aula (de a77_if1.js até a87_breakContinue.js).
// 2. Os enunciados especificam o arquivo de referência que você deve consultar.
// 3. Resolva os exercícios escrevendo seu código nos espaços designados.
// 4. Para testar suas soluções, execute este arquivo com:
//    node modulo_05_controle/exercícios/exercicios.js
// 5. Consulte o arquivo 'barema_exercicios.md' para conferir critérios de pontuação e gabarito.
// =============================================================================

console.log('=============================================================================')
console.log('INICIANDO EXECUÇÃO DO CADERNO DE EXERCÍCIOS - MÓDULO 05 (CONTROLE)')
console.log('=============================================================================\n')


// =============================================================================
// SEÇÃO 1: ARQUIVO DE REFERÊNCIA -> a77_if1.js
// CONCEITOS: Condicional simples com if, Expressões relacionais, Truthy vs Falsy.
// =============================================================================

/**
 * EXERCÍCIO 1.1
 * Baseando-se nas técnicas ensinadas no arquivo a77_if1.js:
 * 1. Crie uma função chamada `analisarCredito(renda, score)` que recebe a renda mensal e o score de crédito.
 * 2. Utilizando uma estrutura `if` simples, verifique se a renda é maior ou igual a 3000 E o score é maior ou igual a 700.
 * 3. Se a condição for verdadeira, imprima: "Crédito Pré-Aprovado para renda R$ [renda] e score [score]".
 * 4. Teste a função com (4500, 750) e (2500, 800).
 */
console.log('--- Exercício 1.1 (Ref: a77_if1.js) ---')
function exercicio1_1() {
    function analisarCredito(renda, score) {
        if (renda >= 3000 && score >= 700) {
            console.log(`Crédito Pré-Aprovado para renda R$ ${renda} e score ${score}`)
        }
    }

    analisarCredito(4500, 750)
    analisarCredito(2500, 800)
}
exercicio1_1()
console.log()

/**
 * EXERCÍCIO 1.2
 * Baseando-se nas técnicas ensinadas no arquivo a77_if1.js:
 * 1. Crie uma função chamada `testarCoercaoBooleana(dado)` que avalia a expressão `if (dado)`.
 *    Se truthy, imprima: "[dado] -> AVALIADO COMO TRUTHY".
 *    Se falsy, imprima através de uma verificação `if (!dado)`: "[dado] -> AVALIADO COMO FALSY".
 * 2. Teste com os seguintes valores: 0, -10, "", "Texto", null, undefined, [], {}.
 */
console.log('--- Exercício 1.2 (Ref: a77_if1.js) ---')
function exercicio1_2() {
    function testarCoercaoBooleana(dado) {
        if (dado) {
            console.log(`${JSON.stringify(dado) ?? dado} -> AVALIADO COMO TRUTHY`)
        }
        if (!dado) {
            console.log(`${JSON.stringify(dado) ?? dado} -> AVALIADO COMO FALSY`)
        }
    }

    const amostras = [0, -10, "", "Texto", null, undefined, [], {}]
    amostras.forEach(item => testarCoercaoBooleana(item))
}
exercicio1_2()
console.log()


// =============================================================================
// SEÇÃO 2: ARQUIVO DE REFERÊNCIA -> a78_if2.js
// CONCEITOS: Cuidados de sintaxe, Omissão de chaves {}, Ponto e vírgula acidental (;).
// =============================================================================

/**
 * EXERCÍCIO 2.1
 * Baseando-se nas técnicas ensinadas no arquivo a78_if2.js:
 * 1. O código abaixo possui o clássico bug silencioso do ponto e vírgula pós-if:
 *    function atualizarEstoqueComBug(qtd) {
 *        if (qtd > 0); {
 *            console.log('Item expedido com sucesso!')
 *        }
 *    }
 * 2. Demonstre o bug chamando a função com `qtd = -5` (ela imprimirá indevidamente a mensagem!).
 * 3. Escreva a versão corrigida `atualizarEstoqueCorreto(qtd)` com bloco `{}` sem ponto e vírgula
 *    e comprove que para `qtd = -5` nada é impresso.
 */
console.log('--- Exercício 2.1 (Ref: a78_if2.js) ---')
function exercicio2_1() {
    function atualizarEstoqueComBug(qtd) {
        if (qtd > 0); {
            console.log('BUG -> Item expedido mesmo com qtd negativa:', qtd)
        }
    }

    function atualizarEstoqueCorreto(qtd) {
        if (qtd > 0) {
            console.log('CORRETO -> Item expedido com sucesso:', qtd)
        }
    }

    atualizarEstoqueComBug(-5)
    atualizarEstoqueCorreto(-5)
    atualizarEstoqueCorreto(10)
}
exercicio2_1()
console.log()

/**
 * EXERCÍCIO 2.2
 * Baseando-se nas técnicas ensinadas no arquivo a78_if2.js:
 * 1. Demonstre a armadilha de omitir as chaves `{}` quando há mais de uma instrução:
 *    Crie uma função `verificarMeta(vendas)` com duas linhas indentadas após um `if (vendas >= 100)`:
 *    - linha 1: console.log('Meta batida!')
 *    - linha 2: console.log('Bônus creditado!')
 * 2. Chame com `vendas = 50`. Observe que 'Bônus creditado!' sempre executa porque não está dentro do bloco!
 * 3. Em seguida, refatore com o bloco `{ ... }` garantindo que ambas as instruções estejam subordinadas ao if.
 */
console.log('--- Exercício 2.2 (Ref: a78_if2.js) ---')
function exercicio2_2() {
    function verificarMetaSemChaves(vendas) {
        if (vendas >= 100)
            console.log('Meta batida!')
        console.log('Armadilha: Bônus creditado sempre (fora do if)!')
    }

    function verificarMetaComChaves(vendas) {
        if (vendas >= 100) {
            console.log('Meta batida!')
            console.log('Bônus creditado!')
        }
    }

    console.log('Sem chaves com vendas = 50:')
    verificarMetaSemChaves(50)

    console.log('Com chaves com vendas = 50:')
    verificarMetaComChaves(50)
    console.log('Com chaves com vendas = 120:')
    verificarMetaComChaves(120)
}
exercicio2_2()
console.log()


// =============================================================================
// SEÇÃO 3: ARQUIVO DE REFERÊNCIA -> a79_ifElse.js
// CONCEITOS: Estrutura condicional if...else, Tipagem fraca e coerções inesperadas.
// =============================================================================

/**
 * EXERCÍCIO 3.1
 * Baseando-se nas técnicas ensinadas no arquivo a79_ifElse.js:
 * 1. Crie uma função chamada `validarAcessoEvento(idade)` que recebe uma idade numérica.
 * 2. Se `idade >= 18`, imprima: "Acesso Permitido: Maior de idade ([idade] anos)".
 * 3. Caso contrário (`else`), imprima: "Acesso Negado: Menor de idade ([idade] anos)".
 * 4. Teste com 21 e 16.
 */
console.log('--- Exercício 3.1 (Ref: a79_ifElse.js) ---')
function exercicio3_1() {
    function validarAcessoEvento(idade) {
        if (idade >= 18) {
            console.log(`Acesso Permitido: Maior de idade (${idade} anos)`)
        } else {
            console.log(`Acesso Negado: Menor de idade (${idade} anos)`)
        }
    }

    validarAcessoEvento(21)
    validarAcessoEvento(16)
}
exercicio3_1()
console.log()

/**
 * EXERCÍCIO 3.2
 * Baseando-se nas técnicas ensinadas no arquivo a79_ifElse.js:
 * O JavaScript é de tipagem fraca. Se passarmos uma string como `'Aprovado'` para `imprimirResultado(nota)`
 * que faz `if (nota >= 7)`, o resultado da comparação relacional é `false` e cai silenciosamente no `else`!
 * 1. Crie uma função `avaliarNotaSegura(nota)` que verifique primeiro com `typeof nota === 'number' && !isNaN(nota)`.
 * 2. Se for número: execute o `if (nota >= 7) { ... } else { ... }`.
 * 3. Se não for número válido: imprima "[nota] -> Entrada Inválida: Forneça um valor numérico!".
 * 4. Teste com: 8.5, 4.0, "10" e "TextoQualquer".
 */
console.log('--- Exercício 3.2 (Ref: a79_ifElse.js) ---')
function exercicio3_2() {
    function avaliarNotaSegura(nota) {
        if (typeof nota !== 'number' || isNaN(nota)) {
            console.log(`${nota} -> Entrada Inválida: Forneça um valor numérico!`)
        } else if (nota >= 7) {
            console.log(`Nota ${nota}: Aprovado`)
        } else {
            console.log(`Nota ${nota}: Reprovado`)
        }
    }

    avaliarNotaSegura(8.5)
    avaliarNotaSegura(4.0)
    avaliarNotaSegura("10")
    avaliarNotaSegura("TextoQualquer")
}
exercicio3_2()
console.log()


// =============================================================================
// SEÇÃO 4: ARQUIVO DE REFERÊNCIA -> a80_ifElseIf.js
// CONCEITOS: Condicionais aninhadas if / else if / else, Encadeamento de faixas.
// =============================================================================

/**
 * EXERCÍCIO 4.1
 * Baseando-se nas técnicas ensinadas no arquivo a80_ifElseIf.js:
 * 1. Crie uma função `classificarAtleta(idade)` com encadeamento de `else if`:
 *    - Menor que 10: "Mirim"
 *    - De 10 a 14: "Infantil"
 *    - De 15 a 17: "Juvenil"
 *    - De 18 a 40: "Adulto"
 *    - Acima de 40: "Master"
 *    - Valores negativos: "Idade Inválida"
 * 2. Teste a função com -2, 8, 12, 16, 25 e 48.
 */
console.log('--- Exercício 4.1 (Ref: a80_ifElseIf.js) ---')
function exercicio4_1() {
    function classificarAtleta(idade) {
        if (idade < 0) {
            console.log(`Idade ${idade}: Idade Inválida`)
        } else if (idade < 10) {
            console.log(`Idade ${idade}: Categoria Mirim`)
        } else if (idade <= 14) {
            console.log(`Idade ${idade}: Categoria Infantil`)
        } else if (idade <= 17) {
            console.log(`Idade ${idade}: Categoria Juvenil`)
        } else if (idade <= 40) {
            console.log(`Idade ${idade}: Categoria Adulto`)
        } else {
            console.log(`Idade ${idade}: Categoria Master`)
        }
    }

    ;[-2, 8, 12, 16, 25, 48].forEach(idade => classificarAtleta(idade))
}
exercicio4_1()
console.log()

/**
 * EXERCÍCIO 4.2
 * Baseando-se nas técnicas ensinadas no arquivo a80_ifElseIf.js:
 * 1. Adicione ao protótipo `Number.prototype.entre = function (inicio, fim) { return this >= inicio && this <= fim }`.
 * 2. Crie uma função `classificarVelocidade(kmh)` que utilize o método `.entre()` na estrutura `if / else if`:
 *    - 0 a 40: "Trânsito lento"
 *    - 41 a 80: "Velocidade moderada"
 *    - 81 a 110: "Velocidade de rodovia"
 *    - Acima de 110: "Infração grave por excesso"
 * 3. Teste com 30, 65, 100 e 135.
 */
console.log('--- Exercício 4.2 (Ref: a80_ifElseIf.js) ---')
function exercicio4_2() {
    Number.prototype.entre = function (inicio, fim) {
        return this >= inicio && this <= fim
    }

    function classificarVelocidade(kmh) {
        if (kmh.entre(0, 40)) {
            console.log(`${kmh} km/h: Trânsito lento`)
        } else if (kmh.entre(41, 80)) {
            console.log(`${kmh} km/h: Velocidade moderada`)
        } else if (kmh.entre(81, 110)) {
            console.log(`${kmh} km/h: Velocidade de rodovia`)
        } else if (kmh > 110) {
            console.log(`${kmh} km/h: Infração grave por excesso`)
        } else {
            console.log(`${kmh} km/h: Velocidade inválida`)
        }
    }

    ;[30, 65, 100, 135].forEach(v => classificarVelocidade(v))
}
exercicio4_2()
console.log()


// =============================================================================
// SEÇÃO 5: ARQUIVO DE REFERÊNCIA -> a81_switch.js
// CONCEITOS: Estrutura Switch/Case/Break/Default, Comparação estrita (===), Fallthrough.
// =============================================================================

/**
 * EXERCÍCIO 5.1
 * Baseando-se nas técnicas ensinadas no arquivo a81_switch.js:
 * 1. Crie uma função calculadora chamada `operacaoBasica(a, b, operador)` utilizando `switch(operador)`.
 * 2. Casos suportados:
 *    - '+': retorna a + b
 *    - '-': retorna a - b
 *    - '*': retorna a * b
 *    - '/': retorna b !== 0 ? a / b : 'Divisão por zero não permitida'
 *    - default: retorna 'Operador desconhecido'
 * 3. Cuidado com o `break` (ou retornos diretos). Teste todas as operações e o caso default.
 */
console.log('--- Exercício 5.1 (Ref: a81_switch.js) ---')
function exercicio5_1() {
    function operacaoBasica(a, b, operador) {
        switch (operador) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return b !== 0 ? a / b : 'Divisão por zero não permitida'
            default:
                return 'Operador desconhecido'
        }
    }

    console.log('10 + 5 =', operacaoBasica(10, 5, '+'))
    console.log('10 - 5 =', operacaoBasica(10, 5, '-'))
    console.log('10 * 5 =', operacaoBasica(10, 5, '*'))
    console.log('10 / 5 =', operacaoBasica(10, 5, '/'))
    console.log('10 / 0 =', operacaoBasica(10, 0, '/'))
    console.log('10 ^ 5 =', operacaoBasica(10, 5, '^'))
}
exercicio5_1()
console.log()

/**
 * EXERCÍCIO 5.2
 * Baseando-se nas técnicas ensinadas no arquivo a81_switch.js:
 * Demonstre o uso do "Fallthrough deliberado" (agrupamento de múltiplos cases sem break intencionalmente):
 * 1. Crie uma função `classificarDia(dia)` que recebe um número de 1 a 7 (1=Domingo, 7=Sábado).
 * 2. Agrupe os cases 1 e 7 para imprimir: "Fim de semana".
 * 3. Agrupe os cases 2, 3, 4, 5 e 6 para imprimir: "Dia útil".
 * 4. Caso default: imprimir "Dia inválido".
 * 5. Teste com 1, 3, 7 e 9.
 */
console.log('--- Exercício 5.2 (Ref: a81_switch.js) ---')
function exercicio5_2() {
    function classificarDia(dia) {
        switch (dia) {
            case 1:
            case 7:
                console.log(`Dia ${dia}: Fim de semana`)
                break
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                console.log(`Dia ${dia}: Dia útil`)
                break
            default:
                console.log(`Dia ${dia}: Dia inválido`)
                break
        }
    }

    ;[1, 3, 7, 9].forEach(d => classificarDia(d))
}
exercicio5_2()
console.log()


// =============================================================================
// SEÇÃO 6: ARQUIVO DE REFERÊNCIA -> a82_while.js
// CONCEITOS: Laço While para iterações indeterminadas, Condição testada no início.
// =============================================================================

/**
 * EXERCÍCIO 6.1
 * Baseando-se nas técnicas ensinadas no arquivo a82_while.js:
 * 1. Crie uma função geradora de números aleatórios inteiros `getInteiroAleatorioEntre(min, max)`.
 * 2. Escreva uma rotina com `while` que continua sorteando números entre 1 e 20 até que o número 15 seja sorteado.
 * 3. Conte quantas tentativas foram necessárias e imprima:
 *    "Número 15 sorteado com sucesso após [cont] tentativas!".
 */
console.log('--- Exercício 6.1 (Ref: a82_while.js) ---')
function exercicio6_1() {
    function getInteiroAleatorioEntre(min, max) {
        const fator = (max - min) + 1
        return Math.floor(Math.random() * fator) + min
    }

    let opcao = 0
    let tentativas = 0

    while (opcao !== 15) {
        opcao = getInteiroAleatorioEntre(1, 20)
        tentativas++
    }

    console.log(`Número 15 sorteado com sucesso após ${tentativas} tentativa(s)!`)
}
exercicio6_1()
console.log()

/**
 * EXERCÍCIO 6.2
 * Baseando-se nas técnicas ensinadas no arquivo a82_while.js:
 * 1. Simule uma conta bancária com saldo inicial de R$ 500.00.
 * 2. Em um laço `while`, desconte saques de valores aleatórios entre 40 e 80 enquanto o saldo for suficiente
 *    para o próximo saque.
 * 3. A cada volta, exiba o valor sacado e o saldo restante.
 * 4. Ao final do laço, exiba o saldo residual que não pôde mais cobrir um saque.
 */
console.log('--- Exercício 6.2 (Ref: a82_while.js) ---')
function exercicio6_2() {
    let saldo = 500.00
    let rodada = 1

    while (saldo >= 50.00) {
        const valorSaque = Math.floor(Math.random() * 31) + 50 // entre 50 e 80
        if (valorSaque <= saldo) {
            saldo -= valorSaque
            console.log(`Saque #${rodada}: R$ ${valorSaque.toFixed(2)} | Saldo restante: R$ ${saldo.toFixed(2)}`)
            rodada++
        } else {
            break
        }
    }
    console.log(`Operação finalizada. Saldo residual: R$ ${saldo.toFixed(2)}`)
}
exercicio6_2()
console.log()


// =============================================================================
// SEÇÃO 7: ARQUIVO DE REFERÊNCIA -> a83_doWhile.js
// CONCEITOS: Laço Do/While, Execução garantida de pelo menos uma iteração inicial.
// =============================================================================

/**
 * EXERCÍCIO 7.1
 * Baseando-se nas técnicas ensinadas no arquivo a83_doWhile.js:
 * 1. Demonstre a diferença crucial entre `while` e `do...while`:
 *    Crie uma variável `let condicao = false`.
 * 2. Tente executar um bloco `while (condicao)` imprimindo uma mensagem (ele NÃO executa!).
 * 3. Em seguida, execute o mesmo teste em um bloco `do { ... } while (condicao)`.
 * 4. Imprima no console a comprovação de que o `do...while` executou exatamente 1 vez mesmo com a condição falsa.
 */
console.log('--- Exercício 7.1 (Ref: a83_doWhile.js) ---')
function exercicio7_1() {
    const condicao = false
    let executouWhile = false
    let executouDoWhile = false

    while (condicao) {
        executouWhile = true
    }

    do {
        executouDoWhile = true
    } while (condicao)

    console.log('O while simples executou?:', executouWhile)
    console.log('O do...while executou pelo menos 1 vez?:', executouDoWhile)
}
exercicio7_1()
console.log()

/**
 * EXERCÍCIO 7.2
 * Baseando-se nas técnicas ensinadas no arquivo a83_doWhile.js:
 * 1. Crie uma simulação de autenticação com `do...while`:
 *    O sistema gera números inteiros entre 1 e 5 simulando tentativas de acertar um PIN secreto fixado em 3.
 * 2. O laço `do { ... } while (tentativa !== pinSecreto)` deve rodar até acertar o PIN,
 *    contando o número de tentativas e imprimindo cada tentativa realizada.
 */
console.log('--- Exercício 7.2 (Ref: a83_doWhile.js) ---')
function exercicio7_2() {
    const pinSecreto = 3
    let tentativa
    let totalTentativas = 0

    do {
        tentativa = Math.floor(Math.random() * 5) + 1
        totalTentativas++
        console.log(`Tentativa #${totalTentativas}: PIN testado = ${tentativa}`)
    } while (tentativa !== pinSecreto)

    console.log(`PIN correto (${pinSecreto}) encontrado com sucesso em ${totalTentativas} tentativa(s)!`)
}
exercicio7_2()
console.log()


// =============================================================================
// SEÇÃO 8: ARQUIVO DE REFERÊNCIA -> a85_for1.js
// CONCEITOS: Laço For tradicional, Inicialização, Expressão de Teste e Incremento.
// =============================================================================

/**
 * EXERCÍCIO 8.1
 * Baseando-se nas técnicas ensinadas no arquivo a85_for1.js:
 * 1. Crie uma função `gerarTabuada(numero)` utilizando o laço `for` com variável contadora `let i = 1; i <= 10; i++`.
 * 2. Imprima a multiplicação linha a linha no formato: `[numero] x [i] = [numero * i]`.
 * 3. Teste para o número 7.
 */
console.log('--- Exercício 8.1 (Ref: a85_for1.js) ---')
function exercicio8_1() {
    function gerarTabuada(numero) {
        console.log(`Tabuada do ${numero}:`)
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
    }

    gerarTabuada(7)
}
exercicio8_1()
console.log()

/**
 * EXERCÍCIO 8.2
 * Baseando-se nas técnicas ensinadas no arquivo a85_for1.js:
 * 1. Dado o array `const notas = [6.7, 7.4, 9.8, 8.1, 7.7]`.
 * 2. Utilize o laço `for` clássico para percorrer o array DE TRÁS PARA FRENTE
 *    (iniciando em `notas.length - 1` até `i >= 0`, com decremento `i--`).
 * 3. Imprima: "Índice [i] -> Nota: [notas[i]]".
 * 4. Calcule também a média aritmética das notas dentro do laço e imprima a média final.
 */
console.log('--- Exercício 8.2 (Ref: a85_for1.js) ---')
function exercicio8_2() {
    const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
    let soma = 0

    console.log('Percorrendo em ordem inversa:')
    for (let i = notas.length - 1; i >= 0; i--) {
        console.log(`Índice ${i} -> Nota: ${notas[i]}`)
        soma += notas[i]
    }
    const media = soma / notas.length
    console.log(`Média final calculada: ${media.toFixed(2)}`)
}
exercicio8_2()
console.log()


// =============================================================================
// SEÇÃO 9: ARQUIVO DE REFERÊNCIA -> a86_for2.js
// CONCEITOS: Laço For...in para percorrer atributos de objetos e índices de arrays.
// =============================================================================

/**
 * EXERCÍCIO 9.1
 * Baseando-se nas técnicas ensinadas no arquivo a86_for2.js:
 * 1. Crie um objeto `carro` com propriedades: `modelo: 'Civic'`, `fabricante: 'Honda'`,
 *    `ano: 2022`, `preco: 125000`, `cambioAutomatico: true`.
 * 2. Utilize a estrutura `for (let atributo in carro)` para iterar sobre todas as propriedades do objeto.
 * 3. Imprima cada linha no formato: `Propriedade: [atributo] -> Valor: [carro[atributo]]`.
 */
console.log('--- Exercício 9.1 (Ref: a86_for2.js) ---')
function exercicio9_1() {
    const carro = {
        modelo: 'Civic',
        fabricante: 'Honda',
        ano: 2022,
        preco: 125000,
        cambioAutomatico: true
    }

    for (let atributo in carro) {
        console.log(`Propriedade: ${atributo} -> Valor: ${carro[atributo]}`)
    }
}
exercicio9_1()
console.log()

/**
 * EXERCÍCIO 9.2
 * Baseando-se nas técnicas ensinadas no arquivo a86_for2.js:
 * 1. Dado o array `const linguagens = ['JavaScript', 'Python', 'Go', 'Rust']`.
 * 2. Utilize `for (let i in linguagens)` para exibir o índice e o valor.
 * 3. Mostre através de `typeof i` que, na estrutura `for...in`, o identificador `i`
 *    é retornado como uma `string`, e não como um número! Explique essa particularidade.
 */
console.log('--- Exercício 9.2 (Ref: a86_for2.js) ---')
function exercicio9_2() {
    const linguagens = ['JavaScript', 'Python', 'Go', 'Rust']

    for (let i in linguagens) {
        console.log(`Índice (${typeof i}): ${i} -> Linguagem: ${linguagens[i]}`)
    }
    console.log('Explicação: Arrays em JS são objetos com índices como chaves de texto, logo for...in itera strings.')
}
exercicio9_2()
console.log()


// =============================================================================
// SEÇÃO 10: ARQUIVO DE REFERÊNCIA -> a87_breakContinue.js
// CONCEITOS: Instruções Break e Continue, Rótulos de repetição (Labels).
// =============================================================================

/**
 * EXERCÍCIO 10.1
 * Baseando-se nas técnicas ensinadas no arquivo a87_breakContinue.js:
 * 1. Dado o array de números de 1 a 10: `const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
 * 2. Em um primeiro laço `for`, utilize `continue` para pular todos os números ímpares (imprima apenas pares).
 * 3. Em um segundo laço `for`, utilize `break` para interromper a execução assim que encontrar o número 5
 *    (o número 5 não deve ser impresso).
 */
console.log('--- Exercício 10.1 (Ref: a87_breakContinue.js) ---')
function exercicio10_1() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log('Com continue (apenas pares):')
    for (let i in nums) {
        if (nums[i] % 2 !== 0) {
            continue
        }
        console.log(`Par: ${nums[i]}`)
    }

    console.log('Com break (interrompe ao chegar no 5):')
    for (let i in nums) {
        if (nums[i] === 5) {
            break
        }
        console.log(`Número antes do 5: ${nums[i]}`)
    }
}
exercicio10_1()
console.log()

/**
 * EXERCÍCIO 10.2
 * Baseando-se nas técnicas ensinadas no arquivo a87_breakContinue.js:
 * 1. Crie dois laços aninhados que percorrem pares ordenados `(x, y)` de 1 a 3 cada.
 * 2. Adicione um rótulo `externo:` no laço pai.
 * 3. Quando a condição `x === 2 && y === 2` for atingida, execute um `break externo` rotulado.
 * 4. Imprima os pares executados e mostre que o laço pai foi totalmente interrompido,
 *    e não apenas o laço interno.
 */
console.log('--- Exercício 10.2 (Ref: a87_breakContinue.js) ---')
function exercicio10_2() {
    externo: for (let x = 1; x <= 3; x++) {
        for (let y = 1; y <= 3; y++) {
            if (x === 2 && y === 2) {
                console.log(`Interrompendo no par (${x}, ${y}) com break externo!`)
                break externo
            }
            console.log(`Par: x = ${x}, y = ${y}`)
        }
    }
    console.log('Execução do laço rotulado finalizada.')
}
exercicio10_2()
console.log()

console.log('=============================================================================')
console.log('FIM DA EXECUÇÃO DO CADERNO DE EXERCÍCIOS DO MÓDULO 05!')
console.log('Consulte o arquivo barema_exercicios.md para o gabarito e critérios de pontuação.')
console.log('=============================================================================')
