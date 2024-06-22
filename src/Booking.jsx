import React from 'react';
import './StyledBooking.css';
import Longue from './img/Longue.jpg';

function Booking() {
  return (
    <body>
      <img src={Longue} alt="Booking" />
      <div className="booking-container">
      <h2>Book Your Flight</h2>
      <form className="booking-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="date">Booking Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="from">From:</label>
        <input type="text" id="from" name="destination" required />

        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" name="destination" required />

        <button type="submit">Submit</button>
      </form>
    </div>
    </body>
  );
}

export default Booking;
