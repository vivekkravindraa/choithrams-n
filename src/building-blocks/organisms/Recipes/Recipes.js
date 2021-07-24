import React from 'react';
import Recipe from '../../molecules/Recipe/Recipe';

export default function Recipes({ recipes }) {
    return recipes.map((recipe, index) => {
        return (
            <Recipe
                key={index}
                recipeId={recipe.id}
                recipeDate={recipe.recipeDate}
                recipeMonth={recipe.recipeMonth}
                recipeImage={recipe.recipeImage}
                recipeCategory={recipe.recipeCategory}
                recipeTitle={recipe.recipeTitle}
                recipeDescription={recipe.recipeDescription}
                recipePeople={recipe.recipePeople}
                recipeTime={recipe.recipeTime}
            />
        )
    })
}
