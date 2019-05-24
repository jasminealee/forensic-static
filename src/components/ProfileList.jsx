import React from "react";
import PropTypes from "prop-types";
import Profile from "./profile";

function ProfileList(props){
  return (
    <Profile
      firstName="Winston"
      lastName="Jet"
      birthday="November 20, 1800"
      dayOfDeath="October 19, 1893"
      gender="Male"
      maintainedBy="Ayden Sean, Sally Reeds, Ked Bure, Pete Kiser"
      notes="Discovered in Riverside forest at 2:00 PM."/>
  );
}

export default ProfileList;
