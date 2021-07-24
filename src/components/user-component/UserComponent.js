import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import Header from '../../common-components/Header/Header';
import Sidebar from '../../common-components/Sidebar/Sidebar';
import Footer from '../../common-components/Footer/Footer';
import ChoithramsMyOrder from '../user-component/ChoithramsMyOrder/ChoithramsMyOrder';

export default function UserComponent() {
    const size = useWindowSize();

    return (
        <div className="userContainer">          
            <React.Fragment>
                <Header />                   
                    <ChoithramsMyOrder />                    
                <Footer/>
            </React.Fragment>
        </div>
    )
}
