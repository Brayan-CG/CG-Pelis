import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
 
sendEmailVerification(auth.currentUser)
  .then(() => {
    swal.fire({
        icon: 'success',
        title: 'Correo de Verificación Enviado',
        text: 'se le ha enviado un correo de verificación',
        confirmButtonText: 'Aceptar'
       });
});

    setTimeout(function() {
            
            Swal.fire({
            imageUrl: 'https://cg-pelis.netlify.app/Body/Iconos/logo.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            title: 'Iniciar',
            text: 'Inicia sesión con el usuario que a creado',
            confirmButtonText: 'Aceptar'
            
        });
            
        }, 1000*4);
        
        Swal.fire({
            icon: 'success',
            title: 'Bienvanid@',
            text: 'Usuario Creado Exitosamente',
            showConfirmButton: false,
            timer: 1500
        });

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'El Correo ingresado ya esta registrado pruebe con otro', 
      })
    } else if (error.code === 'auth/invalid-email') {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'El correo ingresado es invalido', 
      })
    } else if (error.code === 'auth/weak-password') {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'La Contraseña es muy debil', 
      })
    } else if (error.code) {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'Parece que algo salio mal intente nuevamente', 
      })
    }
  }

});
