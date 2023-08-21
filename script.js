
const targetPergunta = document.getElementById("targetPergunta");
const targetEsquerda = document.getElementById("targetEsquerda");
const targetDireita = document.getElementById("targetDireita");

const booleanPergunta = false;
const booleanEsquerda = false;
const booleanDireita = false;


document.getElementById("targetPergunta").addEventListener("targetFound", (e) => {
    booleanPergunta = true;
});
document.getElementById("targetPergunta").addEventListener("targetLost", (e) => {
    alert("você perdeu o Messi");
});


document.getElementById("targetEsquerda").addEventListener("targetFound", (e) => {
    booleanEsquerda = true;
});



document.getElementById("targetDireita").addEventListener("targetFound", (e) => {
    booleanDireita = true;
});
