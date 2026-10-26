# Barema de Avaliação e Gabarito Oficial: Módulo 05 (Estruturas de Controle)

Este documento estabelece as **diretrizes de avaliação (barema)**, a **distribuição de pontos** (total 100 pontos) e o **gabarito oficial comentado** para os 20 exercícios do **Módulo 05 - Estruturas de Controle** (`a77_if1.js` a `a87_breakContinue.js`).

---

## 1. Diretrizes Gerais do Barema

- **Pontuação Total**: 100 pontos distribuídos entre 20 exercícios (5,0 pontos por exercício).
- **Critérios de Correção por Exercício**:
  1. **Correção Lógica e Execução (40% - 2,0 pts)**: O algoritmo executa sem falhas e entrega a saída exata requerida.
  2. **Aplicação do Recurso de Controle Alvo (35% - 1,75 pts)**: Uso correto da estrutura estudada (ex: `switch` com `break`, `do...while` para garantia de 1ª execução, `for...in` para propriedades, `Number.prototype` etc.).
  3. **Boas Práticas e Prevenção de Armadilhas (15% - 0,75 pt)**: Evitar pontos e vírgulas indevidos, evitar omissão de chaves, tratar tipos fracos.
  4. **Clareza e Organização do Código (10% - 0,5 pt)**: Código legível, indentação correta e variáveis autoexplicativas.

---

## 2. Tabela de Pontuação por Seção

| Seção | Arquivo | Exercício | Foco | Pontos |
| :---: | :--- | :---: | :--- | :---: |
| **01** | `a77_if1.js` | **1.1** | Condicional relacional composta (`&&`) | **5,0 pts** |
| | | **1.2** | Análise de coerção Truthy vs Falsy | **5,0 pts** |
| **02** | `a78_if2.js` | **2.1** | Diagnóstico e correção do bug de ponto e vírgula pós-if | **5,0 pts** |
| | | **2.2** | Armadilha de omissão de chaves `{}` com múltiplas instruções | **5,0 pts** |
| **03** | `a79_ifElse.js` | **3.1** | Bifurcação binária com `if...else` | **5,0 pts** |
| | | **3.2** | Blindagem contra tipagem fraca e coerções inesperadas | **5,0 pts** |
| **04** | `a80_ifElseIf.js`| **4.1** | Encadeamento de faixas com `else if` | **5,0 pts** |
| | | **4.2** | Extensão de protótipo `Number.prototype.entre` | **5,0 pts** |
| **05** | `a81_switch.js` | **5.1** | Calculadora com `switch`, `case`, `break` e `default` | **5,0 pts** |
| | | **5.2** | Fallthrough deliberado agrupando múltiplos `cases` | **5,0 pts** |
| **06** | `a82_while.js` | **6.1** | Laço indeterminado com sorteio aleatório | **5,0 pts** |
| | | **6.2** | Simulação de débito/saldo com laço condicional | **5,0 pts** |
| **07** | `a83_doWhile.js`| **7.1** | Diferença empírica de execução garantida entre while e do-while | **5,0 pts** |
| | | **7.2** | Tentativas de autenticação PIN com do-while | **5,0 pts** |
| **08** | `a85_for1.js` | **8.1** | Tabuada e laço `for` com contador/passo | **5,0 pts** |
| | | **8.2** | Iteração inversa em array com cálculo cumulativo | **5,0 pts** |
| **09** | `a86_for2.js` | **9.1** | Iteração de atributos de objetos com `for...in` | **5,0 pts** |
| | | **9.2** | `for...in` em arrays e inspeção de chaves como strings | **5,0 pts** |
| **10** | `a87_breakContinue.js` | **10.1** | Controle de fluxo com `continue` (pares) e `break` (interrupção) | **5,0 pts** |
| | | **10.2** | Laços aninhados e desvio com rótulos (*labels*) | **5,0 pts** |
| **TOTAL** | | | **20 Exercícios Práticos** | **100,0 pts** |

---

## 3. Gabarito Oficial e Resoluções Comentadas

### Seção 1: Arquivo `a77_if1.js`
#### Exercício 1.1
```javascript
function analisarCredito(renda, score) {
    if (renda >= 3000 && score >= 700) {
        console.log(`Crédito Pré-Aprovado para renda R$ ${renda} e score ${score}`)
    }
}
```
- **Conceito**: Expressões relacionais conectadas por operadores lógicos `&&` avaliam estritamente como verdadeiras apenas se ambas as condições forem truthy.

#### Exercício 1.2
```javascript
function testarCoercaoBooleana(dado) {
    if (dado) {
        console.log(`${JSON.stringify(dado) ?? dado} -> AVALIADO COMO TRUTHY`)
    }
    if (!dado) {
        console.log(`${JSON.stringify(dado) ?? dado} -> AVALIADO COMO FALSY`)
    }
}
```
- **Conceito**: Em JS, valores falsy são: `0`, `""`, `null`, `undefined`, `NaN`, `false` e `-0`. Todos os objetos e arrays (`[]`, `{}`), strings não-vazias e números diferentes de zero são truthy.

---

### Seção 2: Arquivo `a78_if2.js`
#### Exercício 2.1
```javascript
// O erro fatal: if (qtd > 0); { ... }
// Correção:
function atualizarEstoqueCorreto(qtd) {
    if (qtd > 0) {
        console.log('CORRETO -> Item expedido com sucesso:', qtd)
    }
}
```
- **Conceito**: O ponto e vírgula `;` fecha uma instrução vazia. O bloco de código que segue passa a ser um bloco avulso independente.

#### Exercício 2.2
```javascript
function verificarMetaComChaves(vendas) {
    if (vendas >= 100) {
        console.log('Meta batida!')
        console.log('Bônus creditado!')
    }
}
```
- **Conceito**: Sem chaves `{}`, apenas a primeira instrução está subordinada ao `if`.

---

### Seção 3: Arquivo `a79_ifElse.js`
#### Exercício 3.1
```javascript
function validarAcessoEvento(idade) {
    if (idade >= 18) {
        console.log(`Acesso Permitido: Maior de idade (${idade} anos)`)
    } else {
        console.log(`Acesso Negado: Menor de idade (${idade} anos)`)
    }
}
```
#### Exercício 3.2
```javascript
function avaliarNotaSegura(nota) {
    if (typeof nota !== 'number' || isNaN(nota)) {
        console.log(`${nota} -> Entrada Inválida: Forneça um valor numérico!`)
    } else if (nota >= 7) {
        console.log(`Nota ${nota}: Aprovado`)
    } else {
        console.log(`Nota ${nota}: Reprovado`)
    }
}
```
- **Conceito**: Tratar tipagem fraca evita que comparações com texto (ex: `'10' >= 7` ou `'texto' >= 7`) gerem comportamentos bizarros na engine.

---

### Seção 4: Arquivo `a80_ifElseIf.js`
#### Exercício 4.1
```javascript
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
```
#### Exercício 4.2
```javascript
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
```
- **Conceito**: Extensão de métodos em funções construtoras nativas (`Number.prototype`) disponibiliza o método para todas as instâncias de números literais.

---

### Seção 5: Arquivo `a81_switch.js`
#### Exercício 5.1
```javascript
function operacaoBasica(a, b, operador) {
    switch (operador) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return b !== 0 ? a / b : 'Divisão por zero não permitida'
        default: return 'Operador desconhecido'
    }
}
```
#### Exercício 5.2
```javascript
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
```
- **Conceito**: A omissão intencional do `break` permite que vários cases executem o mesmo trecho de código (fallthrough útil).

---

### Seção 6: Arquivo `a82_while.js`
#### Exercício 6.1
```javascript
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
```
#### Exercício 6.2
```javascript
let saldo = 500.00
let rodada = 1
while (saldo >= 50.00) {
    const valorSaque = Math.floor(Math.random() * 31) + 50
    if (valorSaque <= saldo) {
        saldo -= valorSaque
        rodada++
    } else {
        break
    }
}
```

---

### Seção 7: Arquivo `a83_doWhile.js`
#### Exercício 7.1
```javascript
const condicao = false
let executouWhile = false
let executouDoWhile = false

while (condicao) { executouWhile = true }
do { executouDoWhile = true } while (condicao)
```
- **Conceito**: `do...while` garante que o bloco execute pelo menos 1 vez, pois o teste condicional ocorre ao término da iteração.

#### Exercício 7.2
```javascript
const pinSecreto = 3
let tentativa
let totalTentativas = 0
do {
    tentativa = Math.floor(Math.random() * 5) + 1
    totalTentativas++
} while (tentativa !== pinSecreto)
```

---

### Seção 8: Arquivo `a85_for1.js`
#### Exercício 8.1
```javascript
function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
```
#### Exercício 8.2
```javascript
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
let soma = 0
for (let i = notas.length - 1; i >= 0; i--) {
    soma += notas[i]
}
const media = soma / notas.length
```

---

### Seção 9: Arquivo `a86_for2.js`
#### Exercício 9.1
```javascript
const carro = { modelo: 'Civic', fabricante: 'Honda', ano: 2022, preco: 125000, cambioAutomatico: true }
for (let atributo in carro) {
    console.log(`Propriedade: ${atributo} -> Valor: ${carro[atributo]}`)
}
```
#### Exercício 9.2
```javascript
const linguagens = ['JavaScript', 'Python', 'Go', 'Rust']
for (let i in linguagens) {
    console.log(`Índice (${typeof i}): ${i} -> ${linguagens[i]}`)
}
```
- **Conceito**: Em `for...in`, as chaves de arrays são retornadas como strings pela engine do JavaScript.

---

### Seção 10: Arquivo `a87_breakContinue.js`
#### Exercício 10.1
```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i in nums) {
    if (nums[i] % 2 !== 0) continue // pula ímpares
    console.log(nums[i])
}

for (let i in nums) {
    if (nums[i] === 5) break // interrompe o loop
    console.log(nums[i])
}
```
#### Exercício 10.2
```javascript
externo: for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
        if (x === 2 && y === 2) {
            break externo // interrompe o laço pai
        }
    }
}
```
- **Conceito**: Rótulos (*labels*) associados a `break` permitem desviar o fluxo de laços externos aninhados.
