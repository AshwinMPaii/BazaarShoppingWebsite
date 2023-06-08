import React, { useState } from "react";
import axios from "axios";
import "./navbar.css";
//import { FaLaptop } from "react-icons/fa";
import {
  FaShoppingBasket,
  FaChevronDown,
  FaBicycle,
  FaTv,
  FaTshirt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const clearLocalStorage = () => {
  localStorage.clear();
};
function NavBar(props) {
  //const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  // const handleUserDropdown = () => {
  //   setShowUserDropdown(!showUserDropdown);
  // };

  const handleLogout = () => {
    // Implement your logout functionality here
    clearLocalStorage();
    console.log("Logged out");
  };

  const handleOpenChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const handleCloseChangePasswordModal = () => {
    setShowChangePasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setEmail("");
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      const url = `http://localhost:8080/users/change?email=${email}&old=${currentPassword}&nw=${newPassword}`;

      axios
        .post(url)
        .then((response) => {
          // Handle the successful response
          console.log("Password changed successfully");
          alert("Password changed successfully");
          handleCloseChangePasswordModal();
        })
        .catch((error) => {
          // Handle the error
          console.error("Failed to change password:", error);
        });
    } else {
      alert("new password and confirm password fields dont match");
    }
  };

  return (
    <div className="navbar">
      <ul className="nav-links">
        <li className="dropdown1">
          <Link to="/" className="category">
            Categories <FaChevronDown />
          </Link>
          <div className="dropdown-content">
            <Link to="/productlist/3" className="category">
              <FaTshirt /> Fashion
            </Link>
            <Link to="/productlist/1" className="category">
              <FaBicycle /> Bikes
            </Link>
            <Link to="/productlist/4" className="category">
              <FaShoppingBasket /> Groceries
            </Link>
            <Link to="/productlist/2" className="category">
              <FaTv /> Electronics
            </Link>
          </div>
        </li>
      </ul>

      <div className="nav-links">
        <a href="/" className="option">
          Home
        </a>
        <a href="/" className="option">
          Mega Menu
        </a>
        <a href="/" className="option">
          Full Screen Menu
        </a>
        <a href="/" className="option">
          Pages
        </a>
        <div className="dropdown2">
          <ul class="option user-option">
            User Account <FaChevronDown />
            <div className="my-dropdown-content">
              <button
                className="navbar-dropdown-option"
                onClick={handleOpenChangePasswordModal}
              >
                Change Password
              </button>
              <Link to="/time4" className="navbar-dropdown-option">
                Orders
              </Link>
              <button className="navbar-dropdown-option" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </ul>
        </div>

        <a href="/" className="option">
          Vendror Account
        </a>
      </div>

      {showChangePasswordModal && (
        <div className="modal1">
          <div className="modal1-content">
            <span className="close111" onClick={handleCloseChangePasswordModal}>
              &times;
            </span>
            <h2>Change Password</h2>
            <form className="change-pass-form">
              <input
                className="change-pass-input"
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="change-pass-input"
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                className="change-pass-input"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                className="change-pass-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="change-pass-btn"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
