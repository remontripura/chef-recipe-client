// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9-xE74t6eWPqZSDbNWwwSUrGl8gI1b8",
  authDomain: "chef-recipe-301c5.firebaseapp.com",
  projectId: "chef-recipe-301c5",
  storageBucket: "chef-recipe-301c5.appspot.com",
  messagingSenderId: "707193168577",
  appId: "1:707193168577:web:08dde24fb9e249a9daaa40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;