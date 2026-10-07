// =============================================================================
// LAÇO FOR UTILIZANDO VAR: VAZAMENTO DE ESCOPO
// =============================================================================
// Demonstração prática de como a ausência de escopo de bloco no `var`
// faz com que a variável de controle do laço de repetição "vaze" para o escopo externo.
// =============================================================================

// O laço inicia com `i = 0`, repete enquanto `i < 10`, incrementando de 1 em 1 (`i++`):
for (var i = 0; i < 10; i++) {
    console.log('i = ', i) // Imprime de 0 até 9
}

// O QUE ACONTECE FORA DO FOR?
// 1. Como `var` não tem escopo de bloco, a variável `i` permanece viva no escopo superior.
// 2. O laço encerra exatamente quando a condição `i < 10` se torna falsa.
// 3. A condição se torna falsa quando `i` atinge o valor 10.
// Portanto, a variável `i` continua existindo aqui fora com o valor 10:
console.log('i = ', i) // Saída: i = 10

// PROBLEMA DE ARQUITETURA:
// Deixar variáveis de controle temporárias vazarem para o escopo externo polui a memória
// e aumenta o risco de colisões acidentais com outras partes do código.