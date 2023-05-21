import React, { useState } from 'react';
import "./style.css";
import imgi from "./shopping-cart.jpeg";


export const itemsData = [

    { id: 1, name: "Item 1", price: 10, quantity: 5, maxquantity: 5 },
    { id: 2, name: "Item 2", price: 15, quantity: 2, maxquantity: 7 },
    { id: 3, name: "Item 1", price: 10, quantity: 5, maxquantity: 5 },
    { id: 4, name: "Item 2", price: 15, quantity: 2, maxquantity: 7 },
    { id: 5, name: "Item 1", price: 10, quantity: 5, maxquantity: 5 },

]
export const totalCost = calculateTotal(itemsData);
function calculateTotal(itemsData) {
    return itemsData.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const CartItems = () => {
    const [items, setItems] = useState(itemsData)

    const handleDeleteItem = (itemId) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    const handleQuantityChange = (itemId, newQuantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? {
                        ...item,
                        quantity: Math.min(Math.max(newQuantity, 1), item.maxquantity),
                    }
                    : item
            )
        );
    };



    // export const totalCost = calculateTotal(itemsData);
    return (
        <div className="cart-items">
            {items.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="cart-img-container">
                        <img src={imgi} alt={item.name} />
                    </div>
                    <div className="item-details">
                        <p className='cart-text-head'>{item.name}</p>
                        <p className='cart-text-price'>Price: ${item.price}</p>
                        <div className="quantity">
                            <div className="line">
                                <button
                                    className="in-dec-bt"
                                    onClick={() =>
                                        handleQuantityChange(item.id, item.quantity - 1)
                                    }
                                    disabled={item.quantity === 1}
                                >
                                    -
                                </button>

                                <span className='cart-text-quantity'>{item.quantity}</span>
                                <button
                                    className="in-dec-bt"
                                    onClick={() =>
                                        handleQuantityChange(item.id, item.quantity + 1)
                                    }
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
                </div>
            ))}
        </div>
    )
}

export default CartItems