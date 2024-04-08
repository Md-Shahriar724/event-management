// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6c4h8RtQDRY5hUJB_5WG5KDGhs-2Yo64",
  authDomain: "event-management-131f0.firebaseapp.com",
  projectId: "event-management-131f0",
  storageBucket: "event-management-131f0.appspot.com",
  messagingSenderId: "227997763338",
  appId: "1:227997763338:web:9e57c837964529192adcf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;