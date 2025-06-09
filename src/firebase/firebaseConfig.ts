// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmstEfcCjsP3XhKNTetE_AbQORhmeuf8o",
  authDomain: "real-time-board-d54db.firebaseapp.com",
  databaseURL: "https://real-time-board-d54db-default-rtdb.firebaseio.com",
  projectId: "real-time-board-d54db",
  storageBucket: "real-time-board-d54db.firebasestorage.app",
  messagingSenderId: "853477267834",
  appId: "1:853477267834:web:3616eadf0c55e7ab411ec3",
  measurementId: "G-3EGWX6K41N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
