// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_t4b6v7GkdTFa0VFUvwk8AAkC3EE79Pw",
  authDomain: "redzari.firebaseapp.com",
  projectId: "redzari",
  storageBucket: "redzari.appspot.com",
  messagingSenderId: "225116762225",
  appId: "1:225116762225:web:6b25db2168389896f92bd0",
  measurementId: "G-4BG50Q9NYQ"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);