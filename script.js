
import { listaPerguntas } from "./perguntas"

// const targetPergunta = document.getElementById("targetPergunta");
const targetEsquerda = document.getElementById("targetEsquerda");
const targetDireita = document.getElementById("targetDireita");

const booleanPergunta = false;
const booleanEsquerda = false;
const booleanDireita = false;
let perguntasTecnologicas = listaPerguntas;

//TARGET PERGUNTA
// document.getElementById("targetPergunta").addEventListener("targetFound", (e) => {
//     booleanPergunta = true;
// });
// document.getElementById("targetPergunta").addEventListener("targetLost", (e) => {
//     alert("você perdeu o Messi");
// });

//TARGET ESQUERDA
targetEsquerda.addEventListener("targetFound", event => {
    alert("Esquerda");
});
targetEsquerda.addEventListener("targetLost", event => {
    booleanEsquerda = false;
});
targetEsquerda.addEventListener("click", event => {
    alert("Click esquerda")
  });

//TARGET DIREITA
targetDireita.addEventListener("targetFound", event => {
    booleanDireita = true;
});
targetDireita.addEventListener("targetLost", event => {
    booleanDireita = false;
});

targetDireita.addEventListener("click", event => {
    alert("Click direita")
  });





// function setLocalStorageTheLastQuestion(index) {
//   localStorage.setItem("lastQuestion", JSON.stringify(perguntasTecnologicas[index]));
// }

// function setLocalStorageTheQuestionList(index) {
//   localStorage.setItem("questionList", JSON.stringify(perguntasTecnologicas));
// }
// function setLocalStorageTheGameIsStarted() {
//   localStorage.setItem("gameStatus", true);
// }


let fimJogo = false;
let opcaoLeft = document.getElementById("text-first-option");
let opcaoRight = document.getElementById("text-second-option");


let listaPerguntas = lista[0];

do{
    if(perguntasTecnologicas.length == 0){
        fimJogo = true;
    } else if(booleanEsquerda && booleanDireita){
         const pergunta = listaPerguntas[0];
        opcaoLeft.innerText(pergunta.opcoes[0].enunciado);
        opcaoRight.innerText(pergunta.opcoes[1].enunciado);
    }
}while(!fimJogo);

