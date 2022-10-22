import React, { Component, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { logout, testing } from "../contexts/newAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getUserDetails } from "../utils/firebaseUtils";


export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [user, loading, error] = useAuthState(auth);
  const [uesrDetails, setUserDetails] = useState({});
  const [userId, setUserId] = useState("");
  const userCollectionRef = collection(db, "users");
  //   const [error, setError] = useState("")

  useEffect(() => {
    const getDetails = async () => {
      const data = await getUserDetails(user.uid);
      setUserDetails(data.data);
      setUserId(data.id);
      console.log(uesrDetails);
    }
    getDetails()
  }, []);

  const navigateTo = useNavigate;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logoStyle = {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontWeight: 700,
    color: "inherit",
    textAlign: "center",
    textDecoration: "none",
  };

  async function handleLogout() {
    handleCloseMenu();
    try {
      await logout();
    } catch(err) {
      console.log("Error in loging out " + err);
    }
  }
  return (
    <div>
      <AppBar
        position="static"
        style={{ minWidth: '100%', padding: "10px", backgroundColor: "#75E6DA" }}
      >
        <Grid container>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            {/* <Button>Auto Tutorial UI</Button> */}
            <Typography component="a" href="/" style={logoStyle}>
              Auto Tutorial UI
            </Typography>
          </Grid>
          <Grid item xs={8.5}></Grid>
          {user && (
            <Grid item xs={0.5}>
              <IconButton
                style={{ padding: "0" }}
                id="avatar-button"
                aria-controls={open ? "profile-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenuClick}
              >
                <Avatar sx={{ bgcolor: "#FD841F" }}>{uesrDetails.avatarName}</Avatar>
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "avatar-button",
                }}
              >
                <MenuItem onClick={testing}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          )}
        </Grid>
      </AppBar>
    </div>
  );
};

