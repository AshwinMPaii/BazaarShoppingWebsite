import React from "react";
import { useState } from "react";
import "./component.css";
import ProfileCart from "./profileCart";
import logo from "../../Assets/Icons/logo.png";
import BrowseProduct from "./browseProduct";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Category A", "Category B", "Category C"];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="search-container">
        <BrowseProduct />
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
      <ProfileCart />
    </div>

  );
};

export default SearchBar;
