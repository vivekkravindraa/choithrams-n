// Product components goes in this file..
import React from 'react';

import ProductDetails from './ProductDetails/ProductDetails';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductList from './ProductList/ProductList';

export default function ProductComponent() {
    return (
        <div>
            <h1>ProductComponent</h1>
            <ProductDetails />
            <ProductInfo />
            <ProductList />
        </div>
    )
}
