// =============================================================================
// TRATAMENTO DE ERROS EM JAVASCRIPT: TRY, CATCH, FINALLY E THROW
// =============================================================================
// Em aplicações robustas, erros inesperados em tempo de execução (runtime errors)
// devem ser capturados e tratados adequadamente para não travar o sistema.
// =============================================================================

// FUNÇÃO RESPONSÁVEL POR TRATAR E PROPAGAR (RELANÇAR) O ERRO:
function tratarErroELancar(erro) {
    // A palavra-chave `throw` lança (arremessa) um erro para a pilha de chamadas (Call Stack).
    // No JavaScript, você pode lançar qualquer tipo de dado com throw:
    // throw new Error('Ocorreu um erro de processamento...')
    // throw 10
    // throw true
    // throw 'mensagem de erro'
    
    // Aqui lançamos um objeto com metadados customizados para auditoria:
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    // 1. BLOCO TRY:
    // Envolve o código potencialmente perigoso que queremos monitorar.
    try {
        // ATENÇÃO AO MOTIVO DO ERRO AQUI:
        // O objeto passado possui a propriedade `nome` (em português),
        // mas o código tenta acessar `obj.name` (em inglês)!
        // `obj.name` resolve para `undefined`.
        // Tentar chamar `.toUpperCase()` em `undefined` dispara:
        // TypeError: Cannot read properties of undefined (reading 'toUpperCase')
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        // 2. BLOCO CATCH:
        // É acionado SOMENTE se houver uma exceção dentro do bloco try.
        // O parâmetro 'e' recebe o erro capturado com sua mensagem e stack trace.
        tratarErroELancar(e)
    } finally {
        // 3. BLOCO FINALLY:
        // Este bloco SEMPRE será executado, quer tenha ocorrido erro ou não
        // (mesmo que o bloco try tenha um return ou o catch lance um throw!).
        // É amplamente utilizado para fechar conexões de banco, arquivos ou limpar estados.
        console.log('final')
    }
}

// Objeto de teste com a propriedade 'nome' em português (que provocará o fluxo de erro):
const obj = { nome: 'Roberto' }

// Executando a função:
imprimirNomeGritado(obj)

// DICA PROFISSIONAL:
// Em ambientes corporativos, prefira lançar instâncias da classe nativa Error
// (ex: `throw new Error('Mensagem')`) em vez de objetos literais puros,
// pois o `new Error` captura a trilha completa de chamadas (stack trace) que aponta
// o arquivo exato e o número da linha onde a falha se originou.