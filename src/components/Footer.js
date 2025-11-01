// src/components/Footer.js
import React from 'react';
import logo from '../assets/logo.png'; // Re-import the logo

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon logo" />

      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>

      <div>
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;