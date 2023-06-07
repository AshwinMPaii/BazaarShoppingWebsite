import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./payment.css";

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


function Payment() {
  const [totalAmount, setTotalAmount] = useState(null);
  const [tax, setTax] = useState(null);
  const [subTotal, setSubTotal] = useState(null);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const token = getToken(); // Get the latest token
        const id = getId();

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const url = `http://localhost:8080/carts/totalPrice/${id}`;
        const response = await fetch(url, { headers });
        console.log("cart" + token);
        if (response.ok) {
          const data = await response.json();
          setTotalAmount(data["Total Amount"]);
          setTax(data["tax"]);
          setSubTotal(data["Sub-Total"]);
        } else {
          throw new Error("Request failed");
        }
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

  const [paymentOption, setPaymentOption] = useState("payment");
  let history = useNavigate();

  const handleOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  
 const handleSubmit = async (event) => {
   event.preventDefault();

   try {
     const userId = getId(); // Replace with the actual user ID
     const token = getToken(); // Get the latest token
      // const headers = {
      //   Authorization: `Bearer ${token}`,
      // };

      // const url = `http://localhost:8080/orders/placeOrder/${userId}`;
      // const response = await fetch(url,{ headers });
     const headers = {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     };

     const url = `http://localhost:8080/orders/placeOrder/${userId}`;
     const response = await fetch(url, {
       method: "POST",
       headers,
       body: JSON.stringify({
         paymentOption: paymentOption,
       }),
     });

     if (response.ok) {
       alert("Order Placed");
       history("/");
     } else {
       alert("Failed to place order");
       // history.push("/error");
     }
   } catch (error) {
     console.error(error);
     alert("An error occurred while placing the order");
     // history.push("/error");
   }
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
            <span>${subTotal}</span>
          </div>
          <div>
            <label>Shipping Tax:</label>
            <span>-</span>
          </div>
          <div>
            <label>Tax:</label>
            <span>${tax}</span>
          </div>
          <div>
            <label>Discount:</label>
            <span>-</span>
          </div>
        </div>
        <div className="pay-summary-total">
          <label>Total:</label>
          <span style={{ fontSize: "24px" }}>${totalAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
