import React, { useState, useEffect } from 'react';
import "./style.css";
import axios from 'axios';
//import imgi from "./shopping-cart.jpeg";
import b1 from "../../Assets/Images/1.jpg";
import b2 from "../../Assets/Images/2.jpg";
import b3 from "../../Assets/Images/3.jpg";
import e1 from "../../Assets/Images/4.jpg";
import e2 from "../../Assets/Images/5.jpg";
import e3 from "../../Assets/Images/6.jpg";
import f1 from "../../Assets/Images/7.jpg";
import f2 from "../../Assets/Images/8.jpg";
import f3 from "../../Assets/Images/9.jpg";
import g1 from "../../Assets/Images/10.jpg";
import g2 from "../../Assets/Images/11.jpg";
import g3 from "../../Assets/Images/12.jpg";
const getUserData = () => {
    const userDataString = localStorage.getItem('userData');
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
  console.log("cart"+token);
  const id=getId();


  const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      const fetchCartItems = async () => {
        try {
          const token = getToken(); // Get the latest token
          const id = getId();
  
          const headers = {
            Authorization: `Bearer ${token}`,
          };
  
          const url = `http://localhost:8080/carts/${id}`;
          const response = await fetch(url, { headers });
          console.log("cart"+token);
          if (response.ok) {
            const data = await response.json();
            setCartItems(data);
          } else {
            throw new Error("Request failed");
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchCartItems();
    }, [token]);

    const handleDeleteItem = async (productId) => {
        try {
            const token = getToken();
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const id=getId();
            await axios.delete(`http://localhost:8080/carts/${id}/${productId}`, config);
            console.log("delete"+token);
            setCartItems((prevCartItems) =>
              prevCartItems.filter((item) => item.id !== productId)
            );
          } catch (error) {
            console.log(error);
          }
        };
        
        const handleIncreaseQuantity = async (productId) => {
          try {
            const token = getToken();
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const id=getId();
            await axios.post(`http://localhost:8080/carts/${id}/${productId}/1`, {}, config);
            console.log("increase"+token);
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
        
        const handleDecreaseQuantity = async (productId) => {
          try {
            const token = getToken();
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const id=getId();
            await axios.delete(`http://localhost:8080/carts/delete/${id}/${productId}/1`, config);
            console.log("decrease"+token);
            setCartItems((prevCartItems) =>
              prevCartItems.map((item) => {
                if (item.id === productId) {
                  return { ...item, quantity: item.quantity - 1 };
                }
                return item;
              })
            );
          } catch (error) {
            console.log(error);
          }
        };
    const getImageSource = (imageName) => {
        switch (imageName) {
            case 'b1':
                return b1;
            case 'b2':
                return b2;
            case 'b3':
                return b3;
            case "e1":
                return e1;
            case "e2":
                return e2;
            case "e3":
                return e3;
            case "f1":
                return f1;
            case "f2":
                return f2;
            case "f3":
                return f3;
            case "g1":
                return g1;
            case "g2":
                return g2;
            case "g3":
                return g3;
            default:
                return ""; // Provide a default image source or handle the case where the image name is not found
        }
    };


    // export const totalCost = calculateTotal(itemsData);
    return (
        <div className="cart-items">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="cart-img-container">
                        <img src={getImageSource(item.image)} alt={item.name} />
                    </div>
                    <div className="item-details">
                        <p className='cart-text-head'>{item.name}</p>
                        <p className='cart-text-price'>Price: ${item.price}</p>
                        <div className="quantity">
                            <div className="line">
                                <button
                                    className="in-dec-bt"
                                    onClick={() =>
                                        handleDecreaseQuantity(item.id)
                                    }
                                    disabled={item.quantity === 1}
                                >
                                    -
                                </button>

                                <span className='cart-text-quantity'>{item.quantity}</span>
                                <button
                                    className="in-dec-bt"
                                    onClick={() =>
                                        handleIncreaseQuantity(item.id)
                                    }
                                    disabled={item.quantity === item.maxQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item-delete"
                        onClick={() => handleDeleteItem(item.id)}
                    >
                        X
                    </div>
                    {/* <button onClick={() => handleDeleteItem(item.id)}>Delete</button> */}

                </div>
            ))}
        </div>
    )
}

export default CartItems