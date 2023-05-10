import React from "react";
import { useState } from "react";
import "./component.css";
import { FaUser } from "react-icons/fa";
import logo from "../../Assets/Icons/logo.png";
import ShoppingCart from "../shopping/ShoppingCart";
import SignUp from "./signUp";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const categories = ["All", "Category A", "Category B", "Category C"];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProfileButtonClick = (event) => {
    setIsModalOpen(true);
  }


  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="search-container">
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="filter-container">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="dropdown"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="round-button" onClick={handleProfileButtonClick}>
          <FaUser className="button-icon" />
        </button>
        <button className="round-button">
          <ShoppingCart />
        </button>
      </div>
      {isModalOpen && <SignUp onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SearchBar;
