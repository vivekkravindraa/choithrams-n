import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import '../../../assets/styles/user-styles/VerifyOtp.scss';
import close from '../../../assets/images/user-assets/close/close.png';


export default function VerifyOtp() {
    let history = useHistory();
    return(
        <div className = 'verifyOtpMainContainer'>
            <div className = 'verifyOtpContainer'>
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
                <div className = 'borderSection'>
                </div>
                <div className = 'loginUsingPassword'>
                    <p>Login Using Password</p>
                    <Link>
                        <p onClick = {()=> history. push('/login-email')}>LOG IN</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}