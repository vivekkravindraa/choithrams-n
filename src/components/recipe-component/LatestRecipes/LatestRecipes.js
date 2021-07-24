import React, { useState } from 'react';

import Recipes from '../../../building-blocks/organisms/Recipes/Recipes';
import { latestRecipes } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/LatestRecipes.scss';

export default function LatestRecipes() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('latestRecipes').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('latestRecipes').scrollLeft -= 100;
    }

    return (
        <div className="latestRecipesContainer">
            <div className="latestRecipesHeader">
                <div>
                    <div>
                        <p>Latest Recipes</p>
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
            <div className="latestRecipesItems" id="latestRecipes">
                <Recipes recipes={latestRecipes} /> 
            </div>
            <div className="latestRecipesArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="latestRecipesArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}