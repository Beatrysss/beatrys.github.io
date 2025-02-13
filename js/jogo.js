// Definindo as variáveis
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// Função para verificar o palpite do usuário
function checkGuess() {
    let palpite = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        message.textContent = "Por favor, digite um número entre 1 e 100!";
        message.style.color = "black";
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        message.textContent = `Parabéns! Você acertou em ${tentativas} tentativas!`;
        message.style.color = "green";
    } else if (palpite > numeroSecreto) {
        message.textContent = "Tente um número menor!";
        message.style.color = "red";
    } else {
        message.textContent = "Tente um número maior!";
        message.style.color = "red";
    }
}

// Função para reiniciar o jogo
function restartGame() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
}

// Garantindo que a função checkGuess seja chamada após o carregamento do DOM
window.onload = function() {
    document.getElementById("guessButton").addEventListener("click", checkGuess);
};
