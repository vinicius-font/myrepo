// variaveis?
//dados entrada?
//dados saida?

const resposta = document.querySelector("#resposta")
const campo = document.querySelector("#campo")
const botao = document.querySelector("#botao")

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
  
  //pegando o ultimo caractere da pergunta
  ultimo = campo.value.substr(campo.value.length-1, campo.value.length)

  if(campo.value == ""){
    alert("Você não digitou sua pergunta!")
    return
  }else if(ultimo != "?"){
    alert("O que você digitou não é uma pergunta! Talvez faltou o '?'")
    return
  }
    botao.setAttribute("disabled", true)
    numeroAleatorio = Math.floor(Math.random() * respostas.length)
    resposta.innerHTML = "<div>" + campo.value + "</div>" + respostas[numeroAleatorio]
    resposta.syle.opacity = 1
    setTimeout(function(){
      resposta.style.opacity = 0;
      botao.removeAttribute("disabled")
  }, 3000)
}
