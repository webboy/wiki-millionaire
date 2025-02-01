// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJodt-5XchiFSCQBFww4PXbhbyhpLRjQI",
  authDomain: "wiki-milionaire.firebaseapp.com",
  projectId: "wiki-milionaire",
  storageBucket: "wiki-milionaire.firebasestorage.app",
  messagingSenderId: "1046721465650",
  appId: "1:1046721465650:web:ce18ab41d8212aabaa5b2b",
  measurementId: "G-72NBJ8MKXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
