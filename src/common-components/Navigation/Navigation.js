// Navigation component goes in this file..
import React, { useState } from 'react';

import { navigationItems } from '../../mocks/common-mocks/common-mocks';

import '../../assets/styles/common-styles/Navigation.scss';
// OR
// import '../../assets/styles/common-styles/Navigation.css';

export default function Navigation({ handleReference }) {
    const [ id, setId ] = useState(0);

    return (
        <div className="navigationContainer" onMouseLeave={handleReference}>
            {/* <h1>Navigation</h1> */}
            <div className="navigationItems">
                {navigationItems.map((item, index) => {
                    return (
                        <div key={index} onMouseOver={() => setId(item.id)}>
                            <div>
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <img src={id === item.id ? item.icons.black : item.icons.grey} alt="noImage" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="subNavigationItems">
                {
                    navigationItems.map((item) => {
                        return item.subNavigationItems.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p>{item.title}</p>
                                    {item.subTitles.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <p>{item.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                    )}
                )}
            </div>
            <div className="navigationImages">
                <p>SHOP THIS CATEGORIES BY BRAND</p>
                {navigationItems.map((item) => {
                    return item.images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image} alt="noImage" />
                            </div>
                        )
                    })
                })}
            </div>
        </div>
    )
}
