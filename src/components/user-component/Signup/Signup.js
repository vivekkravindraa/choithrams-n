import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import '../../../assets/styles/user-styles/Signup.scss';
import close from '../../../assets/images/user-assets/close/close.png';


// import Input from "@material-ui/core/Input";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";

export default function SignUp(){
    let history = useHistory();
    return(
        <div className = 'signUpMainContainer'>
            <div className = 'signUpContainer'>
                <div className = 'signUpExit'>
                    <img onClick = {()=> history.push('/')} src = {close} alt = 'no-alt'/>
                </div>
                <div className = 'signUpLabel'>
                    <p>Sign Up</p>
                    <p>Enter Your Email</p>
                </div>
                <div className = 'signUpInputs'>               
                        <input type = 'text' placeholder = 'Enter your number'/><br/>
                        <input type = 'text' placeholder = 'Enter your email'/><br/>
                        <input type = 'password' placeholder = 'Password'/><br/>
                </div>
                <div className = 'termsOrService'>
                    <p>By Signing Up You Agree To Our <span>Terms Or Service </span> And </p>
                    <p>Privacy Policy</p>
                </div>
                <div className = 'continueButton'>
                    <button onClick = {()=> history.push("/otp")}>CONTINUE</button>
                </div>
                <div className = 'borderSection'>
                </div>
                <div className = 'haveAccount'>
                    <p>Already Have An Account?</p>
                    <Link>
                        <p onClick = {()=> history.push('/login-email')}>LOG IN</p>
                    </Link>
                </div>
            </div>
       </div>
    )
}