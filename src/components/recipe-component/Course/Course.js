import React, { useState } from 'react';

import Recipes from '../../../building-blocks/organisms/Recipes/Recipes';
import { course } from '../../../mocks/recipe-mocks/recipe-mocks';
import { dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';
import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';

import '../../../assets/styles/recipe-styles/Course.scss';

export default function Course() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('course').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('course').scrollLeft -= 100;
    }

    return (
        <div className="courseContainer">
            <div className="courseHeader">
                <div>
                    <div>
                        <p>Course</p>
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
            <div className="courseItems" id="course">
                <Recipes recipes={course} /> 
            </div>
            <div className="courseArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
            >
                <img src={choithramsArrowLeftB} alt="noImage" />
            </div>
            <div className="courseArrowRight" onClick={() => scrollToRight()}>
                <img src={choithramsArrowRightB} alt="noImage" />
            </div>
        </div>
    )
}