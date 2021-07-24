import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { buyAndGetFreeProducts, buyAndGetFreeFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/BuyAndGetFree.scss';

export default function BuyAndGetFree() {
    const scrollToLeft = () => {
        document.getElementById('buyAndGetFree').scrollLeft -= 225;
    }

    const scrollToRight = () => {
        document.getElementById('buyAndGetFree').scrollLeft += 225;
    }

    return (
        <div className="buyAndGetFreeWrapper">
            <div className="buyAndGetFreeHeader">
                <div>
                    <div>
                        <p>Buy And Get Free</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {buyAndGetFreeFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="buyAndGetFreeContainer" id="buyAndGetFree">
                <Products products={buyAndGetFreeProducts} />
            </div>
            <div className="buyAndGetFreeArrows">
                <div className="buyAndGetFreeArrowPrevious" onClick={() => scrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="buyAndGetFreeArrowNext" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}