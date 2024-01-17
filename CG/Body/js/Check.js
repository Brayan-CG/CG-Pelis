import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();
const user = document.querySelector(".user")

onAuthStateChanged(auth, (user) => {
 if (user) {

const usuario = document.querySelector(".user")

    if(user.photoURL === null) {
    
        usuario.src = 'CG/Body/Iconos/usuario.png'
    
    }else {
    
        usuario.src = user.photoURL;
        usuario.src = user.photoURL;
    
    }

}else{
    location.href="CG/Iniciar sesión.html"
}
});
