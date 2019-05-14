import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
  return (
    <div>
      <hr/>
      <h3>Name: {props.name}</h3>
      <h3>Birthday: {props.birthday}</h3>
      <h3>Date of Death: {props.death}</h3>
      <h3>Gender: {props.gender}</h3>
      <h2>Notes: {props.notes}</h2>
      <h3>Maintained By: {props.maintainedby}</h3>
      <hr/>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string,
  death: PropTypes.string,
  gender: PropTypes.string,
  notes:PropTypes.string,
  maintainedBy: PropTypes.string
};

export default Profile;
