import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";

const getUserDetails = async (uid) => {
  const userCollectionRef = await collection(db, "users");
  const q = query(userCollectionRef, where("uid", "==", uid));
  const data = await getDocs(q);
  return { data: data.docs[0].data(), id: data.docs[0].id };
};

const getOrgDetails = async (uid) => {
  const userCollectionRef = await collection(db, "organizations");
  const q = query(userCollectionRef, where("uid", "==", uid));
  const data = await getDocs(q);
  return { data: data.docs[0].data(), id: data.docs[0].id };
};

const addOrUpdateUserDocs = async (uid, userDetails) => {
  const userCollectionRef = collection(db, "users");
  const q = query(userCollectionRef, where("uid", "==", uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    await addDoc(collection(db, "users"), userDetails);
  } else {
    const userDoc = doc(db, "users", docs.docs[0].id);
    await updateDoc(userDoc, { ...userDetails });
  }
};

const addOrUpdateOrgDocs = async (uid, userDetails) => {
  const userCollectionRef = collection(db, "organizations");
  const q = query(userCollectionRef, where("uid", "==", uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    //   console.log("no uid");
    await addDoc(collection(db, "organizations"), userDetails);
  } else {
    const userDoc = doc(db, "organizations", docs.docs[0].id);
    //   console.log(userDoc);
    await updateDoc(userDoc, { ...userDetails });
  }
};

export { getUserDetails, addOrUpdateUserDocs, getOrgDetails, addOrUpdateOrgDocs };
