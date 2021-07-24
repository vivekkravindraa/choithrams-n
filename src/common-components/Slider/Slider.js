// Slider component goes in this file..
import React, { useState, useEffect } from 'react';

import SearchRecipes from '../../components/recipe-component/SearchRecipes/SearchRecipes';
import { sliderItems } from '../../mocks/home-mocks/home-mocks';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../../assets/styles/home-styles/Slider.scss';
// OR
// import '../../../assets/styles/home-styles/Slider.css';

export default function Slider() {
    const [ path, setPath ] = useState("/");

    useEffect(() => {
        console.log(window.location)
        setPath(window.location.pathname);
    }, []);

    return (
        <div className="sliderContainer">
            <Carousel autoPlay infiniteLoop={true} showThumbs={false}>
                {
                    sliderItems.map((galleryImage, index) => {
                        return (
                            <img key={index} id="sliderImage" src={galleryImage} alt="no_image" />
                        )
                    })
                }
            </Carousel>
            {path === "/recipes" ? <div className="sliderSearchbox">
                <SearchRecipes />
            </div> : null}
        </div>
    )
}
