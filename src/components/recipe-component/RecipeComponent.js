import React from 'react';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import FilterBar from '../../common-components/FilterBar/FilterBar';
import LatestRecipes from './LatestRecipes/LatestRecipes';
import EditorsChoice from './EditorsChoice/EditorsChoice';
import EasyToCook from './EasyToCook/EasyToCook';
import Cuisine from './Cuisine/Cuisine';
import BestOfChoithrams from './BestOfChoithrams/BestOfChoithrams';
import FoodStyle from '../home-component/FoodStyle/FoodStyle';
import CookingGoals from './CookingGoals/CookingGoals';
import RecipesVideos from './RecipesVideos/RecipesVideos';
import Course from './Course/Course';
import Footer from '../../common-components/Footer/Footer';

export default function RecipeComponent() {
    return (
        <div>
            <Header />
            <Slider />
            <FilterBar />
            <LatestRecipes />
            <EditorsChoice />
            <EasyToCook />
            <Cuisine />
            <BestOfChoithrams />
            <FoodStyle />
            <CookingGoals />
            <RecipesVideos />
            <Course />
            <Footer />
        </div>
    )
}
