import React from 'react';
import logo from "../../img/perfume1-removebg-preview.png";
import './Header.css'

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-top">
        <button className="catergogies">Browse Category</button>
        <div className="contactPhone">08123456789/0912987654</div>    
      </div>

      <div className="header nav-bottom">
          <div className="logo">
              <img src={logo} alt="" />
              <span className="logoBrand">My Eshop</span>
          </div>

          <div className="header_right">
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

    </nav>
    
  )
}

export default Header