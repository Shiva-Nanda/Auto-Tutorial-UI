import { Button } from "@mui/material";
import React, { Component, useState } from "react";
import OrganizationProfile from "./OrganizationProfile";
import UserProfile from "./UserProfile";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const Profiles = () => {
  const [userName, setuserName] = useState("");
  const [userHandle, setuserHandle] = useState("");
  const [userCountry, setuserCountry] = useState("India");
  const [orgName, setOrgName] = useState("");
  const [orgHandle, setOrgHandle] = useState("");
  const [orgWbesite, setOrgWebsite] = useState("");
  const [orgCountry, setOrgCountry] = useState("India");
  const [showOrgs, setShowOrgs] = useState(false);
  const countries = ["India", "USA", "UK"];
  const navigateTo = useNavigate();

  // -------------Organization-------------------
  const updateOrgName = (event) => {
    setOrgName(event.target.value);
  };

  const updateOrgHandle = (event) => {
    setOrgHandle(event.target.value);
  };

  const updateOrgCountry = (event) => {
    setOrgCountry(event.target.value);
  };

  const updateOrgWebsite = (event) => {
    setOrgWebsite(event.target.value);
  };

  // -------------User-----------
  const updateUserName = (event) => {
    setuserName(event.target.value);
  };

  const updateUserHandle = (event) => {
    setuserHandle(event.target.value);
  };

  const updateCountry = (event) => {
    setuserCountry(event.target.value);
  };

  const handleUserSubmit = async () => {
    const show = true;
    if (show) {
      console.log("User details: ");
      console.log("userName " + userName);
      console.log("userHandle " + userHandle);
      console.log("Country " + userCountry);
      if (showOrgs) {
        console.log("Org Details: ");
        console.log("Organization Name" + orgName);
        console.log("Organization Handle" + orgHandle);
        console.log("Organization Country" + orgCountry);
        console.log("Organization Website" + orgWbesite);
      }
    }
    const q = query(collection(db, "users"), where("userHandle", "==", userHandle));
    const docs = await getDocs(q);
    if (docs.docs.length == 0) {
      console.log("no uid");
      var organization = {};
      if (showOrgs) {
        organization = {
          orgName,
          orgHandle,
          orgCountry,
          orgWbesite,
        };
      }
      const userDetails = {
        userName,
        userHandle,
        userCountry,
        organization,
      }

      await addDoc(collection(db, "users"), userDetails);
    } else {
      console.log(docs.docs[0].data());
    }
    // navigateTo("/");
  };

  //----------------Profiles---------------------

  const changeOrgDisplay = () => {
    const new_state = !showOrgs;
    // setDispOrg(new_state);
    setShowOrgs(new_state);
  };

  const getOrgButtonText = () => {
    let text;
    if (showOrgs === true) {
      text = "I don't want to create Organization";
    } else {
      text = "I want to Create Organization";
    }
    return text;
  };

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
            updateUserName={updateUserName}
            updateUserHandle={updateUserHandle}
            updateCountry={updateCountry}
            handleUserSubmit={handleUserSubmit}
            countries={countries}
          >
            <Button
              className=" w-100 mt-2"
              variant="contained"
              onClick={changeOrgDisplay}
            >
              {getOrgButtonText()}
            </Button>
          </UserProfile>
        </div>
        <div className="col-md-auto">
          {showOrgs && (
            <OrganizationProfile
              updateOrgName={updateOrgName}
              updateOrgHandle={updateOrgHandle}
              updateOrgCountry={updateOrgCountry}
              updateOrgWebsite={updateOrgWebsite}
              countries={countries}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
