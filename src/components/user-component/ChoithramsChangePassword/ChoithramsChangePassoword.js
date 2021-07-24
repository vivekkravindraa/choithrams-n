import React from 'react';
import '../../../assets/styles/user-styles/ChangePassword.scss';
import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Sidebar from '../../../common-components/Sidebar/Sidebar';



export default function ChoithramsChangePassword(){
    return(
        <React.Fragment>
            <Header/>
            <div className="userContentChangePassword" >
                    <Sidebar />                        
                <div className = 'changePasswordMainContainer'>
                    <p>Change Password</p>
                    <div className = 'changePasswordContainer'>
                        <p>Want To Change Your Password?</p>
                        <div className = 'passwordInputs'>
                            <form>
                                <input type = 'text' placeholder = 'Old Password'/><br/>
                                <input type = 'text' placeholder = 'New Password'/><br/>
                                <input type = 'text' placeholder = 'Confirm Password'/><br/>
                            </form>
                        </div>
                        <div className = 'continueButton'>
                            <button>CONTINUE</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </React.Fragment>
    )
}