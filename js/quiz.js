const perguntas = [
    {
        pergunta: "Em quantas escolas eu ja estudei?",
        opcoes: ["1", "2", "3", "4"],
        resposta: "4"
    },
    {
        pergunta: "Qual é a minha cor favorita?",
        opcoes: ["Rosa", "Azul", "Verde", "Amarelo"],
        resposta: "Amarelo"
    },
    {
        pergunta: "Qual comida eu mais gosto?",
        opcoes: ["Pizza", "Lasanha", "Hambúrguer", "Pirao"],
        resposta: "Pizza"
    },
    {
        pergunta: "Meu passatempo favorito?",
        opcoes: ["Desenhar", "Dormir", " Andar de bicicleta", "Cozinhar"],
        resposta: "Andar de bicicleta"
    },
    {
        pergunta: "Quantos irmãos eu tenho?",
        opcoes: ["Nenhum", "1", "2", "3"],
        resposta: "1"
    }
];

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
    let perguntaAtual = perguntas[indiceAtual];
    document.getElementById("pergunta").textContent = perguntaAtual.pergunta;

    let opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";

    perguntaAtual.opcoes.forEach(opcao => {
        let botao = document.createElement("button");
        botao.textContent = opcao;
        botao.onclick = () => verificarResposta(opcao);
        opcoesContainer.appendChild(botao);
    });
}

function verificarResposta(opcaoEscolhida) {
    let perguntaAtual = perguntas[indiceAtual];

    if (opcaoEscolhida === perguntaAtual.resposta) {
        acertos++;
    }

    document.querySelectorAll("#opcoes button").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === perguntaAtual.resposta) {
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
        }
    });
}

function proximaPergunta() {
    if (indiceAtual < perguntas.length - 1) {
        indiceAtual++;
        carregarPergunta();
    } else {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("resultado").textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas sobre mim!`;
    }
}

// Iniciar o quiz ao carregar a página
window.onload = carregarPergunta;