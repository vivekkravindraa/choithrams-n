import React from 'react';
import '../../../assets/styles/user-styles/MyOrder.scss';
import {myOrders,orderIdAndPrice,deliveredOrders} from '../../../mocks/user-mocks/myOrder-component-mocks/myOrder-mocks';
import arrowRight from '../../../assets/images/user-assets/arrows/arrowRight.png';
import greenColoredDownArrow from '../../../assets/images/user-assets/arrows/greenColoredDownArrow.png';
import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';

import location from '../../../assets/images/cart-assets/location/location.png';
import email from '../../../assets/images/user-assets/email/email.png';
import payment from '../../../assets/images/user-assets/payment/payment.png';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Sidebar from '../../../common-components/Sidebar/Sidebar';

export default function ChoithramsMyOrder(){
    return(
        <React.Fragment>
            <div className = 'userContentMyOrder'>
                <Sidebar/>            

           <div className = 'myOrderMainContainer'>
               <p>All Orders</p>
               <div className = 'myOrderContainer'>
                   {orderIdAndPrice.map((item,index)=>{
                       return(
                           <div className = 'orderIdSection' key = {index}>
                                <img src = {item.orderIcon} alt = 'no-alt'/>
                                <div className = 'dateAndTimeSection'>
                                <p>{item.orderId}</p>
                                <p>{item.orderDateAndTime}</p>
                                </div>
                                <p>{item.orderPrice}</p>
                           </div>
                        )
                   })}
                <div className = 'myOrdersSection' >
                    {myOrders.map((item,index)=>{
                       return(
                          
                             <div className = 'imageAndProduct' key ={index}>
                                 <div className = 'left'>
                                    <img src = {item.orderItem} alt = 'no-alt'/>
                                 </div>
                                 <div className = 'right'>
                                    <p>{item.orderName}</p>
                                    <div className = 'quantityAndDetails'>
                                        <p>See Details</p>
                                        <img src = {arrowRight} alt = 'no-alt'/>
                                        <p>{item.orderQuantity}</p>                                         
                                    </div>
                                </div>
                            </div>                          
                        )
                   })}
                </div>
                <div className = 'viewItems'>
                    <img src = {greenColoredDownArrow} alt = 'no-alt'/>
                    <p>View 6 More Items</p>
                </div>

                <div className = 'myOrdersEmail'>
                    <img src = {email} alt = 'no-alt'/>
                    <div className = 'emailSec'>
                        <p>Email</p>
                        <p>RahulRoy@gmail.com</p>
                        <div>
                            <p>Get Invoice</p>
                            <img src = {rightLineArrow} alt = 'no-alt'/>
                        </div>
                    </div>
                </div>

                <div className = 'myOrderAddress'>
                    <img src = {location} alt = 'no-alt'/>
                    <div className = 'locationSec'>
                        <p>Rahul Roy</p>
                        <p>Al Marsa Street, 66, Dubai Marina (2,710.67 km) P.O. Box 32923 Dubai, United Arab Emirates</p>
                    </div>
                </div>

                <div className = 'paymentModeSec'>
                    <div className = 'paymentModeOnline'>
                        <img src = {payment} alt = 'no-alt'/>
                        <p>Payment Mode</p>
                        <p>Online</p>
                    </div>
                    <div className = 'totalSec'>
                        <p>Total</p>
                        <p>AED 391.00</p>
                    </div>
                    <div className = 'productDiscountSec'>
                        <p>Product Discount</p>
                        <p>AED 21.00</p>
                    </div>
                    <div className = 'deliveryChargesSec'>
                        <p>Delivery Charges</p>
                        <p>AED 0.00</p>
                    </div>
                    <div className = 'otherChargesSec'>
                        <p>Other Charges</p>
                        <p>AED 5.00</p>
                    </div>
                    <div className = 'totalPayableSec'>
                        <p>Total Payable</p>
                        <p>AED 340.00</p>
                    </div>
                </div>

                <div className = 'deliveredOrdersSec'>
                    {deliveredOrders.map((item,index)=>{
                        return(
                            <div className = 'deliverySection' key = {index}>
                                <img src = {item.orderIcon} alt = 'no-alt'/>
                                <div className = 'dateAndTimeSection'>
                                    <p>{item.orderId}</p>
                                    <p>{item.orderDateAndTime}</p>
                                    <p>{item.orderStatus}</p>
                                </div>
                                <p>{item.orderPrice}</p>                                
                            </div>
                        )
                    })}
                </div> 
               </div>
           </div>
           </div>

        </React.Fragment>
    )
}