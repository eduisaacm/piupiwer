function carregarPius(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");

    xhr.onload = function() {
        var resposta = xhr.responseText;
        var pius = JSON.parse(resposta);

        pius.forEach(function(piu) {
            var texto = document.createElement("p");

            texto.classList.add("conteudo-texto");

            texto.textContent = piu.mensagem;

            // Função do arquivo forms.js que cria a "li" com o piu e todas suas tags filhas
            adicionaPiu(piu.nome, piu.username, piu.imagem).appendChild(texto);
        });
    };

    xhr.send();
}

carregarPius();
