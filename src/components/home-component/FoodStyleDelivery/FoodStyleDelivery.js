import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import choithramsDeliveryStore from '../../../assets/images/home-assets/choithramsDeliveryStore/choithramsDeliveryStore.png';
import choithramsDeliveryHome from '../../../assets/images/home-assets/choithramsDeliveryHome/choithramsDeliveryHome.png';

import '../../../assets/styles/home-styles/FoodStyleDelivery.scss';

export default function FoodStyleDelivery() {
    const size = useWindowSize();
    
    return (
        <div className="foodStyleDelivery">
            <div>
                <p>Brilliant Ideas. Brilliant Delivery.</p>
                <p>Get Your Order With In 60 Min</p>
            </div>
            <div>
                <div>
                    <img src={choithramsDeliveryStore} alt="noImage" />
                    <p>Choithrams Store</p>
                </div>
                <div>
                    {size.width >= 992 ? <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p> : null}
                    {size.width >= 768 && size.width < 992 ? <p>- - - - - - - - - - - - - - - - - - - - - - </p> : null}
                    {size.width >= 0 && size.width < 768 ? <p>- - - - - - - - - - -</p> : null}
                </div>
                <div>
                    <img src={choithramsDeliveryHome} alt="noImage" />
                    <p>Choithrams Home</p>
                </div>
            </div>
            <div>
                <button>View Orders</button>
                <button>Track Order</button>
            </div>
        </div>
    )
}
