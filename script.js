// variaveis?
//dados entrada?
//dados saida?

const resposta = document.querySelector("#resposta")
const campo = document.querySelector("#campo")
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
  "Sinais apontam que sim."
]
//gerar numero aleatorio
numeroAleatorio = Math.floor(Math.random() * respostas.length)
//console.log(numeroAleatorio)

//clicar em fazer pergunta
function fazerPergunta() {
  if(campo.value == ""){
    alert("Você não digitou sua pergunta!")
    return
  }else{
    
    numeroAleatorio = Math.floor(Math.random() * respostas.length)
    resposta.innerHTML = "<div>" + campo.value + "</div>" + respostas[numeroAleatorio]
  }
}