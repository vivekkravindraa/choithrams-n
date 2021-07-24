import React from 'react';

import choithramsRanaBanner from '../../../assets/images/essential-assets/choithramsRanaBanner/choithramsRanaBanner.png';

import '../../../assets/styles/essential-styles/EssentialBanner.scss';

export default function EssentialBanner() {
    return (
        <div className="essentialBannerContainer">
            <div>
                <p>WIN A ONCE IN A LIFETIME EXPERIENCE !</p>
                <p>Dine with La Famiglia Rana In Verona</p>
                <button>Discover More</button>
            </div>
            <div>
                <img src={choithramsRanaBanner} alt="noImage" />
            </div>
        </div>
    )
}
