// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxq56w7zt9LjGWbJHxXYKpDAwESmwHLFs",
  authDomain: "auth-social-project.firebaseapp.com",
  projectId: "auth-social-project",
  storageBucket: "auth-social-project.appspot.com",
  messagingSenderId: "157258019310",
  appId: "1:157258019310:web:73aa70c8aa8cf1ae511eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();