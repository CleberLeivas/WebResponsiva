// Função para focar automaticamente no campo de valor ao carregar a página
window.onload = function() {
    document.getElementById('valor').focus();
};

document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#data", {
        dateFormat: "d-m-Y", // Define o formato da data
        allowInput: true // Permite a entrada manual da data
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formRegistro").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        // Captura os valores do formulário
        var valor = document.getElementById("valor").value;
        var data = document.getElementById("data").value;

        // Adiciona os valores à tabela
        var tabela = document.getElementById("tabelaRegistros").getElementsByTagName("tbody")[0];
        var newRow = tabela.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = tabela.rows.length;
        cell2.innerHTML = valor;
        cell3.innerHTML = data;

        // Limpa os campos do formulário
        document.getElementById("valor").value = "";
        document.getElementById("data").value = "";

        // Retorna o foco para o campo de valor
        document.getElementById('valor').focus();
    });
});

