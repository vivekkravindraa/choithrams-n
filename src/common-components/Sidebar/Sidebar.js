// Navigation component goes in this file..
import React, { useState} from 'react';
import { Link, Router } from 'react-router-dom';
import {customHistory} from '../../App';

import { sidebarItems } from '../../mocks/common-mocks/common-mocks';

import choithramsUserG from '../../assets/images/user-assets/choithramsUser/choithramsUserG.png';

import '../../assets/styles/common-styles/Sidebar.scss';

// OR
// import '../../assets/styles/common-styles/Sidebar.css';

export default function Sidebar() {
    const [ id, setId ] = useState(0);

    return (
        <div className="sidebarContainer">
            <div className="sidebarHeader">
                <img src={choithramsUserG} alt="noImage" />
                <div>
                    <p>User Name</p>
                    <p>VIEW PROFILE</p>
                </div>
            </div>
            <div className="sidebarItems">
                {sidebarItems.map((item, index) => {
                    return (
                        <Router key = {index} history={customHistory}>
                             <Link className = "sidebarItems" to={`${item.pathName}`}
                                onClick={() => customHistory.push(`${item.pathName}`)}
                            >
                                <div key={index} onMouseOver={() => setId(item.id)} onMouseLeave={() => setId(0)}>
                                    <p>{item.title}</p>
                                    <img src={id === item.id ? item.image.green : item.image.black} alt="noImage" />
                                </div>

                            </Link>
                        
                        </Router>
                    )
                })}
            </div>
        </div>
    )
}
