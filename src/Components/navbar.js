import React from "react";
import "./navbar.css";
import { FaLaptop } from "react-icons/fa";

function NavBar() {
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
      <div class="navbar-links">
        <a href="#">Home</a>
        <a href="#">Mega Menu</a>
        <a href="#">Full Screen Menu</a>
        <a href="#">Pages</a>
        <a href="#">User Account</a>
        <a href="#">Vendor Account</a>
      </div>
    </div>
  );
}

export default NavBar;
