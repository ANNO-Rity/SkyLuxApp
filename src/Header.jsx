import React from 'react';
import { NavLink } from 'react-router-dom';
import './StyledHeader.css';
import logo from './img/logo.svg';

const Header = () => (
  <header>
    <nav>
      <div className="nav-main">
        <NavLink to="/" exact className="home-link">Skylux 
        <img src={logo} width={'40px'} /></NavLink>
      </div>
      <ul className="nav-menu">
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/booking" activeClassName="active">Booking</NavLink></li>
        <li><NavLink to="/career" activeClassName="active">Career</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
