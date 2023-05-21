import { useState } from "react";
import { Link } from "react-router-dom";
import "./payment.css";

function Payment() {
  const [paymentOption, setPaymentOption] = useState("payment");

  const handleOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Order Placed");
  };

  return (
    <div className="payment-main">
      <div className="payment-page">
        {/* <div className="payment-container"> */}
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
                <input type="text" classname="expdate" placeholder="Exp Date" />
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
        {/* </div> */}
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
        <div className='pay-summary-total'>
          <label>Total:</label>
          <span style={{ fontSize: '24px' }}>$140</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
