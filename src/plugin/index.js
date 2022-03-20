// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAgvnTMX0fI4uDPd-DgIiH1XoCsOhytUu8",
  authDomain: "login-f7b91.firebaseapp.com",
  projectId: "login-f7b91",
  storageBucket: "login-f7b91.appspot.com",
  messagingSenderId: "967452861811",
  appId: "1:967452861811:web:9966bb613f4f9e485e5106",
  measurementId: "G-4QE2ECT4DF",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
