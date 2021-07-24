import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeComponent from './components/home-component/HomeComponent';
import ProductComponent from './components/product-component/ProductComponent';
import RecipeComponent from './components/recipe-component/RecipeComponent';
import EssentialComponent from './components/essential-component/EssentialComponent';
import CartComponent from './components/cart-component/CartComponent';
import UserComponent from './components/user-component/UserComponent';
import CommonComponent from './common-components/CommonComponent';
import ProductList from './components/product-component/ProductList/ProductList';
import ProductDetails from './components/product-component/ProductDetails/ProductDetails';
import ProductInfo from './components/product-component/ProductInfo/ProductInfo';
import Cart from './components/cart-component/Cart/Cart';
import Checkout from './components/cart-component/Checkout/Checkout';
import LogInWithMobile from './components/user-component/LogInWithMobile/LogInWithMobile';
import LogInWithEmail from './components/user-component/LogInWithEmail/LogInWithEmail';
import SignUp from './components/user-component/Signup/Signup';
import VerifyOtp from './components/user-component/VerifyOtp/VerifyOtp';
import ChoithramsChangePassword from './components/user-component/ChoithramsChangePassword/ChoithramsChangePassoword';
import ChoithramsPaymentAccount from './components/user-component/ChoithramsPaymentAccount/ChoithramsPaymentAccount';
import ChoithramsWallet from './components/user-component/ChoithramsWallet/ChoithramsWallet';
import Otp from './components/user-component/Otp/Otp';
import RecoverAccount from './components/user-component/RecoverAccount/RecoverAccount';
import ChoithramsHelp from './components/user-component/ChoithramsHelp/ChoithramsHelp';
import ChoithramsAboutUs from './components/user-component/ChoithramsAboutUs/ChoithramsAboutUs';
import ChoithramsFindStore from './components/product-component/ChoithramsFindStore/ChoithramsFindStore';
import ChoithramsProductDescription from './components/product-component/ChoithramsProductDescription/ChoithramsProductDescription';
import ChoithramsMyOrder from './components/user-component/ChoithramsMyOrder/ChoithramsMyOrder';
import Wishlist from './components/cart-component/Wishlist/Wishlist';

import './App.css';

export const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/login-email" exact component={LogInWithEmail}/>
        <Route path="/verify-otp" component={VerifyOtp}/>
        <Route path="/otp" component={Otp}/>
        <Route path="/recover-account" component={RecoverAccount}/>
        <Route path="/login-mobile" exact component={LogInWithMobile}/>        
        <Route path="/wallet" component={ChoithramsWallet}/>
        <Route path="/change-password" component={ChoithramsChangePassword}/>
        <Route path="/account" component={ChoithramsPaymentAccount}/>
        <Route path="/help" component={ChoithramsHelp}/>
        <Route path="/about" component={ChoithramsAboutUs}/>
        <Route path="/find-store" component={ChoithramsFindStore}/>
        <Route path="/product-description" component={ChoithramsProductDescription}/>
        <Route path="/carts" component={CartComponent} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/product-info" component={ProductInfo} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/common" component={CommonComponent} />
        <Route path="/user" component={UserComponent} />
        <Route path="/essentials" component={EssentialComponent} />
        <Route path="/recipes" component={RecipeComponent} />
        <Route path="/products" component={ProductComponent} />
        <Route path="/my-orders" component={UserComponent}/>
        <Route path="/" component={HomeComponent} />
      </Switch>
    </Router>
  );
}

export default App;
