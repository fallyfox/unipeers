import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBczNhigR4I4W-ZweRpeBeJ_CSj4oa3wqw",
  authDomain: "unipeers-e4d07.firebaseapp.com",
  projectId: "unipeers-e4d07",
  storageBucket: "unipeers-e4d07.firebasestorage.app",
  messagingSenderId: "245282154846",
  appId: "1:245282154846:web:afdbcb67456a8fbb3587cf"
};

const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage) 
});

export { auth, db };

