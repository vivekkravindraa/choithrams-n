import React from 'react';

import Products from '../../../building-blocks/organisms/Products/Products';
import { brandProducts, brandProductsFilters } from '../../../mocks/product-mocks/product-mocks';
import choithramsArrowRightG from '../../../assets/images/common-assets/choithramsArrowRight/choithramsArrowRightG.png';

import choithramsArrowPrevious from '../../../assets/images/product-assets/choithramsArrowPrevious/choithramsArrowPrevious.png';
import choithramsArrowNext from '../../../assets/images/product-assets/choithramsArrowNext/choithramsArrowNext.png';

import '../../../assets/styles/product-styles/BrandProducts.scss';

export default function BrandProducts() {
    const firstScrollToLeft = () => {
        document.getElementById('brandProductsFirst').scrollLeft -= 225;
    }

    const firstScrollToRight = () => {
        document.getElementById('brandProductsFirst').scrollLeft += 225;
    }

    const secondScrollToLeft = () => {
        document.getElementById('brandProductsSecond').scrollLeft -= 225;
    }

    const secondScrollToRight = () => {
        document.getElementById('brandProductsSecond').scrollLeft += 225;
    }

    const thirdScrollToLeft = () => {
        document.getElementById('brandProductsThird').scrollLeft -= 225;
    }

    const thirdScrollToRight = () => {
        document.getElementById('brandProductsThird').scrollLeft += 225;
    }

    return (
        <div className="brandProductsWrapper">
            <div className="brandProductsHeader">
                <div>
                    <div>
                        <p>Brand Products</p>
                    </div>
                    <div>
                        <p>View All</p>
                        <img src={choithramsArrowRightG} alt="noImage" height="16px" />
                    </div>
                </div>
                <div>
                    {brandProductsFilters.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="brandProductsContainer" id="brandProductsFirst">
                <Products products={brandProducts} />
            </div>
            <div className="brandProductsArrows">
                <div className="brandProductsArrowPrevious" onClick={() => firstScrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="brandProductsArrowNext" onClick={() => firstScrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
            <div className="brandProductsContainer" id="brandProductsSecond">
                <Products products={brandProducts} />
            </div>
            <div className="brandProductsArrows">
                <div className="brandProductsArrowPrevious" onClick={() => secondScrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="brandProductsArrowNext" onClick={() => secondScrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
            <div className="brandProductsContainer" id="brandProductsThird">
                <Products products={brandProducts} />
            </div>
            <div className="brandProductsArrows">
                <div className="brandProductsArrowPrevious" onClick={() => thirdScrollToLeft()}>
                    <img src={choithramsArrowPrevious} alt="noImage" />
                </div>
                <div className="brandProductsArrowNext" onClick={() => thirdScrollToRight()}>
                    <img src={choithramsArrowNext} alt="noImage" />
                </div>
            </div>
        </div>
    )
}
