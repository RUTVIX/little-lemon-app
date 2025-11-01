import React from "react";
import { Link } from "react-router-dom";
// You might want to add a hero image to your assets folder
// import heroImage from '../assets/hero-image.jpg';

function CallToAction() {
  return (
    <header className="hero-section">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        {/* This button links to the BookingPage */}
        <Link to="/reservations" className="hero-button">
          Reserve a Table
        </Link>
      </div>

      <div>{/* <img src={heroImage} alt="Restaurant food" /> */}</div>
    </header>
  );
}

export default CallToAction;
