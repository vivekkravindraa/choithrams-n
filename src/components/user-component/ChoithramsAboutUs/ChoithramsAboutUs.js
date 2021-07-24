import React,{useState} from 'react';
import '../../../assets/styles/user-styles/AboutUs.scss';
import {aboutUsItems, knowMoreItems, faqListItems, termsData, privacyData} from '../../../mocks/user-mocks/aboutUs-component-mocks/aboutUs-mocks';
import rightLineArrow from '../../../assets/images/user-assets/arrows/rightLineArrow/rightLineArrow.svg';
// import Header from '../../../common-components/Header/Header';
// import Footer from '../../../common-components/Footer/Footer';
import AboutUsHeader from '../../../common-components/AboutUsHeader/AboutUsHeader.js';
import AboutUsFooter from '../../../common-components/AboutUsFooter/AboutUsFooter.js';
import navigation from '../../../assets/images/user-assets/navigation/navigation.png';
import location from '../../../assets/images/cart-assets/location/location.png';


export default function ChoithramsAboutUs(){
    const [ id, setId ] = useState(0);

    return(
        <React.Fragment>
            <AboutUsHeader/>
            <div className = 'aboutUsContainer'>
                <div className = 'searchBanner'>
                    <p>How can we help you today?</p>
                    <div className = 'searchBar'>
                        <form>
                            <input type = 'text' placeholder = 'Enter your search term here...'/>
                            <button>SEARCH</button>
                        </form>
                    </div>
                </div>
                <div id = 'section1' className = 'aboutUsSection'>
                {aboutUsItems.map((item,index)=>{
                    return(
                        <div className = 'aboutUsData' key = {index}>
                            <div className = 'aboutUsTitleAndSubtitle'>
                                <p>{item.title}</p>
                                <p>{item.subTitle}</p>
                            </div>
                            <div className = 'aboutUsDescription'>
                                <div className = 'leftData'>
                                    <p>{item.description}</p>
                                    <p>{item.description}</p>
                                    <p>{item.description}</p>
        
                                </div>
                                <div className = 'rightData'>
                                    <p>{item.description}</p>
                                    <p>{item.description}</p>
                                    <p>{item.description}</p>
                                </div>    
                            </div>   
                        </div>
                    )
                })}
                </div>

                {knowMoreItems.map((item,index)=>{
                    return(
                        <div className = 'imageAndKnowMoreData' key = {index}>
                           <div className = 'left'>

                            </div>
                            <div className = 'right'>
                                <img src = {item.image} alt = 'no-alt'/>
                                {knowMoreItems.map((item,index)=>{
                                    return(
                                        <div className = 'knowMoreCard'>
                                            <p>{item.title}</p>
                                            <p>{item.subTitle}</p>
                                            <div className = 'arrowMission'>
                                                <p>{item.missionTitle}</p>
                                                <img src = {rightLineArrow} alt = 'no-alt'/><br/>                                               
                                            </div>
                                            <div className = 'arrowBlog'>
                                            <p>{item.missionBlogs}</p>
                                                <img src = {rightLineArrow} alt = 'no-alt'/><br/> 
                                                 
                                            </div>
                                        </div>
                                    )
                                })}                                
                            </div>
                        </div>
                    )
                })}

                <div className = 'learnMoreSection'>
                    <p>Want to learn more?</p>
                    <p>READ MORE ABOUT CHOITHRAMS AND OUR LATEST NEWS</p>
                    <button>Go To Press & Media Page</button>
                </div>
               
                <div id = 'section2' className = 'faqsSection'>
                    <p>FAQs</p>
                    <p>FREQUENTLY ASKED QUESTIONS</p>
                    <div className = 'faqs'>
                        {faqListItems.map((item,index)=>{
                            return(
                                <div key = {index} className = 'faqImageAndText' onMouseOver={() => setId(item.id)} onMouseLeave={() => setId(0)}>
                                    <img src={item.image} alt = 'no-alt'/><br/>
                                    <p>{item.title}</p>
                                    <div className = 'viewAnsSec'>
                                        <p>{id === item.id ? item.viewLabel : ''}</p>
                                        {/* <img src = {id === item.id ? item.arrowImage : item.title} alt = 'no-alt'/> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>                   
                </div>

                <div id = 'section3' className = 'termsAndConditionsSection'>
                    <p>Terms & Conditions</p>
                    {termsData.map((item,index)=>{
                        return(
                            <div className = 'titleAndDescription' key = {index}>
                                <p>{item.title}</p>
                              <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div id = 'section4' className = 'privacyAndPolicySection'>
                    <p>Privacy Policy</p>
                    {privacyData.map((item,index)=>{
                        return(
                            <div className = 'titleAndDescription' key = {index}>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
                

                <div className = 'readyToOrderSection'>
                    <p>Ready To Order</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className = 'searchLocation'>
                        <input type = 'text' placeholder = 'Enter Your Location'/>
                        <img src = {location} alt = 'no-alt'/>
                        <button><img src = {navigation} alt = 'no-alt'/></button>
                    </div>                   
                </div>
            </div>
            <AboutUsFooter/>
        </React.Fragment>
    )
}