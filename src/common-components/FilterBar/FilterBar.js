import React, { useState } from 'react';

import { filterBarOptions, wishlistFilterBarOptions } from '../../mocks/home-mocks/home-mocks';

import choithramsMapPin from '../../assets/images/home-assets/choithramsMapPin/choithramsMapPin.png';
import choithramsSearchG from '../../assets/images/home-assets/choithramsSearch/choithramsSearchG.png';
import choithramsCompass from '../../assets/images/home-assets/choithramsCompass/choithramsCompass.png';
import choithramsRanaBrand from '../../assets/images/home-assets/choithramsRanaBrand/choithramsRanaBrand.png';
import choithramsAddToCart from '../../assets/images/product-assets/choithramsAddToCart/choithramsAddToCart.png';

import '../../assets/styles/home-styles/FilterBar.scss';

export default function FilterBar() {
    const [ showLocationPopup, setShowLocationPopup ] = useState(false);

    const handleLocationPopup = () => {
        if(!showLocationPopup) {
            setShowLocationPopup(true);
        } else {
            setShowLocationPopup(false);
        }
    }

    return (
        <div className="filterBarContainer">
            <div className="filterBarLocation" onClick={() => handleLocationPopup()}>
                {window.location.pathname === "/wishlist" ?
                    <React.Fragment>
                        <img src={choithramsAddToCart} alt="noImage" />
                        <p>Add A List</p>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <img src={choithramsMapPin} alt="noImage" />
                        <p>Dubai - Dubai DTEC..</p>
                    </React.Fragment>}
                {window.location.pathname === "/essentials" ? <div style={{ marginRight: 16 }}>
                    <img src={choithramsRanaBrand} alt="noImage" height="40" width="40" />
                </div> : null}
                <div className="filterBarLocationPopup" style={{ display: 
                    !showLocationPopup ? 'none' : 'flex'
                }}>
                    <div>
                        <div>
                            <img src={choithramsSearchG} alt="noImage" />
                        </div>
                        <input type="text" placeholder="Enter your delivery address.." />
                    </div>
                    <div>
                        <div>
                            <img src={choithramsCompass} alt="noImage" />
                        </div>
                        <p>Use Current Location</p>
                    </div>
                </div>
            </div>
            <div className="filterBarOptions">
                {(window.location.pathname === "/wishlist" ? wishlistFilterBarOptions : filterBarOptions).map((option,index) => {
                    return (
                        <div key={index}>
                            <p>{option.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
