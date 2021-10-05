import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="nav-section">
      <h1>Nav Bar</h1>
      <ul>
        <li>
          <Link to="/my-profile"> My Profile</Link>
        </li>
        <li>
          <Link to="/mission"> Mission</Link>
        </li>
        <li>
          <Link to="/rocket"> Rocket</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
