// src/components/Nav.js
import React from 'react';
import logo from '../assets/logo.png'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Import Link

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon logo" />
      <ul>
        {/* Use Link and 'to' instead of 'a' and 'href' */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;