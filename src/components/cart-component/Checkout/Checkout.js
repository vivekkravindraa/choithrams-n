// Checkout component goes in this file..
import React,{useState} from 'react';
import {orderSummary,quickAdd} from '../../../mocks/cart-mocks/checkout-component-mocks/checkout-mocks';

import trash from '../../../assets/images/cart-assets/trash/trash.png';
import toggle from '../../../assets/images/cart-assets/toggle/toggle.png';
import add from '../../../assets/images/cart-assets/add/add.png';
import greenColoredDecrement from '../../../assets/images/cart-assets/greenColoredDecrement/greenColorDecrement.jpg';

import location from '../../../assets/images/cart-assets/location/location.png';
import clock from '../../../assets/images/cart-assets/clock/clock.png';
import exclamation from '../../../assets/images/cart-assets/exclamation/exclamation.png';
import greenColoredDownArrow from '../../../assets/images/user-assets/arrows/greenColoredDownArrow.png';

import choithramsArrowRightB from '../../../assets/images/home-assets/choithramsArrowRightB/choithramsArrowRightB.png';
import choithramsArrowLeftB from '../../../assets/images/home-assets/choithramsArrowLeftB/choithramsArrowLeftB.png';


import greenColoredAddIcon from '../../../assets/images/product-assets/greenColoredAddIcon/greenColoredAddIcon.png';


import '../../../assets/styles/cart-styles/Checkout.scss';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';



export default function Checkout() {

    const [ isScrolled, setIsScrolled ] = useState(false);

    const scrollToRight = () => {
        setIsScrolled(true);
        document.getElementById('quickAdd').scrollLeft += 100;
    }

    const scrollToLeft = () => {
        document.getElementById('quickAdd').scrollLeft -= 100;
    }


    return (
        <React.Fragment>
            <Header/>
        <div className = 'checkoutContainer'>
            <div className = 'orderSummaryAndDetails'>
                <div className = 'orderLeftData'>
                    <p>Order Summary</p>
                    {orderSummary.map((item,index)=>{
                        return(
                            <div className = 'orderCard' key = {index}>
                               <div className = 'imageAndDetail'>
                                   <div className = 'leftImage'>
                                       <img src = {item.orderImage} alt = 'no-alt'/>
                                   </div>
                                   <div className = 'rightDetail'>
                                        <p>{item.orderTitle}</p>
                                        <div className = 'priceAndQuantity'>
                                            <div className = 'price'>
                                                <p>{item.orderCurrencyType}</p>
                                                <p>{item.orderPrice}</p>
                                            </div>
                                            <div className = 'quantity'>
                                                <img src = {greenColoredAddIcon} alt = 'no-alt'/>
                                                <p>1</p>
                                                <img src = {greenColoredDecrement} alt = 'no-alt'/>
                                            </div>
                                        </div>
                                        <div className = 'addAndRemoveSection'>
                                            <div className = 'toggleSec'>
                                                <img src = {toggle} alt = 'no-alt'/>
                                                <p>Allow Subscription</p>

                                            </div>
                                            <div className = 'remove'>
                                                <img src = {trash} alt = 'no-alt'/>
                                                <p>Remove</p>

                                            </div>
                                            <div className = 'addList'>
                                                <img src = {add} alt = 'no-alt'/>
                                                <p>Add To List</p>

                                            </div>

                                        </div>

                                   </div>
                               </div>
                        
                            </div>                            
                        )
                    })}                   
                </div>

                <div className = 'orderRightData'>
                    <p>Order Details</p>

                    <div className = 'userSection'>
                        <div className = 'first'>
                            <img src = {location} alt = 'no-alt'/>
                        </div>
                      
                        <div className = 'second'>
                            <p>Rahul Roy</p> 
                            <p>Al Marsa Street, 66, Dubai Marina (2,710.67 km) P.O. Box 32923 Dubai, United Arab Emirates</p>
                        </div>
                        <div className = 'third'>
                            <p>Change</p>
                        </div>
                    </div>
                    <div className = 'borderSec'>

                    </div>
                    <div className = 'instructionSec'>
                        <div className = 'first'>
                            <img src = {exclamation} alt = 'no-alt'/>
                        </div>
                      
                        <div className = 'second'>
                            <p>Instruction : <span>Call on arrival</span></p> 
                        </div>

                        <div className = 'third'>
                            <img src = {greenColoredDownArrow} alt = 'no-alt'/>
                        </div>
                    </div>
                    <div className = 'borderSec'>

                    </div>
                    <div className = 'timeSlotSec'>
                        <div className = 'first'>
                            <img src = {clock} alt = 'no-alt'/>
                        </div>
                      
                        <div className = 'second'>
                            <p>Rahul Roy</p> 
                            <p>Within 45-60 minutes</p>
                        </div>

                        <div className = 'third'>
                            <p>Today</p>
                            <img src = {greenColoredDownArrow} alt = 'no-alt'/>
                        </div>
                    </div>
                    <div className = 'borderSec'>

                    </div>
                    <div className = 'payableSection'>
                        <div className = 'total'>
                            <p>Total</p>
                            <p>AED 321.9</p>

                        </div>
                        <div className = 'deliveryCharge'>
                            <p>Delivery Charge</p>
                            <p>AED 20.00</p>

                        </div>
                        <div className = 'saving'>
                            <p>Saving</p>
                            <p>AED 15.20</p>

                        </div>
                        <div className = 'totalPayable'>
                            <p>Total Payable</p>
                            <p>AED 341.89</p>

                        </div>

                        <div className = 'buttonSec'>
                            <button>Pay AED 341.89</button>
                        </div>
                    </div>
                </div>
            </div>  

            <div className = 'quickAddSec'>
                <div className="quickAddHeader">
                    <div>
                        <p>Quick Add</p>
                    </div>
                </div>
                <div className = 'quickAddProductsSection'>
                    {quickAdd.map((deal, index) => {
                        return (
                            <div key={index}>
                                <p>{deal.name}</p>
                            </div>
                        )
                    })}
                </div>

                <div className = 'quickAddProducts' id = 'quickAdd'>
                {orderSummary.map((item,index)=>{
                        return(
                            <React.Fragment>
                               <div className = 'imageAndDetail' key = {index} >
                                   <div className = 'leftImage'>
                                       <img src = {item.orderImage} alt = 'no-alt'/>
                                   </div>
                                   <div className = 'rightDetail'>
                                        <p>{item.orderTitle}</p>
                                        <div className = 'priceAndQuantity'>
                                            <div className = 'price'>
                                                <p>{item.orderCurrencyType}</p>
                                                <p>{item.orderPrice}</p>
                                            </div>
                                            <div className = 'quantity'>
                                                <img src = {greenColoredAddIcon} alt = 'no-alt'/>
                                                <p>1</p>
                                                <img src = {greenColoredDecrement} alt = 'no-alt'/>
                                            </div>
                                        </div>
                                    </div>
                               </div>                        
                            </React.Fragment>                            
                        )
                    })}                             
                </div>  

                <div className="quickAddArrowLeft" onClick={() => scrollToLeft()}
                style={{ display: isScrolled ? 'block' : 'none' }}
                >
                <img src={choithramsArrowLeftB} alt="noImage" />
                </div>
                <div className="quickAddArrowRight" onClick={() => scrollToRight()}>
                    <img src={choithramsArrowRightB} alt="noImage" />
                </div>

            </div>         
        </div>
        <Footer/>
        </React.Fragment>
    )
}
