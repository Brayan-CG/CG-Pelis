import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    location.href="https://cg-pelis.netlify.app/Inicio";
    
    Swal.fire("Bienvenid@" + credentials.user.displayName);
  } catch (error) {
      Swal.fire({ 
      icon: 'error', 
      title: 'Oops...', 
      text: 'Parece que algo salio mal intente nuevamente', 
      })
  }
});
