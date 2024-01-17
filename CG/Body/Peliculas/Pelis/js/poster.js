function poster(){

$("SingleHead").removeClass("hidden");

document.getElementById("poster").style.width="90%";

document.getElementById("poster").style.height="auto";

document.getElementById("poster").style.position="relative";

document.getElementById("poster").style.marginTop="20%";

document.getElementById("poster").style.marginLeft="5%";

document.getElementById("fon").style.display="none";

document.getElementById("in").style.display="none";

document.getElementById("cerrar").style.display="block"
}

function fondo(){

document.getElementById("fondo").style.width="100%";

document.getElementById("fondo").style.height="auto";

document.getElementById("fondo").style.marginTop="50%";

document.getElementById("fondo").style.marginLeft="0";

document.getElementById("poster").style.display="none";

document.getElementById("in").style.display="none";

document.getElementById("cerrar").style.display="block"
}

function ori(){
   
document.getElementById("poster").style.width="24%";

document.getElementById("poster").style.height="19%";

document.getElementById("poster").style.marginTop="-10%";

document.getElementById("poster").style.marginLeft="2%";

document.getElementById("poster").style.position="fixed";

document.getElementById("fondo").style.width="100%";

document.getElementById("fondo").style.height="auto";

document.getElementById("fondo").style.marginTop="14%";

document.getElementById("poster").style.display="block";

document.getElementById("fon").style.display="block";

document.getElementById("in").style.display="block";

document.getElementById("cerrar").style.display="none"
}
