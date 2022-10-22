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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              Email: {user.email}
            </Grid>
            <Grid item xs={12}>
              UserName: {uesrDetails.userName}
            </Grid>
            <Grid item xs={12}>
              userHandle: {uesrDetails.userHandle}
            </Grid>
            <Grid item xs={12}>
              UserCountry: {uesrDetails.userCountry}
            </Grid>
          </Grid>
        </Card.Body>
      </Card>
    </>
  );
}
