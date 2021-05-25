var postarPiu = document.querySelector("#botao-postar");

var form = document.querySelector("#form-post");

var campoTexto = document.querySelector("#piu");

var piu = form.piu.value;

var caracteresValidos = false;

campoTexto.addEventListener("input", function(){
    validaCaracteres();
    console.log(caracteresValidos);
    if (caracteresValidos){
        var mensagemErro = document.querySelector("span");
        mensagemErro.classList.add("invisivel");
        var textoDoInput = document.querySelector("#piu");
        textoDoInput.classList.remove("contador2");
    }
})

postarPiu.addEventListener("click", function(){
    event.preventDefault();
    if (caracteresValidos){
        var piu = form.piu.value;
        criaPiu(adicionaPiu("José Eduardo", "eduisaacm", "./imagens/image 12.svg"), piu);
        form.reset();
        var contador = document.querySelector("#contador");
        contador.textContent = "0/140";

    }else{
        var mensagemErro = document.querySelector(".invisivel");
        var piu = form.piu.value;
        if(piu.length > 140 || piu.length == 0){
            mensagemErro.classList.remove("invisivel");
        }
    }
})


function validaCaracteres(){
    var piu = form.piu.value;
    console.log(piu.length);

    var contador = document.querySelector("#contador");
    contador.textContent = piu.length + "/140";    
    if(piu.length <= 140 || piu.length != 0){
        caracteresValidos = true;
    }
    if(piu.length > 140){
        caracteresValidos = false;
        contador.classList.add("contador2");
        var textoDoInput = document.querySelector("#piu");
        textoDoInput.classList.add("contador2");
    }
}

function mensagemErro(){

    var mensagemErro = docum.querySelector(".invisivel");

    var piu = form.piu.value;
    if(piu.length > 140 || piu.length == 0){
        mensagemErro.classList.remove("invisivel");
    }
}


function adicionaPiu(nomes, usernames, imgPerfil){

    // Criar todos os elementos de de uma postagem e atribuir classes
    var feed = document.querySelector(".postagens")

    var novoPiu = document.createElement("li");

    var conteudo = document.createElement("div");
    conteudo.classList.add("conteudo");

    var perfil = document.createElement("div");

    var fotoPerfil = document.createElement("img"); //foto perfil
    fotoPerfil.src = imgPerfil;
    fotoPerfil.classList.add("img-interacao");

    var nome = document.createElement("p");         // nome
    nome.classList.add("nome");
    nome.textContent = nomes;

    var username = document.createElement("p");     // username
    username.textContent = usernames;


    var interacao = document.createElement("div");
    interacao.classList.add("interacao");
        
    var figure = document.createElement("figure");

    var curtidas = document.createElement("figcaption"); // Numero de likes
    curtidas.textContent = "0";
    var numLikes = 0;

    var like = document.createElement("img");       // Img de like
    like.src = "./imagens/like.svg";
    like.addEventListener("click", function(){
        numLikes = numLikes + 1;
        curtidas.textContent = numLikes;
    })


    var salvar = document.createElement("img"); // Imagem da estrela
    salvar.src = "./imagens/estrela.svg";

    var deletar = document.createElement("img");    // Img da lixeira
    deletar.classList.add("deletar");
    deletar.src = "./imagens/lixeira.svg";
    deletar.addEventListener("click", function(){
        var pai = event.target.parentNode;
        pai.parentNode.remove();
    })




    // Linká-los assim como está o HTML original
    feed.prepend(novoPiu);

    novoPiu.appendChild(conteudo);
    novoPiu.appendChild(interacao);

    conteudo.appendChild(perfil);

    perfil.appendChild(fotoPerfil);
    perfil.appendChild(nome);
    perfil.appendChild(username);

    interacao.appendChild(figure);
    interacao.appendChild(salvar);
    interacao.appendChild(deletar);

    figure.appendChild(like);
    figure.appendChild(curtidas);

    // Retronando a tag a qual quero linkar meu texto do piu
    return conteudo;
}

function criaPiu(funcao, conteudo){

    // Cria a tag do conteúdo (parametro) do piu 
    // e recebe a tag a qual o piu sera linkado (retorno da função adicionaPiu)
    
    var texto = document.createElement("p");

    texto.classList.add("conteudo-texto");

    console.log(conteudo);

    texto.textContent = conteudo;

    funcao.appendChild(texto);
}
