import React from 'react';

import Header from '../../../common-components/Header/Header';
import WishlistBanner from '../WishlistBanner/WishlistBanner';
import Products from '../../../building-blocks/organisms/Products/Products';
import FilterBar from '../../../common-components/FilterBar/FilterBar';
import FavouriteRecipesList from '../../recipe-component/FavouriteRecipesList/FavouriteRecipesList';
import FavouriteReciesVideos from '../../recipe-component/FavouriteRecipesVideos/FavouriteRecipesVideos';
import RecentlyViewed from '../../product-component/RecentlyViewed/RecentlyViewed';
import Footer from '../../../common-components/Footer/Footer';

import { dailyDealsProducts } from '../../../mocks/product-mocks/product-mocks';

import '../../../assets/styles/cart-styles/Wishlist.scss';

export default function Wishlist() {
    return (
        <React.Fragment>
            <Header />
            <WishlistBanner />
            <FilterBar />
            <div className="wishlistWrapper">
                <div className="wishlistHeader">
                    <div>
                        <p>Wishlist</p>
                    </div>
                </div>
                <div className="wishlistContainer">
                    <Products products={dailyDealsProducts} />
                </div>
                <FavouriteRecipesList />
                <FavouriteReciesVideos />
                <RecentlyViewed />
                <Footer />
            </div>
        </React.Fragment>
    )
}
