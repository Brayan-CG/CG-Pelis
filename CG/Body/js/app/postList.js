import { getDocs, collection, getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA10C6b-o-31RxHjz-HwzCMkvvSzbFUlmc",
    authDomain: "cg-pelis-002.firebaseapp.com",
    projectId: "cg-pelis-002",
    storageBucket: "cg-pelis-002.appspot.com",
    messagingSenderId: "723634576840",
    appId: "1:723634576840:web:8eac328c2e5b6bd6b3b4fd",
    measurementId: "G-BV3YMP5K2K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const db = getFirestore(app);
    
    const postList = document.querySelector(".posts");
    
    const querySnapshot = await getDocs(collection(db,"noti"));
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  }
      console.log(doc.id, " => ", doc.data());
    });
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
});
