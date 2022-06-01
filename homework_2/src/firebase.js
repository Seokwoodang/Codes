// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5dlaJuNr9i3GvUDZYb3qIB2i3hut0fX8",
  authDomain: "homework2-f19d3.firebaseapp.com",
  projectId: "homework2-f19d3",
  storageBucket: "homework2-f19d3.appspot.com",
  messagingSenderId: "326582350719",
  appId: "1:326582350719:web:1df9d0f15181fd1fa5a04a",
  measurementId: "G-J3R3B7FYJR"
};

initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();
