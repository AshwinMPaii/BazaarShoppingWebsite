import React from "react";
import "./navbar.css";
import { FaLaptop } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.css";
import { FaShoppingBasket, FaChevronDown, FaBicycle, FaTv, FaTshirt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






function NavBar() {

  return (
    <div class="navbar">
      <ul className="nav-links">

        <li className="dropdown1">
          <a href="#" class="category">
            Categories <FaChevronDown />
          </a>
          <div className="dropdown-content">
            <a href="#" class="category">
              <FaTshirt /> Fashion
            </a>
            <a href="#" class="category">
              <FaBicycle /> Bikes
            </a>
            <a href="#" class="category">
              <FaShoppingBasket /> Groceries
            </a>
            <a href="#" class="category">
              <FaTv /> Electronics
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
