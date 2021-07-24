import React, { useState } from 'react';

import { offerZoneItems } from '../../../mocks/home-mocks/home-mocks';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/home-styles/OfferZone.scss';

export default function OfferZone() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('offerZone').scrollLeft += 275;
    }

    const scrollToLeft = () => {
        document.getElementById('offerZone').scrollLeft -= 275;
    }

    return (
        <div className="offerZoneContainer">
            <div className="offerZoneHeader">
                <div>
                    <p>Offer Zone</p>
                </div>
            </div>
            <div className="offerZoneItems" id="offerZone">
                {offerZoneItems.map((offer, index) => {
                    return (
                        <div key={index}>
                            <img src={offer.image} alt="noImage" />
                        </div>
                    )
                })}
            </div>
            <div className="offerZoneArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="offerZoneArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}
