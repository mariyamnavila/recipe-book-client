// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGHP5gNHnmJIJX8Wvofyq8DJhKYd380M4",
  authDomain: "recipe-book-77bc3.firebaseapp.com",
  projectId: "recipe-book-77bc3",
  storageBucket: "recipe-book-77bc3.firebasestorage.app",
  messagingSenderId: "622226826067",
  appId: "1:622226826067:web:b515a6f6ec5c1541b377a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);