// =============================================================================
// PARÂMETROS E RETORNOS SÃO OPCIONAIS EM JAVASCRIPT
// =============================================================================
// Diferente de linguagens estáticas (como Java ou C#), em JavaScript você não é obrigado
// a passar todos os argumentos definidos, e uma função não precisa retornar valor
// em todos os caminhos do seu fluxo.
// =============================================================================

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        // Imprime mensagem, mas NÃO possui a palavra `return`:
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

// 1. Chamada normal (retorna 4):
console.log(area(2, 2)) // Saída: 4

// 2. Passando menos argumentos do que o esperado:
// 'altura' recebe `undefined`. 2 * undefined resulta em NaN:
console.log(area(2))   // Saída: NaN

// 3. Sem nenhum argumento (undefined * undefined = NaN):
console.log(area())    // Saída: NaN

// 4. Passando mais argumentos do que o esperado:
// Usa os 2 primeiros (2 e 3 -> área 6) e ignora solenemente os demais:
console.log(area(2, 3, 17, 22, 44)) // Saída: 6

// 5. Condição onde a área ultrapassa 20 (área = 25):
// 1º O `console.log` de dentro do if é executado ("Valor acima do permitido: 25m2.")
// 2º Como o bloco não possui `return`, a função devolve implicitamente `undefined`:
console.log(area(5, 5)) // Saída: Mensagem seguida por undefined

// LIÇÃO DE CLEAN CODE (DESIGN DE FUNÇÕES):
// Ter uma função que ora retorna um número e ora imprime no console e devolve undefined
// é um anti-padrão (violação do Princípio da Responsabilidade Única - SRP).
// Prefira funções previsíveis: que sempre retornem um valor consistente ou lancem um erro.