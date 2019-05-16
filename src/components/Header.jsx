import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var header = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px'
  };

  return (
    <div>
      <div style={header} id="nav">
        <a href="#">Home</a> |  <Link to='/profilelist'>Profile List</Link> | <Link to='/contact'>Contact</Link> | <Link to='/createprofile'>Create Profile</Link> |<a href="#">Sign Up</a> | <a href="#">Sign In</a> | <a href="#">Sign Out</a> | <Link to='userProfile'>User Profile</Link>
      </div>
    </div>
  );
}

export default Header;
