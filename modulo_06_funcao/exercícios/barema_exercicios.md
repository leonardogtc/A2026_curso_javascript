# Barema de Avaliação e Gabarito Oficial: Módulo 06 (Funções em JavaScript)

Este documento estabelece as **diretrizes de avaliação (barema)**, a **distribuição de pontos** (total 100 pontos) e o **gabarito oficial comentado** para os 46 exercícios do **Módulo 06 - Funções** (`a88_cidadaoPrimeiraClasse.js` a `a111_callApply.js`).

---

## 1. Diretrizes Gerais do Barema

- **Pontuação Total**: 100 pontos distribuídos entre 46 exercícios (aproximadamente 2,17 pontos por exercício).
- **Critérios de Correção por Exercício**:
  1. **Correção Lógica e Execução (40%)**: Função executa e entrega os retornos e efeitos colaterais especificados.
  2. **Domínio do Conceito de Função Alvo (35%)**: Uso preciso de Arrow Functions, manipulação do `this`, `.bind()`, closures, factories, construtoras, `call` e `apply`.
  3. **Compreensão de Escopo e Hoisting (15%)**: Respeito às regras do escopo léxico, IIFE e diferenças entre declarações de função.
  4. **Boas Práticas e Qualidade de Código (10%)**: Parâmetros padrão modernos, encapsulamento de estado privado.

---

## 2. Tabela Consolidada de Pontuação

| Seção | Arquivo | Exercício | Foco | Pontos |
| :---: | :--- | :---: | :--- | :---: |
| **01** | `a88_cidadaoPrimeiraClasse.js` | **1.1** | Função de alta ordem recebendo callback de operação | **2,2 pts** |
| | | **1.2** | Função que retorna outra função (currying/multiplicador) | **2,2 pts** |
| **02** | `a89_paramsERetornoSaoOpcionais.js` | **2.1** | Retorno condicional e tratamento de `undefined` | **2,1 pts** |
| | | **2.2** | Invocação com variação de aridade de parâmetros | **2,1 pts** |
| **03** | `a90_paramsVariaveis.js` | **3.1** | Objeto implícito `arguments` em somatório | **2,2 pts** |
| | | **3.2** | Concatenação de argumentos dinâmicos com filtragem de tipo | **2,2 pts** |
| **04** | `a91_paramPadrao.js` | **4.1** | O bug do operador `\|\|` para zero vs ES2015 default | **2,2 pts** |
| | | **4.2** | Configuração flexível de servidor com parâmetros padrão | **2,1 pts** |
| **05** | `a93_thisEBind1.js` | **5.1** | Conflito de paradigmas e amarração de contexto com `.bind` | **2,2 pts** |
| | | **5.2** | Repasse de método em callback com preservação do `this` | **2,2 pts** |
| **06** | `a94_thisEBind2.js` | **6.1** | Resolução de contexto com artifício `const self = this` | **2,2 pts** |
| | | **6.2** | Resolução de contexto com `.bind(this)` em construtor | **2,2 pts** |
| **07** | `a95_arrowFunction1.js` | **7.1** | Arrow Function concisa com retorno implícito | **2,1 pts** |
| | | **7.2** | Arrow Function sem parâmetros para formatação | **2,1 pts** |
| **08** | `a96_arrowFunction2.js` | **8.1** | Imutabilidade do `this` léxico em Arrow Functions | **2,2 pts** |
| | | **8.2** | Contraste de `this` entre função normal e Arrow em objetos | **2,2 pts** |
| **09** | `a97_arrowFunction3.js` | **9.1** | Comparação de `this` com `global` e `module.exports` | **2,2 pts** |
| | | **9.2** | Comprovação de que `.bind()` não altera `this` de Arrow | **2,2 pts** |
| **10** | `a98_funcoesAnonimas.js` | **10.1** | Funções anônimas passadas como argumentos de cálculo | **2,1 pts** |
| | | **10.2** | Função anônima atribuída a métodos de objetos | **2,1 pts** |
| **11** | `a99_callback1.js` | **11.1** | Callback nomeado consumido em `.forEach` | **2,1 pts** |
| | | **11.2** | Implementação de função processadora com callback | **2,2 pts** |
| **12** | `a100_callback2.js` | **12.1** | Filtragem imperativa com loop `for` vs `.filter()` | **2,2 pts** |
| | | **12.2** | Predicado puro reutilizável em múltiplos arrays | **2,2 pts** |
| **13** | `a101_callback3.js` | **13.1** | Padrão emissor de eventos e registro de callbacks | **2,2 pts** |
| | | **13.2** | Simulação de eventos de clique com callback | **2,2 pts** |
| **14** | `a102_funcaoConstrutora.js`| **14.1** | Atributos privados (`let`) e métodos públicos (`this`) | **2,3 pts** |
| | | **14.2** | Comprovação de inacessibilidade direta de atributos privados | **2,1 pts** |
| **15** | `a103_tiposDeclaracao.js` | **15.1** | Hoisting de `Function Declaration` | **2,2 pts** |
| | | **15.2** | `Function Expression` e TDZ (Temporal Dead Zone) | **2,2 pts** |
| **16** | `a104_contextoLexico.js` | **16.1** | Resolução estática de identificadores no escopo léxico | **2,2 pts** |
| | | **16.2** | Análise teórica sobre escopo léxico vs dinâmico | **2,0 pts** |
| **17** | `a105_closure.js` | **17.1** | Preservação de escopo local após término da função | **2,2 pts** |
| | | **17.2** | Contador encapsulado com estado privado via closure | **2,3 pts** |
| **18** | `a106_factory1.js` | **18.1** | Factory simples retornando instâncias independentes | **2,1 pts** |
| | | **18.2** | Vantagens de manutenibilidade do padrão Factory | **2,0 pts** |
| **19** | `a107_factory2.js` | **19.1** | Factory parametrizada com cálculo embutido | **2,2 pts** |
| | | **19.2** | Factory de usuário com método de validação de acesso | **2,2 pts** |
| **20** | `a108_classeVsFactory.js` | **20.1** | Comparativo prático de sintaxe: Classe vs Factory | **2,2 pts** |
| | | **20.2** | Imunidade da Factory à perda de `this` em eventos | **2,1 pts** |
| **21** | `a109_desafioFuncaoConstrutora.js` | **21.1** | Refatoração de Classe para Função Construtora | **2,2 pts** |
| | | **21.2** | Otimização de métodos no protótipo nativo | **2,2 pts** |
| **22** | `a110_iife.js` | **22.1** | Expressão de Função Invocada Imediatamente (IIFE) | **2,2 pts** |
| | | **22.2** | Passagem de argumentos para inicializadores IIFE | **2,1 pts** |
| **23** | `a111_callApply.js` | **23.1** | Invocação explícita com `.call()` e `.apply()` | **2,3 pts** |
| | | **23.2** | Diferença estrutural entre passagem de argumentos em Call e Apply | **2,0 pts** |
| **TOTAL** | | | **46 Exercícios Práticos** | **100,0 pts** |

---

## 3. Gabarito Oficial e Resoluções Comentadas

### Principais Pilares do Módulo 06:
1. **O 'this' e o Método `.bind()`**: Em funções tradicionais, o `this` é dinâmico e depende estritamente de *quem invoca* a função. Usar `.bind(objeto)` cria uma nova função cujo `this` fica permanentemente amarrado ao objeto fornecido.
2. **Arrow Functions**: Foram introduzidas com duas finalidades capitais:
   - Sintaxe concisa com retorno implícito (`x => x * 2`);
   - `this` léxico: o `this` dentro de uma Arrow Function é amarrado estaticamente ao contexto no qual a função foi escrita. Por isso, `.bind()` não tem efeito sobre Arrow Functions.
3. **Closures e Escopo Léxico**: Toda função em JavaScript é uma closure; ela "fecha" sobre as variáveis do local onde foi declarada e preserva acesso a essas variáveis mesmo quando é executada em outro escopo.
4. **Padrão Factory vs Classes**: Factories retornam objetos literais novos e mantêm variáveis privadas via closure sem necessidade do operador `new`. Classes usam a herança prototípica sob o capô.
5. **Call e Apply**:
   - `funcao.call(contexto, param1, param2)`
   - `funcao.apply(contexto, [param1, param2])`
