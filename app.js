// Parte do código para fazer as foto ficar alternando assim que a pagina for carregada.
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

// Esse cont, é para contar o quanto o menu foi aberto, para o proximo clique ele fechar o menu.
//Essa função é para abrir e fechar o menu.
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

//Essas são as chamadas dos clique nos botão.

document.getElementById("fecharmenu").addEventListener("click",Menu);
document.getElementById("abrirmenu").addEventListener("click",Menu);


//Essa parte é para a função slide ser chamada a cada 2.5s.
function Add(){
   setInterval(Slide,2500);
}

// Essa função é para abri a tela com o produto, que está configurado no css como none.
// Ou seja, só pra deixar visivel a div.

var contLacos = 0;
function ChamaTelaLacos(){
    document.getElementById("box1_3").style.display="none";

    var telaT = document.getElementById("box1_2");
    
    if(contLacos == 0){
    telaT.style.display="flex";
    telaT.style.marginTop="-75px"
    
    contLacos = 1;
    }
    else{
    telaT.style.display="none";

    contLacos = 0;
    }
}

var contTiara = 0;
function ChamaTelaTiara(){
    document.getElementById("box1_2").style.display="none";

    var telaT = document.getElementById("box1_3");
    if(contTiara == 0){
        telaT.style.display="flex";
        telaT.style.marginTop="-75px"
        
    contTiara = 1;
    }
    else{
        telaT.style.display="none";
    
        contTiara = 0;
    }
}

//Essa função Tela,funciona apartir que o ChamaTela for chamado e tornado flex.
//Então ela serve para as setas: próximo e antes, para passar as fotos.
var k = 1;
var l = 1;
function Tela(num,tipo){

 var tela_foto = document.getElementById("tela-foto");
 var tela_foto2 = document.getElementById("tela-foto2");

  if(num == 1 && tipo == "laco"){
   
    tela_foto.style.backgroundImage="url(imagens/lacos"+k+".jpg)";
    k++;

   if(k == 5){
    k = 0; 
   }
 }
 else if(num == 0 && tipo == "laco"){
   
    tela_foto.style.backgroundImage="url(imagens/lacos"+k+".jpg)";
    k--;

   if(k == 0){
    k = 4; 
   } 
 }

 else if(num == 3 && tipo =="tiara"){
     tela_foto2.style.backgroundImage="url(imagens/tiara"+l+".jpg)";
     l++;
    
     if(l == 6){
       l= 0; 
       }
 }

 else{
    tela_foto2.style.backgroundImage="url(imagens/tiara"+l+".jpg)";
    l--;

   if(l == 0){
    l= 5; 
   }
 }
}

window.addEventListener("load",Add); 