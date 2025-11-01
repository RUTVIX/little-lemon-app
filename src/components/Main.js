// src/components/Main.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function Main() {
  return (
    <main>
      <Routes>
        {/* The path="/" route is your Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* The path="/reservations" route is your BookingPage */}
        <Route path="/reservations" element={<BookingPage />} />

        {/* Add other routes here as needed */}
      </Routes>
    </main>
  );
}

export default Main;
