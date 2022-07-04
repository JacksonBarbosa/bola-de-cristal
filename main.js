
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ]

    //clicar em fazer pergunta
function fazerPergunta() {

  const elementoresposta = document.getElementById("resposta")
  const inputPergunta = document.getElementById("inputPergunta")

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
  }

  const pergunta = "<div>" + inputPergunta.value + "</div>"

    //gerar numero aleatorio
  
    const respondendo = document.getElementById("b1")
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoresposta.innerHTML = pergunta + respostas [numeroAleatorio]

}
