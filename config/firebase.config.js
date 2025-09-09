// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBczNhigR4I4W-ZweRpeBeJ_CSj4oa3wqw",
  authDomain: "unipeers-e4d07.firebaseapp.com",
  projectId: "unipeers-e4d07",
  storageBucket: "unipeers-e4d07.firebasestorage.app",
  messagingSenderId: "245282154846",
  appId: "1:245282154846:web:afdbcb67456a8fbb3587cf"
};

// Initialize Firebase
const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

