// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsgzaLGJe0pxGRAYrbLCcqQ8K-HCFljUo",
  authDomain: "threadcrafts-haven-27fad.firebaseapp.com",
  projectId: "threadcrafts-haven-27fad",
  storageBucket: "threadcrafts-haven-27fad.appspot.com",
  messagingSenderId: "61641524366",
  appId: "1:61641524366:web:fbe04d53b9e8ca16e975df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;