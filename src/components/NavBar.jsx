import React, { Component } from "react";
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

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser, logout } = useAuth()
  //   const [error, setError] = useState("")
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
      navigateTo("/");
    } catch {
      console.log("Error in loging out");
    }
  }
  return (
    <div>
      <AppBar
        position="static"
        style={{ padding: "10px", backgroundColor: "#75E6DA" }}
      >
        <Grid container>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            {/* <Button>Auto Tutorial UI</Button> */}
            <Typography component="a" href="/" style={logoStyle}>
              Auto Tutorial UI
            </Typography>
          </Grid>
          <Grid item xs={8.5}></Grid>
          {currentUser && (
            <Grid item xs={0.5}>
              <IconButton
                style={{ padding: "0" }}
                id="avatar-button"
                aria-controls={open ? "profile-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenuClick}
              >
                <Avatar sx={{ bgcolor: "#FD841F" }}>SN</Avatar>
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
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
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

export default NavBar;
