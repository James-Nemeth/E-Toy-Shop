// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const API_KEY = import.meta.env.FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "bruges-firebase.firebaseapp.com",
  projectId: "bruges-firebase",
  storageBucket: "bruges-firebase.firebasestorage.app",
  messagingSenderId: "182334328443",
  appId: "1:182334328443:web:2bebd6ef689b3ca50e1cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
