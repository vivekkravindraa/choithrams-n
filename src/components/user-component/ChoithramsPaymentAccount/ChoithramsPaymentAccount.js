import React from 'react';
import '../../../assets/styles/user-styles/Account.scss';
import {accountItems} from '../../../mocks/user-mocks/account-component-mocks/account-mocks';
// import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Sidebar from '../../../common-components/Sidebar/Sidebar';


export default function ChoithramsPaymentAccount(){
    return(
       <React.Fragment>
           <Header/>
           <div className="userContentAccount">                     
                <Sidebar />
                <div className = 'paymentAccountMainContainer'>
                    <p>Account</p>
                    <div className = 'paymentAccountContainer'>
                        {accountItems.map((item,index)=>{
                            return(
                                <div className = 'accounts' key = {index}>
                                    <div className = 'logoAndLabel'>
                                        <img src = {item.image} alt = 'no-alt'/>
                                        <p>{item.accountLabel}</p>

                                    </div>
                                    <p>{item.accountDescription}</p>
                                    <div className = 'linkAndImage'>
                                        <p>{item.paymentLink}</p>
                                        <img src = {item.paymentIcon} alt = 'no-alt'/>
                                            
                                    </div>
                                    
                                    <div className = 'borderSection'></div>

                                </div>
                            )
                        })}
                    </div>
                </div>
           </div>
           <Footer/>
       </React.Fragment>
    )
}