import React, { useState } from 'react';

import choithramsRecipeFavourite from '../../../assets/images/home-assets/choithramsRecipeFavourite/choithramsRecipeFavourite.png';
import choithramsRecipeAdd from '../../../assets/images/home-assets/choithramsRecipeAdd/choithramsRecipeAdd.png';

export default function RecipeVideo({
    recipeVideoId,
    recipeVideo,
    recipeCategory,
    recipeTitle,
    recipeSteps,
    recipeTime,
}) {
    const [ id, setId ] = useState(0);

    return (
        <div className="recipeVideo" onMouseOver={() => setId(recipeVideoId)} onMouseLeave={() => setId(0)}>
            <div>
                <video controls>
                    <source src={recipeVideo} type="video/mp4" />
                </video>
                {recipeVideoId === id ? <img src={choithramsRecipeFavourite} alt="noImage" /> : <img src="" alt="" />}
                {recipeVideoId === id ? <img src={choithramsRecipeAdd} alt="noImage" /> : <img src="" alt="" />}
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
