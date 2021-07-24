import React from 'react';
import choithramsSearch from '../../../assets/images/common-assets/choithramsSearch/choithramsSearch.png';

import '../../../assets/styles/recipe-styles/SearchRecipes.scss';

export default function SearchRecipes() {
    return (
        <div className="searchRecipes">
            <input type="text" placeholder="Search for recipes" />
            <button>SEARCH</button>
            <img src={choithramsSearch} alt="noImage" />
        </div>
    )
}
