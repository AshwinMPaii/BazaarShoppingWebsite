import React, { useState } from 'react';
import './HomeOffer.css';
import { Link } from 'react-router-dom';
import shoeImg1 from '../../Assets/Images/shoepic.PNG';
import shoeImg2 from '../../Assets/Images/shoe2.png';

function HomeOffer() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleRadioChange = (event) => {
        setActiveImageIndex(parseInt(event.target.value));
    };

    return (
        <div className='main-container' style={{ display: 'flex', flexDirection: 'column' }} >
            <div
                className="homeOfferContainer"
                style={{ display: 'flex', height: '60vh' }}
            >
                <div
                    className="homeOfferDescription"
                    style={{ display: 'flex', width: '50%' }}
                >
                    <div className="title-container">
                        <h2 className="title-head">50% OFF on Your First Shopping</h2>
                        <p className="title-body">
                            Buy All the latest trendy shoes you want at great a price
                            which was never offered before!!
                        </p>
                        <Link to='/productlist/3'>
                            <button type="button" className="home-btn">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="homeOfferImage" style={{ display: 'flex', width: '50%' }}>
                    <div style={{ display: 'block', margin: 'auto', height: '100%' }}>
                        {activeImageIndex === 0 ? (
                            <img src={shoeImg1} alt="shoe-img" style={{ maxWidth: '100%', height: '100%' }} />
                        ) : (
                            <img src={shoeImg2} alt="shoe-img" className="slide-in" style={{ maxWidth: '100%', height: '100%' }} />
                        )}
                    </div>
                </div>
            </div>
            <div className="radio-buttons-container" style={{ display: 'flex', height: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                <label>
                    <input
                        type="radio"
                        name="shoe-images"
                        value={0}
                        checked={activeImageIndex === 0}
                        onChange={handleRadioChange}
                    />
                </label>
                <label>
                    <input
                        type="radio"
                        name="shoe-images"
                        value={1}
                        checked={activeImageIndex === 1}
                        onChange={handleRadioChange}
                    />
                </label>
            </div>
        </div>
    );
}

export default HomeOffer;
