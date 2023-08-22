let listaPerguntas = [
    {
        pergunta: "Qual protocolo é usado para enviar e receber e-mails?",
        opcoes: [
            {
                enunciado: "HTTP",
                respostaCorreta: false
            },
            {
                enunciado: "SMTP",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que significa a sigla 'URL'?",
        opcoes: [
            {
                enunciado: "Universal Resource Locator",
                respostaCorreta: true
            },
            {
                enunciado: "Uniform Reference Link",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "Qual linguagem de programação é frequentemente usada para desenvolvimento web?",
        opcoes: [
            {
                enunciado: "CSS",
                respostaCorreta: false
            },
            {
                enunciado: "HTML",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um firewall em tecnologia?",
        opcoes: [
            {
                enunciado: "Um dispositivo para impressão em rede",
                respostaCorreta: false
            },
            {
                enunciado: "Um sistema de segurança para proteger redes",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é a 'nuvem' em computação?",
        opcoes: [
            {
                enunciado: "Um dispositivo de armazenamento externo",
                respostaCorreta: false
            },
            {
                enunciado: "Um serviço de armazenamento online",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual tag é utilizada para cabeçalho de navegação?",
        opcoes: [
            {
                enunciado: "Nav",
                respostaCorreta: true
            },
            {
                enunciado: "Menu",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "O que é um 'cookie' em termos de tecnologia da informação?",
        opcoes: [
            {
                enunciado: "Um tipo de vírus de computador",
                respostaCorreta: false
            },
            {
                enunciado: "Um pequeno arquivo de dados armazenado no navegador",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'phishing'?",
        opcoes: [
            {
                enunciado: "Uma rede de computadores de alta velocidade",
                respostaCorreta: false
            },
            {
                enunciado: "Uma tentativa de enganar pessoas para obter informações confidenciais",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a função principal de um sistema operacional?",
        opcoes: [
            {
                enunciado: "Navegar na internet",
                respostaCorreta: false
            },
            {
                enunciado: "Gerenciar recursos do computador",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que significa 'IoT' em tecnologia?",
        opcoes: [
            {
                enunciado: "Internet of Technology",
                respostaCorreta: false
            },
            {
                enunciado: "Internet of Things",
                respostaCorreta: true
            }
        ]
    }
]

// const targetPergunta = document.getElementById("targetPergunta");
const targetInicio = document.querySelector("#targetInicio");

// targetInicio.addEventListener("click", event => {
//     alert("teste");
//    setGameStart();
//    if(localStorage.getItem("gameIsStarted") == true){
//     targetInicio.classList.add('hidden');
//    }
// });

const quadrado1 = document.getElementById('quadrado1');
const quadrado2 = document.getElementById('quadrado2');
let pontos = 0;

quadrado1.addEventListener('click', () => {
  alert('Click esquerda');
});

quadrado2.addEventListener('click', () => {
  alert('Click direita');
});




function setGameStart(){
    localStorage.setItem("gameIsStarted", true);
}


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


if(localStorage.getItem("gameIsStarted")){
    do{
        if(perguntasTecnologicas.length == 0){
            fimJogo = true;
        } else if(booleanEsquerda && booleanDireita){
            const pergunta = listaPerguntas[0];
            opcaoLeft.value = "";
            opcaoRight.value = "";
        }
    }while(!fimJogo);
}
    
