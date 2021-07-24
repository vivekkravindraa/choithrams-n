import React, { useState } from 'react';

import RecipeVideos from '../../../building-blocks/organisms/RecipeVideos/RecipeVideos';
import { recipeVideos } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/RecipesVideos.scss';

export default function RecipesVideos() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('recipeVideos').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('recipeVideos').scrollLeft -= 100;
    }

    return (
        <div className="recipeVideosWrapper">
            <div className="recipeVideosHeader">
                <div>
                    <div>
                        <p>Recipes Videos</p>
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
            <div className="recipeVideosContainer" id="recipeVideos">
                <RecipeVideos recipeVideos={recipeVideos} />
            </div>
            <div className="recipeVideosArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="recipeVideosArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}
