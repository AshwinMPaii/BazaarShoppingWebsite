import React, { useState } from "react";
import { FaShoppingCart, FaShoppingBag, FaTimes } from "react-icons/fa";
import "./ShoppingCart.css";
import CartItems from "../cart/cartItems";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';

>>>>>>> 41e2f0a138db9c078664f36fa73b4c53667f3f98
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
        <div onClick={handleCartButtonClick}>
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
<<<<<<< HEAD
            <div>
              < CartItems/>
=======
            <div className="pop-up-middle">
              <CartItems />
>>>>>>> 41e2f0a138db9c078664f36fa73b4c53667f3f98
            </div>

            <div className="popup-footer">
              {/* <div className="button-row"> */}
              <Link to='/time2' className="check-me-be">
                <button
                  className="checkout-button"
                  onClick={handleCheckoutButtonClick}
                >
                  Checkout Now
                </button>
              </Link>
              {/* </div> */}
              {/* <div className="button-row"> */}
              <Link to='/time1' className="check-me-be">
                <button
                  className="view-cart-button"
                  onClick={handleViewCartButtonClick}
                >
                  View Cart
                </button>
              </Link>
              {/* </div> */}
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default ShoppingCart;
