// =============================================================================
// HERANÇA EM JAVASCRIPT - PARTE 6: SIMULANDO O OPERADOR NEW SOB O CAPÔ
// =============================================================================
// O que acontece exatamente quando você escreve `new Construtor()`?
// Este arquivo desmistifica a "mágica" do operador `new` através de uma função
// simples que reproduz com precisão o comportamento da engine.
// =============================================================================

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

// Criação normal usando o operador nativo `new`:
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// =============================================================================
// IMPLEMENTANDO NOSSO PRÓPRIO OPERADOR NEW (`function novo`):
// =============================================================================
// Recebe a função construtora 'f' e os parâmetros adicionais via Rest Operator '...params':
function novo(f, ...params) {
    // Passo 1: Cria um novo objeto literal vazio em memória:
    const obj = {}
    
    // Passo 2: Vincula o protótipo do novo objeto ao prototype da função construtora:
    obj.__proto__ = f.prototype
    
    // Passo 3: Executa a função construtora apontando o `this` para o novo objeto 'obj':
    f.apply(obj, params)
    
    // Passo 4: Retorna o objeto recém-criado e configurado:
    return obj
}

// Testando nossa função personalizada:
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4) // Produz instâncias exatamente idênticas às criadas com `new`!
console.log(aula3 instanceof Aula) // Saída: true (reconhece como instância legítima de Aula!)