import React, { useState } from 'react';

import { foodStyleItems } from '../../../mocks/home-mocks/home-mocks';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/home-styles/FoodStyle.scss';

export default function FoodStyle() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('foodStyle').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('foodStyle').scrollLeft -= 100;
    }

    return (
        <div className="foodStyleContainer">
            <div className="foodStyleHeader">
                <div>
                    <p>Food Style</p>
                </div>
            </div>
            <div className="foodStyleItems" id="foodStyle">
                {foodStyleItems.map((food, index) => {
                    return (
                        <div key={index} style={{
                            backgroundImage: `url(${food.image})`,
                        }}> 
                            <p>{food.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="foodStyleArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="foodStyleArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}
