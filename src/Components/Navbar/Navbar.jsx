import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="">24/7 Customer Service</span>
        <span>0123456789 | 0912345678</span>
        <Link to= "/">
          <button className="navButton">Login</button>
          <button className="navButton">Catergories</button>
        </Link>
      </div>
      

    </div>
  )
}

export default Navbar