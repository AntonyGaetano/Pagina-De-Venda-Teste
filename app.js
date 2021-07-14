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

document.getElementById("info-lacos").addEventListener("click",ChamaTela);

function Add(){
   setInterval(Slide,2500);
}

function ChamaTela(){
    var telaT = document.getElementById("box1_2");
    telaT.style.display="flex";
    telaT.style.marginTop="-75px"
}

var k = 0;

function Tela(num){

 var tela_foto = document.getElementById("tela-foto");

  if(num == 1){
    tela_foto.style.backgroundImage="url(imagens/lacos"+k+".jpg)";
    k++;

   if(k == 5){
    k = 0; 
   }
 }

 else{
    tela_foto.style.backgroundImage="url(imagens/lacos"+k+".jpg)";
    k--;

   if(k == 0){
    k = 4; 
   } 
 }
}

window.addEventListener("load",Add); 