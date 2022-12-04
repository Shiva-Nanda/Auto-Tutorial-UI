import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth, getEmail } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { logout } from "../contexts/newAuth";
import { Grid, Item, TextField } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getUserDetails } from "../utils/firebaseUtils";
import SideBar from "./Homepage/SideBar/sidelist";
import Editor from "./Post/Editor";


export default function Dashboard() {
  const [error, setError] = useState("");
  const [user, loading, userError] = useAuthState(auth);
  const [uesrDetails, setUserDetails] = useState({});
  const [userId, setUserId] = useState("");
  const userCollectionRef = collection(db, "users");
  // console.log("email" + email)
  const navigateTo = useNavigate();
  // console.log(user);

  useEffect(() => {
    const getDetails = async () => {
      const data = await getUserDetails(user.uid);
      setUserDetails(data.data);
      setUserId(data.id);
    }
    getDetails()
    
  }, []);
  return (
    <>
     <React.Fragment>
            <Grid container alignContent="left" spacing={10} style={{minWidth: '90vw'}}>
                <Grid item xs={2} style={{minWidth: "300px"}}>
                    <SideBar/>
                </Grid>
            </Grid>
        </React.Fragment>
    </>
  );
}
