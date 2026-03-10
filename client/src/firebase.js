// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mrw-estate.firebaseapp.com",
  projectId: "mrw-estate",
  storageBucket: "mrw-estate.firebasestorage.app",
  messagingSenderId: "519788139080",
  appId: "1:519788139080:web:d80273af21d3177db2be7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);