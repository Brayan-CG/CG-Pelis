import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { auth } from "./firebase.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        
    
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'La Contraseña ingresada no es valida', 
      });
    } else if (error.code === 'auth/user-not-found') {    
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: "El Correo Ingresado No Esta Registrado",
      });
    }else if (error.code === 'auth/user-disabled') {    
      Swal.fire({ 
      icon: 'error', 
      title: 'Cuenta Inhabilitada', 
      text: "Su cuenta de CG Pelis a sido Inhabilitada",
      });
    } else {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'Parece que algo salio mal intente nuevamente', 
      });
      console.log(error)
    }
  }
  
});