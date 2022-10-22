import firebase from "firebase/compat/app";
import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_05cAT4I2XLRHmuUeb76OLhxHCeHD2Hg",
  authDomain: "auth-react-78e7f.firebaseapp.com",
  projectId: "auth-react-78e7f",
  storageBucket: "auth-react-78e7f.appspot.com",
  messagingSenderId: "956134402575",
  appId: "1:956134402575:web:67df0cb2113e97e1da917a"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
