import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
import { getStorage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyA10C6b-o-31RxHjz-HwzCMkvvSzbFUlmc",
    authDomain: "cg-pelis-002.firebaseapp.com",
    projectId: "cg-pelis-002",
    storageBucket: "gs://cg-pelis-002.appspot.com",
    messagingSenderId: "723634576840",
    appId: "1:723634576840:web:8eac328c2e5b6bd6b3b4fd",
    measurementId: "G-BV3YMP5K2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
