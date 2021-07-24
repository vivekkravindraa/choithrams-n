import React from 'react';
import Product from '../../molecules/Product/Product';

export default function Products({ products }) {
    return products.map((product, index) => {
        return (
            <Product
                key={index}
                productId={product.id}
                productImage={product.productImage}
                productCurrency={product.productCurrency}
                productPrice={product.productPrice}
                productMarketPrice={product.productMarketPrice}
                productTitle={product.productTitle}
                productQuantity={product.productQuantity}
                productOffer={product.productOffer}
                productCount={product.productCount}
                productMyLists={product.productMyLists}
            />
        )
    })
}
