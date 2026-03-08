// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmvI8SdSbdrtDpsnxBNVia38jrvN9nAVg",
  authDomain: "netflix-77a7c.firebaseapp.com",
  projectId: "netflix-77a7c",
  storageBucket: "netflix-77a7c.firebasestorage.app",
  messagingSenderId: "353552631981",
  appId: "1:353552631981:web:d353447161be359fb41e24",
  measurementId: "G-R6FDWN7HKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();