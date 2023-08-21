
const targetPergunta = document.getElementById("targetPergunta");
const targetEsquerda = document.getElementById("targetEsquerda");
const targetDireita = document.getElementById("targetDireita");

const booleanPergunta = false;
const booleanEsquerda = false;
const booleanDireita = false;

//TARGET PERGUNTA
document.getElementById("targetPergunta").addEventListener("targetFound", (e) => {
    booleanPergunta = true;
});
document.getElementById("targetPergunta").addEventListener("targetLost", (e) => {
    alert("você perdeu o Messi");
});

//TARGET ESQUERDA
document.getElementById("targetEsquerda").addEventListener("targetFound", (e) => {
    booleanEsquerda = true;
});
document.getElementById("targetEsquerda").addEventListener("targetLost", (e) => {
    booleanEsquerda = false;
});

//TARGET DIREITA
document.getElementById("targetDireita").addEventListener("targetFound", (e) => {
    booleanDireita = true;
});
document.getElementById("targetDireita").addEventListener("targetLost", (e) => {
    booleanDireita = false;
});

if (booleanPergunta && booleanEsquerda && booleanDireita) {
    //lógica pergunta
    alert("Escaneou");
}
else {
    
    alert("Você perdeu algum de seus Targets. Para que o jogo volte a funcionar escaneie os três itens!");
}

const perguntasTecnologicas = [
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
        ],
        resposta: "SMTP"
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
        ],
        resposta: "Universal Resource Locator"
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
        ],
        resposta: "HTML"
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
        ],
        resposta: "Um sistema de segurança para proteger redes"
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
        ],
        resposta: "Um serviço de armazenamento online"
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
        ],
        resposta: "HTML"
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
        ],
        resposta: "Um pequeno arquivo de dados armazenado no navegador"
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
        ],
        resposta: "Uma tentativa de enganar pessoas para obter informações confidenciais"
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
        ],
        resposta: "Gerenciar recursos do computador"
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
        ],
        resposta: "Internet of Things"
    }
];