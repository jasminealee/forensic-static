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
    maintainedBy: 'yolanda',
    notes: 'notes'
  }
];

function ProfileList(props){
  return (
    <div>
      <hr/>
      {props.profileList.map((profile, index) =>
        <Profile firstName={profile.firstName}
          lastName={profile.lastName}
          birthday={profile.birthday}
          dayOfDeath={profile.dayOfDeath}
          gender={profile.gender}
          maintainedBy={profile.maintainedBy}
          notes={profile.notes}
          key={index}/>
      )}
    </div>
  );
}
ProfileList.propTypes = {
  profileList: PropTypes.array
};

export default ProfileList;
