document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio automático

        // Pegando valores do formulário
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validações
        if (nome === "" || email === "" || whatsapp === "" || mensagem === "") {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (!validarTelefone(whatsapp)) {
            alert("Por favor, insira um número de WhatsApp válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário
    });

    // Função para validar e-mail
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para validar telefone (WhatsApp)
    function validarTelefone(numero) {
        const regex = /^\d{10,11}$/; // Aceita 10 ou 11 dígitos (com DDD)
        return regex.test(numero);
    }
});