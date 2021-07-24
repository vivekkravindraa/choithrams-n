import React from 'react';
import '../../../assets/styles/product-styles/FindStore.scss';
import home from '../../../assets/images/user-assets/home/home.png';
import navigation from '../../../assets/images/user-assets/navigation/navigation.png';



export default function ChoithramsFindStore(){
    return(
        <React.Fragment>
            <div className = 'findStoreContainer'>
                <div className = 'goToHomeSection'>
                    <div className = 'leftContent'>
                        <div className = 'homeImageAndText'>
                            <img src = {home}/>
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

                </div>

            </div>
        </React.Fragment>
    )
}