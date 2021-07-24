import React from 'react';
import {useHistory} from 'react-router-dom';
import close from '../../../assets/images/user-assets/close/close.png';
import '../../../assets/styles/user-styles/RecoverAccount.scss';

export default function RecoverAccount(){
    const history = useHistory();
    return(
        <div className = 'recoverMainContainer'>
            <div className = 'recoverContainer'>
                <div className = 'recoverExit'>
                    <img onClick = {()=> history.push('/')} src = {close} alt = 'no-alt'/>
                </div>
                <div className = 'recoverLabel'>
                    <p>Recover Your Account</p>
                    <p>We'll Send A Recovery Link To Your Email</p>
                </div>
                <div className = 'recoverInputs'>               
                    <input type = 'text' placeholder = 'Enter Your Number Or Email'/><br/>
                </div>
                <div className = 'recoverButton'>
                    <button onClick = {()=> history.push('/')}>SEND EMAIL</button>
                </div>
                <div className = 'borderSection'>
                </div>
                <div className = 'newToChoithrams'>
                    <p>New To Choithrams?</p>
                    <p onClick = {()=> history.push('/sign-up')}>SIGN UP</p>
                </div>
            </div>
        </div>
    )
}