import React from 'react';
import { useState } from 'react';
import './profileCart.css';
import SignUp from "./signUp";
import { FaUser } from "react-icons/fa";
import ShoppingCart from "../shopping/ShoppingCart";

function ProfileCart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleProfileButtonClick = (event) => {
        setIsModalOpen(true);
    }
    return (
        <div className="profile-container">
            <div className="button-container">
                <button className="round-button" onClick={handleProfileButtonClick}>
                    <FaUser className="button-icon" />
                </button>
                <button className="round-button">
                    <ShoppingCart />
                </button>
            </div>
            {isModalOpen && <SignUp onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default ProfileCart;