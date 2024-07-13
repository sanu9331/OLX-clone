import React from 'react';
import './SellerCard.css';

const SellerCard = () => {
    return (
        <div className="seller-card">
            <div className="seller-info">
                <img
                    src="https://via.placeholder.com/50" // Replace with actual image source
                    alt="seller"
                    className="seller-image"
                />
                <div className="seller-name">
                    Fazal
                </div>
                <div className="arrow">
                    &gt;
                </div>
            </div>
            <button className="chat-button">
                Chat with seller
            </button>
            <div className="contact-info">
                <i className="phone-icon">&#128222;</i>
                <span className="phone-number">+917510577671</span>
            </div>
        </div>
    );
};

export default SellerCard;
