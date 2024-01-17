import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector(".logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
   swal.fire({
        icon: 'success',
        title: 'Cerrando Sesión',
        text: 'se ha cerrado sesión exitosamente',
        showConfirmButton: false,
        timer: 3000
    });
    
    setTimeout(function() {
      location.href="CG/Iniciar sesión.html"
    }, 1200*2);
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
});


const cerrar = document.querySelector(".cerrar");


cerrar.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
   swal.fire({
        icon: 'success',
        title: 'Cerrando Sesión',
        text: 'se ha cerrado sesión exitosamente',
        showConfirmButton: false,
        timer: 3000
    });
    
    setTimeout(function() {
      location.href="CG/Iniciar sesión.html"
    }, 1200*2);
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
});
