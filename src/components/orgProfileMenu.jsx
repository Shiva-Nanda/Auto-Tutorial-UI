import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { Component } from "react";
import { AccountCircle, Settings, Notifications, People } from "@mui/icons-material";
import { IconButton } from "material-ui";

const OrgProfileMenu = (props) => {
    const itemStyle = {
        color: 'black',
        textTransform: "none",
    }
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <Button style={itemStyle}>
              General
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button style={itemStyle}>
              Users
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button style={itemStyle}>
              Passwords
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button style={itemStyle}>
              Social Media
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrgProfileMenu;
