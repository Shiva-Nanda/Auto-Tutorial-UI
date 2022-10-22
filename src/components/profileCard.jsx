import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  FacebookRounded, GitHub, LinkedIn,
} from "@mui/icons-material";

const ProfileCard = (props) => {
  const [uesrName, setUserName] = useState("Name");
  const [userCountry, setUserCountry] = useState("India");
  const [description, setDesc] = useState("");
  const [website, setWebsite] = useState("");

  const countries = ["India", "USA", "UK"];

  const updateName = (event) => {
    setUserName(event.target.value);
  };
  const updateCountry = (event) => {
    setUserCountry(event.target.value);
  };
  const updateWebsite = (event) => {
    setWebsite(event.target.value);
  };
  const updateDesc = (event) => {
    setDesc(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography style={{ padding: "4px" }} variant="h4">
        Profile
      </Typography>
      <Card sx={{ flexGrow: 1 }}>
        <CardContent>
          <Grid container spacing={1} direction="column">
            <Grid
              item
              xs={12}
              style={{ minWidth: "500px", paddingBottom: "10px" }}
            >
              <Grid container>
                <Grid item xs={4}>
                  <TextField
                    required
                    id="user-name"
                    className="w-100"
                    label="Name"
                    variant="outlined"
                    onChange={updateName}
                    value={uesrName}
                  />
                </Grid>
                <Grid item xs={0.5} />
                <Grid item xs={4}>
                  <TextField
                    id="outlined-select-currency"
                    className="w-100"
                    select
                    label="Country of residence"
                    value={userCountry}
                    onChange={updateCountry}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              id="website-description"
              item
              xs={12}
              style={{ minWidth: "500px", paddingBottom: "10px" }}
            >
              <Grid container>
                <Grid item xs={4}>
                  <TextField
                    id="website"
                    className="w-100"
                    label="Website"
                    variant="outlined"
                    onChange={updateWebsite}
                    value={website}
                  />
                </Grid>
                <Grid item xs={0.5} />
                <Grid item xs={4}>
                  <TextField
                    id="outlined-select-currency"
                    className="w-100"
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={updateDesc}
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "10px" }}>
              <TextField
                id="facebook"
                className="w-100"
                label="Facebook"
                variant="outlined"
                value="www.facebook.com/user"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FacebookRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "10px" }}>
              <TextField
                id="linkedin"
                className="w-100"
                label="LinkedIn"
                variant="outlined"
                value="www.linkedin.com/user"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedIn />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "10px" }}>
              <TextField
                id="github"
                className="w-100"
                label="Github"
                variant="outlined"
                value="www.github.com/user"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GitHub />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProfileCard;
