// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABrIK8KLgdbMPgRNVUsFBgXtGDPpDZ7wQ",
  authDomain: "bookflow-141fc.firebaseapp.com",
  projectId: "bookflow-141fc",
  storageBucket: "bookflow-141fc.appspot.com",
  messagingSenderId: "373100812306",
  appId: "1:373100812306:web:6e28013bd9cee02e6d20cb",
  measurementId: "G-ZF8N87D4H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
