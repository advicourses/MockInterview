// auth.js - Firebase Authentication Module

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyChAcW59AOxtZmSAckURATcxUgdfIbAqTU",
  authDomain: "advisolutions-80f84.firebaseapp.com",
  projectId: "advisolutions-80f84",
  storageBucket: "advisolutions-80f84.firebasestorage.app",
  messagingSenderId: "318337448800",
  appId: "1:318337448800:web:1c937c9db12f5e9faa7c05",
  measurementId: "G-G542C7G94N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  googleProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
};
