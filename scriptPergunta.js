const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

//PRIMEIRO, VAMOS TIRAR A CLASSE HIDDEN DA MAIN SECTION
document.querySelector("#section-question").classList.remove('hidden');
//PRONTO< AGORA ela aparece na tela
document.querySelector('#question-p').innerHTML = currentQuestion.pergunta;
document.querySelector("#left-option").innerHTML = currentQuestion.opcoes[0].enunciado;
document.querySelector("#right-option").innerHTML = currentQuestion.opcoes[1].enunciado;

function questionAnswer(optionSide) {
    if ((currentQuestion.opcoes[0].respostaCorreta && optionSide == "left") || (currentQuestion.opcoes[1].respostaCorreta && optionSide == "right")) {
        localStorage.setItem("currentScore", parseInt(localStorage.getItem("currentScore")+1));
    } else {
        localStorage.setItem("currentScore", 0);
    }
    window.location.href = "./index.html"
}