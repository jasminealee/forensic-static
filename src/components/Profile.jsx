import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.birthday}</h3>
      <h2>{props.notes}</h2>
      <h3>{props.maintainedby}</h3>
      <hr/>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  notes:PropTypes.string.isRequired,
  maintainedby: PropTypes.string.isRequired
};

export default Profile;
