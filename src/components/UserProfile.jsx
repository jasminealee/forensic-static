import React from 'react';

function userProfile(props) {
  var userProfile = {
    backgroundColor: '#E0FFFF',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    border: ''
  }
  return (
    <div style={userProfile}>
      <h1>User Name</h1>
      <h2>Email</h2>
    </div>
  );
}

export default userProfile;
