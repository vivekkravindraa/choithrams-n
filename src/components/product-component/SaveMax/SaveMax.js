import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { saveMaxProducts, saveMaxFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/SaveMax.scss';

export default function SaveMax() {
    const scrollToLeft = () => {
        document.getElementById('saveMax').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('saveMax').scrollLeft += 225;
    }

    return (
        <div className="saveMaxWrapper">
            <div className="saveMaxHeader">
                <div>
                    <div>
                        <p>Save Max</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {saveMaxFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="saveMaxContainer" id="saveMax">
                <Products products={saveMaxProducts} />
            </div>
            <div className="saveMaxArrows">
                <div className="saveMaxArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="saveMaxArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}