import React, { useState } from "react";
import "./style.css";
//import imgi from "./shopping-cart.jpeg";
//import shoePic from '../../Assets/Images/shoe2.png'
import { Link } from "react-router-dom";
import CartItems from "./cartItems";
//import { itemsData } from "./cartItems";
// import { totalCost } from "./cartItems";


const Cart = () => {


  const [comments, setComments] = useState("");
  const [voucher, setVoucher] = useState("");
  // const [shippingDetails, setShippingDetails] = useState("");
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("CA");
  const [zipCode, setZipCode] = useState("");


  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };




  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleVoucherChange = (e) => {
    setVoucher(e.target.value);
  };

  // const handleShippingDetailsChange = (e) => {
  //   setShippingDetails(e.target.value);
  // };







  return (
    <div className="cart-page">
      <CartItems />

      <div className="cart-form-container">
        <div className="cart-form">
          <div>
            {/* <p>Total Cost:<span>${totalCost.toFixed(2)}</span> </p> */}
          </div>
          <div className="cart-form-content">
            <textarea
              placeholder="Additional comments"
              value={comments}
              onChange={handleCommentChange}
              style={{ height: '100px' }}
            />
            <textarea
              placeholder="Voucher"
              value={voucher}
              onChange={handleVoucherChange}
            />
            <button className="cart-form-btn">Apply Voucher</button>
          </div>
          <div className="cart-form-content">

            <label style={{ fontSize: '14px', fontFamily: "sans-serif", fontWeight: 'bold' }}>shipping estimates:</label>
            <select value={country} onChange={handleCountryChange} className="cart-form-shipest">
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
            <select value={state} onChange={handleStateChange} className="cart-form-shipest">
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
            <input
              className="cart-form-shipest"
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
          </div>
          <button className="cart-form-btn">Calculate Shipping</button>

          <Link to="/time2" style={{
            textDecoration: 'none'
          }}>
            <button className="cart-form-btn">Check Out Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;