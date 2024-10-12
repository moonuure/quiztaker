// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzYTxQjfjzbziRgBEk3Lo6sBXxMsXBnSs",
  authDomain: "quiztaker-59638.firebaseapp.com",
  projectId: "quiztaker-59638",
  storageBucket: "quiztaker-59638.appspot.com",
  messagingSenderId: "382501136556",
  appId: "1:382501136556:web:f09520c8d02c04a047d709",
  measurementId: "G-2BYEX9SXVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
