import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import close from '../../../assets/images/user-assets/close/close.png';
import '../../../assets/styles/user-styles/LoginWithMobile.scss';

import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";


const country = [
    {
      value: "USD",
      label: "+971",
    },
    {
      value: "EUR",
      label: "+971",
    },
    {
      value: "BTC",
      label: "+971",
    },
    {
      value: "JPY",
      label: "+971",
    },
  ];


  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "64px",
      },
    },
  }));

export default function LogInWithMobile(){
  let history = useHistory();
    const classes = useStyles();
    const [currency, setCurrency] = useState("EUR");
    // const [confirmnum, setconfirmnum] = useState(false);
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    return(
      <div className = 'loginWithMobileMainContainer'>
        <div className = 'loginWithMobileContainer'>
                <div className = 'loginExit'>
                    <img  onClick = {()=> history.push('/')} src = {close} alt = 'no-alt'/>
                </div>
                <div className = 'loginLabel'>
                    <p>Log In</p>
                    <p>Enter Your Phone Number</p>
                </div>
                <form
            className={classes.root}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
            //   padding: "45px 0px 25px 0px",
            alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <TextField
                id="standard-select-currency"
                select
                style={{ color: "#FE0162" ,borderBottom: '0.1px solid rgb(78, 173, 60)'}}
                value={currency}
                onChange={handleChange}
              >
                {country.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    style={{ color: "rgb(78, 173, 60)" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Input
              style = {{borderBottom: '0.1px solid rgb(78, 173, 60) '}}
              placeholder="000-000-0000"
              inputProps={{ "aria-label": "description" }}
            />
          </form>
          <div className = 'continueButton'>
               <button onClick = {()=> history.push('/verify-otp')}>CONTINUE</button>
           </div>
           <div className = 'cantSignin'>
               <Link>
                  <p onClick = {()=> history.push('/recover-account')}>CAN'T SIGN IN</p>
               </Link>
           </div>
           <div className = 'borderSection'>

           </div>
          

           <div className = 'newToChoithrams'>
               <p>New To Choithrams?</p>
               <Link>
                  <p onClick = {()=> history.push('/sign-up')}>SIGN UP</p>
               </Link>
           </div>
        </div>
        </div>
    )
}