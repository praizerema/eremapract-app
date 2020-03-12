import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Join from "./components/join";
import Login from "./components/login";
import Signup from "./components/signup";
import Calculator from "./components/calculator";
// import API from "./components/api";
// import ImageUpload from "./components/upload";
import Home from './components/home';
import ContactUs from './components/contactUs';
import FloatingLab from './components/floatingLab';
import womenProd from './components/Products/womenProd';
import kidsProd from './components/Products/kidsProd';
import Detail from './components/Products/detail';
import Cart from './components/Products/cart';
import Men from './components/Products/men';
import AllProd from './components/Products/allProd';
import NavBar from './components/Products/navBar'
import TopHeader from './components/TopNav/topNav';
import * as ROUTES from "./components/constants/routes";
import { withAuthentication } from './components/Session';
import SignOutButton from './components/SignOut';

// import * as ROUTES from "../../constants/routes";

// import viewItem from './components/Products/viewItem';



class App extends Component {
  render(){
    return (
  <Router>  

    <div className="App">
    <NavBar /> 
   
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route exact path={ROUTES.SIGNIN} component={Login} />
    <Route exact path={ROUTES.SIGNUP} component={Signup} />
    <Route exact path={ROUTES.CONTACTUS} component={ContactUs} />
    {/* <Route exact path={ROUTES.HOME} component={FloatingLab} /> */}
    <Route exact path={ROUTES.WOMEN} component={womenProd} />
    <Route exact path={ROUTES.MEN} component={Men} />
    <Route exact path={ROUTES.KIDS} component={kidsProd} />
    {/* <Route exact path={ROUTES.HOME} component={Detail} /> */}
    <Route exact path={ROUTES.CART} component={Cart} />
    {/* <Route exact path={ROUTES.HOME} component={TopHeader} /> */}



    {/* <Route exact path="/view" component={viewItem} /> */}
    {/* <Route exact path="/" component={Phonebook} />
    <Route path="/api" component={API} />
    <Route path="/upload" component={ImageUpload} />
    <Route component={"error"} /> */}
    <Route component={"error"} />
   </div>
   </Router>
  );}
   
}


 
 


export default withAuthentication(App);
