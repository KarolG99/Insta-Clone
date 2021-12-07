// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVhz3DSuZnovKWxAUJq3P3kZb7tbkJ0ug",
  authDomain: "insta-clone-20368.firebaseapp.com",
  projectId: "insta-clone-20368",
  storageBucket: "insta-clone-20368.appspot.com",
  messagingSenderId: "828990679081",
  appId: "1:828990679081:web:06efd9760c03ed17159438",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
