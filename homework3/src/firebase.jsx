import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from './firebase'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC5dlaJuNr9i3GvUDZYb3qIB2i3hut0fX8",
  authDomain: "homework2-f19d3.firebaseapp.com",
  projectId: "homework2-f19d3",
  storageBucket: "homework2-f19d3.appspot.com",
  messagingSenderId: "326582350719",
  appId: "1:326582350719:web:1df9d0f15181fd1fa5a04a",
  measurementId: "G-J3R3B7FYJR"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);
export const storage = getStorage(app);
export default app;