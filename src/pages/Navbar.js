import React from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => (
  <nav>
    <img className="logo" src={logo} alt="logo" />
    <h1>Coin Tab</h1>
  </nav>
);

export default Navbar;
