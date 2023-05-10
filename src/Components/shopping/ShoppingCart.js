import React, { useState } from "react";
import { FaShoppingCart, FaShoppingBag, FaTimes } from "react-icons/fa";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCartButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleViewCartButtonClick = () => {
    console.log("View Cart button clicked");
  };

  const handleCheckoutButtonClick = () => {
    console.log("Checkout button clicked");
  };

  const handleCloseButtonClick = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {!isPopupOpen && (
        <div  onClick={handleCartButtonClick}>
          <FaShoppingCart className="button-icon" />
        </div>
      )}
      {isPopupOpen && (
        <>
          <div className="overlay" onClick={handleCloseButtonClick} />
          <div className="shopping-cart-popup">
            <div className="popup-header">
              <h3>
                <FaShoppingBag className="bag-icon" />0 items
              </h3>
              <FaTimes
                className="close-icon"
                onClick={handleCloseButtonClick}
              />
            </div>

            <div className="popup-footer">
              <div className="button-row">
                <button
                  className="checkout-button"
                  onClick={handleCheckoutButtonClick}
                >
                  Checkout Now
                </button>
              </div>
              <div className="button-row">
                <button
                  className="view-cart-button"
                  onClick={handleViewCartButtonClick}
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {isPopupOpen && (
        <div className="view-cart-section" style={{ border: "2px solid pink" }}>
          <h3>View Cart</h3>
          {/* Add your code for displaying the cart items here */}
          <button className="view-cart-button">View Cart</button>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;