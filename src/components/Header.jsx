import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <Link to="/">home</Link> | <Link to="/profile">profile</Link> 
  );
}

export default Header;
