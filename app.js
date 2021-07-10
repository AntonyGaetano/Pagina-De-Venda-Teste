i = 1;
function Slide(){
    var div1 = document.getElementById("img-Laços");
    var div2 = document.getElementById("img-Tiara");

    div1.style.backgroundImage="url(imagens/lacos"+i+".jpg)";
    i++;
}

function Add(){
    setInterval(Slide,1000);
    
}

window.addEventListener("load",Add);