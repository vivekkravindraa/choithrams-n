// Cart components goes in this folder..
import React from 'react';

import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import MyOrders from './MyOrders/MyOrders';

export default function CartComponent() {
    return (
        <div>
            <h1>CartComponent</h1>
            <Cart />
            <Checkout />
            <MyOrders />
        </div>
    )
}
