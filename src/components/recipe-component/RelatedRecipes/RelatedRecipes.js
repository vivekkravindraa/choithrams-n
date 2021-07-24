import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import Recipes from '../../../building-blocks/organisms/Recipes/Recipes';
import { relatedRecipes } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/RelatedRecipes.scss';

export default function RelatedRecipes() {

    const history = useHistory();
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('relatedRecipes').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('relatedRecipes').scrollLeft -= 100;
    }

    return (
        <div className="relatedRecipesContainer">
            <div className="relatedRecipesHeader">
                <div>
                    <div>
                        <p>Related Recipes</p>
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

            <div className="relatedRecipesItems" id="relatedRecipes" onClick = {()=> history.push('/product-description')}>
                <Recipes recipes={relatedRecipes} /> 
            </div>
            <div className="relatedRecipesArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="relatedRecipesArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}
