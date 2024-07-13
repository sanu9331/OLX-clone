import React, { useContext } from 'react';
import './SellerCard.css';
import { UserContext } from '../../store/UserContext';

const SellerCard = () => {
    const { user } = useContext(UserContext);
    console.log('user===', user)
    return (
        <div className="seller-card">
            <div className="seller-info">
                <img
                    src="https://via.placeholder.com/50" // Replace with actual image source
                    alt="seller"
                    className="seller-image"
                />
                <div className="seller-name">
                    {user.username}
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
                <span className="phone-number">{user.phone}</span>
            </div>
        </div>
    );
};

export default SellerCard;
