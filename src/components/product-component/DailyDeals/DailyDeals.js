import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { dailyDealsProducts, dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/DailyDeals.scss';

export default function DailyDeals() {
    const scrollToLeft = () => {
        document.getElementById('dailyDeals').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('dailyDeals').scrollLeft += 225;
    }

    return (
        <div className="dailyDealsWrapper">
            <div className="dailyDealsHeader">
                <div>
                    <div>
                        <p>Daily Deals</p>
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
            <div className="dailyDealsContainer" id="dailyDeals">
                <Products products={dailyDealsProducts} />
            </div>
            <div className="dailyDealsArrows">
                <div className="dailyDealsArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="dailyDealsArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}
