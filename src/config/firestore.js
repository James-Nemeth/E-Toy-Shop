// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPgXBorLNRjoho96ysq_t78oXxCBS4eQw",
  authDomain: "bruges-firebase.firebaseapp.com",
  projectId: "bruges-firebase",
  storageBucket: "bruges-firebase.firebasestorage.app",
  messagingSenderId: "182334328443",
  appId: "1:182334328443:web:2bebd6ef689b3ca50e1cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);