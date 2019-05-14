import React from 'react';
import Profile from './Profile';

var masterProfileList = [
  {
    name: 'Winston',
    birthday: '02/20/1989',
    death: '09/04/2019',
    gender: 'unknown',
    notes: 'notes',
    maintainedBy: 'yolanda'
  }
];

function ProfileList(){
  return (
    <div>
      <hr/>
      {masterProfileList.map((profile, index) =>
        <Profile name={profile.names}
          birthday={props.birthday}
          death={props.death}
          gender={props.gender}
          notes={props.notes}
          maintainedBy={props.maintainedBy}
          key={index}/>
      )}
    </div>
  );
}

export default ProfileList;
