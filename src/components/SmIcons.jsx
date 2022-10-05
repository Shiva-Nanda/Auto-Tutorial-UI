import React, { Component } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, IconButton } from "@mui/material";

class SmIcons extends Component {
  state = {};
  marginPadingZero = {
    margin: "0",
    padding: "0",
  }
  render() {
    return (
      <Grid container spacing={4} style={this.marginPadingZero}>
        <Grid item xs={3} style={this.marginPadingZero}>
          <IconButton aria-label="delete">
            <GoogleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid item xs={3} style={this.marginPadingZero}>
          <IconButton aria-label="delete">
            <FacebookIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid item xs={3} style={this.marginPadingZero}>
          <IconButton aria-label="delete">
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid item xs={3} style={this.marginPadingZero}>
          <IconButton aria-label="delete">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default SmIcons;
