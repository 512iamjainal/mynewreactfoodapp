import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArK1UCpFNR4EjPVW_3tIh3UYzZF0qJb5M",
  authDomain: "fir-auth-73bbc.firebaseapp.com",
  projectId: "fir-auth-73bbc",
  storageBucket: "fir-auth-73bbc.appspot.com",
  messagingSenderId: "302665487015",
  appId: "1:302665487015:web:d627e20035f4788a548182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
