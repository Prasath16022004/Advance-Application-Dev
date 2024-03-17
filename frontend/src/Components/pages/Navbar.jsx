import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="#home">Home</a>
      </div>
      <div className="right">
        <a href="#login">Admin</a>
        <Link   to="/login">Login</Link>
        <a href="#register">Register</a>
        <a href="#profile">Profile</a>
        
      </div>
    </nav>
  );
}

export default Navbar;