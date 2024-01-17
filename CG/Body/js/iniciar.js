import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

if (user.emailVerified) {

if(user.photoURL === null) {
        
        if(user.displayName === null) {
            Swal.fire({
    imageUrl: 'https://cg-pelis.netlify.app/Body/Iconos/logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenid@',
    text: "Iniciando Sesión con: " + user.email,
    showConfirmButton: false,
    timer:4000
    });
    
    setTimeout(function() {
        
            location.href="CG Pelis/CG.html"
            
        }, 1000*4);
        }else {
            Swal.fire({
    imageUrl: 'https://cg-pelis.netlify.app/Body/Iconos/logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenid@',
    text: "Iniciando Sesión con: " + user.displayName,
    showConfirmButton: false,
    timer: 4000
    });
    
    setTimeout(function() {
        
            location.href="CG Pelis/CG.html"
            
        }, 1000*4);
        }
        
}else {

if(user.displayName === null) {
    Swal.fire({
    imageUrl: user.photoURL,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenid@',
    text: "Iniciando Sesión con: " + user.email,
    showConfirmButton: false,
    timer: 4000
    });
    
    setTimeout(function() {
        
            location.href="CG Pelis/CG.html"
            
        }, 1000*4);
}else {
    Swal.fire({
    imageUrl: user.photoURL,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenid@',
    text: "Iniciando Sesión con: " + user.displayName,
    showConfirmButton: false,
    timer: 4000
    });
    
    setTimeout(function() {
        
            location.href="CG Pelis/CG.html"
            
        }, 1000*4);
}
}
    
    console.log(user)
    
}else{
    swal.fire({
        icon: 'warning',
        title: 'Verifique Su Correo',
        text: 'Verifique Su Correo electronico Para Poder Acceder',
        confirmButtonText: 'Aceptar'
       });
       
       setTimeout(function() {
        
  sendEmailVerification(auth.currentUser)
  .then(() => {
    swal.fire({
        icon: 'success',
        title: 'Correo de Verificación Enviado',
        text: 'se le ha enviado un correo de verificación',
        confirmButtonText: 'Aceptar'
       });
  });
            
        }, 1000*4);
}

}else{
    Swal.fire({
    imageUrl: 'https://cg-pelis.netlify.app/Body/Iconos/logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    title: 'Bienvenid@ a CG Pelis',
    text: 'inicia sesión o registrate para Acceder al contenido',
    confirmButtonText: 'Aceptar'
   });
   console.log('signup')
}
});
