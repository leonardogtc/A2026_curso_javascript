// =============================================================================
// FUNÇÕES CALLBACK - PARTE 3: EVENTOS ASSÍNCRONOS NO NAVEGADOR (DOM)
// =============================================================================
// No desenvolvimento web frontend, os callbacks são a espinha dorsal da
// arquitetura orientada a eventos (Event-Driven Architecture).
// O navegador não bloqueia a interface esperando uma ação do usuário; em vez disso,
// você registra uma função callback que será invocada somente quando o evento disparar.
// =============================================================================

// ATENÇÃO: Este código deve ser executado no console de um NAVEGADOR WEB,
// pois depende da API do DOM (`document`), inexistente nativamente no Node.js.

// 1. Selecionamos o primeiro elemento <body> da página.
// 2. Atribuímos uma função anônima de callback ao manipulador de clique (`onclick`):
document.getElementsByTagName('body')[0].onclick = function (e) {
    // O parâmetro 'e' recebe automaticamente o objeto de evento (MouseEvent),
    // que contém informações como coordenadas do clique, botão pressionado, elemento alvo, etc.
    console.log('O evento ocorreu!')
}

// EVOLUÇÃO E BOA PRÁTICA:
// Embora a propriedade `.onclick` funcione, a forma moderna e recomendada na web
// é utilizar `addEventListener`:
// document.body.addEventListener('click', (e) => console.log('O evento ocorreu!'))