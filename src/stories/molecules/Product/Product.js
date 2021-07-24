import React, { useState } from 'react';

import choithramsFavourite from '../../../assets/images/product-assets/choithramsFavourite/choithramsFavourite.png';
import choithramsAddToCart from '../../../assets/images/product-assets/choithramsAddToCart/choithramsAddToCart.png';
import choithramsArrowRightW from '../../../assets/images/product-assets/choithramsArrowRightW/choithramsArrowRightW.png';
import choithramsPlusB from '../../../assets/images/product-assets/choithramsPlus/choithramsPlusB.png';
import choithramsPlusW from '../../../assets/images/product-assets/choithramsPlus/choithramsPlusW.png';
import choithramsMinusB from '../../../assets/images/product-assets/choithramsMinus/choithramsMinusB.png';
import choithramsPriceRound from '../../../assets/images/product-assets/choithramsPriceRound/choithramsPriceRound.png';

import './Product.scss';

export default function Product({
    productImage,
    productCurrency,
    productPrice,
    productMarketPrice,
    productTitle,
    productQuantity,
    productOffer,
    productCount,
    productMyLists
}) {
    const [ showMyLists, setShowMyLists ] = useState(false);
    const [ showAddToCart, setShowAddToCart ] = useState(false);

    const handleMyLists = () => {
        if(!showMyLists) {
            setShowMyLists(true);
        } else {
            setShowMyLists(false);
        }
    }

    const handleAddToCart = () => {
        if(!showAddToCart) {
            setShowAddToCart(true);
        } else {
            setShowAddToCart(false);
        }
    }

    return (
        <div className="choithrams-product">
             <div className="productCount">
                <p>{productCount}</p>
            </div>
            
            <div className="productAbsolutes">
                <img src={choithramsFavourite} alt="noImage" onClick={() => handleMyLists()} />
                <img src={choithramsAddToCart} alt="noImage" onClick={() => handleAddToCart()} />
            </div>

            <div className="productImage">
                <img src={productImage} alt="noImage" />
            </div>
            
            {!showAddToCart ? 
            
                <div className="productInfo">
                    <div className="productInfoLeft">
                        <img src={choithramsPriceRound} alt="noImage" />
                        <div className="productPriceDetails">
                            <p>{productCurrency}</p>
                            <div>
                                <p>{productPrice.slice(0,3)}</p>
                                <p>{productPrice.slice(3)}</p>
                            </div>
                            <p>each</p>
                        </div>
                    </div>
                    
                    <div className="productInfoRight">
                        <div className="productTitle">
                            <p>{productTitle}</p>
                        </div>
                        <div className="productQuantity">
                            <p>{productQuantity} {productOffer}</p>
                        </div>
                        <div className="productMarketPrice">
                            <p>{productMarketPrice}</p>
                        </div>
                    </div>
                </div>
            :
                <div className="productCartOperations">
                    <div>
                        <div>
                            <img src={choithramsMinusB} alt="noImage" />
                        </div>
                        <div>
                            <input type="text" value="1" />
                        </div>
                        <div>
                            <img src={choithramsPlusB} alt="noImage" />
                        </div>
                    </div>
                </div>}

            {showMyLists ? <div className="productSaveToMyLists">
                <div className="productSaveToMyListsHeader">
                    <p>Save to My Lists</p>
                </div>
                <div className="productSaveToMyListsOptions">
                    {productMyLists.map((option, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" />
                                <p>{option.title}</p>
                                <p>({option.count})</p>
                            </div>
                        )
                    })}
                </div>
                <div className="productSaveToMyListsAddOrRemove">
                    <img src={choithramsPlusW} alt="noImage" />
                    <p>Create a new list</p>
                    <img src={choithramsArrowRightW} alt="noImage" />
                </div>
            </div> : null}
        </div>
    )
};