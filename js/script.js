const tijolo = document.querySelector('.produto');
const botaoMenu = document.querySelector('header div');
const menuFlutuante = document.querySelector('#navegacao nav');
const barraDePesquisa = document.querySelector('input');

function alertar(){
  alert("Não clique aqui");
}

function controlarMenu(){
  if(menuFlutuante.style.display === "flex"){
    menuFlutuante.style.display = "";
  }
  else{
    menuFlutuante.style.display = "flex";
  }
}

function pesquisa(event){
  if(event.key === "Enter"){
    alert("Ainda não funciona a pesquisa, volte outro dia (: ");
    barraDePesquisa.value = "";
  }
}

function pintarDeLaranja(){
  barraDePesquisa.style.backgroundColor = "orange";
}

function limparFundo(){
  barraDePesquisa.style.backgroundColor = "";
  if(barraDePesquisa.value.search('tijolo') !== -1){
    alert("PARABENS VOCE GANHOU A PROMOÇÃO COMPRE 1 TIJOLO PESQUISE 2 PAGUE4!");
  }
}

botaoMenu.onclick = controlarMenu;
tijolo.onclick = alertar;
barraDePesquisa.onkeypress = pesquisa;
barraDePesquisa.onkeydown = pintarDeLaranja;
barraDePesquisa.onkeyup = limparFundo;