const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

//PRIMEIRO, VAMOS TIRAR A CLASSE HIDDEN DA MAIN SECTION
document.querySelector("#section-question").classList.remove('hidden');
//PRONTO< AGORA ela aparece na tela
const opcaoEsquerda = currentQuestion.opcoes[0].enunciado;
alert(opcaoEsquerda);
const opcaoDireita = currentQuestion.opcoes[1].enunciado;
document.querySelector("#left-option").innerHTML = opcaoEsquerda;
document.querySelector("#right-option").innerHTML = opcaoDireita;