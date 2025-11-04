import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <button className="brand" onClick={() => navigate('/')}></button>
        <div className="nav-links">
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/menu">Menu</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/cart">Cart</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/admin">Admin</NavLink>
          <span className="veg-only">VEG ONLY</span>
        </div>
      </div>
    </nav>
  );
}


