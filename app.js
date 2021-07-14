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

vector = [[],[],[]];
vector[[0],[0],[0]] = "imagens/lacos1.jpg";
vector[[0],[0],[1]] = "Valor: 15 reais";
vector[[0],[0],[2]] = "Produto feio a mão, com duração de 20 minutos";

Tela();
var i = 0;
var j = 0;
var k = 0;

function Tela(){
 var tela_foto = document.getElementById("tela-foto");
 var valor = document.getElementById("dados");
 var descri = document.getElementById("descricao");

 tela_foto.style.backgroundImage="url("+vector[[i],[j],[0]]+")";

 valor.innerHTML = vector[[0],[0],[1]];

 descri.innerHTML = vector[[0],[0],[2]];
}

window.addEventListener("load",Add); 