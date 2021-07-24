import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { bestDealsProducts, bestDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/BestDeals.scss';

export default function BestDeals() {
    const scrollToLeft = () => {
        document.getElementById('bestDeals').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('bestDeals').scrollLeft += 225;
    }

    return (
        <div className="bestDealsWrapper">
            <div className="bestDealsHeader">
                <div>
                    <div>
                        <p>Best Deals</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {bestDealsFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bestDealsContainer" id="bestDeals">
                <Products products={bestDealsProducts} />
            </div>
            <div className="bestDealsArrows">
                <div className="bestDealsArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="bestDealsArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}
