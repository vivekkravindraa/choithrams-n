import React from 'react';
import {walletItems} from '../../../mocks/user-mocks/wallet-component-mocks/wallet-mocks';
import Wallets from '../../../building-blocks/organisms/Wallets/Wallets';
import '../../../assets/styles/user-styles/Wallet.scss';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Sidebar from '../../../common-components/Sidebar/Sidebar';




export default function Wallet(){
    return(
       <React.Fragment>
            <Header/>
            <div className="userContentWallet">                   
                <Sidebar />               
                <Wallets wallets = {walletItems}/> 
            </div> 
            <Footer/>     
       </React.Fragment>
    )
}