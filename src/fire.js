// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR1lX5e65krsP1JtTDKfJgiDbKCmcNe4o",
  authDomain: "todo-app-d3349.firebaseapp.com",
  projectId: "todo-app-d3349",
  storageBucket: "todo-app-d3349.appspot.com",
  messagingSenderId: "616838955194",
  appId: "1:616838955194:web:50b9d1260d67b1f80f4283",
  measurementId: "G-5Q9LFFGBY7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;