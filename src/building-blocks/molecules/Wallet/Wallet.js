import React from 'react';
import plusIcon from '../../../assets/images/user-assets/plusIcon/plusIcon.png';
import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';

export default function Wallet(
    {
        key,
        walletName,
        walletImage,
        walletCurrencyType,
        walletPrice,
        walletRefundTitle,
        walletRefundAmount,
        walletCashbackTitle,
        walletCashbackAmount,
        walletBonusTitle,
        walletBonusAmount
    }
){
    return(
        <div className = 'walletMainContainer'>
              <p>Choithrams Wallet</p>
        <div className = 'walletContainer' key = {key}>
           <div className = 'imageAndTitle'>
                <img src = {walletImage} alt="noImage" />
                <p>{walletName}</p>
           </div>
           <div className = 'borderSec'>

           </div>
            <p>Available Balance</p>
            <div className = 'currencyAndPrice'>
                <p>{walletCurrencyType}</p>
                <p>{walletPrice}</p>
            </div>
            <div className = 'borderSec'>

            </div>
            <div className = 'rechargeWallet'>
                <img src = {plusIcon} alt="noImage" />
                <p>Recharge Wallet</p>
            </div>
            <div className = 'refundSection'>
                <div className = 'refund'>
                    <p>{walletRefundTitle}</p>
                    <p>{walletRefundAmount}</p>

                </div>
                <div className = 'cashback'>
                    <p>{walletCashbackTitle}</p>
                    <p>{ walletCashbackAmount}</p>

                </div>
                <div className = 'bonus'>
                    <p>{ walletBonusTitle}</p>
                    <p>{ walletBonusAmount}</p>
                </div>
             
            </div>

            <div className = 'viewAll'>
                <p>View All Transactions</p>
                <img src = {rightLineArrow} alt="noImage" />
            </div>

        </div>
        </div>
    )
}
