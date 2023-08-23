const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

//PRIMEIRO, VAMOS TIRAR A CLASSE HIDDEN DA MAIN SECTION
document.querySelector("#section-question").classList.remove('hidden');
//PRONTO< AGORA ela aparece na tela
document.querySelector('#question-p').innerHTML = currentQuestion.pergunta;
document.querySelector("#left-option").innerHTML = opcaoEsquerda;
document.querySelector("#right-option").innerHTML = opcaoDireita;

function questionAnswer(optionSide) {
    const currentQuestion = localStorage.getItem("currentQuestion");
    if ((currentQuestion.opcoes[0].respostaCorreta && optionSide === "left") || (currentQuestion.opcoes[1].respostaCorreta && optionSide === "right")) {
        alert("acertou");
    } else {
        alert("Você errou!");
    }
    window.location.href = "./index.html"
}