// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-9a8PK1_qPKQydBNJ8jpLRQ9nf_aRfOE",
  authDomain: "lendsqr-7cc43.firebaseapp.com",
  projectId: "lendsqr-7cc43",
  storageBucket: "lendsqr-7cc43.appspot.com",
  messagingSenderId: "767929437181",
  appId: "1:767929437181:web:83e5e3de838312a57c6794",
  measurementId: "G-VHRN3SLRFF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
