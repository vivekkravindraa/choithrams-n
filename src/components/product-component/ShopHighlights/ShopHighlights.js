import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { shopHighlightsProducts, shopHighlightsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/ShopHighlights.scss';

export default function ShopHighlights() {
    const scrollToLeft = () => {
        document.getElementById('shopHighlights').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('shopHighlights').scrollLeft += 225;
    }

    return (
        <div className="shopHighlightsWrapper">
            <div className="shopHighlightsHeader">
                <div>
                    <div>
                        <p>Shop Highlights</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {shopHighlightsFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="shopHighlightsContainer" id="shopHighlights">
                <Products products={shopHighlightsProducts} />
            </div>
            <div className="shopHighlightsArrows">
                <div className="shopHighlightsArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="shopHighlightsArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}
