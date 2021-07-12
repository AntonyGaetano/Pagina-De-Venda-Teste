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

function Add(){
   setInterval(Slide,2500);
    
}

window.addEventListener("load",Add); 