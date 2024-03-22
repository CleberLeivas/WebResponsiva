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

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão "Calcular" pelo seu ID
    var btnCalcular = document.getElementById("btnCalcular");

    // Adiciona um ouvinte de evento de clique ao botão "Calcular"
    btnCalcular.addEventListener("click", function(event) {
        // Evita que o formulário seja enviado
        event.preventDefault();

        // Chama a função de cálculo e atualiza o conteúdo da div resultadoCalculo
        calcularTotal();
    });

// Função para calcular o total
function calcularTotal() {
    // Seleciona todas as células de valor na tabela
    var cells = document.querySelectorAll("#tabelaRegistros tbody td:nth-child(2)");
    
    // Inicializa a variável para armazenar o total
    var total = 0;
    
    // Itera sobre as células de valor e adiciona seus valores ao total
    cells.forEach(function(cell) {
        total += parseFloat(cell.textContent);
    });
    
    // Calcula os dízimos, primícias e ofertas
    var dizimo = total * 0.10;
    var primicia = (total / 30) * 1;
    var oferta = total * 0.05;
    
    // Seleciona as divs para exibir os resultados
    var resultadoDiv = document.getElementById("resultadoTotal");
    var resultadoDizimo = document.getElementById("resultadoDizimo");
    var resultadoPrimicia = document.getElementById("resultadoPrimicia");
    var resultadoOferta = document.getElementById("resultadoOferta");
    var somaDosTotais = document.getElementById("somaDosTotais");
    
    // Atualiza o conteúdo de cada div com o resultado do cálculo
    resultadoDiv.textContent = "Total: R$" + total.toFixed(2);
    resultadoDizimo.textContent = "Seu Dízimo será de: R$" + dizimo.toFixed(2);
    resultadoPrimicia.textContent = "Sua Primícia será de: R$" + primicia.toFixed(2);
    resultadoOferta.textContent = "Sua Oferta será de: R$" + oferta.toFixed(2);
    
    // Calcula a soma dos totais
    var somaTotal = dizimo + primicia + oferta;
    
    // Exibe a soma dos totais
    somaDosTotais.textContent = "Soma dos Totais: R$" + somaTotal.toFixed(2);
    }
});


