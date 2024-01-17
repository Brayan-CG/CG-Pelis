import { signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    swal.fire({
        icon: 'success',
        title: 'Cerrando Sesión',
        text: 'se ha cerrado sesión exitosamente'
    });
    
    setTimeout(function() {
      location.href="Iniciar sesión.html"
    }, 1200*2);
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
});
