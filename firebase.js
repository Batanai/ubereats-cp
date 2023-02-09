import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRzLgMUlp5NR94GzPCF8PV7ugXyNI3deM",
    authDomain: "uber-eats-clone-cp.firebaseapp.com",
    projectId: "uber-eats-clone-cp",
    storageBucket: "uber-eats-clone-cp.appspot.com",
    messagingSenderId: "694725866933",
    appId: "1:694725866933:web:56569e3bad56bcfef5d5fc",
    measurementId: "G-W3T7S24JZX"
  };
  
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;