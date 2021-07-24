import React from 'react';

import Header from '../../common-components/Header/Header';
import Banner from '../../components/home-component/Banner/Banner';
import FilterBar from '../../common-components/FilterBar/FilterBar';
import Featured from '../home-component/Featured/Featured';
import BestDeals from '../product-component/BestDeals/BestDeals';
import EssentialBanner from './EssentialBanner/EssentialBanner';
import BrandProducts from '../product-component/BrandProducts/BrandProducts';
import Footer from '../../common-components/Footer/Footer';

export default function EssentialComponent() {
    return (
        <div>
            <Header />
            <Banner />
            <FilterBar />
            <Featured />
            <BestDeals />
            <EssentialBanner />
            <BrandProducts />
            <Footer />
        </div>
    )
}
