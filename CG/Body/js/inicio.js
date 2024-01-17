setTimeout(function() {
    document.getElementById("Aleatorio").style.border=" #8098ff 3px solid";
    
document.getElementById("mensajes").style.display="block";

}, 1000*60);

var eye = document.getElementById('Eye');
var input = document.getElementById('login-password');
eye.addEventListener("click", function(){
    if (input.type == "password") {
         input.type = "text"
         eye.style.opacity=0.8
    }else {
        input.type = "password"
        eye.style.opacity = 0.2
    }
})

function regi() {
    location.href="Registrarse.html"
}

function restablecer() {
    location.href="restablecer.html"
}
