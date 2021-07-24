import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { topSellerProducts, topSellerFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/TopSeller.scss';

export default function TopSeller() {
    const scrollToLeft = () => {
        document.getElementById('topSeller').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('topSeller').scrollLeft += 225;
    }

    return (
        <div className="topSellerWrapper">
            <div className="topSellerHeader">
                <div>
                    <div>
                        <p>Top Seller</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {topSellerFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="topSellerContainer" id="topSeller">
                <Products products={topSellerProducts} />
            </div>
            <div className="topSellerArrows">
                <div className="topSellerArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="topSellerArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}