import React from 'react' ;
import Wallet from '../../molecules/Wallet/Wallet';

export default function Wallets({wallets}){
    return wallets.map((item,index)=>{
        return <Wallet
        key = {index}
        walletName = {item.walletName}
        walletImage = {item.walletImage}
        walletCurrencyType = {item.currencyType}
        walletPrice = {item.price}
        walletRefundTitle = {item.refundTitle}
        walletRefundAmount = {item.refundAmount}
        walletCashbackTitle = {item.cashbackTitle}
        walletCashbackAmount = {item.cashbackAmount}
        walletBonusTitle = {item.bonusTitle}
        walletBonusAmount = {item.bonusAmount}
        />
    })
    
}