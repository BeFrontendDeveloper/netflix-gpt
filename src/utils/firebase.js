// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ7RsNQOp5liENlS-ncp7t6COcylrr-1M",
  authDomain: "netflixgpt-41cdd.firebaseapp.com",
  projectId: "netflixgpt-41cdd",
  storageBucket: "netflixgpt-41cdd.firebasestorage.app",
  messagingSenderId: "1077071609478",
  appId: "1:1077071609478:web:0f8278e6eec65a560a1b07",
  measurementId: "G-NEZV9ZV8HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();