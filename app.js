i = j = 1;
function Slide(){
    var div1 = document.getElementById("img-Lacos");
    var div2 = document.getElementById("img-Tiara");

    var nome = "imagens/lacos";

    div1.style.backgroundImage="url"+nome+i+".jpg)";
    
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
vector[[0],[0],[0]] = "Olá";
vector[[0],[0],[1]] = "Como está";

Tela(vector);

function Tela(vetor=[]){
    alert(vetor[[0],[0],[1]]);

}

window.addEventListener("load",Add); 