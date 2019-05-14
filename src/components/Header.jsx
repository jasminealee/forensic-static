import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var header = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px'
  };
  return (
    <div style={header} id="nav">
      <a href="#">Home</a> | <a href="#">Contact</a> | <Link to='createprofileform'>Create Profile</Link> |<a href="#">Sign Up</a> | <a href="#">Sign In</a> | <a href="#">Sign Out</a> | <Link to="/profile">User Profile</Link>
    </div>
  );
}

export default Header;
