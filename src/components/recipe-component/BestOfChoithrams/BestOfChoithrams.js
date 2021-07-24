import React, { useState } from 'react';

import Recipes from '../../../building-blocks/organisms/Recipes/Recipes';
import { bestOfChoithrams } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/BestOfChoithrams.scss';

export default function BestOfChoithrams() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('bestOfChoithrams').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('bestOfChoithrams').scrollLeft -= 100;
    }
    
    return (
        <div className="bestOfChoithramsContainer">
            <div className="bestOfChoithramsHeader">
                <div>
                    <div>
                        <p>Best Of Choithrams</p>
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
            <div className="bestOfChoithramsItems" id="bestOfChoithrams">
                <Recipes recipes={bestOfChoithrams} /> 
            </div>
            <div className="bestOfChoithramsArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="bestOfChoithramsArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}