import React from "react";
import { useState } from "react";
import "./component.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../Assets/Icons/logo.png"


const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const categories = ["All", "Category A", "Category B", "Category C"];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProfileButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsLoginModalOpen(false);
  };

  const handleLogInClick = () => {
    setIsSignUp(false);
    setIsLoginModalOpen(true);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("Sign up clicked!");
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    console.log("Log in clicked!");
  };

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
          <FaShoppingCart className="button-icon" />
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {isLoginModalOpen ? (
              <>
                <h2>Log In</h2>
                <form>
                  <label htmlFor="email">Email or phone:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="button-container">
                    <button onClick={handleLogIn}>Log In</button>
                  </div>
                  <p>
                    Don't have an account?{" "}
                    <span onClick={handleSignUpClick}>Sign up</span>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2>Sign Up</h2>

                <h2>Sign Up</h2>
                <form>
                  <label htmlFor="email">Email or phone:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="button-container">
                    <button onClick={handleSignUp}>Sign Up</button>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <span onClick={handleLogInClick}>Log in</span>
                  </p>
                </form>
              </>
            )}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;