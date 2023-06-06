import React, { useState, useEffect } from "react";
import "./det.css";
import { Link, useNavigate} from "react-router-dom";

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
    const intervalId = setInterval(fetchTotalAmount, 5000);

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

  // const handleAddToCart = async (productId) => {
  //   try {
  //     // Make an API request to add the product to the cart
  //     await fetch(`http://localhost:8080/carts/addToCart/${productId}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     // Redirect to the desired page (time1)
  //     history("/time1");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleProceedToPayment = async () => {
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
            className="det-container1-check"
            type="checkbox"
            checked={isSameAsShipping}
            onChange={handleCheckboxChange}
          />
          <span className="det-container1-check">Same as Shipping</span>
          <div className="input-group1">
            <div className="column1">
              <input
                type="text"
                name="fullName"
                className="det-input-field"
                placeholder="Full Name:"
                value={billingAddress.fullName}
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="text"
                name="phoneNumber"
                className="det-input-field"
                placeholder="Phone Number"
                value={billingAddress.phoneNumber}
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="text"
                name="zipCode"
                className="det-input-field"
                placeholder="Zip Code"
                value={billingAddress.zipCode}
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="tex"
                name="address1"
                className="det-input-field"
                placeholder="Address 1"
                value={billingAddress.address1}
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
                onChange={(e) => handleInputChange(e, "billing")}
              />

              <input
                type="text"
                name="company"
                className="det-input-field"
                placeholder="Company"
                value={billingAddress.company}
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <select
                name="country"
                placeholder="Country"
                value={billingAddress.country}
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
        <div className="summary">
          <h3>Order Summary</h3>
          <div>
            <span>Sub-Total:</span>
            <span>{subTotal}</span>
          </div>
          <div>
            <span>Tax:</span>
            <span>{tax}</span>
          </div>
          <div>
            <span>Total Amount:</span>
            <span>{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
