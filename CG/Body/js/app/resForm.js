import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { auth } from "./firebase.js";

const resForm = document.querySelector("#res-form");

resForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = resForm["res-email"].value;
  
sendPasswordResetEmail(auth, email)
  .then(() => {
    swal.fire({
        icon: 'success',
        title: 'Correo Enviado',
        text: 'se le ha enviado un correo para restablecer su contraseña',
        confirmButtonText: 'Aceptar'
    });
  });
  
});
