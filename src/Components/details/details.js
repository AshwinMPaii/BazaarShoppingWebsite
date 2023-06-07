import React, { useState, useEffect } from "react";
import "./det.css";
import { Link, useNavigate } from "react-router-dom";

const countries = ["Country A", "Country B", "Country C"]; // Example list of countries

const Details = () => {
  let history = useNavigate();

  const [totalAmount, setTotalAmount] = useState(null);
  const [tax, setTax] = useState(null);
  const [subTotal, setSubTotal] = useState(null);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/carts/totalPrice/1"
        );
        const data = await response.json();
        setTotalAmount(data["Total Amount"]);
        setTax(data["tax"]);
        setSubTotal(data["Sub-Total"]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Fetch total amount initially
    fetchTotalAmount();

    // Poll for total amount every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchTotalAmount, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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


  const handleProceedToPayment = async () => {
    if (!(billingAddress.fullName === '' || billingAddress.email === '' || billingAddress.address1 === '' || billingAddress.address2 === '' || billingAddress.phoneNumber === '' || billingAddress.company === '' ||
      billingAddress.zipCode === '' || billingAddress.country === '' || shippingAddress.fullName === '' || shippingAddress.email === '' || shippingAddress.address1 === '' || shippingAddress.address2 === '' || shippingAddress.phoneNumber === '' || shippingAddress.company === '' || shippingAddress.zipCode === '' || shippingAddress.country === '')) {

      try {
        // Make API requests to update the billing and shipping addresses
        await fetch("http://localhost:8080/billing/user/1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            user: {
              id: 1,
              email: "user1@gmail.com",
              password: "varun",
              roles: "ROLE_USER",
              oneTimePassword: null,
              otpRequestedTime: null,
              otprequired: false,
            },
            fullName: billingAddress.fullName,
            email: billingAddress.email,
            addressLine1: billingAddress.address1,
            addressLine2: billingAddress.address2,
            phone: billingAddress.phoneNumber,
            company: billingAddress.company,
            zipCode: billingAddress.zipCode,
            country: billingAddress.country,
          }),
        });

        await fetch("http://localhost:8080/shipping/user/1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            user: {
              id: 1,
              email: "ismailafrid313@gmail.com",
              password:
                "$2a$10$l3fD.ZC57fIFMsY61ZefVuWA1jIZdELrLurxtk007tEXleB.FuPP2",
              roles: "ROLE_CUSTOMER",
              oneTimePassword: null,
              otpRequestedTime: null,
              otprequired: false,
            },
            fullName: shippingAddress.fullName,
            email: shippingAddress.email,
            addressLine1: shippingAddress.address1,
            addressLine2: shippingAddress.address2,
            phone: shippingAddress.phoneNumber,
            company: shippingAddress.company,
            zipCode: shippingAddress.zipCode,
            country: shippingAddress.country,
          }),
        });

        // Redirect to the desired page (time3)
        history("/time3");
      } catch (error) {
        console.error("Error:", error);
      }
    }
    else {
      alert("Please fill all fields")
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
                required
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="number"
                name="phoneNumber"
                className="det-input-field"
                placeholder="Phone Number"
                value={shippingAddress.phoneNumber}
                required
                onChange={(e) => handleInputChange(e, "shipping")}
              />


              <input
                type="text"
                name="zipCode"
                className="det-input-field"
                placeholder="Zip Code"
                value={shippingAddress.zipCode}
                required
                onChange={(e) => handleInputChange(e, "shipping")}
              />
              <input
                type="tex"
                name="address1"
                className="det-input-field"
                placeholder="Address 1"
                value={shippingAddress.address1}
                required
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
                required
                onChange={(e) => handleInputChange(e, "shipping")}
              />

              <input
                type="text"
                name="company"
                className="det-input-field"
                placeholder="Company"
                value={shippingAddress.company}
                required
                onChange={(e) => handleInputChange(e, "shipping")}
              />
              <select
                name="country"
                placeholder="Country"
                value={shippingAddress.country}
                required
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
                required
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
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="number"
                name="phoneNumber"
                className="det-input-field"
                placeholder="Phone Number"
                value={billingAddress.phoneNumber}
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="text"
                name="zipCode"
                className="det-input-field"
                placeholder="Zip Code"
                value={billingAddress.zipCode}
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="tex"
                name="address1"
                className="det-input-field"
                placeholder="Address 1"
                value={billingAddress.address1}
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />

            </div>
            <div className="column2">
              <input
                type="email"
                name="email"
                className="det-input-field"
                placeholder="Email Address"
                value={billingAddress.email}
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="text"
                name="company"
                className="det-input-field"
                placeholder="Company"
                value={billingAddress.company}
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <select
                name="country"
                placeholder="Country"
                value={billingAddress.country}
                required
                onChange={(e) => handleInputChange(e, "billing")}
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
                required
                onChange={(e) => handleInputChange(e, "billing")}
              />
            </div>
          </div>
        </div>
        <div className="twobuttons">
          <div className="b">
            <Link to="/time1">
              <button>Back To cart</button>
            </Link>
          </div>
          <div className="b">
            <button onClick={handleProceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>

      <div className="summary-container">
        <div className="summary-details">
          <div>
            <label>Subtotal:</label>
            <span>${subTotal}</span>
          </div>
          <div>
            <label>Shipping Tax:</label>
            <span>${tax}</span>
          </div>
          <div>
            <label>Discount:</label>
            <span>-</span>
          </div>
          <div>
            <label>Total:</label>
            <span>${totalAmount}</span>
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