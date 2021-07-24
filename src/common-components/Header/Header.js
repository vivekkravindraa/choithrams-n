// Header component goes in this file..
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

import choithramsLogo from '../../assets/images/common-assets/choithramsLogo/choithramsLogo.svg';
import choithramsSearch from '../../assets/images/common-assets/choithramsSearch/choithramsSearch.png';
import choithramsShoppingBag from '../../assets/images/common-assets/choithramsShoppingBag/choithramsShoppingBag.png';
import choithramsBrowse from '../../assets/images/common-assets/choithramsBrowse/choithramsBrowse.png';
import choithramsLists from '../../assets/images/common-assets/choithramsLists/choithramsLists.png';
import choithramsMobile from '../../assets/images/common-assets/choithramsMobile/choithramsMobile.png';
import choithramsStore from '../../assets/images/common-assets/choithramsStore/choithramsStore.png';

import Navigation from '../Navigation/Navigation';

import '../../assets/styles/common-styles/Header.scss';
// OR
// import '../../assets/styles/common-styles/Header.css';

export default function Header() {
    let history = useHistory();
    const [ showNavigation, setShowNavigation ] = useState(false);

    return (
        <div className="headerContainer">
            <div className="headerTop">
                <div>
                    <img src={choithramsLogo} alt="noImage" onClick={() => history.push("/")} />
                </div>
                <div>
                    <img src={choithramsSearch} alt="noImage" />
                    <input type="text" placeholder="Search for Products & recipes" />
                </div>
                <div>
                    <p onClick={() => history.push("/essentials")}>ESSENTIAL</p>
                    <p onClick={() => history.push("/recipes")}>RECIPES</p>
                </div>
                <div>
                    <div>
                        <button onClick={()=> history.push("/login-mobile")}>LOGIN</button>
                    </div>
                    <div>
                        <button onClick={()=> history.push("/sign-up")}>SIGNUP</button>
                    </div>
                    <Link>
                        <div onClick={() => history.push("/checkout")}>
                            <img src={choithramsShoppingBag} alt="noImage" />
                            <p>CART</p>
                            <div>
                                <p>20</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="headerBottom">
                <div>
                    <div
                        onClick={() => setShowNavigation(true)}
                    >
                        <div>
                            <img src={choithramsBrowse} alt="noImage" />
                        </div>
                        <div>
                            <p>Browse Store</p>
                            <p>Explore categories</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={choithramsLists} alt="noImage" />
                        </div>
                        <div>
                            <p>Your Lists</p>
                            <p>View all saved list</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Bulk Savings</p>
                    </div>
                    <div>
                        <p>Easy Shopping</p>
                    </div>
                    <div>
                        <p>Coupons</p>
                    </div>
                    <div>
                        <p>Offers</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={choithramsMobile} alt="noImage" />
                        </div>
                        <div>
                            <p>Get The App</p>
                            <p>Click & download</p>
                        </div>
                    </div>

                    
                        <div onClick = {()=> history.push('/find-store')}>
                            <Link>
                            <div>
                                <img src={choithramsStore} alt="noImage" />
                            </div>
                            <div>
                                <p>Store Locator</p>
                                <p>Find all our stores</p>
                            </div>
                            </Link>
                        </div>
                   
                </div>
            </div>
            {!showNavigation ? null : <div className="absoluteNavigation">
                <Navigation handleReference={() => setShowNavigation(false)} />
            </div>}
        </div>
    )
}
