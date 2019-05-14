import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

var masterProfileList = [
  {
    firstName: 'Winston',
    lastName: 'Winston',
    birthday: '02/20/1989',
    dayOfDeath: '09/04/2019',
    gender: 'unknown',
    notes: 'notes',
    maintainedBy: 'yolanda'
  }
];

function ProfileList(props){
  return (
    <div>
      <hr/>
      {masterProfileList.map((profile, index) =>
        <Profile firstName={profile.firstName}
          lastName={profile.lastName}
          birthday={props.birthday}
          dayOfDeath={props.dayOfDeath}
          gender={props.gender}
          notes={props.notes}
          maintainedBy={props.maintainedBy}
          key={index}/>
      )}
    </div>
  );
}

export default ProfileList;
