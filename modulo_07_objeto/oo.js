// =============================================================================
// INTRODUÇÃO À ORIENTAÇÃO A OBJETOS (PARADIGMA PROCEDURAL VS OO)
// =============================================================================
// A evolução dos paradigmas de programação mudou a forma como modelamos
// soluções de software:
// 
// 1. Paradigma Procedural:
//    O foco eram os PROCEDIMENTOS (funções/rotinas) que operavam sobre dados
//    passados como argumentos. Os dados eram passivos e as funções ativas.
// 
// 2. Paradigma Orientado a Objetos (OO):
//    Inverte a dinâmica: os DADOS tornam-se figuras centrais que encapsulam
//    tanto o estado (atributos) quanto os comportamentos (métodos).
// =============================================================================

// CÓDIGO CONCEITUAL NÃO EXECUTÁVEL:

// No paradigma Procedural:
// Funções manipulam dados soltos e desestruturados:
// processamento(valor1, valor2, valor3)

// No paradigma Orientado a Objetos:
// O objeto agora agrupa os dados e o comportamento em uma única entidade viva:
const objetoExemplo = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    processamento() {
        return this.valor1 + this.valor2 + this.valor3
    }
}

objetoExemplo.processamento() // O foco agora é o OBJETO chamando seu método

// =============================================================================
// OS 4 PILARES FUNDAMENTAIS DA ORIENTAÇÃO A OBJETOS:
// =============================================================================
// 1. ABSTRAÇÃO:
//    Capacidade de traduzir um objeto do mundo real para o software, retendo
//    apenas as propriedades e ações pertinentes ao domínio do sistema.
//
// 2. ENCAPSULAMENTO:
//    Ocultar detalhes internos de implementação e expor apenas interfaces
//    públicas seguras. Diminui o acoplamento e facilita refatorações.
//
// 3. HERANÇA:
//    Capacidade de reusar código e estabelecer relações de parentesco (relação "é um").
//    Em JavaScript, a herança é baseada em PROTÓTIPOS (Prototype Chain) e não em classes rígidas.
//
// 4. POLIMORFISMO:
//    Capacidade de múltiplos objetos de tipos diferentes responderem à mesma
//    mensagem (método) com comportamentos específicos e adequados a cada um.