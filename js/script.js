console.log("Inicio da aplicação");

function RevelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}

function ProximaPergunta(ProximaPergunta) {
  var pergunta = document.querySelector("#CardContainer");
  pergunta.innerHTML="";

  var CardDiv = document.createElement("div");
  CardDiv.classList.add("Card");
  CardDiv.innerHTML=`
  <div class="Card">
    <div class="QuestionCard Centralizar">
      <div class="HeaderCard">
        <h2>O que é HTML?</h2>
      </div>
    </div>
    <div id="resposta" class="AnswerCard blur">
      <p>A linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativo online. </p>
    </div>
  </div>
`;

  pergunta.appendChild(CardDiv);
}
/* Link do API de Perguntas
RandomAPI:
  https://flash.quickstaart.com/random */

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
  .then(function (resultado) {
    return resultado.json();
  })
  .then(funtion (resultadoJson){
    ProximaPergunta(resultadoJason);
  });
}