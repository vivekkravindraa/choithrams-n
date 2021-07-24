import React from 'react';

import choithramsRecipeFavourite from '../../../assets/images/home-assets/choithramsRecipeFavourite/choithramsRecipeFavourite.png';
import choithramsRecipeAdd from '../../../assets/images/home-assets/choithramsRecipeAdd/choithramsRecipeAdd.png';

import './RecipeVideo.scss';

export default function RecipeVideo({
    recipeVideo,
    recipeCategory,
    recipeTitle,
    recipeSteps,
    recipeTime,
}) {
    return (
        <div className="choithrams-recipeVideo">
            <div>
                <video controls>
                    <source src={recipeVideo} type="video/mp4" />
                </video>
                <img src={choithramsRecipeFavourite} alt="noImage" />
                <img src={choithramsRecipeAdd} alt="noImage" />
                <p>{recipeSteps}</p>
                <p>{recipeTime}</p>
            </div>
            <div>
                <p>{recipeCategory}</p>
                <p>{recipeTitle}</p>
            </div>
        </div>
    )
};
