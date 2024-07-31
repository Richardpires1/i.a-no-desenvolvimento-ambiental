const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre que houve um aumento significativo no número de queimadas no Pantanal. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é devastador! Precisamos de ações imediatas para proteger essa região única.",
                afirmacao: "Está preocupado com os impactos das queimadas no ecossistema do Pantanal."
            },
            {
                texto: "Como isso pode ter acontecido? Precisamos entender as causas para prevenir no futuro.",
                afirmacao: "Está interessado em entender as causas das queimadas para buscar soluções preventivas."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre conservação ambiental, seu professor pede sugestões sobre como combater as queimadas no Pantanal. Qual foi sua abordagem?",
        alternativas: [
            {
                texto: "Propus campanhas educativas e medidas rigorosas de fiscalização para prevenir as queimadas.",
                afirmacao: "Acredita na importância da conscientização e da fiscalização para proteger o Pantanal."
            },
            {
                texto: "Destaquei a necessidade de pesquisas científicas para entender melhor o impacto das queimadas na fauna e flora local.",
                afirmacao: "Valoriza o papel da pesquisa científica na compreensão dos efeitos das queimadas no Pantanal."
            }
        ]
    },
    {
        enunciado: "Durante uma conferência sobre mudanças climáticas, qual foi sua opinião sobre as queimadas no Pantanal?",
        alternativas: [
            {
                texto: "Defendi que políticas públicas eficazes são essenciais para proteger o Pantanal das queimadas.",
                afirmacao: "Está comprometido com a necessidade de políticas públicas para a conservação do Pantanal."
            },
            {
                texto: "Expressei preocupação com a perda de biodiversidade causada pelas queimadas no Pantanal.",
                afirmacao: "Reconhece os impactos negativos das queimadas na biodiversidade do Pantanal."
            }
        ]
    },
    {
        enunciado: "Após participar de um workshop sobre gestão ambiental, foi solicitado que você criasse uma campanha visual para conscientizar sobre as queimadas no Pantanal. Como procedeu?",
        alternativas: [
            {
                texto: "Desenvolvi uma campanha gráfica que mostrava os diferentes ecossistemas do Pantanal e os impactos das queimadas.",
                afirmacao: "Valoriza o potencial das artes visuais para sensibilizar sobre as questões ambientais do Pantanal."
            },
            {
                texto: "Colaborei com outros para criar uma campanha que incentivasse ações práticas de prevenção de queimadas.",
                afirmacao: "Acredita na importância da colaboração para promover a prevenção de queimadas no Pantanal."
            }
        ]
    },
    {
        enunciado: "Durante um projeto escolar sobre conservação do Pantanal, um colega sugeriu usar tecnologia para monitorar áreas propensas a queimadas. O que você fez?",
        alternativas: [
            {
                texto: "Apoiou o uso de tecnologia para prevenir e responder rapidamente às queimadas no Pantanal.",
                afirmacao: "Valoriza o potencial da tecnologia para melhorar a gestão e prevenção de queimadas no Pantanal."
            },
            {
                texto: "Optou por estudar métodos tradicionais de prevenção de queimadas para entender sua eficácia.",
                afirmacao: "Reconhece a importância de métodos tradicionais de prevenção na conservação do Pantanal."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
