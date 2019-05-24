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
         <Link to='/'>Profile List</Link> | <Link to='/contact'>Contact</Link> | <Link to='/newprofileform'>New Profile</Link>
      </div>
    </div>
  );
}

export default Header;
