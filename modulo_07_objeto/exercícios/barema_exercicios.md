# Barema de Avaliação e Gabarito Oficial: Módulo 07 (Objetos em JavaScript)

Este documento estabelece as **diretrizes de avaliação (barema)**, a **distribuição de pontos** (total 100 pontos) e o **gabarito oficial comentado** para os 34 exercícios do **Módulo 07 - Objetos** (`a114_oo.js` a `a129_classe2.js`).

---

## 1. Diretrizes Gerais do Barema

- **Pontuação Total**: 100 pontos distribuídos entre 34 exercícios (aproximadamente 2,94 pontos por exercício).
- **Critérios de Correção por Exercício**:
  1. **Correção Funcional e Resultado Lógico (40%)**: Código sem falhas de runtime e saída condizente.
  2. **Domínio do Mecanismo de Objetos/Protótipos (35%)**: Uso preciso de protótipos (`__proto__`, `.prototype`), métodos estáticos de `Object`, encapsulamento (`get`/`set`) e classes ES6.
  3. **Compreensão de Referência de Memória e Imutabilidade (15%)**: Distinção entre ponteiro de constante e congelamento de objetos (`Object.freeze`, `seal`, `preventExtensions`).
  4. **Legibilidade e Padrões Limpos (10%)**: Nomeação adequada de variáveis e métodos, modularidade.

---

## 2. Tabela Consolidada de Pontuação

| Seção | Arquivo | Exercício | Foco | Pontos |
| :---: | :--- | :---: | :--- | :---: |
| **01** | `a114_oo.js` | **1.1** | Abstração e Encapsulamento com Conta Bancária | **3,0 pts** |
| | | **1.2** | Polimorfismo através de métodos homônimos | **3,0 pts** |
| **02** | `a115_objetoRevisao.js` | **2.1** | Adição dinâmica (ponto/colchetes) e operador `delete` | **3,0 pts** |
| | | **2.2** | Objetos aninhados, remoção e encadeamento seguro | **3,0 pts** |
| **03** | `a116_criandoObjetos.js`| **3.1** | Função Construtora com `new` e métodos de cálculo | **3,0 pts** |
| | | **3.2** | Função Factory retornando objeto encapsulado | **3,0 pts** |
| **04** | `a117_objetosConstantes.js`| **4.1** | Constante apontando para objeto vs mutabilidade interna | **2,5 pts** |
| | | **4.2** | Congelamento profundo com `Object.freeze()` | **3,0 pts** |
| **05** | `a118_notacaoLiteral.js`| **5.1** | Shorthand notation ES6 para propriedades | **2,5 pts** |
| | | **5.2** | Propriedades dinâmicas computadas e método conciso | **3,0 pts** |
| **06** | `a119_getterSetter.js` | **6.1** | Getters e setters com validação de sequência | **3,0 pts** |
| | | **6.2** | Conversor Celsius/Fahrenheit via getters e setters | **3,0 pts** |
| **07** | `a120_funcoesImportantes.js` | **7.1** | `Object.entries()`, destructuring e `Object.defineProperty` | **3,0 pts** |
| | | **7.2** | Clonagem e mesclagem com `Object.assign()` | **3,0 pts** |
| **08** | `a121_heranca1.js` | **8.1** | Cadeia de protótipos (`__proto__`, `Object.prototype`) | **3,0 pts** |
| | | **8.2** | Diferença entre `Funcao.prototype` e `obj.__proto__` | **3,0 pts** |
| **09** | `a122_heranca2.js` | **9.1** | `Object.setPrototypeOf()` e sombreamento (*shadowing*) | **3,0 pts** |
| | | **9.2** | Sobrescrita de método com invocação de `super.metodo()` | **3,0 pts** |
| **10** | `a123_heranca3.js` | **10.1** | `Object.create()` com descritores de atributos | **3,0 pts** |
| | | **10.2** | Diferenciação de propriedades próprias com `hasOwnProperty` | **3,0 pts** |
| **11** | `a123_heranca4.js` | **11.1** | Compartilhamento de funções via `Construtora.prototype` | **3,0 pts** |
| | | **11.2** | Reatribuição manual de protótipo em objeto literal | **3,0 pts** |
| **12** | `a125_heranca5.js` | **12.1** | Extensão de tipo nativo `String.prototype.inverter` | **3,0 pts** |
| | | **12.2** | Extensão de tipo nativo `Array.prototype.primeiro/ultimo` | **3,0 pts** |
| **13** | `a126_heranca6.js` | **13.1** | Implementação artesanal da função `novo()` simulando `new` | **3,5 pts** |
| | | **13.2** | Comparação de protótipo entre `novo()` e operador `new` | **2,5 pts** |
| **14** | `a127_evitandoModificacoes.js` | **14.1** | Bloqueio de novas propriedades com `Object.preventExtensions` | **3,0 pts** |
| | | **14.2** | Bloqueio de exclusões com `Object.seal()` | **3,0 pts** |
| **15** | `a128_jsonVsObj.js` | **15.1** | Serialização `JSON.stringify()` e omissão de funções | **3,0 pts** |
| | | **15.2** | Parsing rigoroso de JSON com `JSON.parse()` | **3,0 pts** |
| **16** | `a129_classe1.js` | **16.1** | Modelagem orientada a classes: `Lancamento` e `Ciclo` | **3,5 pts** |
| | | **16.2** | Comprovação de que classes em JS são funções | **2,5 pts** |
| **17** | `a129_classe2.js` | **17.1** | Subclasses com `extends` e cadeia de construtores com `super` | **3,5 pts** |
| | | **17.2** | Extensão de classe bancária e especialização de método | **3,5 pts** |
| **TOTAL** | | | **34 Exercícios Práticos** | **100,0 pts** |

---

## 3. Gabarito Oficial e Resoluções Comentadas

### Seções 1 a 3: Fundamentos de Objetos, Criação e Notações
- **Abstração & Encapsulamento**: O estado interno (ex: `_saldo`) é resguardado por métodos públicos (`depositar`, `sacar`), evitando acesso indiscriminado e inconsistências de domínio.
- **Formas de Criação**:
  - Funções Construtoras (`function Produto(...) { this.preco = ... }`) usam `new` para instanciar e vincular o protótipo.
  - Funções Factory retornam um novo objeto literal `{}` a cada chamada, permitindo variáveis privadas via closure.

### Seções 4 a 7: Mutabilidade, ES6, Getters/Setters e Funções Utilitárias
- **`const` e Objetos**: Declarar um objeto com `const` torna imutável a *referência de memória* (o endereço hexadecimal para onde o ponteiro aponta), mas os atributos internos do objeto continuam mutáveis até que se aplique `Object.freeze()`.
- **Getters e Setters**: Permitem interceptar leituras e escritas de propriedades, possibilitando transformações automáticas (ex: conversão de Celsius para Fahrenheit) ou validações estritas (ex: impedir valores decrescentes).
- **`Object.defineProperty`**: Permite controle granular com `writable`, `enumerable` e `configurable`.

### Seções 8 a 13: A Cadeia de Protótipos (Prototype Chain) e Herança
- **`__proto__` vs `.prototype`**:
  - `__proto__` é a propriedade de qualquer objeto que aponta para o seu protótipo pai.
  - `.prototype` é um objeto que existe exclusivamente em funções para servir de protótipo das instâncias criadas com `new`.
- **Sombreamento (*Shadowing*)**: Se o objeto filho declara uma propriedade com o mesmo nome existente no protótipo pai, a busca da engine V8 para na primeira ocorrência encontrada, sombreando a propriedade mais alta na cadeia.
- **Simulando o Operador `new`**:
  ```javascript
  function novo(f, ...params) {
      const obj = {}
      obj.__proto__ = f.prototype
      f.apply(obj, params)
      return obj
  }
  ```
  Isso demonstra que o operador `new` nada mais faz do que criar um objeto vazio, apontar seu `__proto__` para o protótipo da função construtora, executar a função com `this` vinculado ao novo objeto e retorná-lo.

### Seções 14 a 17: Proteções, JSON e Classes ES6
- **Níveis de Restrição de Objetos**:
  1. `preventExtensions`: Não adiciona novas chaves, mas altera e deleta existentes.
  2. `seal`: Não adiciona nem deleta chaves, mas permite alterar valores existentes.
  3. `freeze`: Não adiciona, não deleta e não altera (imutabilidade total).
- **JSON vs Objeto**: JSON é um formato de intercâmbio textual agnóstico de linguagem. Funções não são suportadas em JSON e são sumariamente descartadas no `JSON.stringify()`.
- **Classes no JavaScript**: São *açúcar sintático* (syntax sugar) sobre a herança prototípica existente. `typeof MinhaClasse === 'function'`.
