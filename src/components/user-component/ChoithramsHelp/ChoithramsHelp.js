import React from 'react';
import '../../../assets/styles/user-styles/Help.scss';
import {helpItems} from  '../../../mocks/user-mocks/help-component-mocks/help-mocks';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Sidebar from '../../../common-components/Sidebar/Sidebar';


export default function ChoithramsHelp(){
    return(
        <React.Fragment>
            <Header/>
            <div className="userContentHelp">
                    <Sidebar />
                <div className = 'helpMainContainer'>
                    <p>Need Help?</p>
                    <div className = 'helpContainer'>
                    {helpItems.map((item,index)=>{
                        return(
                            <div className = 'helpSection' key = {index}>
                                <div className = 'imageAndTitle'>
                                    <img src = {item.helpImage} alt = 'no-alt'/>
                                    <p>{item.helpTitle}</p>
                                </div>
                                <p>{item.helpText} <span>{item.helpMail}</span></p>
                                <div className = 'linkAndArrow'>
                                    <p>{item.helpLink}</p>
                                    <img src = {item.helpArrow} alt = 'no-alt'/>
                                </div>
                                <div className = 'border'></div>
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