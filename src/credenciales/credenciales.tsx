// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIvNIS9dQIJe-Uj9txgsutoVs9YeNy83g",
  authDomain: "pos-cart-e745e.firebaseapp.com",
  projectId: "pos-cart-e745e",
  storageBucket: "pos-cart-e745e.appspot.com",
  messagingSenderId: "235222611046",
  appId: "1:235222611046:web:9755db1f24a297c63369a7"
};

// Initialize Firebase
const appFirabase = initializeApp(firebaseConfig);
export default appFirabase