// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzifSieHyyEuzrdbm3KcqtHMlI3NrdMI0",
  authDomain: "ragreddit-85641.firebaseapp.com",
  projectId: "ragreddit-85641",
  storageBucket: "ragreddit-85641.appspot.com",
  messagingSenderId: "926887223638",
  appId: "1:926887223638:web:b0d1834d8cb701e97376f7",
  measurementId: "G-FT92T3D0B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

SKIP_PREFLIGHT_CHECK=true