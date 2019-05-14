import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
  return (
    <div>
      <hr/>
      <h3>{props.firstName} {props.lastName}</h3>
      <h3>{props.birthday}</h3>
      <h3>{props.dayOfDeath}</h3>
      <h3>{props.gender}</h3>
      <h3>{props.maintainedBy}</h3>
      <h2>{props.notes}</h2>
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
  notes:PropTypes.string
};

export default Profile;
