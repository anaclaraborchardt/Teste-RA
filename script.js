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
    },
    {
        pergunta: "Qual protocolo é usado para transferência segura de arquivos?",
        opcoes: [
            {
                enunciado: "FTP",
                respostaCorreta: false
            },
            {
                enunciado: "SFTP",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a linguagem de programação usada para desenvolvimento de apps iOS?",
        opcoes: [
            {
                enunciado: "Java",
                respostaCorreta: false
            },
            {
                enunciado: "Swift",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é SQL em tecnologia?",
        opcoes: [
            {
                enunciado: "Uma linguagem de programação",
                respostaCorreta: false
            },
            {
                enunciado: "Uma linguagem para gerenciamento de bancos de dados",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que significa 'RAM' em computação?",
        opcoes: [
            {
                enunciado: "Random Access Memory",
                respostaCorreta: true
            },
            {
                enunciado: "Read-Only Memory",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "Qual é a função do comando 'git commit'?",
        opcoes: [
            {
                enunciado: "Enviar alterações para um repositório remoto",
                respostaCorreta: false
            },
            {
                enunciado: "Registrar alterações em um repositório local",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'bug' em programação?",
        opcoes: [
            {
                enunciado: "Um recurso planejado",
                respostaCorreta: false
            },
            {
                enunciado: "Um erro no código que causa comportamento indesejado",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a linguagem de marcação usada para estilizar a aparência de uma página web?",
        opcoes: [
            {
                enunciado: "CSS",
                respostaCorreta: true
            },
            {
                enunciado: "JavaScript",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "O que é um 'framework' de desenvolvimento?",
        opcoes: [
            {
                enunciado: "Um tipo de computador especializado",
                respostaCorreta: false
            },
            {
                enunciado: "Um conjunto de ferramentas e bibliotecas para facilitar o desenvolvimento",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a unidade básica de armazenamento de dados em um computador?",
        opcoes: [
            {
                enunciado: "Byte",
                respostaCorreta: true
            },
            {
                enunciado: "Bit",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "O que é um 'loop' em programação?",
        opcoes: [
            {
                enunciado: "Um erro de sintaxe",
                respostaCorreta: false
            },
            {
                enunciado: "Uma estrutura que executa repetidamente um bloco de código",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é DNS?",
        opcoes: [
            {
                enunciado: "Digital Network System",
                respostaCorreta: false
            },
            {
                enunciado: "Domain Name System",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'open source'?",
        opcoes: [
            {
                enunciado: "Um software comercial",
                respostaCorreta: false
            },
            {
                enunciado: "Software com código-fonte aberto e disponível para uso/modificação",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é o sistema operacional desenvolvido pela Apple para seus computadores?",
        opcoes: [
            {
                enunciado: "Windows",
                respostaCorreta: false
            },
            {
                enunciado: "macOS",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'plugin' em termos de software?",
        opcoes: [
            {
                enunciado: "Um dispositivo de hardware",
                respostaCorreta: false
            },
            {
                enunciado: "Um componente de software que adiciona funcionalidades a um programa",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'cursor'?",
        opcoes: [
            {
                enunciado: "Um tipo de teclado",
                respostaCorreta: false
            },
            {
                enunciado: "Um indicador de posição na tela, controlado pelo mouse ou teclado",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'machine learning'?",
        opcoes: [
            {
                enunciado: "Uma linguagem de programação",
                respostaCorreta: false
            },
            {
                enunciado: "Um campo da inteligência artificial em que os sistemas aprendem com os dados",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é o componente do computador que executa as instruções de um programa?",
        opcoes: [
            {
                enunciado: "Disco rígido",
                respostaCorreta: false
            },
            {
                enunciado: "Processador (CPU)",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'avatar' em termos de computação?",
        opcoes: [
            {
                enunciado: "Um personagem virtual que representa um usuário",
                respostaCorreta: true
            },
            {
                enunciado: "Uma técnica de criptografia",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "Qual é a linguagem de programação usada para desenvolver aplicativos Android?",
        opcoes: [
            {
                enunciado: "C++",
                respostaCorreta: false
            },
            {
                enunciado: "Java",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'repositório' em controle de versão?",
        opcoes: [
            {
                enunciado: "Uma pasta no computador",
                respostaCorreta: false
            },
            {
                enunciado: "Um local central para armazenar e gerenciar código-fonte",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a unidade de medida da velocidade de transmissão de dados?",
        opcoes: [
            {
                enunciado: "Hertz",
                respostaCorreta: false
            },
            {
                enunciado: "Bits por segundo (bps)",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'HTML' em termos de desenvolvimento web?",
        opcoes: [
            {
                enunciado: "Um formato de áudio",
                respostaCorreta: false
            },
            {
                enunciado: "Uma linguagem de marcação para criar páginas web",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'hackathon'?",
        opcoes: [
            {
                enunciado: "Uma competição para cortar lenha",
                respostaCorreta: false
            },
            {
                enunciado: "Um evento em que programadores colaboram intensivamente em projetos de software",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a função do comando 'git push'?",
        opcoes: [
            {
                enunciado: "Trazer alterações de um repositório remoto para um local",
                respostaCorreta: false
            },
            {
                enunciado: "Enviar alterações de um repositório local para um remoto",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'loop infinito' em programação?",
        opcoes: [
            {
                enunciado: "Um tipo de estrutura de dados",
                respostaCorreta: false
            },
            {
                enunciado: "Um erro de lógica que faz um programa executar repetidamente sem parar",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'HTTPS'?",
        opcoes: [
            {
                enunciado: "Hypertext Transfer Protocol Secure",
                respostaCorreta: true
            },
            {
                enunciado: "Hypertext Transfer Protocol Standard",
                respostaCorreta: false
            }
        ]
    },
    {
        pergunta: "O que é um 'loop for' em programação?",
        opcoes: [
            {
                enunciado: "Uma instrução condicional",
                respostaCorreta: false
            },
            {
                enunciado: "Uma estrutura de controle que repete um bloco de código um número definido de vezes",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'realidade aumentada'?",
        opcoes: [
            {
                enunciado: "Um tipo de monitor",
                respostaCorreta: false
            },
            {
                enunciado: "Uma tecnologia que combina elementos virtuais com o ambiente real",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a linguagem de programação usada para criar scripts em páginas web?",
        opcoes: [
            {
                enunciado: "Java",
                respostaCorreta: false
            },
            {
                enunciado: "JavaScript",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'CSS' em desenvolvimento web?",
        opcoes: [
            {
                enunciado: "Uma linguagem de programação",
                respostaCorreta: false
            },
            {
                enunciado: "Uma linguagem de estilização para formatar páginas web",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a função do comando 'npm'?",
        opcoes: [
            {
                enunciado: "Gerenciar pacotes de software em projetos Python",
                respostaCorreta: false
            },
            {
                enunciado: "Gerenciar pacotes de software em projetos JavaScript",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é um 'data center'?",
        opcoes: [
            {
                enunciado: "Um software de análise de dados",
                respostaCorreta: false
            },
            {
                enunciado: "Um local físico que abriga servidores e equipamentos de rede",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'API'?",
        opcoes: [
            {
                enunciado: "Application Protocol Interface",
                respostaCorreta: false
            },
            {
                enunciado: "Application Programming Interface",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "Qual é a linguagem de programação usada para desenvolver aplicativos Windows?",
        opcoes: [
            {
                enunciado: "Python",
                respostaCorreta: false
            },
            {
                enunciado: "C#",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'versionamento' de software?",
        opcoes: [
            {
                enunciado: "O processo de otimização de código",
                respostaCorreta: false
            },
            {
                enunciado: "O controle de alterações em um projeto de software ao longo do tempo",
                respostaCorreta: true
            }
        ]
    },
    {
        pergunta: "O que é 'JSON'?",
        opcoes: [
            {
                enunciado: "Uma linguagem de marcação",
                respostaCorreta: false
            },
            {
                enunciado: "Um formato de intercâmbio de dados",
                respostaCorreta: true
            }
        ]
    }
]

document.querySelector('#luckyPlane').addEventListener('click', () => {
    const score = localStorage.getItem("currentScore");
    //VERIFICA SE O JOGO JÁ COMEÇOU
    if (gameIsStarted == null) {
        //CASO NÃO, ELE SETA QUE O JOGO COMEÇOU
        localStorage.setItem("currentStore", 0);
    }
    //SORTEIA O NÚMERO DE DENTRO DA LISTA
    let numeroSorteado = Math.floor(Math.random() * listaPerguntas.length);
    //SELECIONA A PERGUNTA DE ACORDO COM O SORTEIO
    setCurrentQuestion(listaPerguntas[numeroSorteado]);
    window.location.href = './pergunta.html';
});

function setPointsLocalStorage() {
    const currentCount = localStorage.getItem("currentCount");
    if (currentCount != null) {
        localStorage.setItem("currentCount", parseInt(currentCount) + 1);
    } else {
        localStorage.setItem("currentCount", 0);
    }
}

//SETA A PERGUNTA ATUAL
function setCurrentQuestion(perguntaSorteada) {
    localStorage.setItem("currentQuestion", JSON.stringify(perguntaSorteada));
}


