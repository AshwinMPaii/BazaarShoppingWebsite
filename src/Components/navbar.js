import React from "react";
import "./navbar.css";
import { FaLaptop } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.css";
import { FaShoppingBasket,FaChevronDown,FaBicycle,FaTv,FaTshirt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






function NavBar() {

  return (
    <div class="navbar">
      <ul className="nav-links">
              
              <li className="dropdown">
                <a href="/">
                  Categories <FaChevronDown/>
                </a>
                <div className="dropdown-content">
                  <a href="/">
                    <FaTshirt/> Fashion
                  </a>
                  <a href="/">
                    <FaBicycle/> Bikes
                  </a>
                  <a href="/">
                    <FaShoppingBasket/> Groceries
                  </a>
                  <a href="/">
                    <FaTv/> Electronics
                  </a>
                </div>
              </li>
            </ul>
     
        
      <div class="nav-links">
        <a href="#" class="option">
          Home
        </a>
        <a href="#" class="option">
          Mega Menu
        </a>
        <a href="#" class="option">
          Full Screen Menu
        </a>
        <a href="#" class="option">
          Pages
        </a>
        <a href="#" class="option">
          User Account
        </a>
        <a href="#" class="option">
          Vendror Account
        </a>
      </div>
    </div>
    
  );

}

export default NavBar;
