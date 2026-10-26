// =============================================================================
// CADERNO DE EXERCÍCIOS PRÁTICOS: MÓDULO 07 - OBJETOS EM JAVASCRIPT
// =============================================================================
// Diretório: modulo_07_objeto/exercícios/exercicios.js
// 
// INSTRUÇÕES GERAIS:
// 1. Cada seção abaixo contém no mínimo 2 exercícios práticos diretamente vinculados
//    aos arquivos de aula (de a114_oo.js até a129_classe2.js).
// 2. Os enunciados especificam o arquivo de referência correspondente.
// 3. Resolva os exercícios nos espaços designados.
// 4. Para testar suas soluções, execute este arquivo com:
//    node modulo_07_objeto/exercícios/exercicios.js
// 5. Consulte o arquivo 'barema_exercicios.md' para conferir critérios e gabarito.
// =============================================================================

console.log('=============================================================================')
console.log('INICIANDO EXECUÇÃO DO CADERNO DE EXERCÍCIOS - MÓDULO 07 (OBJETOS)')
console.log('=============================================================================\n')


// =============================================================================
// SEÇÃO 1: ARQUIVO DE REFERÊNCIA -> a114_oo.js
// CONCEITOS: Paradigma Orientado a Objetos, Abstração, Encapsulamento,
//            Herança e Polimorfismo.
// =============================================================================

/**
 * EXERCÍCIO 1.1
 * Baseando-se nas técnicas ensinadas no arquivo a114_oo.js:
 * 1. Modele um objeto `contaBancaria` que represente os princípios de Abstração e Encapsulamento.
 * 2. O objeto deve conter: `titular`, `_saldo` (iniciando em 1000) e os métodos:
 *    - `depositar(valor)`: adiciona ao saldo se o valor for positivo;
 *    - `sacar(valor)`: debita do saldo se houver saldo suficiente;
 *    - `consultarSaldo()`: retorna o saldo atual formatado em reais.
 * 3. Teste realizando um depósito de 500, um saque de 300 e uma tentativa de saque de 2000.
 */
console.log('--- Exercício 1.1 (Ref: a114_oo.js) ---')
function exercicio1_1() {
    const contaBancaria = {
        titular: 'Helena',
        _saldo: 1000,
        depositar(valor) {
            if (valor > 0) this._saldo += valor
        },
        sacar(valor) {
            if (valor > 0 && valor <= this._saldo) {
                this._saldo -= valor
                return true
            }
            console.log('Saldo insuficiente para o saque!')
            return false
        },
        consultarSaldo() {
            return `R$ ${this._saldo.toFixed(2)}`
        }
    }

    contaBancaria.depositar(500)
    console.log('Após depósito:', contaBancaria.consultarSaldo())
    contaBancaria.sacar(300)
    console.log('Após saque:', contaBancaria.consultarSaldo())
    contaBancaria.sacar(2000)
}
exercicio1_1()
console.log()

/**
 * EXERCÍCIO 1.2
 * Baseando-se nas técnicas ensinadas no arquivo a114_oo.js:
 * Demonstre o conceito de Polimorfismo:
 * 1. Crie uma função `emitirSom(animal)` que executa `animal.falar()`.
 * 2. Crie dois objetos distintos (`cachorro` e `gato`), cada um implementando seu próprio método `falar()`.
 * 3. Execute `emitirSom` para ambos e observe a mesma mensagem gerando comportamentos diferentes.
 */
console.log('--- Exercício 1.2 (Ref: a114_oo.js) ---')
function exercicio1_2() {
    function emitirSom(animal) {
        animal.falar()
    }

    const cachorro = {
        nome: 'Rex',
        falar() {
            console.log(`${this.nome} diz: Au Au!`)
        }
    }

    const gato = {
        nome: 'Mimi',
        falar() {
            console.log(`${this.nome} diz: Miau!`)
        }
    }

    emitirSom(cachorro)
    emitirSom(gato)
}
exercicio1_2()
console.log()


// =============================================================================
// SEÇÃO 2: ARQUIVO DE REFERÊNCIA -> a115_objetoRevisao.js
// CONCEITOS: Criação Dinâmica, Notação Ponto e Colchetes, Objetos Aninhados,
//            Operador Delete.
// =============================================================================

/**
 * EXERCÍCIO 2.1
 * Baseando-se nas técnicas ensinadas no arquivo a115_objetoRevisao.js:
 * 1. Crie um objeto `smartphone` inicialmente vazio.
 * 2. Adicione propriedades dinamicamente via notação ponto (`marca`, `modelo`, `preco`).
 * 3. Adicione uma propriedade usando notação de colchetes com chave dinâmica `smartphone['numero de serie'] = 'SN-987654'`.
 * 4. Remova o `preco` utilizando o operador `delete`.
 * 5. Imprima o objeto resultante.
 */
console.log('--- Exercício 2.1 (Ref: a115_objetoRevisao.js) ---')
function exercicio2_1() {
    const smartphone = {}
    smartphone.marca = 'Samsung'
    smartphone.modelo = 'Galaxy S24'
    smartphone.preco = 5999.00
    smartphone['numero de serie'] = 'SN-987654'

    delete smartphone.preco
    console.log('Smartphone resultante:', smartphone)
}
exercicio2_1()
console.log()

/**
 * EXERCÍCIO 2.2
 * Baseando-se nas técnicas ensinadas no arquivo a115_objetoRevisao.js:
 * 1. Crie um objeto complexo `empresa` com dados aninhados:
 *    `razaoSocial`, `endereco: { rua, numero, cidade }`, e `socios: [ { nome, cargo }, ... ]`.
 * 2. Exclua a propriedade `socios` usando `delete`.
 * 3. Demonstre o cuidado com encadeamentos seguros: acesse `empresa.endereco.cidade` e mostre
 *    o que acontece ao tentar acessar uma propriedade em `undefined` (ex: `empresa.socios?.length`).
 */
console.log('--- Exercício 2.2 (Ref: a115_objetoRevisao.js) ---')
function exercicio2_2() {
    const empresa = {
        razaoSocial: 'Tech Inovações LTDA',
        endereco: { rua: 'Av. Paulista', numero: 1000, cidade: 'São Paulo' },
        socios: [
            { nome: 'Carlos', cargo: 'CEO' },
            { nome: 'Renata', cargo: 'CTO' }
        ]
    }

    delete empresa.socios
    console.log('Cidade da empresa:', empresa.endereco.cidade)
    console.log('Socios após delete:', empresa.socios)
    console.log('Acesso seguro via optional chaining:', empresa.socios?.length)
}
exercicio2_2()
console.log()


// =============================================================================
// SEÇÃO 3: ARQUIVO DE REFERÊNCIA -> a116_criandoObjetos.js
// CONCEITOS: Formas de criação de objetos (Literal, new Object, Construtora,
//            Função Factory, Object.create, JSON.parse).
// =============================================================================

/**
 * EXERCÍCIO 3.1
 * Baseando-se nas técnicas ensinadas no arquivo a116_criandoObjetos.js:
 * 1. Crie uma Função Construtora chamada `Produto(nome, preco, desconto)`.
 *    Ela deve possuir o método `getPrecoComDesconto()` que retorna `preco * (1 - desconto)`.
 * 2. Instancie 2 produtos com o operador `new` e exiba o preço final calculado de cada um.
 */
console.log('--- Exercício 3.1 (Ref: a116_criandoObjetos.js) ---')
function exercicio3_1() {
    function Produto(nome, preco, desconto = 0) {
        this.nome = nome
        this.preco = preco
        this.getPrecoComDesconto = function () {
            return this.preco * (1 - desconto)
        }
    }

    const p1 = new Produto('Notebook Gamer', 5000, 0.15)
    const p2 = new Produto('Mouse Óptico', 100, 0.10)

    console.log(`${p1.nome}: R$ ${p1.getPrecoComDesconto().toFixed(2)}`)
    console.log(`${p2.nome}: R$ ${p2.getPrecoComDesconto().toFixed(2)}`)
}
exercicio3_1()
console.log()

/**
 * EXERCÍCIO 3.2
 * Baseando-se nas técnicas ensinadas no arquivo a116_criandoObjetos.js:
 * 1. Crie uma Função Factory chamada `criarFuncionario(nome, salarioBase, faltas)`.
 * 2. A factory deve retornar um objeto contendo o método `getSalarioLiquido()` que desconta
 *    `(salarioBase / 30) * faltas`.
 * 3. Crie 2 funcionários usando a factory e imprima seus salários líquidos.
 */
console.log('--- Exercício 3.2 (Ref: a116_criandoObjetos.js) ---')
function exercicio3_2() {
    function criarFuncionario(nome, salarioBase, faltas = 0) {
        return {
            nome,
            salarioBase,
            faltas,
            getSalarioLiquido() {
                const desconto = (salarioBase / 30) * faltas
                return salarioBase - desconto
            }
        }
    }

    const f1 = criarFuncionario('Mariana', 6000, 2)
    const f2 = criarFuncionario('Lucas', 4500, 0)

    console.log(`${f1.nome} - Salário Líquido: R$ ${f1.getSalarioLiquido().toFixed(2)}`)
    console.log(`${f2.nome} - Salário Líquido: R$ ${f2.getSalarioLiquido().toFixed(2)}`)
}
exercicio3_2()
console.log()


// =============================================================================
// SEÇÃO 4: ARQUIVO DE REFERÊNCIA -> a117_objetosConstantes.js
// CONCEITOS: Constante vs Objeto na Memória, Object.freeze().
// =============================================================================

/**
 * EXERCÍCIO 4.1
 * Baseando-se nas técnicas ensinadas no arquivo a117_objetosConstantes.js:
 * 1. Crie um objeto `const config = { modo: 'desenvolvimento', porta: 3000 }`.
 * 2. Altere o valor de `config.porta` para `8080` e mostre que variáveis declaradas com `const`
 *    permitem mutação de propriedades internas do objeto para o qual apontam.
 * 3. Explique a diferença entre alterar o conteúdo do objeto versus tentar reatribuir `config = {}`.
 */
console.log('--- Exercício 4.1 (Ref: a117_objetosConstantes.js) ---')
function exercicio4_1() {
    const config = { modo: 'desenvolvimento', porta: 3000 }
    config.porta = 8080
    console.log('Porta alterada com sucesso:', config.porta)
    console.log('Explicação: O identificador aponta para o endereço fixo de memória. O objeto é mutável, o ponteiro não.')
}
exercicio4_1()
console.log()

/**
 * EXERCÍCIO 4.2
 * Baseando-se nas técnicas ensinadas no arquivo a117_objetosConstantes.js:
 * 1. Crie um objeto `const usuario = { id: 1, email: 'teste@email.com' }`.
 * 2. Congele o objeto com `Object.freeze(usuario)`.
 * 3. Tente alterar `usuario.email = 'novo@email.com'`, adicionar `usuario.nome = 'Leo'` e excluir `delete usuario.id`.
 * 4. Imprima `usuario` e comprove que o objeto se tornou completamente imutável.
 */
console.log('--- Exercício 4.2 (Ref: a117_objetosConstantes.js) ---')
function exercicio4_2() {
    const usuario = { id: 1, email: 'teste@email.com' }
    Object.freeze(usuario)

    usuario.email = 'novo@email.com'
    usuario.nome = 'Leo'
    delete usuario.id

    console.log('Objeto após tentativas de mutação congelado:', usuario)
    console.log('Object.isFrozen(usuario):', Object.isFrozen(usuario))
}
exercicio4_2()
console.log()


// =============================================================================
// SEÇÃO 5: ARQUIVO DE REFERÊNCIA -> a118_notacaoLiteral.js
// CONCEITOS: Melhorias da Notação Literal (ES6), Nomes Dinâmicos de Propriedades,
//            Definição Concisa de Métodos.
// =============================================================================

/**
 * EXERCÍCIO 5.1
 * Baseando-se nas técnicas ensinadas no arquivo a118_notacaoLiteral.js:
 * 1. Dadas as constantes: `const modelo = 'Ar-Condicionado'`, `const potencia = '12000 BTUs'`, `const voltagem = 220`.
 * 2. Crie um objeto utilizando a sintaxe curta do ES6 (onde a chave herda o nome da variável).
 * 3. Imprima o objeto criado.
 */
console.log('--- Exercício 5.1 (Ref: a118_notacaoLiteral.js) ---')
function exercicio5_1() {
    const modelo = 'Ar-Condicionado'
    const potencia = '12000 BTUs'
    const voltagem = 220

    const aparelho = { modelo, potencia, voltagem }
    console.log('Objeto com sintaxe concisa ES6:', aparelho)
}
exercicio5_1()
console.log()

/**
 * EXERCÍCIO 5.2
 * Baseando-se nas técnicas ensinadas no arquivo a118_notacaoLiteral.js:
 * 1. Crie um objeto onde os nomes das propriedades sejam computados dinamicamente:
 *    const campoChave = 'codigoIdentificador'
 *    const valorChave = 'XYZ-9988'
 * 2. Adicione nele também um método definido na sintaxe enxuta do ES6: `executar()` sem a palavra `function`.
 * 3. Teste o objeto invocando o método e exibindo o atributo dinâmico.
 */
console.log('--- Exercício 5.2 (Ref: a118_notacaoLiteral.js) ---')
function exercicio5_2() {
    const campoChave = 'codigoIdentificador'
    const valorChave = 'XYZ-9988'

    const entidade = {
        [campoChave]: valorChave,
        executar() {
            return `Entidade ${this[campoChave]} processada!`
        }
    }

    console.log(entidade)
    console.log(entidade.executar())
}
exercicio5_2()
console.log()


// =============================================================================
// SEÇÃO 6: ARQUIVO DE REFERÊNCIA -> a119_getterSetter.js
// CONCEITOS: Getters e Setters para Encapsulamento e Validação de Atributos.
// =============================================================================

/**
 * EXERCÍCIO 6.1
 * Baseando-se nas técnicas ensinadas no arquivo a119_getterSetter.js:
 * 1. Crie um objeto `sequencia` com a propriedade interna `_contador: 1`.
 * 2. Crie o getter `get contador()` que retorna `this._contador++` (pós-incremento).
 * 3. Crie o setter `set contador(valor)` que só aceita alterar se o novo `valor` for maior que o atual.
 * 4. Teste acessando `sequencia.contador` múltiplas vezes e tentando atribuir um valor menor e um maior.
 */
console.log('--- Exercício 6.1 (Ref: a119_getterSetter.js) ---')
function exercicio6_1() {
    const sequencia = {
        _contador: 1,
        get contador() { return this._contador++ },
        set contador(valor) {
            if (valor > this._contador) {
                this._contador = valor
            }
        }
    }

    console.log('Leitura 1:', sequencia.contador)
    console.log('Leitura 2:', sequencia.contador)
    sequencia.contador = 50
    console.log('Após setter para 50:', sequencia.contador)
    sequencia.contador = 10 // ignorado pois 10 < atual
    console.log('Após tentar setter para 10:', sequencia.contador)
}
exercicio6_1()
console.log()

/**
 * EXERCÍCIO 6.2
 * Baseando-se nas técnicas ensinadas no arquivo a119_getterSetter.js:
 * 1. Crie um objeto `temperaturaTermometro` com `_celsius: 0`.
 * 2. Implemente o getter `get fahrenheit()` que converte e retorna `(this._celsius * 9/5) + 32`.
 * 3. Implemente o setter `set celsius(valor)` que rejeita valores menores que o zero absoluto (-273.15).
 * 4. Teste com 25°C e verifique o valor em Fahrenheit.
 */
console.log('--- Exercício 6.2 (Ref: a119_getterSetter.js) ---')
function exercicio6_2() {
    const temperaturaTermometro = {
        _celsius: 0,
        get celsius() { return this._celsius },
        set celsius(val) {
            if (val >= -273.15) {
                this._celsius = val
            } else {
                console.log('Temperatura abaixo do zero absoluto!')
            }
        },
        get fahrenheit() {
            return (this._celsius * 9/5) + 32
        }
    }

    temperaturaTermometro.celsius = 25
    console.log(`Celsius: ${temperaturaTermometro.celsius}°C -> Fahrenheit: ${temperaturaTermometro.fahrenheit}°F`)
}
exercicio6_2()
console.log()


// =============================================================================
// SEÇÃO 7: ARQUIVO DE REFERÊNCIA -> a120_funcoesImportantes.js
// CONCEITOS: Object.keys(), Object.values(), Object.entries(),
//            Object.defineProperty(), Object.assign().
// =============================================================================

/**
 * EXERCÍCIO 7.1
 * Baseando-se nas técnicas ensinadas no arquivo a120_funcoesImportantes.js:
 * 1. Dado o objeto: `const aluno = { nome: 'Rebeca', idade: 19, peso: 58 }`.
 * 2. Utilize `Object.entries(aluno)` combinado com destructuring em um `.forEach` para imprimir:
 *    `"[CHAVE]: [VALOR]"`.
 * 3. Use `Object.defineProperty` para adicionar ao objeto uma propriedade `matricula: '2026-A'`
 *    configurada como `enumerable: true`, mas com `writable: false`.
 * 4. Tente sobrescrever `aluno.matricula = 'ALTERADO'` e mostre que ela não muda.
 */
console.log('--- Exercício 7.1 (Ref: a120_funcoesImportantes.js) ---')
function exercicio7_1() {
    const aluno = { nome: 'Rebeca', idade: 19, peso: 58 }

    Object.entries(aluno).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`)
    })

    Object.defineProperty(aluno, 'matricula', {
        enumerable: true,
        writable: false,
        value: '2026-A'
    })

    aluno.matricula = 'ALTERADO'
    console.log('Matrícula após tentativa de alteração:', aluno.matricula)
}
exercicio7_1()
console.log()

/**
 * EXERCÍCIO 7.2
 * Baseando-se nas técnicas ensinadas no arquivo a120_funcoesImportantes.js:
 * 1. Demonstre a clonagem e mesclagem de objetos usando `Object.assign()`.
 * 2. Crie um objeto base `destino = { a: 1 }`.
 * 3. Mescle `origem1 = { b: 2, c: 3 }` e `origem2 = { c: 99, d: 4 }`.
 * 4. Mostre que a propriedade `c` de `origem2` sobrescreve a de `origem1` no objeto `destino`.
 */
console.log('--- Exercício 7.2 (Ref: a120_funcoesImportantes.js) ---')
function exercicio7_2() {
    const destino = { a: 1 }
    const origem1 = { b: 2, c: 3 }
    const origem2 = { c: 99, d: 4 }

    const resultado = Object.assign(destino, origem1, origem2)
    console.log('Objeto mesclado com Object.assign:', resultado)
    console.log('destino === resultado:', destino === resultado)
}
exercicio7_2()
console.log()


// =============================================================================
// SEÇÃO 8: ARQUIVO DE REFERÊNCIA -> a121_heranca1.js
// CONCEITOS: Cadeia de Protótipos (Prototype Chain), __proto__, Object.prototype.
// =============================================================================

/**
 * EXERCÍCIO 8.1
 * Baseando-se nas técnicas ensinadas no arquivo a121_heranca1.js:
 * 1. Crie os objetos:
 *    const avo = { attr1: 'A' }
 *    const pai = { __proto__: avo, attr2: 'B' }
 *    const filho = { __proto__: pai, attr3: 'C' }
 * 2. Acesse a partir do objeto `filho`: `filho.attr1`, `filho.attr2`, `filho.attr3`.
 * 3. Imprima se `filho.__proto__ === pai` e se `avo.__proto__ === Object.prototype`.
 */
console.log('--- Exercício 8.1 (Ref: a121_heranca1.js) ---')
function exercicio8_1() {
    const avo = { attr1: 'A' }
    const pai = { __proto__: avo, attr2: 'B' }
    const filho = { __proto__: pai, attr3: 'C' }

    console.log('Atributos via cadeia de protótipos:', filho.attr1, filho.attr2, filho.attr3)
    console.log('filho.__proto__ === pai:', filho.__proto__ === pai)
    console.log('avo.__proto__ === Object.prototype:', avo.__proto__ === Object.prototype)
}
exercicio8_1()
console.log()

/**
 * EXERCÍCIO 8.2
 * Baseando-se nas técnicas ensinadas no arquivo a121_heranca1.js:
 * 1. Mostre no console a diferença entre a propriedade `.prototype` de uma Função e o `__proto__` de um Objeto instanciado.
 * 2. Use `function MinhaFuncao() {}` e `const obj = new MinhaFuncao()`.
 * 3. Comprove via comparações estritas que `obj.__proto__ === MinhaFuncao.prototype` e `MinhaFuncao.prototype.__proto__ === Object.prototype`.
 */
console.log('--- Exercício 8.2 (Ref: a121_heranca1.js) ---')
function exercicio8_2() {
    function MinhaFuncao() {}
    const obj = new MinhaFuncao()

    console.log('obj.__proto__ === MinhaFuncao.prototype:', obj.__proto__ === MinhaFuncao.prototype)
    console.log('MinhaFuncao.prototype.__proto__ === Object.prototype:', MinhaFuncao.prototype.__proto__ === Object.prototype)
}
exercicio8_2()
console.log()


// =============================================================================
// SEÇÃO 9: ARQUIVO DE REFERÊNCIA -> a122_heranca2.js
// CONCEITOS: Object.setPrototypeOf(), Sombreamento (Shadowing), Uso de super.
// =============================================================================

/**
 * EXERCÍCIO 9.1
 * Baseando-se nas técnicas ensinadas no arquivo a122_heranca2.js:
 * 1. Crie um objeto `carro` com `velAtual: 0`, `velMax: 200` e método `acelerarMais(delta)`
 *    que aumenta a velocidade respeitando `velMax`.
 * 2. Crie um objeto `ferrari` com `velMax: 350`.
 * 3. Estabeleça a herança com `Object.setPrototypeOf(ferrari, carro)`.
 * 4. Acelere a ferrari em 300 km/h e mostre a velocidade atual e máxima (demonstrando o sombreamento de `velMax`).
 */
console.log('--- Exercício 9.1 (Ref: a122_heranca2.js) ---')
function exercicio9_1() {
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
        velMax: 350 // Sombreamento de velMax do pai
    }

    Object.setPrototypeOf(ferrari, carro)
    ferrari.acelerarMais(300)
    console.log('Status Ferrari:', ferrari.status())
}
exercicio9_1()
console.log()

/**
 * EXERCÍCIO 9.2
 * Baseando-se nas técnicas ensinadas no arquivo a122_heranca2.js:
 * 1. Usando os objetos do exercício anterior, crie `volvo` com `modelo: 'V40'` e `velMax: 180`.
 * 2. Sobrescreva o método `status()` no objeto `volvo` invocando o método do protótipo pai via `super.status()`:
 *    `status() { return `${this.modelo}: ${super.status()}` }`.
 * 3. Estabeleça o protótipo com `Object.setPrototypeOf(volvo, carro)` e teste o método `status()`.
 */
console.log('--- Exercício 9.2 (Ref: a122_heranca2.js) ---')
function exercicio9_2() {
    const carro = {
        velAtual: 0,
        velMax: 200,
        status() {
            return `${this.velAtual}Km/h de ${this.velMax}Km/h`
        }
    }

    const volvo = {
        modelo: 'V40',
        velMax: 180,
        status() {
            return `${this.modelo}: ${super.status()}`
        }
    }

    Object.setPrototypeOf(volvo, carro)
    console.log('Status Volvo com super:', volvo.status())
}
exercicio9_2()
console.log()


// =============================================================================
// SEÇÃO 10: ARQUIVO DE REFERÊNCIA -> a123_heranca3.js
// CONCEITOS: Object.create(), Descritores de propriedades, hasOwnProperty().
// =============================================================================

/**
 * EXERCÍCIO 10.1
 * Baseando-se nas técnicas ensinadas no arquivo a123_heranca3.js:
 * 1. Crie um objeto `pai = { nome: 'Carlos', corCabelo: 'preto' }`.
 * 2. Crie `filha1` utilizando `Object.create(pai)`.
 * 3. Crie `filha2` utilizando `Object.create(pai, { ... })`, adicionando a propriedade `nome`
 *    com valor `'Bia'`, `writable: false` e `enumerable: true`.
 * 4. Imprima os nomes e cores de cabelo de ambas.
 */
console.log('--- Exercício 10.1 (Ref: a123_heranca3.js) ---')
function exercicio10_1() {
    const pai = { nome: 'Carlos', corCabelo: 'preto' }
    const filha1 = Object.create(pai)
    filha1.nome = 'Ana'

    const filha2 = Object.create(pai, {
        nome: { value: 'Bia', writable: false, enumerable: true }
    })

    console.log(`Filha 1: ${filha1.nome}, cabelo ${filha1.corCabelo}`)
    console.log(`Filha 2: ${filha2.nome}, cabelo ${filha2.corCabelo}`)
}
exercicio10_1()
console.log()

/**
 * EXERCÍCIO 10.2
 * Baseando-se nas técnicas ensinadas no arquivo a123_heranca3.js:
 * 1. Utilizando o objeto `filha2` criado anteriormente, itere por suas propriedades usando `for (let key in filha2)`.
 * 2. Utilize o método `filha2.hasOwnProperty(key)` para verificar se a propriedade pertence ao próprio objeto
 *    ou se veio por herança da cadeia de protótipos.
 * 3. Imprima: "Propriedade própria: [key]" ou "Por herança: [key]".
 */
console.log('--- Exercício 10.2 (Ref: a123_heranca3.js) ---')
function exercicio10_2() {
    const pai = { nome: 'Carlos', corCabelo: 'preto' }
    const filha2 = Object.create(pai, {
        nome: { value: 'Bia', writable: false, enumerable: true }
    })

    for (let key in filha2) {
        if (filha2.hasOwnProperty(key)) {
            console.log(`Propriedade própria: ${key}`)
        } else {
            console.log(`Por herança: ${key}`)
        }
    }
}
exercicio10_2()
console.log()


// =============================================================================
// SEÇÃO 11: ARQUIVO DE REFERÊNCIA -> a123_heranca4.js
// CONCEITOS: Vinculação de Protótipos via Funções Construtoras, Compartilhamento.
// =============================================================================

/**
 * EXERCÍCIO 11.1
 * Baseando-se nas técnicas ensinadas no arquivo a123_heranca4.js:
 * 1. Crie uma função construtora `Dispositivo(nome) { this.nome = nome }`.
 * 2. Adicione ao protótipo `Dispositivo.prototype.ligar = function() { console.log(`${this.nome} ligado!`) }`.
 * 3. Instancie dois dispositivos `d1` e `d2`.
 * 4. Comprove que ambos compartilham a mesma referência de função (`d1.ligar === d2.ligar`).
 */
console.log('--- Exercício 11.1 (Ref: a123_heranca4.js) ---')
function exercicio11_1() {
    function Dispositivo(nome) {
        this.nome = nome
    }

    Dispositivo.prototype.ligar = function () {
        console.log(`${this.nome} ligado!`)
    }

    const d1 = new Dispositivo('Tablet')
    const d2 = new Dispositivo('Notebook')

    d1.ligar()
    d2.ligar()
    console.log('Compartilham o mesmo método no prototype?:', d1.ligar === d2.ligar)
}
exercicio11_1()
console.log()

/**
 * EXERCÍCIO 11.2
 * Baseando-se nas técnicas ensinadas no arquivo a123_heranca4.js:
 * 1. Crie um objeto literal avulso `const objAvulso = {}`.
 * 2. Reatribua manualmente o protótipo dele para apontar para `Dispositivo.prototype`:
 *    `objAvulso.__proto__ = Dispositivo.prototype`.
 * 3. Atribua `objAvulso.nome = 'Impressora'` e execute `objAvulso.ligar()`.
 */
console.log('--- Exercício 11.2 (Ref: a123_heranca4.js) ---')
function exercicio11_2() {
    function Dispositivo(nome) {
        this.nome = nome
    }
    Dispositivo.prototype.ligar = function () {
        console.log(`${this.nome} ligado com sucesso via protótipo manual!`)
    }

    const objAvulso = {}
    objAvulso.__proto__ = Dispositivo.prototype
    objAvulso.nome = 'Impressora 3D'

    objAvulso.ligar()
}
exercicio11_2()
console.log()


// =============================================================================
// SEÇÃO 12: ARQUIVO DE REFERÊNCIA -> a125_heranca5.js
// CONCEITOS: Extensão de Tipos Nativos (String.prototype, Array.prototype).
// =============================================================================

/**
 * EXERCÍCIO 12.1
 * Baseando-se nas técnicas ensinadas no arquivo a125_heranca5.js:
 * 1. Adicione ao protótipo `String.prototype.inverter = function () { return this.split('').reverse().join('') }`.
 * 2. Teste invocando `'JavaScript'.inverter()` e `'Cod3r Cursos'.inverter()`.
 */
console.log('--- Exercício 12.1 (Ref: a125_heranca5.js) ---')
function exercicio12_1() {
    String.prototype.inverter = function () {
        return this.split('').reverse().join('')
    }

    console.log('JavaScript invertido:', 'JavaScript'.inverter())
    console.log('Cod3r Cursos invertido:', 'Cod3r Cursos'.inverter())
}
exercicio12_1()
console.log()

/**
 * EXERCÍCIO 12.2
 * Baseando-se nas técnicas ensinadas no arquivo a125_heranca5.js:
 * 1. Adicione ao protótipo `Array.prototype.primeiro = function () { return this[0] }`.
 * 2. Adicione ao protótipo `Array.prototype.ultimo = function () { return this[this.length - 1] }`.
 * 3. Teste em `['A', 'B', 'C', 'D']` imprimindo o primeiro e o último elemento.
 */
console.log('--- Exercício 12.2 (Ref: a125_heranca5.js) ---')
function exercicio12_2() {
    Array.prototype.primeiro = function () {
        return this[0]
    }
    Array.prototype.ultimo = function () {
        return this[this.length - 1]
    }

    const letras = ['A', 'B', 'C', 'D']
    console.log('Primeiro elemento:', letras.primeiro())
    console.log('Último elemento:', letras.ultimo())
}
exercicio12_2()
console.log()


// =============================================================================
// SEÇÃO 13: ARQUIVO DE REFERÊNCIA -> a126_heranca6.js
// CONCEITOS: Simulação do Operador new sob o capô (função novo).
// =============================================================================

/**
 * EXERCÍCIO 13.1
 * Baseando-se nas técnicas ensinadas no arquivo a126_heranca6.js:
 * 1. Implemente a função `function novo(f, ...params)`.
 *    Passos:
 *    a) Cria um objeto vazio `{}`;
 *    b) Vincula `obj.__proto__ = f.prototype`;
 *    c) Invoca `f.apply(obj, params)`;
 *    d) Retorna `obj`.
 * 2. Crie uma construtora `Livro(titulo, autor) { this.titulo = titulo; this.autor = autor }`.
 * 3. Instancie um livro usando `novo(Livro, 'Dom Casmurro', 'Machado de Assis')`.
 * 4. Verifique com `instanceof` se o objeto criado é uma instância de `Livro`.
 */
console.log('--- Exercício 13.1 (Ref: a126_heranca6.js) ---')
function exercicio13_1() {
    function novo(f, ...params) {
        const obj = {}
        obj.__proto__ = f.prototype
        f.apply(obj, params)
        return obj
    }

    function Livro(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }

    const l1 = novo(Livro, 'Dom Casmurro', 'Machado de Assis')
    console.log('Instância com função novo:', l1)
    console.log('l1 instanceof Livro:', l1 instanceof Livro)
}
exercicio13_1()
console.log()

/**
 * EXERCÍCIO 13.2
 * Baseando-se nas técnicas ensinadas no arquivo a126_heranca6.js:
 * Compare a criação via `novo()` artesanal com o operador nativo `new`:
 * Crie `const l2 = new Livro('O Hobbit', 'J.R.R. Tolkien')`.
 * Compare se os protótipos de `l1` e `l2` são estritamente iguais (`l1.__proto__ === l2.__proto__`).
 */
console.log('--- Exercício 13.2 (Ref: a126_heranca6.js) ---')
function exercicio13_2() {
    function novo(f, ...params) {
        const obj = {}
        obj.__proto__ = f.prototype
        f.apply(obj, params)
        return obj
    }

    function Livro(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }

    const l1 = novo(Livro, 'Dom Casmurro', 'Machado de Assis')
    const l2 = new Livro('O Hobbit', 'J.R.R. Tolkien')

    console.log('Mesmo protótipo?:', l1.__proto__ === l2.__proto__)
}
exercicio13_2()
console.log()


// =============================================================================
// SEÇÃO 14: ARQUIVO DE REFERÊNCIA -> a127_evitandoModificacoes.js
// CONCEITOS: Object.preventExtensions(), Object.seal(), Object.freeze().
// =============================================================================

/**
 * EXERCÍCIO 14.1
 * Baseando-se nas técnicas ensinadas no arquivo a127_evitandoModificacoes.js:
 * 1. Crie um objeto `produto = Object.preventExtensions({ nome: 'Caneta', preco: 2.50 })`.
 * 2. Tente adicionar a propriedade `produto.cor = 'Azul'` (deve falhar).
 * 3. Altere `produto.preco = 3.00` (deve permitir).
 * 4. Exclua `delete produto.nome` (deve permitir).
 * 5. Mostre o objeto final e o teste com `Object.isExtensible(produto)`.
 */
console.log('--- Exercício 14.1 (Ref: a127_evitandoModificacoes.js) ---')
function exercicio14_1() {
    const produto = Object.preventExtensions({ nome: 'Caneta', preco: 2.50 })
    produto.cor = 'Azul' // Não adiciona
    produto.preco = 3.00 // Permite alteração
    delete produto.nome  // Permite deleção

    console.log('Produto preventExtensions:', produto)
    console.log('É extensível?:', Object.isExtensible(produto))
}
exercicio14_1()
console.log()

/**
 * EXERCÍCIO 14.2
 * Baseando-se nas técnicas ensinadas no arquivo a127_evitandoModificacoes.js:
 * 1. Crie um objeto `const pessoa = { nome: 'Juliana', idade: 35 }`.
 * 2. Sele o objeto com `Object.seal(pessoa)`.
 * 3. Comprove que:
 *    - NÃO permite adicionar novos atributos;
 *    - NÃO permite excluir atributos existentes;
 *    - PERMITE alterar valores dos atributos existentes.
 * 4. Imprima o objeto e verifique com `Object.isSealed(pessoa)`.
 */
console.log('--- Exercício 14.2 (Ref: a127_evitandoModificacoes.js) ---')
function exercicio14_2() {
    const pessoa = { nome: 'Juliana', idade: 35 }
    Object.seal(pessoa)

    pessoa.sobrenome = 'Silva' // Ignorado
    delete pessoa.idade        // Ignorado
    pessoa.idade = 36          // Permitido

    console.log('Pessoa selada:', pessoa)
    console.log('Está selado?:', Object.isSealed(pessoa))
}
exercicio14_2()
console.log()


// =============================================================================
// SEÇÃO 15: ARQUIVO DE REFERÊNCIA -> a128_jsonVsObj.js
// CONCEITOS: Formato JSON vs Objeto em Memória, Serialização e Deserialização.
// =============================================================================

/**
 * EXERCÍCIO 15.1
 * Baseando-se nas técnicas ensinadas no arquivo a128_jsonVsObj.js:
 * 1. Crie um objeto JavaScript contendo números, strings, booleano, array e uma função `somar: () => 1 + 2`.
 * 2. Converta o objeto para JSON usando `JSON.stringify()`.
 * 3. Observe e explique no console por que a função foi omitida na string JSON gerada.
 */
console.log('--- Exercício 15.1 (Ref: a128_jsonVsObj.js) ---')
function exercicio15_1() {
    const dados = {
        id: 101,
        nome: 'Servidor Alpha',
        ativo: true,
        portas: [80, 443, 8080],
        somar: () => 1 + 2
    }

    const jsonStr = JSON.stringify(dados)
    console.log('JSON gerado:', jsonStr)
    console.log('Explicação: JSON é um formato textual puramente de DADOS e interoperabilidade. Funções/código executável são ignorados por segurança e especificação.')
}
exercicio15_1()
console.log()

/**
 * EXERCÍCIO 15.2
 * Baseando-se nas técnicas ensinadas no arquivo a128_jsonVsObj.js:
 * 1. Crie uma string JSON válida (lembre-se: chaves e strings OBRIGATORIAMENTE com aspas duplas):
 *    `'{"item": "Monitor 4K", "preco": 2499.90, "garantiaEstendida": true}'`.
 * 2. Converta-a para objeto JavaScript usando `JSON.parse()`.
 * 3. Acesse e imprima cada um dos atributos do objeto resultante.
 */
console.log('--- Exercício 15.2 (Ref: a128_jsonVsObj.js) ---')
function exercicio15_2() {
    const jsonValido = '{"item": "Monitor 4K", "preco": 2499.90, "garantiaEstendida": true}'
    const objParseado = JSON.parse(jsonValido)

    console.log('Item:', objParseado.item)
    console.log('Preço: R$', objParseado.preco.toFixed(2))
    console.log('Garantia estendida?:', objParseado.garantiaEstendida)
}
exercicio15_2()
console.log()


// =============================================================================
// SEÇÃO 16: ARQUIVO DE REFERÊNCIA -> a129_classe1.js
// CONCEITOS: Sintaxe de Classes no ES6, Construtor, Métodos de Instância.
// =============================================================================

/**
 * EXERCÍCIO 16.1
 * Baseando-se nas técnicas ensinadas no arquivo a129_classe1.js:
 * 1. Crie a classe `Lancamento` com `constructor(nome = 'Genérico', valor = 0)`
 *    onde os parâmetros são atribuídos a `this.nome` e `this.valor`.
 * 2. Crie a classe `CicloFinanceiro` com `constructor(mes, ano)` que armazena `mes`, `ano`
 *    e um array vazio `this.lancamentos = []`.
 * 3. Adicione o método `addLancamentos(...lancamentos)` usando operador rest.
 * 4. Adicione o método `sumario()` que calcula e retorna o saldo total somando todos os lançamentos.
 * 5. Teste instanciando um salário (+5000) e contas (-1200 e -350).
 */
console.log('--- Exercício 16.1 (Ref: a129_classe1.js) ---')
function exercicio16_1() {
    class Lancamento {
        constructor(nome = 'Genérico', valor = 0) {
            this.nome = nome
            this.valor = valor
        }
    }

    class CicloFinanceiro {
        constructor(mes, ano) {
            this.mes = mes
            this.ano = ano
            this.lancamentos = []
        }

        addLancamentos(...lancamentos) {
            lancamentos.forEach(l => this.lancamentos.push(l))
        }

        sumario() {
            let valorConsolidado = 0
            this.lancamentos.forEach(l => {
                valorConsolidado += l.valor
            })
            return valorConsolidado
        }
    }

    const salario = new Lancamento('Salário', 5000)
    const aluguel = new Lancamento('Aluguel', -1200)
    const energia = new Lancamento('Energia', -350)

    const contasMaio = new CicloFinanceiro(5, 2026)
    contasMaio.addLancamentos(salario, aluguel, energia)

    console.log(`Saldo consolidado (${contasMaio.mes}/${contasMaio.ano}): R$ ${contasMaio.sumario().toFixed(2)}`)
}
exercicio16_1()
console.log()

/**
 * EXERCÍCIO 16.2
 * Baseando-se nas técnicas ensinadas no arquivo a129_classe1.js:
 * Comprove que as Classes em JavaScript são apenas "Syntax Sugar" (açúcar sintático)
 * sobre as funções construtoras tradicionais e seus protótipos:
 * Imprima `typeof Lancamento` e comprove que o resultado é `'function'`.
 */
console.log('--- Exercício 16.2 (Ref: a129_classe1.js) ---')
function exercicio16_2() {
    class ExemploClasse {}
    console.log('Tipo de uma classe em JavaScript:', typeof ExemploClasse)
    console.log('ExemploClasse.prototype é um objeto?:', typeof ExemploClasse.prototype === 'object')
}
exercicio16_2()
console.log()


// =============================================================================
// SEÇÃO 17: ARQUIVO DE REFERÊNCIA -> a129_classe2.js
// CONCEITOS: Herança com Classes (extends), Invocação de super() no Construtor.
// =============================================================================

/**
 * EXERCÍCIO 17.1
 * Baseando-se nas técnicas ensinadas no arquivo a129_classe2.js:
 * 1. Crie a classe base `Avo` com `constructor(sobrenome)` que define `this.sobrenome = sobrenome`.
 * 2. Crie a classe `Pai` que estende `Avo` com `constructor(sobrenome, profissao = 'Professor')`.
 *    Invoque obrigatoriamente `super(sobrenome)`.
 * 3. Crie a classe `Filho` que estende `Pai` com `constructor()`, chamando `super('Silva')`.
 * 4. Instancie um `filho` e imprima suas propriedades herdadas.
 */
console.log('--- Exercício 17.1 (Ref: a129_classe2.js) ---')
function exercicio17_1() {
    class Avo {
        constructor(sobrenome) {
            this.sobrenome = sobrenome
        }
    }

    class Pai extends Avo {
        constructor(sobrenome, profissao = 'Professor') {
            super(sobrenome)
            this.profissao = profissao
        }
    }

    class Filho extends Pai {
        constructor() {
            super('Silva')
        }
    }

    const filho = new Filho()
    console.log('Filho instanciado:', filho)
    console.log(`Sobrenome herdado: ${filho.sobrenome} | Profissão herdada: ${filho.profissao}`)
}
exercicio17_1()
console.log()

/**
 * EXERCÍCIO 17.2
 * Baseando-se nas técnicas ensinadas no arquivo a129_classe2.js:
 * 1. Crie a classe `Conta` com `saldo` e método `imprimirExtrato() { return `Saldo: R$ ${this.saldo}` }`.
 * 2. Crie a subclasse `ContaPoupanca extends Conta` adicionando taxa de rendimento mensal
 *    e um método `aplicarRendimento(taxaPercentual)` que atualiza o saldo.
 * 3. Instancie a conta poupança com saldo de R$ 2000, aplique 1.5% de rendimento e exiba o extrato.
 */
console.log('--- Exercício 17.2 (Ref: a129_classe2.js) ---')
function exercicio17_2() {
    class Conta {
        constructor(saldoInicial = 0) {
            this.saldo = saldoInicial
        }
        imprimirExtrato() {
            return `Saldo: R$ ${this.saldo.toFixed(2)}`
        }
    }

    class ContaPoupanca extends Conta {
        constructor(saldoInicial) {
            super(saldoInicial)
        }
        aplicarRendimento(taxaPercentual) {
            this.saldo += this.saldo * (taxaPercentual / 100)
        }
    }

    const poupanca = new ContaPoupanca(2000)
    poupanca.aplicarRendimento(1.5)
    console.log('Extrato Conta Poupança:', poupanca.imprimirExtrato())
}
exercicio17_2()
console.log()

console.log('=============================================================================')
console.log('FIM DA EXECUÇÃO DO CADERNO DE EXERCÍCIOS DO MÓDULO 07!')
console.log('Consulte o arquivo barema_exercicios.md para o gabarito e critérios de pontuação.')
console.log('=============================================================================')
