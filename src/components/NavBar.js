import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';
import '../assets/css/navbar.css';

const Navbar = () => (
  <div className="d-flex justify-content-between align-items-center m-4">
    <div className="d-flex align-items-center">
      <img src={logo} alt="logo" className="logo img-logo" />
      <div className="m-3">
        <h2>Space Travelers&apos; Hub</h2>
      </div>
    </div>
    <nav>
      <NavLink to="/rockets" className="p-2 link text-decoration-none">
        Rockets
      </NavLink>
      <NavLink to="/missions" className="p-2 link text-decoration-none">
        Missions
      </NavLink>
      <NavLink to="/profile" className="p-2 link text-decoration-none">
        My Profile
      </NavLink>
    </nav>
  </div>
);

export default Navbar;
