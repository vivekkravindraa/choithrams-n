import React from 'react';

import choithramsLearnNewSkills from '../../../assets/images/recipe-assets/choithramsLearnNewSkills/choithramsLearnNewSkills.png';
import choithramsTryNewCuisines from '../../../assets/images/recipe-assets/choithramsTryNewCuisines/choithramsTryNewCuisines.png';
import choithramsSaveTimes from '../../../assets/images/recipe-assets/choithramsSaveTimes/choithramsSaveTimes.png';
import choithramsSaveMoney from '../../../assets/images/recipe-assets/choithramsSaveMoney/choithramsSaveMoney.png';
import choithramsEatHealthy from '../../../assets/images/recipe-assets/choithramsEatHealthy/choithramsEatHealthy.png';

import '../../../assets/styles/recipe-styles/CookingGoals.scss';

export default function CookingGoals() {    
    return (
        <div className="cookingGoals">
            <div>
                <p>What Are Your Cooking Goals?</p>
                <p>Personalize Your Experience</p>
            </div>
            <div>
                <div>
                    <div>
                        <img src={choithramsLearnNewSkills} alt="noImage" />
                    </div>
                    <p>Learn New Skills</p>
                </div>
                <div>
                    <div>
                        <img src={choithramsTryNewCuisines} alt="noImage" />
                    </div>
                    <p>Try New Cuisines</p>
                </div>
                <div>
                    <div>
                        <img src={choithramsSaveTimes} alt="noImage" />
                    </div>
                    <p>Save Times</p>
                </div>
                <div>
                    <div>
                        <img src={choithramsSaveMoney} alt="noImage" />
                    </div>
                    <p>Save Money</p>
                </div>
                <div>
                    <div>
                        <img src={choithramsEatHealthy} alt="noImage" />
                    </div>
                    <p>Eat Healthy</p>
                </div>
            </div>
            <div>
                <button>Your Favourite List</button>
                <button>Previous Ordered</button>
            </div>
        </div>
    )
}
