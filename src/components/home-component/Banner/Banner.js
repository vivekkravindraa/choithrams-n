// Banner component goes in this file..
import React from 'react';

import choithramsSmallBanner from '../../../assets/images/home-assets/choithramsSmallBanner/choithramsSmallBanner.png';

import '../../../assets/styles/home-styles/Banner.scss';
// OR
// import '../../../assets/styles/home-styles/Banner.css';

export default function Banner() {
    return (
        <div>
            <img src={choithramsSmallBanner} alt="noImage" height="210" width="100%" />
        </div>
    )
}
