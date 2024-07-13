import React, { useState } from 'react';
import './MyAds.css';
import { SlOptionsVertical } from "react-icons/sl";

const MyAds = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="my-ads">
            <div className="tabs">
                <span className="tab active">ADS</span>
                <span className="tab">FAVOURITES</span>
            </div>
            <div className="filter-bar">
                <input type="text" placeholder="Search by Ad Title" />
                <div className="filter-buttons">
                    <button className="active">View all (1)</button>
                    <button>Active Ads (0)</button>
                    <button>Inactive Ads (0)</button>
                    <button>Pending Ads (1)</button>
                    <button>Moderated Ads (0)</button>
                </div>
            </div>
            <div className="ad-card">
                <div className="ad-header">
                    <div className="ad-date">FROM: AUG 3, 21</div>
                </div>
                <div className="ad-details">
                    <img src="https://drop.ndtv.com/TECH/product_database/images/913201715733AM_635_iphone_8.jpeg?downsize=*:360" alt="Ad" />
                    <div className="ad-info">
                        <h3>Hero maestro</h3>
                        <p>2015 - 17000</p>
                        <p>₹ 49,000</p>
                    </div>
                    <div className="ad-actions">
                        <span onClick={toggleOptions} className="options-button"><SlOptionsVertical /></span>
                        {showOptions && (
                            <div className="options-menu">
                                <button>Edit</button>
                                <button>Remove</button>
                            </div>
                        )}
                        {/* <button>Post now</button> */}
                    </div>
                </div>
                <div className="ad-stats">
                    <span>Views: -</span>
                    <span>Likes: -</span>
                </div>
            </div>
        </div >
    );
};

export default MyAds;
