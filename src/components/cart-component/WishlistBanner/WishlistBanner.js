import React from 'react';

import choithramsWishlistBanner from '../../../assets/images/cart-assets/choithramsWishlistBanner/choithramsWishlistBanner.png';

import '../../../assets/styles/home-styles/Banner.scss';
// OR
// import '../../../assets/styles/home-styles/Banner.css';

export default function WishlistBanner() {
    return (
        <div>
            <img src={choithramsWishlistBanner} alt="noImage" height="350" width="100%" />
        </div>
    )
}
