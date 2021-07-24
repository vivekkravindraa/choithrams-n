// Header component goes in this file..
import React, { useState } from 'react';

import choithramsLogo from '../../assets/images/common-assets/choithramsLogo/choithramsLogo.svg';
import Navigation from '../Navigation/Navigation';
import choithramsUserG from '../../assets/images/user-assets/choithramsUser/choithramsUserG.png';
import choithramsShoppingBag from '../../assets/images/common-assets/choithramsShoppingBag/choithramsShoppingBag.png';


import '../../assets/styles/common-styles/AboutUsHeader.scss';
// OR
// import '../../assets/styles/common-styles/Header.css';

export default function AboutUsHeader() {
    const [ showNavigation, setShowNavigation ] = useState(false);

    return (
        <div className="headerAboutUsContainer">
            {/* <h1>Header</h1> */}
            <div className="headerTop">
                <div className = 'logoSection'>
                    <img src={choithramsLogo} alt="noImage" />
                </div>
                <div className = 'aboutUsContentSection'>
                   <a href='#section1'>ABOUT US</a>
                   <a href='#section2'>FAQS</a>
                   <a href='#section3'>TERMS & CONDITIONS</a>
                   <a href='#section4'>PRIVACY POLICY</a>
                </div>
                <div className = 'profileAndCartSection'>
                    <div className = 'profileSec'>
                        <img src = {choithramsUserG} alt = 'noImage'/>
                        <p>PROFILE</p>
                    </div>
                    <div className = 'shoppingBagSec'>
                        <img src={choithramsShoppingBag} alt="noImage" />
                        <p>CART</p>
                        <div>
                            <p>20</p>
                        </div>
                    </div>                    
                </div>               
            </div>
           
            {!showNavigation ? null : <div className="absoluteNavigation">
                <Navigation handleReference={() => setShowNavigation(false)} />
            </div>}
        </div>
    )
}
