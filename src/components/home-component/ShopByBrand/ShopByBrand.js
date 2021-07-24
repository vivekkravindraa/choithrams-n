import React, { useState } from 'react';

import { shopByBrandItems } from '../../../mocks/home-mocks/home-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/home-styles/ShopByBrand.scss';

export default function ShopByBrand() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('shopByBrand').scrollLeft += 275;
    }

    const scrollToLeft = () => {
        document.getElementById('shopByBrand').scrollLeft -= 275;
    }

    return (
        <div className="shopByBrandContainer">
            <div className="shopByBrandHeader">
                <div>
                    <p>Shop By Brand</p>
                </div>
                <div>
                    <p>View All</p>
                    <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                </div>
            </div>
            <div className="shopByBrandItems" id="shopByBrand">
                {shopByBrandItems.map((category, index) => {
                    return (
                        <div key={index} style={{
                            backgroundImage: `url(${category.image})`,
                        }}>
                        </div>
                    )
                })}
            </div>
            <div className="shopByBrandArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="shopByBrandArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}