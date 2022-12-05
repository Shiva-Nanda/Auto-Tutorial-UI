import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { Component } from "react";
import { Settings, Notifications, People, Home, Book, Logout, Mic, VideoCall, Tag, AbcOutlined, Light, Shop, HeartBroken, Google, Cases, Twitter, Facebook, GitHub, Instagram, Chat, CheckBox, Close, Person, Create } from "@mui/icons-material";
import { useState } from "react";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";


const tags = [
  "react",
  "javascript",
  "html",
  "css",
  "webdev",
  "opensource",
  "git",
  "vscode",
  "npm",
];

const SideBar = (props) => {
  const navigate = useNavigate();
  const navToPost = () => {
    navigate('/createpost');
  }

  const navToHome = () => {
    navigate('/');
  }
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>
      <div>
      <Card sx={{ flexGrow: 1 }} >
        <CardContent>
          <Grid container spacing={1} direction="column">
            
            <Grid iterm xs={12}>
              <Button startIcon={ <Home />}>
                  Home
                </Button>
            </Grid>
            <Grid iterm xs={12}>
              <Button startIcon={ <Settings />}>
                  Settings
                </Button>
            </Grid>
            <Grid iterm xs={12}>
              <Button startIcon={ <Book />}>
                  Tutorials
                </Button>
            </Grid>
            <Grid iterm xs={12}>
              <Button startIcon={ <People />}>
                  Organizations
                </Button>
            </Grid>
              <Grid iterm xs={12}>
              <Button startIcon={ <Person />}>
                  UserProfile
              </Button>
              
            </Grid>
            <Grid iterm xs={12}>
              <Button onClick={navToPost} startIcon={ <Create />}>
                  Create Post
                </Button>
            </Grid>
            <Grid iterm xs={12}>
              <Button onClick={navToHome} startIcon={ <Home />}>
                  Home
                </Button>
            </Grid>
            <Grid container spacing={1} style={{ padding: 20 }} direction="row">
              <Grid style={{ padding: 7 }}><Twitter /></Grid>
              <Grid style={{ padding: 7 }}><Facebook /></Grid>
              <Grid style={{ padding: 7 }}><GitHub /></Grid>
              <Grid style={{ padding: 7 }}><Instagram /></Grid>
          </Grid>
    
        </Grid>
        </CardContent>
        </Card>
        </div>
    </>
  );
};

export default SideBar;
