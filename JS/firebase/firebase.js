  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxuGF4USDtLw1cZYfnUp1rY4dgNzDuNzk",
    authDomain: "onpefirebase-dc840.firebaseapp.com",
    projectId: "onpefirebase-dc840",
    storageBucket: "onpefirebase-dc840.firebasestorage.app",
    messagingSenderId: "205558011679",
    appId: "1:205558011679:web:e8f108c625071bed57c22a",
    measurementId: "G-KNS1YV5MJL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  export default db