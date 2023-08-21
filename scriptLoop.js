import lista from "script.js"

let fimJogo = false;
let opcaoLeft = document.getElementById("text-first-option");
let opcaoRight = document.getElementById("text-second-option");


let listaPerguntas = lista[0];

do{
    if(listaPerguntas.lenght == 0){
        fimJogo = true;
    } else if(lista[1] == true && lista[2] ==true){
         const pergunta = listaPerguntas[0];
        opcaoLeft.innerText(pergunta.opcoes[0].enunciado);
        opcaoRight.innerText(pergunta.opcoes[1].enunciado);
    }
}while(!fimJogo);