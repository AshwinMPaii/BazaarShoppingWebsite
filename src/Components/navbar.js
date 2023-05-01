import React from "react";
import "./navbar.css"
import { FaLaptop } from "react-icons/fa";




 function NavBar(){
   
    return (
      <div class="navbar">
        <div class="dropdown">
          <a href="#" class="category">
            Category ▼
          </a>
          <div class="dropdown-content">
            <select>
              <option value="#">
                Electronics
                <FaLaptop />
              </option>
              <option value="#">Bikes</option>
              <option value="#">Fashion</option>
              <option value="#">Groceries</option>
            </select>
          </div>
        </div>
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
    );

}

export default NavBar