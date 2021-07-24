// Footer component goes in this file..
import React, { useState } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {
    footerLinks,
    footerContactUs
} from '../../mocks/common-mocks/common-mocks';

import choithramsAppStore from '../../assets/images/common-assets/choithramsAppStore/choithramsAppStore.png';
import choithramsPlayStore from '../../assets/images/common-assets/choithramsPlayStore/choithramsPlayStore.png';
import choithramsFooterMobile from '../../assets/images/common-assets/choithramsFooterMobile/choithramsFooterMobile.png';

import choithramsFooterRightArrow from '../../assets/images/common-assets/choithramsFooterRightArrow/choithramsFooterRightArrow.png';
import choithramsFooterDownArrow from '../../assets/images/common-assets/choithramsFooterDownArrow/choithramsFooterDownArrow.png';

import '../../assets/styles/common-styles/Footer.scss';
// OR
// import '../../assets/styles/common-styles/Footer.css';

export default function Footer() {

    const history = useHistory();

    const size = useWindowSize();
    const [ linkId, setLinkId ] = useState(0);

    const handleLinkId = (id) => {
        if(id !== linkId) {
            setLinkId(id);
        } else {
            setLinkId(0);
        }
    }

    return (
        <div className="footerContainer">
            <div className="footerTop">
                <div>
                    <div>
                        <p>Download our mobile app!</p>
                    </div>
                    <div>
                        <p>Get 50% off on your App order.</p>
                        <p>Download the app to enhance your experience.</p>
                    </div>
                    <div>
                        <div>
                            <img src={choithramsAppStore} alt="noImage" />
                            <p>Download On App Store</p>
                        </div>
                        <div>
                            <img src={choithramsPlayStore} alt="noImage" />
                            <p>Download On Play Store</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={choithramsFooterMobile} alt="noImage" />
                </div>
            </div>
            <div className="footerBottom">
                {size.width >= 992
                    ?
                        footerLinks.map((item, idx) => (
                            <div key={idx}>
                                <p onClick={() => handleLinkId(item.id)}>{item.title}</p>
                                {item.links.map((obj, index) =>
                                
                                <Link to = {`${obj.pathName}`} onClick = {()=> history.push(`${obj.pathName}`)}>
                                 <p key={index}>{obj.link}</p>
                                 </Link>


                                 )}
                            </div>
                        ))
                    :   
                        footerLinks.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <p onClick={() => handleLinkId(item.id)}>
                                        {item.title}
                                        {
                                            linkId === item.id
                                        ?
                                            <img src={choithramsFooterDownArrow} alt="noImage" height="10px" /> 
                                        :
                                            <img src={choithramsFooterRightArrow} alt="noImage" height="10px" />
                                        }
                                    </p>
                                    {item.id === linkId ? item.links.map((obj, index) => <p key={index}>{obj.link}</p>) : null}
                                </div>
                            )
                        })}
                <div>
                    <p>{footerContactUs.title}</p>
                    <div>
                        <img src={footerContactUs.email.image} alt="noImage" />
                        <div>
                            <p>{footerContactUs.email.label}</p>
                            <p>{footerContactUs.email.value}</p>
                        </div>
                    </div>
                    <div>
                        <img src={footerContactUs.contact.image} alt="noImage" />
                        <div>
                            <div>
                                <p>{footerContactUs.contact.label}</p>
                                <p>{footerContactUs.contact.value}</p>
                            </div>
                            <div>
                                <p>{footerContactUs.contact.timings}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {footerContactUs.socialIcons.map((icon, index) => {
                            return (
                                <div key={index}>
                                    <img src={icon.image} alt="noImage" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p>{footerContactUs.downloadApp.title}</p>
                        <div>
                            {footerContactUs.downloadApp.images.map((download, index) => {
                                return (
                                    <div key={index}>
                                        <img src={download.image} alt="noImage" />
                                    </div>
                                )
                            })}
                        </div>
                        <p>{footerContactUs.downloadApp.choose}</p>
                    </div>
                    <div>
                        <input type="text" placeholder={footerContactUs.downloadApp.input.placeholderText} />
                        <button>{footerContactUs.downloadApp.input.buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
