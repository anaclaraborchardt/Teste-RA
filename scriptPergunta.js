const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

//PRIMEIRO, VAMOS TIRAR A CLASSE HIDDEN DA MAIN SECTION
document.querySelector("#section-question").classList.remove('hidden');
//PRONTO< AGORA ela aparece na tela
document.querySelector('#question-p').innerHTML = currentQuestion.pergunta;
document.querySelector("#left-option").innerHTML = currentQuestion.opcoes[0].enunciado;
document.querySelector("#right-option").innerHTML = currentQuestion.opcoes[1].enunciado;

function questionAnswer(optionSide) {
    const currentQuestion = localStorage.getItem("currentQuestion");
    if ((currentQuestion.opcoes[0].respostaCorreta && optionSide === "left") || (currentQuestion.opcoes[1].respostaCorreta && optionSide === "right")) {
        alert("acertou");
    } else {
        alert("Você errou!");
    }
    window.location.href = "./index.html"
}