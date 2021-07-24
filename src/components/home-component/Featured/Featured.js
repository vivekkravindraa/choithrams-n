import React, { useState } from 'react';

import { featuredItems } from '../../../mocks/home-mocks/home-mocks';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/home-styles/Featured.scss';

export default function Featured() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('featured').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('featured').scrollLeft -= 100;
    }

    return (
        <div className="featuredContainer">
            <div className="featuredHeader">
                <div>
                    <p>Featured</p>
                    <p>Epic deals from your favourite category</p>
                </div>
            </div>
            <div className="featuredItems" id="featured">
                {featuredItems.map((feature, index) => {
                    return (
                        <div key={index}>
                            <img src={feature.image} alt="noImage" />
                        </div>
                    )
                })}
            </div>
            <div className="featuredArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="featuredArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}
