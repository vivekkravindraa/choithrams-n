import React from 'react';
import RecipeVideo from '../../molecules/RecipeVideo/RecipeVideo';

export default function RecipeVideos({ recipeVideos }) {
    return recipeVideos.map((recipe, index) => {
        return (
            <RecipeVideo
                key={index}
                recipeVideoId={recipe.id}
                recipeVideo={recipe.recipeVideo}
                recipeCategory={recipe.recipeCategory}
                recipeTitle={recipe.recipeTitle}
                recipeSteps={recipe.recipeSteps}
                recipeTime={recipe.recipeTime}
            />
        )
    })
}
