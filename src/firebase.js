import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMWo5ZFJLuEVDH7pdQdQEuOrV_IIGLdgA",
  authDomain: "clone-44ea6.firebaseapp.com",
  projectId: "clone-44ea6",
  storageBucket: "clone-44ea6.appspot.com",
  messagingSenderId: "670862355675",
  appId: "1:670862355675:web:754397f26c2d72a9eff0fe",
  measurementId: "G-C1H9X1XV6J",
  // databaseURL: "https://your-database-name.firebaseio.com" // Uncomment this if using Realtime Database
};

// Initialize Firebase
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// Firebase services
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
