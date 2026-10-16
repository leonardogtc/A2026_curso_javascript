// =============================================================================
// O CONCEITO DE CLOSURE (FECHAMENTO / CLAUSURA)
// =============================================================================
// Uma "Closure" é a junção indissociável de uma função com o seu ambiente léxico
// (as variáveis que a cercavam no momento exato em que ela foi declarada no código).
//
// A função "carrega consigo" a memória do escopo onde ela nasceu, permitindo
// que ela acesse e manipule variáveis externas mesmo depois de a função pai
// ter terminado de executar!
// =============================================================================

const x = 'Global' // Variável no escopo mais abrangente

function fora() {
    const x = 'Local' // Variável no escopo da função pai
    
    // A função `dentro` é criada aqui: ela cria uma Closure sobre o escopo de `fora`:
    function dentro() {
        return x // Retorna o 'x' do seu escopo léxico de criação
    }
    
    return dentro // Retorna a própria função (sem invocá-la ainda)
}

// Quando executamos `fora()`, ela termina sua execução e devolve a função `dentro`:
const minhaFuncao = fora()

// Agora invocamos a função retornada a partir do escopo global:
console.log(minhaFuncao()) // Saída: "Local" (e NÃO "Global"!)

// O QUE ACONTECE NA MEMÓRIA E NO GARBAGE COLLECTOR?
// Em linguagens sem suporte a closures, a variável local `x = 'Local'` seria destruída
// da memória (Call Stack) assim que `fora()` terminasse.
// No JavaScript, a engine detecta que a função `dentro` ainda precisa dessa variável
// e a preserva na memória Heap, impedindo que o Garbage Collector a descarte!