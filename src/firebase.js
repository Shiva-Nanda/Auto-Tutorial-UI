import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG1t0orv2XVkymLtytuv3ETMOxRoWiKdQ",
  authDomain: "react-firebase-auth-db-90117.firebaseapp.com",
  projectId: "react-firebase-auth-db-90117",
  storageBucket: "react-firebase-auth-db-90117.appspot.com",
  messagingSenderId: "775239536000",
  appId: "1:775239536000:web:83c62114495aa86920c565",
};

var firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
