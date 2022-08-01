function revelarResposta() {
    var resposta = document.querySelector("#resposta") //seleciona toda a linha do codigo-->
    resposta.classList.toggle("blur") //chamar toda lista de onde esta o id e usar toggle(liga/desliga)-->
}

function proximaPergunta(novaPergunta) {
    var pergunta = document.querySelector("#cardContainer")
    pergunta.innerHTML = "" //apaga todo o card da direita-->

    var cardDiv = document.createElement("div") //criar um novo elemento pro html (nova div) usando js-->

    cardDiv.classList.add("card", "animate__animated", "animate__backInRight") 
    //inserir a div (card) do html + inserir animaçoes (opcional)-->
    //console.log(novaPergunta)-->
    cardDiv.innerHTML = `<div class="card-cabecalho central">
    <h1 class="card-titulo">o que é ${novaPergunta.title}?</h1>
</div>
<div id="resposta" class="card-conteudo blur"> 
    <p>${novaPergunta.description}</p>
</div>`; 
//colocar toda a div class card cabecalho central. O .title e .description vieram do console.log(novaPergunta)-->

    pergunta.appendChild(cardDiv) //appendChild espera receber o novo elemento do html que sera colocado nos ( )-->
}

function buscarInfo() {
    fetch("https://flash.quickstaart.com/random") //o fetch vai buscar informaçoes nos servidores-->
    .then(function(resultado) {   //o then vai buscar o resultado-->
        return resultado.json()    //return vai retornar o resultado traduzido com json-->
    })
    .then(function(resultadoJson) {   //criar uma função para mostrar o resultado-->
        proximaPergunta (resultadoJson)  //mostrar resultado-->
    })
}

window.addEventListener("load", buscarInfo) //serve para dizer se a pagina carregou e chamar a funçao deixando o site dinamico-->