if(localStorage.getItem('currentQuestion') == null){
    window.location.href = "../camera/index.html";
}


const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

//PRIMEIRO, VAMOS TIRAR A CLASSE HIDDEN DA MAIN SECTION
document.querySelector("#section-question").classList.remove('hidden');
//PRONTO< AGORA ela aparece na tela
document.querySelector('#question-p').innerHTML = currentQuestion.pergunta;

const randomNumberLeft = Math.floor(Math.random() * 2);
const randomNumberRight = randomNumberLeft == 1 ? 0 : 1;
document.querySelector("#left-option").innerHTML = currentQuestion.opcoes[randomNumberLeft].enunciado;
document.querySelector("#right-option").innerHTML = currentQuestion.opcoes[randomNumberRight].enunciado;


function questionAnswer(optionSide) {
    if ((currentQuestion.opcoes[randomNumberLeft].respostaCorreta && optionSide == "left") || 
    (currentQuestion.opcoes[randomNumberRight].respostaCorreta && optionSide == "right")) {
        
        alert(" CONGRATULATIONS!!! "  +"\n"
        +"\n"+ 'você acertou!');
        localStorage.setItem("currentScore", parseInt(JSON.parse(localStorage.getItem("currentScore")) + 1));
        window.location.href = "../camera/index.html"
    } else {
        alert(" ERROR "  +"\n"
        +"\n"
        +"'Você errou, clique ok para voltar para o menu inicial!" +"\n");
        window.location.href = "../menuInicial/menuInicial.html"
    }
}