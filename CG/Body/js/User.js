import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, deleteUser,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const usuario = document.getElementById("usuario")
    const data = document.getElementById("data")
    const foto = document.getElementById("icon")
    const fotog = document.getElementById("photo")
    const nombre = document.getElementById("new-name")
    const correo = document.getElementById("new-email")
    
    nombre.value = user.displayName;
    correo.value = user.email;
        
    if(user.photoURL === null) {
    setTimeout(function() {
      fotog.src = 'Body/Iconos/usuario.png'
    }, 1000);
    }else {
    setTimeout(function() {
        foto.src = user.photoURL;
        fotog.src = user.photoURL;
    }, 1000);
    }
    
    if (user.displayName === null) {
   data.innerHTML = '<br><h2>Usuario</h2><br>'+'<strong>Correo: </strong>'+user.email+'<br><br><strong>Cuenta: </strong>gratuita<br><br>'
    }else{
   data.innerHTML = '<br><h2>'+user.displayName+'</h2><br>'+'<strong>Correo: </strong>'+user.email+'<br><br>'+'<strong>Id De Usuario: </strong>'+user.uid+'<br><br><strong>Cuenta: </strong>gratuita<br><br>'
  }
    
    console.log('login')


const borrar = document.querySelector(".borrar");

borrar.addEventListener("click", async (e) => {
  e.preventDefault();  

   deleteUser(user).then(() => {
     swal.fire({
        icon: 'success',
        title: 'Borrando Cuenta',
        text: 'se ha Borrado la cuenta exitosamente',
        showConfirmButton: false,
        timer: 2000
    });
    
    setTimeout(function() {
      location.href="sesión.html"
    }, 1200*2);
    console.log("Borrada");
  }).catch((error) => {
  console.log(error)
    swal.fire({
        icon: 'warning',
        title: 'Importante',
        text: 'Para poder borrar la cuenta tienes que iniciar sesión recientemente',
        showConfirmButton: false,
        timer: 4000
       });
      });
}); 

}else{
    location.href="Iniciar sesión.html"
}
});
