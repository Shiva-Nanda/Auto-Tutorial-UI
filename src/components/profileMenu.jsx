import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { Component } from "react";
import { AccountCircle, Settings, Notifications, People } from "@mui/icons-material";
import { IconButton } from "material-ui";

const ProfileMenu = (props) => {
    const itemStyle = {
        color: 'black',
        textTransform: "none",
    }
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <Button startIcon={<AccountCircle />} style={itemStyle}>
              Profile
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button startIcon={<Settings />} style={itemStyle}>
              Settings
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button startIcon={<Notifications />} style={itemStyle}>
              Notifications
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button startIcon={<People />} style={itemStyle}>
              Organizations
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileMenu;
