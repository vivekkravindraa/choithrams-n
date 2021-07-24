import React, { useState } from 'react';

import Recipes from '../../../building-blocks/organisms/Recipes/Recipes';
import { editorsChoice } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/EditorsChoice.scss';

export default function EditorsChoice() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('editorsChoice').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('editorsChoice').scrollLeft -= 100;
    }

    return (
        <div className="editorsChoiceContainer">
            <div className="editorsChoiceHeader">
                <div>
                    <div>
                        <p>Editor's Choice</p>
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
            <div className="editorsChoiceItems" id="editorsChoice">
                <Recipes recipes={editorsChoice} /> 
            </div>
            <div className="editorsChoiceArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="editorsChoiceArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}