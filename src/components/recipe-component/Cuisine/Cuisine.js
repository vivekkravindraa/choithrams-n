import React, { useState } from 'react';

import { cuisineItems } from '../../../mocks/recipe-mocks/recipe-mocks';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/Cuisine.scss';

export default function Cuisine() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('cuisine').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('cuisine').scrollLeft -= 100;
    }

    return (
        <div className="cuisineContainer">
            <div className="cuisineHeader">
                <div>
                    <p>Cuisine</p>
                </div>
            </div>
            <div className="cuisineItems" id="cuisine">
                {cuisineItems.map((offer, index) => {
                    return (
                        <div key={index}>
                            <img src={offer.image} alt="noImage" />
                        </div>
                    )
                })}
            </div>
            <div className="cuisineArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="cuisineArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}