// ProductList component goes in this file..
import React, { useState } from 'react';

import Header from '../../../common-components/Header/Header';
import Products from '../../../building-blocks/organisms/Products/Products';
import { productListProducts, filterByCategories } from '../../../mocks/product-mocks/product-mocks';
import Footer from '../../../common-components/Footer/Footer';

import choithramsArrowDownG from '../../../assets/images/common-assets/choithramsArrowDown/choithramsArrowDownG.png';
import choithramsSortByB from '../../../assets/images/product-assets/choithramsSortBy/choithramsSortByB.png';

import '../../../assets/styles/product-styles/ProductList.scss';
// OR
// import '../../../assets/styles/product-styles/ProductList.css';

export default function ProductList() {
    const [ id, setId ] = useState(0);

    return (
        <React.Fragment>
            <Header />
            <div className="productListHeader">
                <div>
                    <p>Fruits & Vegetables</p>
                </div>
                <div>
                    <div>
                        <p>Brand names</p>
                        <img src={choithramsArrowDownG} alt="noImage" />
                    </div>
                    <div>
                        <p>Price</p>
                        <img src={choithramsArrowDownG} alt="noImage" />
                    </div>
                    <div>
                        <p>Discount</p>
                        <img src={choithramsArrowDownG} alt="noImage" />
                    </div>
                    <div>
                        <img src={choithramsSortByB} alt="noImage" />
                        <p>Sort by</p>
                    </div>
                </div>
            </div>
            <div className="productListWrapper">
                <div className="productListFilters">
                    {filterByCategories.map((category, index) => {
                        return (
                            <React.Fragment>
                                <div className="productListFilter" key={index} onClick={() => setId(category.id)}> 
                                    <img src={category.image} alt="noImage" />
                                    <p>{category.title}</p>
                                </div>
                                <div className="productListFilterOptions" style={{ display: id === category.id && category.options.length ? 'flex' : 'none' }}>
                                    {category.options.map((option, index) => {
                                        return id === category.id ?
                                            <div key={index}>
                                                <input type="checkbox" />
                                                <p>{option.title}</p>
                                            </div>
                                        : null
                                    })}
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="productListContainer">
                    <Products products={productListProducts} />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
