import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import '../../../assets/styles/user-styles/Otp.scss';
import close from '../../../assets/images/user-assets/close/close.png';


export default function Otp() {
    let history = useHistory();
    return(
        <div className = 'otpMainContainer'>
            <div className = 'otpContainer'>
                <div className = 'otpExit'>
                    <img onClick = {()=> history.push('/')} src = {close} alt = 'no-alt'/>
                </div>
                <div className = 'otpLabel'>
                    <p>Enter OTP</p>
                    <p>We've Sent An OTP To Your Phone Number</p>
                </div>
                <div className = 'otpInputs'>               
                        <input type = 'text' placeholder = 'Enter One Time Password'/><br/>
                </div>
                <div className = 'verifyButton'>
                    <button onClick = {()=> history.push('/')}>VERIFY OTP</button>
                </div>
            </div>
        </div>
    )
}