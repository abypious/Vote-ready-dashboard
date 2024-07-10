// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzz6h_UPTPC3SiIIbZMmc2b7_Xne9CLXo",
  authDomain: "vote-ready-cb313.firebaseapp.com",
  projectId: "vote-ready-cb313",
  storageBucket: "vote-ready-cb313.appspot.com",
  messagingSenderId: "915868952405",
  appId: "1:915868952405:web:57397552c05c90aa04f1dc",
  measurementId: "G-RSRF633GZ2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const app = getFirestore(firebaseApp);
  
  export { app };