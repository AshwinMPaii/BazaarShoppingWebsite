import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaShoppingBag, FaTimes } from "react-icons/fa";
import "./ShoppingCart.css";
import CartItems from "../cart/cartItems";
import { Link } from 'react-router-dom';

const getUserData = () => {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    return JSON.parse(userDataString);
  }
  return null;
};
const getToken = () => {
  const userData = getUserData();
  if (userData) {
    return userData.token;
  }
  return null;
};
const getId = () => {
  const userData = getUserData();
  if (userData) {
    return userData.id;
  }
  return null;
};
const token = getToken();
console.log("cart" + token);
const id = getId();


const ShoppingCart = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sizeCart, setSizeCart] = useState(null);

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
  useEffect(() => {
    const fetchCartSize = async () => {
      try {
        const token = getToken();
        const id = getId();

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const url = `http://localhost:8080/carts/getSizeOfCart/${id}`;
        const response = await fetch(url, { headers });

        if (response.ok) {
          const size = await response.json();
          setSizeCart(size);
          //  alert(sizeCart);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartSize();
  }, [token]);

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
                <FaShoppingBag className="bag-icon" />{sizeCart} items
              </h3>
              <FaTimes
                className="close-icon"
                onClick={handleCloseButtonClick}
              />
            </div>
            <div className="pop-up-middle">
              <CartItems />
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