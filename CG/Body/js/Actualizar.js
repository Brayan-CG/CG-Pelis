import { updateProfile, updateEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { ref , uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js"
import { auth, storage } from "./app/firebase.js";

const Form = document.querySelector("#new-form");

Form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = Form["new-name"].value;
  const correo = Form["new-email"].value;
  const newPassword = Form["new-password"].value;
  document.getElementById("box").style.display="none";     
  
   try{
updateProfile(auth.currentUser, {
    displayName: nombre,
//    photoURL: url,
}).then(() => {

uploadProfileImg();

updateEmail(auth.currentUser, correo).then(() => {
   
}).catch((error) => {
   swal.fire({
        icon: 'warning',
        title: 'Importante',
        text: 'Para poder cambiar el correo tienes que iniciar sesión recientemente',
        showConfirmButton: false,
        timer: 2000
       });
});

updatePassword(auth.currentUser, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  swal.fire({
        icon: 'warning',
        title: 'Importante',
        text: 'Para poder cambiar la Contraseña tienes que iniciar sesión recientemente',
        showConfirmButton: false,
        timer: 2000
       });
});

  swal.fire({
        icon: 'success',
        title: 'Completado',
        text: 'se ha actualizado los datos exitosamente',
        showConfirmButton: false,
        timer: 2000
    });
    setTimeout(function() {
      window.location.reload()
    },1000*2);
      
}).catch((error) => {
swal.fire({
        icon: 'success',
        title: 'Completado',
        text: 'se ha actualizado los datos exitosamente',
        showConfirmButton: false,
        timer: 2000
    });
setTimeout(function() {
      window.location.reload()
    },1000*2);
});
   } catch(error) {
  
  }
});