var campoFiltro = document.querySelector("#filtrar-amigos");

campoFiltro.addEventListener("input", function(){

    // Variavel que registra o nome dos usuarios
    var amigos = document.querySelectorAll(".nome");

    // Caso haja uma pesquisa no campoFiltro
    if(this.value.length > 0){

        // Busca-se todos os nomes diferentes do imput
        // e torna o "bisavo" (.nome --> div --> div --> li) invisivel.
        // Caso seja iguai ao nome ou a um trecho do nome, torna-os visíveis.

        for(var i = 0; i < amigos.length; i++){
            var amigo = amigos[i];
            var nome = amigo.textContent;
            
            var expressao = new RegExp(this.value, "i");
            var pai = amigo.parentNode;
            var avo = pai.parentNode;
            var bisavo = avo.parentNode;

            if(!expressao.test(nome)){
                bisavo.classList.add("invisivel");
            }else{
                bisavo.classList.remove("invisivel");
            }
        }
    }else{
        // Caso não tenha nada escrito, todos são visíveis.
        for(var i = 0; i < amigos.length; i++){
            var amigo = amigos[i];
            var pai = amigo.parentNode;
            var avo = pai.parentNode;
            var bisavo = avo.parentNode;
            bisavo.classList.remove("invisivel");
        }
    }
})