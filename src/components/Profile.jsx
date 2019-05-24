import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <div>
      <h1>Name: {props.firstName} {props.lastName}</h1>
      <h1>Birthday: {props.birthday}</h1>
      <h1>Date of Death: {props.dayOfDeath}</h1>
      <h1>Gender: {props.gender}</h1>
      <h1>Collected By: {props.maintainedBy}</h1>
      <h1>Notes: {props.notes}</h1>
      <hr/>
    </div>
  );
}

Profile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birthday: PropTypes.string,
  dayOfDeath: PropTypes.string,
  gender: PropTypes.string,
  maintainedBy: PropTypes.string,
  notes: PropTypes.string
};

export default Profile;
