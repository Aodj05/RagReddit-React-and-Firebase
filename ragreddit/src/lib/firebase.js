import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

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
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
