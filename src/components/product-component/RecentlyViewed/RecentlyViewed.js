import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { recentlyViewedProducts, dailyDealsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/RecentlyViewed.scss';

export default function RecentlyViewed() {
    const scrollToLeft = () => {
        document.getElementById('recentlyViewed').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('recentlyViewed').scrollLeft += 225;
    }

    return (
        <div className="recentlyViewedWrapper">
            <div className="recentlyViewedHeader">
                <div>
                    <div>
                        <p>Recently Viewed</p>
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
            <div className="recentlyViewedContainer" id="recentlyViewed">
                <Products products={recentlyViewedProducts} />
            </div>
            <div className="recentlyViewedArrows">
                <div className="recentlyViewedArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="recentlyViewedArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}
