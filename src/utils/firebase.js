// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQhf-TSAd0fgbt84M5FeblxuWnf26PkeY",
  authDomain: "netflix-clone-6b32c.firebaseapp.com",
  projectId: "netflix-clone-6b32c",
  storageBucket: "netflix-clone-6b32c.appspot.com",
  messagingSenderId: "961081389604",
  appId: "1:961081389604:web:60f304bcd787da7f7c1eb1",
  measurementId: "G-R8LXTKDHR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth()