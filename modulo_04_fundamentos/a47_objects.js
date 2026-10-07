// =============================================================================
// OBJETOS LITERAIS EM JAVASCRIPT
// =============================================================================
// Em JavaScript, um Objeto é uma coleção dinâmica de pares chave-valor (chave: valor).
// As chaves são identificadores (geralmente strings ou symbols) e os valores podem
// ser qualquer tipo de dado (números, strings, booleanos, outros objetos, funções, etc.).
// =============================================================================

// Criação literal de um objeto vazio:
const prod1 = {}

// Em JavaScript, os objetos são DINÂMICOS:
// Você pode adicionar novas propriedades a qualquer momento em tempo de execução!
// 1. Usando a Notação Ponto (.):
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90

// 2. Usando a Notação de Colchetes ([]):
// Útil quando o nome da propriedade possui caracteres especiais, espaços,
// ou quando o nome da chave está contido em uma variável dinâmica:
prod1['Desconto'] = 0.40

console.log(prod1)

// Criação literal com propriedades já inicializadas e ANINHAMENTO de objetos:
// Objetos podem conter outros objetos internos, formando estruturas complexas:
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.00,
    objeto: { // Objeto aninhado
        tecido: 'jeans',
        tamanhos: { // Outro nível de aninhamento
            Pequeno: 'P',
            medio: 'M',
            Grande: 'G',
            ExtraGrande: 'GG'
        }
    }
}

console.log(prod2)

// ATENÇÃO: OBJETO JAVASCRIPT != JSON
// Um Objeto JS é uma estrutura de dados ativa na memória do programa (pode conter métodos, referências, etc.).
// JSON (JavaScript Object Notation) é um formato puramente TEXTUAL usado para troca de dados
// entre sistemas/APIs, onde todas as chaves precisam estar entre aspas duplas e não admite funções.
