import React from 'react';
// import img1 from '../img/beauty1.jpeg';
import logo from '../img/perfume1-removebg-preview.png';
import './hero.css';


const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-left">
            <img src={logo} className="logo" alt=""  />
            <span className="logoBrand">My Eshop</span>
        </div>

        <div className="hero-right">
            <div className="menu">
                <ul className="menu">
                <li className="menuList">Collections</li>
                <li className="menuList">Brands</li>
                <li className="menuList">New</li>
                <li className="menuList">Sales</li>
                <li className="menuList">Contact Us</li>
                </ul>  
            </div>
    </div>
          

    </div>
  )
}

export default Hero