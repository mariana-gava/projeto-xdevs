/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
        - passo 3 - fazer aparecer o próximo cartão da lista
        - passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar remos que mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
        - passo 4 -  buscar o cartão que está selecionado e esconder
*/

// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
//    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if (ehUltimoCartao) return;  // os três === significa se for idêntico, igual

    //- passo 4 -  buscar o cartão que está selecionado e esconder
 esconderCartoSelecionado();

    //- passo 3 - fazer aparecer o cartão anterior da lista, colocando a classe selecionado nele
    cartaoAtual++;
    mostrarCartao();

});

//OBJETIVO 2 - quando clicarmos na seta de voltar remos que mostrar o cartão anterior da lista

//- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0
    if (ehPrimeiroCartao) return;

    //- passo 4 -  buscar o cartão que está selecionado e esconder
    esconderCartoSelecionado();

    //- passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
