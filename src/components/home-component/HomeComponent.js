// Home components goes in this folder..
import React from 'react';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import FilterBar from '../../common-components/FilterBar/FilterBar';
import DailyDeals from '../product-component/DailyDeals/DailyDeals';
import Featured from '../home-component/Featured/Featured';
import ShopHighlights from '../product-component/ShopHighlights/ShopHighlights';
import OfferZone from '../home-component/OfferZone/OfferZone';
import TopSeller from '../product-component/TopSeller/TopSeller';
import TopCategories from './TopCategories/TopCategories';
import RelatedRecipes from '../recipe-component/RelatedRecipes/RelatedRecipes';
import FoodStyle from '../home-component/FoodStyle/FoodStyle';
import FoodStyleDelivery from './FoodStyleDelivery/FoodStyleDelivery';
import BuyAndGetFree from '../product-component/BuyAndGetFree/BuyAndGetFree';
import ShopByBrand from '../home-component/ShopByBrand/ShopByBrand';
import SaveMax from '../product-component/SaveMax/SaveMax';
import Footer from '../../common-components/Footer/Footer';

export default function HomeComponent() {
    return (
        <div>
            <Header />
            <Slider />
            <FilterBar />
            <DailyDeals />
            <Featured />
            <ShopHighlights />
            <OfferZone />
            <TopSeller />
            <TopCategories />
            <RelatedRecipes />
            <FoodStyle />
            <FoodStyleDelivery />
            <BuyAndGetFree />
            <ShopByBrand />
            <SaveMax />
            <Footer />
        </div>
    )
}
