import { auth, db } from "../firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const googleProvider = new GoogleAuthProvider();
const testing = async () => {
  console.log("testing");
  await addDoc(collection(db, "not_there"), {
    map_ele: {name:"shiva", id:"123456"}
  });
};
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  console.log(auth.currentUser);
};

const signUp = async (email, password) => {
  // try {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  // const user = res.user;
  // await addDoc(collection(db, "users"), {
  //   uid: user.uid,
  //   name,
  //   authProvider: "local",
  //   email,
  // });
  // } catch (err) {
  //   console.error(err);
  //   alert(err.message);
  // }
};

const logout = async () => {
  await signOut(auth);
};


export { signInWithGoogle, testing, logIn, signUp, logout };
