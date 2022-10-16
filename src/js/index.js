//passo 1- dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

//passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {

      
if(aba.classListcontains("selecionado"))
return;
selecionarAba(aba)

mostrarInformacoesDAba(aba)
    });
}); 

function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
const abaSelecionada = document.querySelector(".aba.selecionado")
console.log(abaSelecionada);
abaSelecionada.classList.remove("selecionado")
// passo 4 - marcar a aba como selecionado
aba.classList.add("selecionado")
}

function mostrarInformacoesDAba(aba) {
  // passo 5 - esconder o conteúdo anterior
const informacaoSelecionada = document.querySelector(".informacao.Selecionado");
console.log(informacaoSelecionada);
informacaoSelecionada.classList.remove("selecionada")
 
// passo 6 - mostrar o conteúdo da aba selecionada
const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
informacaoASerMostrada.classList.add("selecionado")
}













