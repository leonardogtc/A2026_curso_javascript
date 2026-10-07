// =============================================================================
// PADRÃO DE PROJETO: FUNÇÕES CALLBACK - PARTE 1
// =============================================================================
// Uma função "Callback" (chamar de volta) é uma função passada como argumento
// para outra função, para ser executada quando um determinado evento acontecer
// ou quando uma iteração for concluída.
// =============================================================================

const fabricantes = ["Mercedes", "Audi", "BMW"]

// Definimos uma função que recebe o elemento e o seu índice numérico:
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// O método `.forEach()` de Arrays é um exemplo clássico de callback:
// Ele itera sobre cada elemento do array e "chama de volta" a nossa função `imprimir`,
// passando automaticamente como argumentos: (elementoAtual, indiceAtual, arrayInteiro):
fabricantes.forEach(imprimir)
// Saída:
// 1. Mercedes
// 2. Audi
// 3. BMW

// Também podemos passar callbacks diretamente como Arrow Functions anônimas:
// Aqui só nos interessa o primeiro argumento (o próprio elemento):
fabricantes.forEach(fabricante => console.log(fabricante))
// Saída:
// Mercedes
// Audi
// BMW