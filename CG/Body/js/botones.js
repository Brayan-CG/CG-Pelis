const logo = document.querySelector("#cgp")
const logoa = document.querySelector("#cga")
const iframe = document.querySelector("#Iframe")
const Buscar = document.querySelector("#bus")


function inicio()
{
    logoa.style.display="none";
    logo.style.display="block";
    iframe.src = "CG/Inicio.html";
    Buscar.href = "javascript:buscar()"
}

function anime()
{   
    logo.style.display = "none";
    logoa.style.display = "block";
    iframe.src = "CG/Anime.html";
    Buscar.href = "javascript:buscarA()"
}
function buscar()
{   
    logoa.style.display = "none";
    logo.style.display = "block";
    iframe.src = "CG/Body/Peliculas/Buscar.html";
}
function buscarA()
{   
    logo.style.display = "none";
    logoa.style.display = "block";
    iframe.src = "CG/Body/Anime/Buscar.html";
}
function solicitud()
{
    logoa.style.display="none";
    logo.style.display="block";
    iframe.src = "CG/Body/Funciones/Solicitar.html";
    Buscar.href = "javascript:buscar()"
}
function confi()
{
    logoa.style.display="none";
    logo.style.display="block";
    iframe.src = "CG/configuracion.html";
    Buscar.href = "javascript:buscar()"
}
