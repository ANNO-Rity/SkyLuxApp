import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './Booking';
import Career from './Career';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header'; // Import the Header component bcs this is a navbar
import Footer from './Footer';

function App() {
  return (
    <body>
    <Router>
      <Header /> {/* Use the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer/>
    </Router>
    </body>
  );
}

export default App;
