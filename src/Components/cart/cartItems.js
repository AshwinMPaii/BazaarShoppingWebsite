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
            await axios.post(`http://localhost:8080/carts/1/${productId}/1`, {});
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
            await axios.delete(`http://localhost:8080/carts/delete/1/${productId}/1`, {});
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
