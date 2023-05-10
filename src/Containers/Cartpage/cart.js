import React, { useState } from "react";
import "./style.css"

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 1 },
    { id: 2, name: "Item 2", price: 15, quantity: 2 },
  ]);

  const [comments, setComments] = useState("");
  const [voucher, setVoucher] = useState("");
  const [shippingDetails, setShippingDetails] = useState("");

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleVoucherChange = (e) => {
    setVoucher(e.target.value);
  };

  const handleShippingDetailsChange = (e) => {
    setShippingDetails(e.target.value);
  };

  const handleCalculateShipping = () => {
    // Perform shipping calculation logic here
    console.log("Calculate shipping");
  };

  const handleCheckout = () => {
    // Perform checkout logic here
    console.log("Checkout now");
  };

  return (
    <div className="cart-page">
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={`images/${item.id}.jpg`} alt={item.name} />
            <div className="item-details">
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-form">
        <textarea
          placeholder="Additional comments"
          value={comments}
          onChange={handleCommentChange}
        />
        <textarea
          placeholder="Voucher"
          value={voucher}
          onChange={handleVoucherChange}
        />
        <button>Apply Voucher</button>
        <input
          type="text"
          placeholder="Shipping details"
          value={shippingDetails}
          onChange={handleShippingDetailsChange}
        />
        <button onClick={handleCalculateShipping}>Calculate Shipping</button>
        <button onClick={handleCheckout}>Check Out Now</button>
      </div>
    </div>
  );
};

export default Cart;
