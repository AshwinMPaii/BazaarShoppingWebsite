import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./payment.css";

function Payment() {
  const [paymentOption, setPaymentOption] = useState("payment");
  let history = useNavigate();

  const handleOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/orders/placeOrder/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentOption: paymentOption,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Order Placed");
          history("/");
        } else {
          alert("Failed to place order");
          // history.push("/error");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while placing the order");
        // history.push("/error");
      });
  };

  return (
    <div className="payment-main">
      <div className="payment-page">
        <div className="payment-options">
          <div className="radio1">
            <label>
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={paymentOption === "credit-card"}
                onChange={handleOptionChange}
              />
              Pay with Credit Card
            </label>
          </div>
          <div className="credit-card-form">
            {paymentOption === "credit-card" && (
              <form onSubmit={handleSubmit} className="payment-form">
                <input
                  type="text"
                  className="cardnumber"
                  placeholder="Card number"
                />
                <input type="text" className="expdate" placeholder="Exp Date" />
                <div className="form-row">
                  <input
                    type="text"
                    className="name"
                    placeholder="Name on Card"
                  />
                  <input
                    type="text"
                    className="card"
                    placeholder="Name on Card"
                  />
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            )}
          </div>
          <div className="radio2">
            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentOption === "paypal"}
                onChange={handleOptionChange}
              />
              Pay with PayPal
            </label>
          </div>
          <div className="radio3">
            <label>
              <input
                type="radio"
                name="payment"
                value="payment"
                checked={paymentOption === "payment"}
                onChange={handleOptionChange}
              />
              Cash on delivery
            </label>
          </div>
        </div>
        <div className="pay-button-container">
          <Link to="/time2" className="pay-link">
            Back to Checkout Details
          </Link>
          <button className="pay-button1" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="pay-summary-container">
        <div className="pay-summary">
          <div>
            <label>Subtotal:</label>
            <span>$100</span>
          </div>
          <div>
            <label>Shipping Tax:</label>
            <span>-</span>
          </div>
          <div>
            <label>Tax:</label>
            <span>$40</span>
          </div>
          <div>
            <label>Discount:</label>
            <span>-</span>
          </div>
        </div>
        <div className="pay-summary-total">
          <label>Total:</label>
          <span style={{ fontSize: "24px" }}>$140</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
