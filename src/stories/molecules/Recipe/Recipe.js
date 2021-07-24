import React from 'react';

import choithramsRecipeFavourite from '../../../assets/images/home-assets/choithramsRecipeFavourite/choithramsRecipeFavourite.png';
import choithramsRecipeAdd from '../../../assets/images/home-assets/choithramsRecipeAdd/choithramsRecipeAdd.png';
import choithramsRecipeSafety from '../../../assets/images/home-assets/choithramsRecipeSafety/choithramsRecipeSafety.png';
import choithramsRecipeServes from '../../../assets/images/home-assets/choithramsRecipeServes/choithramsRecipeServes.png';
import choithramsRecipeTime from '../../../assets/images/home-assets/choithramsRecipeTime/choithramsRecipeTime.png';

import './Recipe.scss';

export default function Product({
    recipeDate,
    recipeMonth,
    recipeImage,
    recipeCategory,
    recipeTitle,
    recipeDescription,
    recipePeople,
    recipeTime
}) {
    return (
        <div className="choithrams-recipe">
            <div>
                <img src={recipeImage} alt='noImage' />
                <div className="absoluteCalendar">
                    <p>{recipeDate}</p>
                    <p>{recipeMonth}</p>
                </div>
                <img src={choithramsRecipeFavourite} alt="noImage" />
                <img src={choithramsRecipeAdd} alt="noImage" />
            </div>
            <div>
                <p>{recipeCategory}</p>
                <p>{recipeTitle}</p>
                <p>{recipeDescription}</p>
                <button>View Recipe</button>
                <div>
                    <div>
                        <img src={choithramsRecipeSafety} alt="noImage" />
                    </div>
                    <div>
                        <img src={choithramsRecipeServes} alt="noImage" />
                        <p>{recipePeople}</p>
                    </div>
                    <div>
                        <img src={choithramsRecipeTime} alt="noImage" />
                        <p>{recipeTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};