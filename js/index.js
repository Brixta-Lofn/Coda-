var nome = "Rosineide Couto Rocha";
var cargo= "Desenvolvedora";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargonohtml");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
nomehtml.innerHTML = nome;
}

function colocarcargonoHtml(cargo){
    cargohtml.innerHTML = cargo;

}

function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display="block";
    texto1.style.display="none";
}

function clickNoSobre(){
    console.log("Clicou no botão sobre");
    texto1.style.display="block";
    texto2.style.display="none";

}
  
colocarNomeNoHtml(nome);
colocarcargonoHtml(cargo);