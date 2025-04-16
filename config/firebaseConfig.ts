// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3yAr6BmvgkmclMfosKPpo2HRFEmkOoLA",
  authDomain: "budgetwise-3a9ce.firebaseapp.com",
  projectId: "budgetwise-3a9ce",
  storageBucket: "budgetwise-3a9ce.firebasestorage.app",
  messagingSenderId: "445190667270",
  appId: "1:445190667270:web:950e97c7b5937cf05a5787",
  measurementId: "G-W5BHQZ0N3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);