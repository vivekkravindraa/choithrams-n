// Footer component goes in this file..
import React from 'react';

import {
    footerProducts,
    footerKnowUs,
    footerMyAccount,
    footerContactUs
} from '../../mocks/common-mocks/common-mocks';

// import choithramsAppStore from '../../assets/images/common-assets/choithramsAppStore/choithramsAppStore.png';
// import choithramsPlayStore from '../../assets/images/common-assets/choithramsPlayStore/choithramsPlayStore.png';
// import choithramsIpadOne from '../../assets/images/common-assets/choithramsIpadOne/choithramsIpadOne.png';
// import choithramsIpadTwo from '../../assets/images/common-assets/choithramsIpadTwo/choithramsIpadTwo.png';

import '../../assets/styles/common-styles/AboutUsFooter.scss';
// OR
// import '../../assets/styles/common-styles/Footer.css';

export default function AboutUsFooter() {
    return (
        <div className="footerAboutUsContainer">
            
            <div className="footerBottom">
                <div>
                    <p>{footerProducts.title}</p>
                    {footerProducts.links.map((obj, index) => <p key={index}>{obj.link}</p>)}
                </div>
                <div>
                    <p>{footerKnowUs.title}</p>
                    {footerKnowUs.links.map((obj, index) => <p key={index}>{obj.link}</p>)}
                </div>
                <div>
                    <p>{footerMyAccount.title}</p>
                    {footerMyAccount.links.map((obj, index) => <p key={index}>{obj.link}</p>)}
                </div>
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
