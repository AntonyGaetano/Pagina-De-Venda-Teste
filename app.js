i = j = 1;
function Slide(){
    var div1 = document.getElementById("img-Lacos");
    var div2 = document.getElementById("img-Tiara");

    div1.style.backgroundImage="url(imagens/lacos"+i+".jpg)";
    
     div2.style.backgroundImage="url(imagens/tiara"+j+".jpg)";
    i++;
    j++;
    if(i==5){
     i = 0;
    }

    if(j == 6){
        j = 0;
    }
}

var cont = 0;
function Menu(){
    var menu = document.getElementById("Menu-total");

    if(cont == 0){
    menu.style.display="block";
    cont = 1;
    }
    else{
    menu.style.display="none"
    cont = 0;
    }
}

document.getElementById("fecharmenu").addEventListener("click",Menu);
document.getElementById("abrirmenu").addEventListener("click",Menu);

function Add(){
   setInterval(Slide,2500);
}

vectorL = [[],[],[]];
vectorL[[0],[0]] = "imagens/lacos0.jpg";
vectorL[[0],[1]] = "Valor: R$15";


Tela();

function Tela(){

var i = 0;
var j = 0;

 var tela_foto = document.getElementById("tela-foto");
 var valor = document.getElementById("dados");

 tela_foto.style.backgroundImage="url("+vectorL[[i],[j]]+")";

 valor.innerHTML = vectorL[[i],[i],[j+1]];

 
}

window.addEventListener("load",Add); 