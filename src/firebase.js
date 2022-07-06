import firebase from 'firebase';
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMtPqm3-vFWErVzmeQoplj6xfTZpO-6Ts",
    authDomain: "react-meal-f6f85.firebaseapp.com",
    databaseURL: "https://react-meal-f6f85-default-rtdb.firebaseio.com",
    projectId: "react-meal-f6f85",
    storageBucket: "react-meal-f6f85.appspot.com",
    messagingSenderId: "232106076679",
    appId: "1:232106076679:web:28af6c6793728e80c6d8a2",
    measurementId: "G-WCR9Z03S2N"
  };

  firebase.initializeApp(firebaseConfig)

  
  export default firebase