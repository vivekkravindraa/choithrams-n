import React, { useState } from 'react';

import RecipeVideos from '../../../building-blocks/organisms/RecipeVideos/RecipeVideos';
import { recipeVideos } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/RecipesVideos.scss';

export default function FavouriteRecipesVideos() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('favouriteRecipesVideos').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('favouriteRecipesVideos').scrollLeft -= 100;
    }

    return (
        <div className="recipeVideosWrapper">
            <div className="recipeVideosHeader">
                <div>
                    <div>
                        <p>Favourite Recipes Videos</p>
                    </div>
                    <div style={{ display: 'none' }}>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div style={{ display: 'none' }}>
                    {dailyDealsFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="recipeVideosContainer" id="favouriteRecipesVideos">
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
