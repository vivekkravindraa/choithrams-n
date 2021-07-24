import React, { useState } from 'react';

import Recipes from '../../../building-blocks/organisms/Recipes/Recipes';
import { easyToCook } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/EasyToCook.scss';

export default function EasyToCook() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('easyToCook').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('easyToCook').scrollLeft -= 100;
    }

    return (
        <div className="easyToCookContainer">
            <div className="easyToCookHeader">
                <div>
                    <div>
                        <p>Easy To Cook</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {dailyDealsFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="easyToCookItems" id="easyToCook">
                <Recipes recipes={easyToCook} /> 
            </div>
            <div className="easyToCookArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="easyToCookArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}