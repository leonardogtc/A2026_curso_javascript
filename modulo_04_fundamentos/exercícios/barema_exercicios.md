# Barema de Avaliação e Gabarito Oficial: Módulo 04 (Fundamentos do JavaScript)

Este documento estabelece as **diretrizes de avaliação (barema)**, a **distribuição de pontos** (total 100 pontos) e o **gabarito oficial comentado** para os 74 exercícios do **Módulo 04 - Fundamentos** (`a35_organizacao.js` a `a74_erros.js`).

---

## 1. Diretrizes Gerais do Barema

- **Pontuação Total**: 100 pontos distribuídos entre 74 exercícios (aproximadamente 1,35 pontos por exercício).
- **Critérios de Correção por Exercício**:
  1. **Correção Lógica e Execução (40%)**: O script executa de ponta a ponta sem erros de sintaxe ou exceções não tratadas no Node.js.
  2. **Aplicação Fiel do Conceito de Fundamentos (35%)**: Compreensão e aplicação exata do tema de cada aula (escopos `var` vs `let` vs `const`, coerções de tipos, operadores lógicos/aritméticos/relacionais, destructuring, etc.).
  3. **Compreensão de Particularidades da Linguagem (15%)**: Familiaridade com o comportamento de IEEE 754, Hoisting, TDZ, Truthy/Falsy, atribuição por valor vs referência e escopo de bloco.
  4. **Boas Práticas e Legibilidade (10%)**: Código bem formatado e nomes claros de identificadores.

---

## 2. Tabela Resumo de Conteúdos e Pontuação

| Seções | Arquivos de Referência | Temas Principais | Exercícios | Pontuação |
| :---: | :--- | :--- | :---: | :---: |
| **01 a 04** | `a35`, `a37`, `a38`, `a39` | Organização em blocos, comentários, declaração (`var`/`let`/`const`) e tipagem fraca | **1.1 a 4.2 (8 ex)** | **10,8 pts** |
| **05 a 07** | `a40`, `a41`, `a42` | Tipos numéricos (`Number`), imprecisão de ponto flutuante, coerções e objeto `Math` | **5.1 a 7.2 (6 ex)** | **8,1 pts** |
| **08 a 10** | `a43`, `a44`, `a45` | Métodos de string, template strings com interpolação e coerções booleanas (`!!`) | **8.1 a 10.2 (6 ex)** | **8,1 pts** |
| **11 a 14** | `a46`, `a47`, `a48`, `a49` | Arrays, objetos literais, valor vs referência (`null`/`undefined`) e centralidade das funções | **11.1 a 14.2 (8 ex)** | **10,8 pts** |
| **15 a 16** | `a50`, `a51` | Anatomia de funções: retornos, parâmetros, function expression e arrow functions | **15.1 a 16.2 (4 ex)** | **5,4 pts** |
| **17 a 23** | `a52` até `a59` | Escopo de variáveis (`var` vs `let`), closures em laços `for` e Hoisting (TDZ) | **17.1 a 23.2 (14 ex)**| **18,9 pts** |
| **24 a 27** | `a60`, `a61`, `a62`, `a63` | Funções vs Objetos, pares nome/valor léxicos, notação ponto e operadores de atribuição | **24.1 a 27.2 (8 ex)** | **10,8 pts** |
| **28 a 31** | `a64`, `a65`, `a66`, `a67` | Operador Destructuring em Objetos, Arrays e parâmetros formais de funções | **28.1 a 31.2 (8 ex)** | **10,8 pts** |
| **32 a 36** | `a68`, `a69`, `a70`, `a71`, `a72` | Operadores Aritméticos, Relacionais (`==` vs `===`), Lógicos (curto-circuito), Unários e Ternários | **32.1 a 36.2 (10 ex)**| **13,5 pts** |
| **37** | `a74_erros.js` | Tratamento robusto de erros com `try`, `catch`, `finally` e emissão via `throw` | **37.1 e 37.2 (2 ex)**| **2,8 pts** |
| **TOTAL** | | **37 Arquivos de Aula de Fundamentos** | **74 Exercícios** | **100,0 pts** |

---

## 3. Síntese Técnica e Gabarito Comentado

### Bloco A: Declarações, Tipagem e Números (Seções 1 a 7)
- **`var` vs `let` vs `const`**:
  - `var` possui apenas escopo global e escopo de função; é içada (*hoisted*) com valor inicial `undefined` e pode ser redeclarada no mesmo escopo.
  - `let` possui escopo de bloco, não pode ser redeclarada no mesmo escopo e entra em *Temporal Dead Zone* se acessada antes de sua linha.
  - `const` exige inicialização obrigatória na declaração e impede reatribuição de referência.
- **Armadilhas de Números**:
  - Divisão por zero resulta no valor especial `Infinity`.
  - Operações aritméticas como `"10" / 2` realizam coerção automática para number; no entanto, com o operador `+`, `"10" + 2` resulta em concatenação de strings (`"102"`).
  - A especificação IEEE 754 de ponto flutuante produz imprecisões binárias como `0.1 + 0.7 = 0.7999999999999999`.

### Bloco B: Strings, Booleanos, Arrays e Objetos (Seções 8 a 14)
- **Template Strings**: Envolvidas por crases (\`...\`), preservam quebras de linha nativamente e suportam interpolação direta de expressões com `${expressao}`.
- **Conversão Booleana com `!!`**: A dupla negação converte qualquer valor em seu equivalente booleano estrito.
- **Passagem por Valor vs Referência**:
  - Tipos primitivos (number, string, boolean, null, undefined, symbol, bigint) são copiados por **valor**.
  - Objetos, funções e arrays são manipulados por **referência** de memória (duas variáveis apontando para o mesmo objeto refletem mutações mútuas).

### Bloco C: Funções, Escopos de Laços e Hoisting (Seções 15 a 23)
- **Laço `for` com `var` vs `let`**:
  - Em `for (var i = 0; ...)` com array de closures, todas as funções capturam a mesma variável global/de função após o término do laço (imprimindo o valor final).
  - Em `for (let i = 0; ...)`, cada volta do loop gera uma nova amarração de escopo léxico, preservando o valor correspondente no closure de cada função individualmente.

### Bloco D: Destructuring e Operadores (Seções 28 a 36)
- **Destructuring**:
  - Sintaxe de objeto: `const { prop1, prop2: apelido = valorPadrao } = obj`
  - Sintaxe de array: `const [a, , c] = [1, 2, 3]`
  - Em parâmetros de função: `function rand({ min = 0, max = 1000 } = {})`
- **Igualdade**:
  - `==` (abstrata): realiza coerção implícita de tipos antes da comparação.
  - `===` (estrita): compara valor e tipo sem qualquer coerção.
- **Curto-Circuito Lógico**: No operador `&&`, se o primeiro operando for falsy, a avaliação é interrompida imediatamente sem computar o segundo lado.

### Bloco E: Tratamento de Exceções (Seção 37)
- `try { ... }`: Envolve o bloco de código suscetível a erros de execução.
- `catch (e) { ... }`: Intercepta o erro gerado, impedindo que a aplicação quebre abruptamente.
- `finally { ... }`: Executa obrigatoriamente, independentemente de ter ocorrido erro ou sucesso (ideal para liberação de conexões ou recursos).
- `throw`: Permite emitir erros customizados (seja uma instância de `Error` ou um objeto com metadados do domínio).
