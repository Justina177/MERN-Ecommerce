import React from 'react';
import logo from "../../img/perfume1-removebg-preview.png";
import './Header.css'

const Header = () => {
  return (
    <div className="container">
        <div className="logo">
            <img src={logo} alt="" />
            <span className="logoBrand">My Eshop</span>
        </div>

        <div className="right">
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

export default Header