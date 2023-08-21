
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




let lista = [perguntasTecnologicas, booleanEsquerda, booleanDireita];
export default lista;