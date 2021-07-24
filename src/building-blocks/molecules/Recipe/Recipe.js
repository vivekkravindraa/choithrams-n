import React, { useState } from 'react';

import choithramsRecipeFavourite from '../../../assets/images/home-assets/choithramsRecipeFavourite/choithramsRecipeFavourite.png';
import choithramsRecipeAdd from '../../../assets/images/home-assets/choithramsRecipeAdd/choithramsRecipeAdd.png';
import choithramsRecipeSafety from '../../../assets/images/home-assets/choithramsRecipeSafety/choithramsRecipeSafety.png';
import choithramsRecipeServes from '../../../assets/images/home-assets/choithramsRecipeServes/choithramsRecipeServes.png';
import choithramsRecipeTime from '../../../assets/images/home-assets/choithramsRecipeTime/choithramsRecipeTime.png';

export default function Product({
    recipeId,
    recipeDate,
    recipeMonth,
    recipeImage,
    recipeCategory,
    recipeTitle,
    recipeDescription,
    recipePeople,
    recipeTime
}) {
    const [ id, setId ] = useState(0);

    return (
        <div className="recipe" onMouseOver={() => setId(recipeId)} onMouseLeave={() => setId(0)}>
            <div>
                <img src={recipeImage} alt='noImage' />
                <div className="absoluteCalendar">
                    <p>{recipeDate}</p>
                    <p>{recipeMonth}</p>
                </div>
                {recipeId === id ? <img src={choithramsRecipeFavourite} alt="noImage" /> : null}
                {recipeId === id ? <img src={choithramsRecipeAdd} alt="noImage" /> : null}
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
