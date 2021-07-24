import React from 'react';
import {Link} from 'react-router-dom';
import close from '../../../assets/images/user-assets/close/close.png';
import '../../../assets/styles/user-styles/LoginWithEmail.scss';
import {useHistory} from 'react-router-dom';

export default function LogInWithEmail () {
    const history = useHistory();
    return(
        <div className = 'loginWithEmailMainContainer'>
            <div className = 'loginWithEmailContainer'>
                <div className = 'loginExit'>
                    <img onClick = {()=> history.push('/')} src = {close} alt = 'no-alt'/>
                </div>
                <div className = 'loginLabel'>
                    <p>Log In</p>
                    <p>Log In Using Password</p>
                </div>
                <div className = 'loginInputs'>               
                        <input type = 'text' placeholder = 'Enter your number or email'/><br/>
                        <input type = 'password' placeholder = 'Password'/><br/>
                </div>
                <div className = 'termsOrService'>
                    <p>By Signing Up You Agree To Our <span>Terms Or Service </span> And <span>Privacy Policy</span></p>
                    {/* <p>Privacy Policy</p> */}
                </div>
                <div className = 'continueButton'>
                    <button onClick={()=> history.push("/")}>CONTINUE</button>
                </div>
                <div className = 'borderSection'>
                </div>
                <div className = 'newToChoithrams'>
                    <p>New To Choithrams?</p>
                    <Link>
                        <p onClick = {()=>history.push("/sign-up")}>SIGN UP</p>
                    </Link>
                </div>            
            </div>
        </div>
    )
}