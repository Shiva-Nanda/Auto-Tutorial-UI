import { Button } from "@mui/material";
import React, { Component, useState, useEffect } from "react";
import OrganizationProfile from "./OrganizationProfile";
import UserProfile from "./UserProfile";
import { Link, useNavigate } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";
// const navigateTo = useNavigate();
// const [profileCompleted, setProfileCompleted] = useState(0);
// const [dispOrg, setDispOrg] = useState(false);

class Profiles extends Component {
  // [profileCompleted, setProfileCompleted];
  //  [dispOrg, setDispOrg];
  state = {
    navigateTo: useNavigate(),
    userName: "",
    userHandle: "",
    country: "India",
    organization: {
      name: "",
      handle: "",
      country: "India",
      website: "",
      profileCompleted: 0,
    },
    showOrganizations: false,
    countries: ["India", "USA", "UK"],
  };

  // -------------Organization-------------------
  updateOrgName = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.name = event.target.value;
    this.setState({ organization: new_organization });
  };

  updateOrgHandle = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.handle = event.target.value;
    this.setState({ organization: new_organization });
  };

  updateOrgCountry = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.country = event.target.value;
    this.setState({ organization: new_organization });
  };

  updateOrgWebsite = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.website = event.target.value;
    this.setState({ organization: new_organization });
  };

  handleOrgSubmit = () => {
    console.log(this.state.organization);
    this.setState({ profileCompleted: 2 });
    useEffect(() => {
      if (
        (this.state.showOrganizations == false &&
          this.state.profileCompleted == 1) ||
        (this.state.showOrganization == true &&
          this.state.profileCompleted == 2)
      ) {
        this.state.navigateTo("/");
      }
    });
  };

  // -------------User-----------
  updateUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  updateUserHandle = (event) => {
    this.setState({ userHandle: event.target.value });
  };

  updateCountry = (event) => {
    this.setState({ country: event.target.value });
  };

  handleUserSubmit = () => {
    console.log("userName " + this.state.userName);
    console.log("userHandle " + this.state.userHandle);
    console.log("Country " + this.state.country);
    this.setState({ profileCompleted: 1 });
    // console.log(this.state.showOrganizations , this.state.profileCompleted);
    useEffect(() => {
      if (
        (this.state.showOrganization == false &&
          this.state.profileCompleted == 1) ||
        (this.state.showOrganization == true &&
          this.state.profileCompleted == 2)
      ) {
        this.state.navigateTo("/");
      }
    });
  };

  //----------------Profiles---------------------

  changeOrgDisplay = () => {
    const new_state = !this.state.showOrganizations;
    // setDispOrg(new_state);
    this.setState({ showOrganizations: new_state });
  };

  getOrgButtonText = () => {
    let text;
    if (this.state.showOrganizations === true) {
      text = "I don't want to create Organization";
    } else {
      text = "I want to Create Organization";
    }
    return text;
  };

  render() {
    return (
      <div
        className="container w-100"
        style={{
          minWidth: "50vw",
          maxWidth: "80vw",
        }}
      >
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <UserProfile
              updateUserName={this.updateUserName}
              updateUserHandle={this.updateUserHandle}
              updateCountry={this.updateCountry}
              handleUserSubmit={this.handleUserSubmit}
              countries={this.state.countries}
            >
              <Button
                className=" w-100 mt-2"
                variant="contained"
                onClick={this.changeOrgDisplay}
              >
                {this.getOrgButtonText()}
              </Button>
            </UserProfile>
          </div>
          <div className="col-md-auto">
            {this.state.showOrganizations && (
              <OrganizationProfile
                updateOrgName={this.updateOrgName}
                updateOrgHandle={this.updateOrgHandle}
                updateOrgCountry={this.updateOrgCountry}
                updateOrgWebsite={this.updateOrgWebsite}
                handleOrgSubmit={this.handleOrgSubmit}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
