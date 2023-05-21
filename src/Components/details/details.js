import React, { useState } from 'react';
import './det.css';
import { Link } from 'react-router-dom';

const countries = ['Country A', 'Country B', 'Country C']; // Example list of countries

const Details = () => {
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
    country: "",
    address1: "",
    address2: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
    country: "",
    address1: "",
    address2: "",
  });

  const [isSameAsShipping, setIsSameAsShipping] = useState(false);

  const handleInputChange = (e, addressType) => {
    const { name, value } = e.target;

    if (addressType === "shipping") {
      setShippingAddress((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (isSameAsShipping) {
        setBillingAddress((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else if (addressType === "billing") {
      setBillingAddress((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    setIsSameAsShipping(e.target.checked);

    if (e.target.checked) {
      setBillingAddress(shippingAddress);
    } else {
      setBillingAddress({
        fullName: "",
        email: "",
        phoneNumber: "",
        zipCode: "",
        country: "",
        address1: "",
        address2: "",
      });
    }
  };

  return (
    <div className="det-app">
      <div className="det-main">
        <div className="det-container1">
          <h2>Shipping Address</h2>
          <div className="input-group1">
            <div className="column1">
              <input
                type="text"
                name="fullName"
                className="det-input-field"
                placeholder="Full Name:"
                value={shippingAddress.fullName}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="email"
                name="email"
                className="det-input-field"
                placeholder="Email"
                value={shippingAddress.email}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="phoneNumber"
                className="det-input-field"
                placeholder="Phone Number"
                value={shippingAddress.phoneNumber}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="zipCode"
                className="det-input-field"
                placeholder="Zip Code"
                value={shippingAddress.zipCode}
                onChange={(e) => handleInputChange(e, "shipping")}
              />
            </div>
            <div className="column2">
              <input
                type="email"
                name="email"
                className="det-input-field"
                placeholder="Email Address"
                value={shippingAddress.email}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="company"
                className="det-input-field"
                placeholder="Company"
                value={shippingAddress.company}
                onChange={(e) => handleInputChange(e, "shipping")}
              />
              <select
                name="country"
                placeholder="Country"
                value={shippingAddress.country}
                onChange={(e) => handleInputChange(e, "shipping")}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="address2"
                className="det-input-field"
                placeholder="Address 2"
                value={shippingAddress.address2}
                onChange={(e) => handleInputChange(e, "shipping")}
              />
            </div>
          </div>
        </div>

        <div className="det-container1">
          <h2>Billing Address</h2>
          <input
            className='det-container1-check'
            type="checkbox"
            checked={isSameAsShipping}
            onChange={handleCheckboxChange}
          /><span className='det-container1-check'>Same as Shipping</span>
          <div className="input-group1">
            <div className="column1">
              <input
                type="text"
                name="fullName"
                className="det-input-field"
                placeholder="Full Name:"
                value={billingAddress.fullName}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="phoneNumber"
                className="det-input-field"
                placeholder="Phone Number"
                value={billingAddress.phoneNumber}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="zipCode"
                className="det-input-field"
                placeholder="Zip Code"
                value={billingAddress.zipCode}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="tex"
                name="address1"
                className="det-input-field"
                placeholder="Address 1"
                value={billingAddress.address1}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

            </div>
            <div className="column2">
              <input
                type="email"
                name="email"
                className="det-input-field"
                placeholder="Email Address"
                value={billingAddress.email}
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="company"
                className="det-input-field"
                placeholder="Company"
                value={billingAddress.company}
                onChange={(e) => handleInputChange(e, "shipping")}
              />
              <select
                name="country"
                placeholder="Country"
                value={billingAddress.country}
                onChange={(e) => handleInputChange(e, "shipping")}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="address2"
                className="det-input-field"
                placeholder="Address 2"
                value={billingAddress.address2}
                onChange={(e) => handleInputChange(e, "shipping")}
              />
            </div>
          </div>
        </div>
        <div className="twobuttons">
          <div className="b">
            <Link to="/time">
              <button>Back To cart</button>
            </Link>
          </div>
          <div className="b">
            <button>Proceed To Payment</button>
          </div>
        </div>
      </div>

      <div className="summary-container">
        <div className="summary-details">
          <div>
            <label>Subtotal:</label>
            <span>$100</span>
          </div>
          <div>
            <label>Shipping Tax:</label>
            <span>$10</span>
          </div>
          <div>
            <label>Discount:</label>
            <span>$5</span>
          </div>
          <div>
            <label>Total:</label>
            <span>$105</span>
          </div>
        </div>
        <input
          style={{ width: '93%', display: 'block', margin: 'auto' }}
          type="text"
          name="voucher"
          className="det-input-field"
          placeholder="voucher"
          value={billingAddress.voucher}
          onChange={(e) => handleInputChange(e, "shipping")}
        />
        <button className="apply-voucher-button">Apply Voucher</button>
      </div>
    </div>
  );
};

export default Details;