// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxvkfOhFGvENhKcOo3nnCRiGSw535kjlI",
  authDomain: "ecommp64.firebaseapp.com",
  projectId: "ecommp64",
  storageBucket: "ecommp64.appspot.com",
  messagingSenderId: "839638845788",
  appId: "1:839638845788:web:87345966a53c1d71ef5999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
