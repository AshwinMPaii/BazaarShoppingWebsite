import React, { useState, useEffect } from "react";
import axios from "axios";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/carts/1");
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, []);

  const handleDeleteItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/carts/1/${productId}`);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== productId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncreaseQuantity = async (productId) => {
    try {
      await axios.put(`http://localhost:8080/carts/1/${productId}/1`, {});
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <div className="quantity">
            <button>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
          </div>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
