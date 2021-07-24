import React from 'react';

import { topCategoriesItems } from '../../../mocks/home-mocks/home-mocks';

import '../../../assets/styles/home-styles/TopCategories.scss';

export default function TopCategories() {
    return (
        <div className="topCategoriesContainer">
            <div className="topCategoriesHeader">
                <div>
                    <p>Top Categories</p>
                </div>
            </div>
            <div className="topCategoriesItems">
                {topCategoriesItems.map((category, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img src={category.image} alt="noImage" />
                            </div>
                            <div>
                                <p>{category.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
