
//lista de perguntas TI
let listaPerguntasTI = [
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

//lista de perguntas de esporte
let listaPerguntasEsporte = [
    {
      pergunta: "Qual esporte é conhecido como 'o esporte mais bonito'?",
      opcoes: [
        {
          enunciado: "Futebol",
          respostaCorreta: true
        },
        {
          enunciado: "Basquete",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Em que esporte os jogadores usam tacos e bolas para acertar buracos em um campo?",
      opcoes: [
        {
          enunciado: "Tênis",
          respostaCorreta: false
        },
        {
          enunciado: "Golfe",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o evento esportivo mais importante e prestigiado da corrida de cavalos?",
      opcoes: [
        {
          enunciado: "Copa do Mundo",
          respostaCorreta: false
        },
        {
          enunciado: "Grand National",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual país é considerado o berço do judô?",
      opcoes: [
        {
          enunciado: "Brasil",
          respostaCorreta: false
        },
        {
          enunciado: "Japão",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Quantos jogadores compõem uma equipe de vôlei de quadra?",
      opcoes: [
        {
          enunciado: "6",
          respostaCorreta: true
        },
        {
          enunciado: "5",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Em que esporte Michael Jordan se destacou?",
      opcoes: [
        {
          enunciado: "Futebol",
          respostaCorreta: false
        },
        {
          enunciado: "Basquete",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Em que país nasceu o esporte do Muay Thai?",
      opcoes: [
        {
          enunciado: "Tailândia",
          respostaCorreta: true
        },
        {
          enunciado: "China",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Quantos jogadores compõem um time de futebol durante uma partida?",
      opcoes: [
        {
          enunciado: "11",
          respostaCorreta: true
        },
        {
          enunciado: "10",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Em que esporte a bola é usada para derrubar dez pinos em uma pista?",
      opcoes: [
        {
          enunciado: "Boliche",
          respostaCorreta: true
        },
        {
          enunciado: "Tênis",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o evento esportivo mais assistido do mundo?",
      opcoes: [
        {
          enunciado: "Copa do Mundo de Futebol",
          respostaCorreta: true
        },
        {
          enunciado: "Jogos Olímpicos",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é a modalidade do atletismo que envolve saltos em distância?",
      opcoes: [
        {
          enunciado: "Salto triplo",
          respostaCorreta: false
        },
        {
          enunciado: "Salto em distância",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o esporte em que os jogadores usam paus e discos?",
      opcoes: [
        {
          enunciado: "Hóquei no gelo",
          respostaCorreta: true
        },
        {
          enunciado: "Beisebol",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual esporte é caracterizado por uma bola amarela e uma rede com postes?",
      opcoes: [
        {
          enunciado: "Tênis",
          respostaCorreta: false
        },
        {
          enunciado: "Vôlei de praia",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o esporte em que os jogadores usam patins e sticks para acertar um puck?",
      opcoes: [
        {
          enunciado: "Hóquei no gelo",
          respostaCorreta: true
        },
        {
          enunciado: "Polo aquático",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual esporte é conhecido como 'esporte das raquetes'?",
      opcoes: [
        {
          enunciado: "Tênis de mesa",
          respostaCorreta: false
        },
        {
          enunciado: "Tênis",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Em que esporte o 'Super Bowl' é o evento final mais assistido?",
      opcoes: [
        {
          enunciado: "Futebol americano",
          respostaCorreta: true
        },
        {
          enunciado: "Beisebol",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte que possui o termo 'grand slam'?",
      opcoes: [
        {
          enunciado: "Tênis",
          respostaCorreta: true
        },
        {
          enunciado: "Golfe",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual esporte é conhecido por suas corridas em uma pista oval e pelotão de ciclistas?",
      opcoes: [
        {
          enunciado: "Motocross",
          respostaCorreta: false
        },
        {
          enunciado: "Ciclismo",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é a liga profissional de basquete mais famosa do mundo?",
      opcoes: [
        {
          enunciado: "NBA",
          respostaCorreta: true
        },
        {
          enunciado: "NFL",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Em que esporte os competidores lançam um disco metálico?",
      opcoes: [
        {
          enunciado: "Arremesso de dardo",
          respostaCorreta: false
        },
        {
          enunciado: "Arremesso de disco",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o país de origem do esporte do rugby?",
      opcoes: [
        {
          enunciado: "Inglaterra",
          respostaCorreta: true
        },
        {
          enunciado: "Austrália",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte que envolve uma pista, obstáculos e barreiras?",
      opcoes: [
        {
          enunciado: "Corrida de rua",
          respostaCorreta: false
        },
        {
          enunciado: "Corrida com obstáculos",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o nome dado à competição de ciclismo que percorre a França e outros países?",
      opcoes: [
        {
          enunciado: "Volta da França",
          respostaCorreta: true
        },
        {
          enunciado: "Giro d'Italia",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte que envolve uma bola amarela e quadra dividida por uma rede?",
      opcoes: [
        {
          enunciado: "Badminton",
          respostaCorreta: true
        },
        {
          enunciado: "Tênis de mesa",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte em que os jogadores usam arcos e flechas para acertar alvos?",
      opcoes: [
        {
          enunciado: "Esgrima",
          respostaCorreta: false
        },
        {
          enunciado: "Tiro com arco",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o esporte de inverno que envolve deslizar em uma pista de gelo?",
      opcoes: [
        {
          enunciado: "Patinação artística",
          respostaCorreta: false
        },
        {
          enunciado: "Luge",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o esporte que envolve lançamento de peso, dardo e salto em distância?",
      opcoes: [
        {
          enunciado: "Atletismo",
          respostaCorreta: true
        },
        {
          enunciado: "Ginástica artística",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual esporte é praticado em um ringue e envolve socos e nocautes?",
      opcoes: [
        {
          enunciado: "Muay Thai",
          respostaCorreta: false
        },
        {
          enunciado: "Boxe",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o esporte que combina elementos da natação, ciclismo e corrida?",
      opcoes: [
        {
          enunciado: "Triatlo",
          respostaCorreta: true
        },
        {
          enunciado: "Pentatlo moderno",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte de verão que envolve manobras em uma prancha na água?",
      opcoes: [
        {
          enunciado: "Surfe",
          respostaCorreta: true
        },
        {
          enunciado: "Esqui aquático",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Em qual esporte é comum ouvir o termo 'homerun'?",
      opcoes: [
        {
          enunciado: "Beisebol",
          respostaCorreta: true
        },
        {
          enunciado: "Futebol americano",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte que envolve corridas de longa distância?",
      opcoes: [
        {
          enunciado: "Ciclismo de estrada",
          respostaCorreta: false
        },
        {
          enunciado: "Maratona",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Em qual esporte os jogadores usam sapatos de boliche?",
      opcoes: [
        {
          enunciado: "Futebol",
          respostaCorreta: false
        },
        {
          enunciado: "Boliche",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o esporte em que os competidores realizam manobras no ar com pranchas?",
      opcoes: [
        {
          enunciado: "Snowboard",
          respostaCorreta: true
        },
        {
          enunciado: "Surfe",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte de inverno que envolve deslizar em um trenó de gelo?",
      opcoes: [
        {
          enunciado: "Bobsled",
          respostaCorreta: true
        },
        {
          enunciado: "Esqui alpino",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o esporte em que os competidores fazem manobras no ar em uma bicicleta?",
      opcoes: [
        {
          enunciado: "BMX",
          respostaCorreta: true
        },
        {
          enunciado: "Mountain bike",
          respostaCorreta: false
        }
      ]
    }
];

//lista de perguntas de música
let listaPerguntasMusica = [
    {
      pergunta: "Quem é conhecido como o 'Rei do Pop'?",
      opcoes: [
        {
          enunciado: "Elvis Presley",
          respostaCorreta: false
        },
        {
          enunciado: "Michael Jackson",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual instrumento musical é conhecido como o 'Rei dos Instrumentos'?",
      opcoes: [
        {
          enunciado: "Violão",
          respostaCorreta: false
        },
        {
          enunciado: "Órgão",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o gênero musical caracterizado pelo uso predominante de instrumentos de sopro?",
      opcoes: [
        {
          enunciado: "Rap",
          respostaCorreta: false
        },
        {
          enunciado: "Jazz",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é a famosa ópera de Giuseppe Verdi que conta a história de um corcunda de Notre Dame?",
      opcoes: [
        {
          enunciado: "La Traviata",
          respostaCorreta: false
        },
        {
          enunciado: "Rigoletto",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o instrumento de percussão que é tocado usando baquetas?",
      opcoes: [
        {
          enunciado: "Violino",
          respostaCorreta: false
        },
        {
          enunciado: "Bateria",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é a banda britânica famosa pelos hits 'Bohemian Rhapsody' e 'We Will Rock You'?",
      opcoes: [
        {
          enunciado: "The Beatles",
          respostaCorreta: false
        },
        {
          enunciado: "Queen",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o instrumento de cordas que possui quatro cordas e é tocado com um arco?",
      opcoes: [
        {
          enunciado: "Violão",
          respostaCorreta: false
        },
        {
          enunciado: "Violino",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o estilo musical originário da Jamaica, conhecido por suas batidas marcantes?",
      opcoes: [
        {
          enunciado: "Samba",
          respostaCorreta: false
        },
        {
          enunciado: "Reggae",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o famoso compositor alemão conhecido por suas sinfonias e óperas?",
      opcoes: [
        {
          enunciado: "Wolfgang Amadeus Mozart",
          respostaCorreta: false
        },
        {
          enunciado: "Ludwig van Beethoven",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o termo usado para uma nota musical tocada por um curto período de tempo?",
      opcoes: [
        {
          enunciado: "Staccato",
          respostaCorreta: true
        },
        {
          enunciado: "Legato",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o estilo musical que mistura elementos do hip-hop com a música eletrônica?",
      opcoes: [
        {
          enunciado: "Rap",
          respostaCorreta: false
        },
        {
          enunciado: "EDM (Eletronic Dance Music)",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o instrumento de teclas amplamente utilizado na música clássica e contemporânea?",
      opcoes: [
        {
          enunciado: "Guitarra",
          respostaCorreta: false
        },
        {
          enunciado: "Piano",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o estilo de música popular originado nos Estados Unidos, caracterizado por suas letras emotivas e melodia simples?",
      opcoes: [
        {
          enunciado: "Country",
          respostaCorreta: true
        },
        {
          enunciado: "Rock",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o instrumento de sopro que é conhecido por seu timbre doce e melódico?",
      opcoes: [
        {
          enunciado: "Saxofone",
          respostaCorreta: true
        },
        {
          enunciado: "Trompete",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o compositor austríaco conhecido por suas composições clássicas, como 'Eine kleine Nachtmusik'?",
      opcoes: [
        {
          enunciado: "Ludwig van Beethoven",
          respostaCorreta: false
        },
        {
          enunciado: "Wolfgang Amadeus Mozart",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o estilo musical que é um subgênero do rock, conhecido por suas letras introspectivas e emocionais?",
      opcoes: [
        {
          enunciado: "Grunge",
          respostaCorreta: false
        },
        {
          enunciado: "Emo",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o instrumento de percussão que é tocado agitando-o para produzir som?",
      opcoes: [
        {
          enunciado: "Pandeiro",
          respostaCorreta: true
        },
        {
          enunciado: "Xilofone",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o cantor e compositor britânico conhecido por hits como 'Shape of You' e 'Thinking Out Loud'?",
      opcoes: [
        {
          enunciado: "Justin Bieber",
          respostaCorreta: false
        },
        {
          enunciado: "Ed Sheeran",
          respostaCorreta: true
        }
      ]
    }
];

//lista de perguntas sobre games  
let listaPerguntasGames = [
    {
      pergunta: "Qual é o encanador famoso da Nintendo que usa boné vermelho e macacão azul?",
      opcoes: [
        {
          enunciado: "Sonic",
          respostaCorreta: false
        },
        {
          enunciado: "Mario",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é a franquia de jogos que envolve capturar criaturas conhecidas como 'pokémons'?",
      opcoes: [
        {
          enunciado: "Digimon",
          respostaCorreta: false
        },
        {
          enunciado: "Pokémon",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo em que você deve construir e explorar um mundo virtual tridimensional?",
      opcoes: [
        {
          enunciado: "Minecraft",
          respostaCorreta: true
        },
        {
          enunciado: "The Sims",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o nome da série de jogos que simula uma vida medieval e é conhecida por suas expansões?",
      opcoes: [
        {
          enunciado: "Age of Empires",
          respostaCorreta: false
        },
        {
          enunciado: "The Elder Scrolls",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo de luta que apresenta personagens famosos como Ryu, Ken e Chun-Li?",
      opcoes: [
        {
          enunciado: "Tekken",
          respostaCorreta: false
        },
        {
          enunciado: "Street Fighter",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo em que você controla o protagonista Link para salvar a Princesa Zelda?",
      opcoes: [
        {
          enunciado: "Final Fantasy",
          respostaCorreta: false
        },
        {
          enunciado: "The Legend of Zelda",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o famoso jogo de tiro em primeira pessoa que envolve terroristas e contra-terroristas?",
      opcoes: [
        {
          enunciado: "Call of Duty",
          respostaCorreta: false
        },
        {
          enunciado: "Counter-Strike",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é a franquia de jogos que envolve exploração de masmorras e luta contra monstros?",
      opcoes: [
        {
          enunciado: "Dark Souls",
          respostaCorreta: false
        },
        {
          enunciado: "The Legend of Zelda",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o nome da série de jogos que apresenta um mundo pós-apocalíptico habitado por criaturas chamadas 'garras'?",
      opcoes: [
        {
          enunciado: "Fallout",
          respostaCorreta: true
        },
        {
          enunciado: "Metro",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o jogo de RPG online massivo que se passa no mundo de Azeroth?",
      opcoes: [
        {
          enunciado: "Final Fantasy XIV",
          respostaCorreta: false
        },
        {
          enunciado: "World of Warcraft",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é a série de jogos de estratégia em tempo real que se passa em um universo futurista?",
      opcoes: [
        {
          enunciado: "StarCraft",
          respostaCorreta: true
        },
        {
          enunciado: "Age of Empires",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o jogo que apresenta um protagonista mascarado chamado 'Link' e uma princesa chamada 'Zelda'?",
      opcoes: [
        {
          enunciado: "Final Fantasy",
          respostaCorreta: false
        },
        {
          enunciado: "The Legend of Zelda",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo que envolve construção de cidades e gerenciamento de recursos?",
      opcoes: [
        {
          enunciado: "SimCity",
          respostaCorreta: true
        },
        {
          enunciado: "Civilization",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é a série de jogos de aventura que apresenta um caçador de tesouros chamado Nathan Drake?",
      opcoes: [
        {
          enunciado: "Tomb Raider",
          respostaCorreta: false
        },
        {
          enunciado: "Uncharted",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo de simulação que permite aos jogadores criar e gerenciar uma família virtual?",
      opcoes: [
        {
          enunciado: "Animal Crossing",
          respostaCorreta: false
        },
        {
          enunciado: "The Sims",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo que apresenta um encanador azul chamado 'Mega Man'?",
      opcoes: [
        {
          enunciado: "Super Mario",
          respostaCorreta: false
        },
        {
          enunciado: "Mega Man",
          respostaCorreta: true
        }
      ]
    },
    {
      pergunta: "Qual é o jogo de estratégia em tempo real que se passa na Grécia Antiga e apresenta batalhas mitológicas?",
      opcoes: [
        {
          enunciado: "Age of Mythology",
          respostaCorreta: true
        },
        {
          enunciado: "Civilization",
          respostaCorreta: false
        }
      ]
    },
    {
      pergunta: "Qual é o jogo de aventura e sobrevivência que se passa em um mundo com blocos e monstros?",
      opcoes: [
        {
          enunciado: "Terraria",
          respostaCorreta: false
        },
        {
          enunciado: "Minecraft",
          respostaCorreta: true
        }
      ]
    }
];

if(localStorage.getItem("choiceList") == null){
  window.location.href = '../menuInicial/menuInicial.html';
}


const luckyBlock = document.querySelector('#luckyPlane');

let score = 0;
if (localStorage.getItem("currentScore") == null) {
    localStorage.setItem("currentScore", 0);
} else {
    score = localStorage.getItem("currentScore");
}
document.querySelector('#score').innerHTML = score;

luckyBlock.addEventListener('click', () => {
    let listaSelecionada = [];
    const numberListSelected = localStorage.getItem("choiceList");
    if(numberListSelected == 1){
        listaSelecionada = listaPerguntasGames;
    } else if(numberListSelected == 2){
        listaSelecionada = listaPerguntasEsporte; 
    } else if(numberListSelected == 3){
        listaSelecionada = listaPerguntasMusica; 
    } else if(numberListSelected == 4){
        listaSelecionada = listaPerguntasTI;
    }
    //SORTEIA O NÚMERO DE DENTRO DA LISTA
    let numeroSorteado = Math.floor(Math.random() * listaSelecionada.length);
    //SELECIONA A PERGUNTA DE ACORDO COM O SORTEIO
    setCurrentQuestion(listaSelecionada[numeroSorteado]);
    window.location.href = '../pergunta/pergunta.html';
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




