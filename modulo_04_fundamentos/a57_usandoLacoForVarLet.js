// =============================================================================
// O CLÁSSICO PROBLEMA DE CLOSURE COM VAR EM LAÇOS DE REPETIÇÃO
// =============================================================================
// Uma "Closure" (fechamento) é a capacidade que uma função tem de "lembrar" e
// acessar o escopo léxico no qual ela foi declarada.
//
// O que acontece quando criamos funções dentro de um loop que usa `var`?
// =============================================================================

const funcs = []

for (var i = 0; i < 10; i++) {
    // A cada repetição, guardamos uma função anônima dentro do array.
    // Como `var` NÃO possui escopo de bloco, existe apenas UMA única variável `i`
    // compartilhada por todas as 10 funções criadas!
    funcs.push(function () {
        console.log(i)
    })
}

// Ao término do loop, a variável única `i` terminou com o valor 10.
// Quando chamamos as funções agora (muito tempo depois de o loop ter terminado):
funcs[2]() // Saída: 10
funcs[8]() // Saída: 10

// POR QUE AMBAS IMPRIMIRAM 10?
// Porque nenhuma das funções "salvou uma cópia" do valor de `i` no momento da criação.
// Elas apenas guardaram uma referência à variável externa `i`. Como `i` vale 10 agora,
// qualquer uma das funções do array que for executada exibirá 10!