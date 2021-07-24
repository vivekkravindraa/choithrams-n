import React from 'react';
import {Link,Router, Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import '../../../assets/styles/product-styles/FindStore.scss';
import home from '../../../assets/images/user-assets/home/home.png';
import findStore from '../../../assets/images/product-assets/findStoreBanner/findStore.png';
import Header from '../../../common-components/Header/Header';
import AboutUsFooter from '../../../common-components/AboutUsFooter/AboutUsFooter';
import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';
import navigation from '../../../assets/images/user-assets/navigation/navigation.png';
import location from '../../../assets/images/cart-assets/location/location.png';


import {subscriptionOrders, saveMoneyOnOrders, bestRecipes} from '../../../mocks/product-mocks/findStore-component-mocks/findStore-mocks';



export default function ChoithramsFindStore(){
    const history = useHistory();
    return(
        <React.Fragment>
            <Header/>
            <div className = 'findStoreContainer'>
                <div className = 'bannerSection'>
                    <img src = {findStore} alt = 'no-alt'/>
                </div>
            
                <div className = 'goToHomeSection'>
                    <div className = 'leftContent'>
                        <div className = 'homeImageAndText' onClick = {()=> history.push('/')}>
                            <img src = {home} alt="noImage" />
                            <p>Go back to home</p>
                        </div>                  
                        <p>Get your subscription</p>
                        <p>Get the app</p>
                        <p>View all recipies</p>
                    </div>
                    <div className = 'rightContent'>
                    </div>
                </div>

                <div className = 'storeBody'>
                    {subscriptionOrders.map((item,index)=>{
                        return(
                            <div className = 'subscriptionSection' key = {index}>
                                <div className = 'leftSide'>
                                    <p>{item.title}</p>
                                    <p>{item.subTitle}</p>
                                    <p>{item.description}</p>
                                    <button>Get Your Subscription</button>
                                </div>
                                <div className = 'rightSide'>
                                    <img src = {item.image} alt = 'no-alt'/>
                                </div>
                            </div>
                        )
                    })}

                    {saveMoneyOnOrders.map((item,index)=>{
                        return(
                            <div className = 'saveMoneySection' key = {index}>
                                <div className = 'leftSide'>
                                    <img src = {item.image} alt = 'no-alt'/>
                                </div>
                                <div className = 'rightSide'>
                                    <p>{item.title}</p>
                                    <p>{item.subTitle}</p>
                                    <p>{item.description}</p>
                                    <input type = 'text' placeholder = 'Enter your number'/><br/>
                                    <button>Get The App</button>
                                </div>
                            </div>
                        )
                    })}

                    {bestRecipes.map((item,index)=>{
                        return(
                            <div className = 'recipesSection' key = {index}>
                                <div className = 'leftSide'>
                                    <p>{item.title}</p>
                                    <p>{item.subTitle}</p>
                                    <p>{item.description}</p>
                                    <button>View All Recipes</button>
                                </div>
                                <div className = 'rightSide'>
                                    <img src = {item.image} alt = 'no-alt'/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className = 'readyToOrderSection'>
                    <p>Ready To Order</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className = 'searchLocation'>
                        <input type = 'text' placeholder = 'Enter Your Location'/>
                        <img src = {location} alt = 'no-alt'/>
                        <button><img src = {navigation} alt = 'no-alt'/></button>
                    </div>                   
                </div>

            </div>
            <AboutUsFooter/>
        </React.Fragment>
    )
}