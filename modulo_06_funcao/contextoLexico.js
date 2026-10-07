// =============================================================================
// O PRINCÍPIO DO CONTEXTO LÉXICO (ESCOPO ESTÁTICO)
// =============================================================================
// No JavaScript, o escopo das funções é "Léxico" (também chamado de Escopo Estático).
// Isso significa que uma função resolve suas variáveis com base no local físico
// onde ela foi DECLARADA/ESCRITA no código, e NÃO no local onde ela é INVOCADA!
// =============================================================================

const valor = 'Global'

// `minhaFuncao` foi declarada aqui no nível do módulo (escopo global do arquivo).
// O seu contexto léxico "pai" é o escopo deste módulo:
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    
    // Invocamos `minhaFuncao` de dentro de `exec`:
    minhaFuncao()
}

// Executando:
exec() // Saída: "Global" (e NÃO "Local"!)

// POR QUE IMPRIME "Global" E NÃO "Local"?
// Porque o JavaScript não possui Escopo Dinâmico.
// Quando `minhaFuncao` precisa ler a variável `valor`, ela NÃO se importa com quem a chamou (`exec`).
// Ela procura primeiro dentro de seu próprio corpo; como não encontra, consulta o local onde
// ela foi escrita no código (o escopo superior do arquivo), encontrando `valor = 'Global'`.