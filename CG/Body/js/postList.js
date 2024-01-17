import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"

import { db } from "./firebase.js";

const auth = getAuth();
onAuthStateChanged(auth, async (user) => {
  if (user) {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
  }else {
    location.href="Iniciar sesión.html"
  }
});

const postList = document.querySelector(".posts");

const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li><br>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">No hay notificación nuevas. </h4>';
  }
};
