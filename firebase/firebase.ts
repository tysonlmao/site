// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yaw0TudnKGQ-Y3zD97XWe4h-BGxBvmc",
  authDomain: "tysonlmao-stats.firebaseapp.com",
  projectId: "tysonlmao-stats",
  storageBucket: "tysonlmao-stats.appspot.com",
  messagingSenderId: "314441773688",
  appId: "1:314441773688:web:8d8f966d85669cbe52738d",
  measurementId: "G-LGW7H85425"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
    return app;
}