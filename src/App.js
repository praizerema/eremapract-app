import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
// import * as ROUTES from "../../constants/routes";

// import viewItem from './components/Products/viewItem';



class App extends Component {
  render(){
    return (
  <BrowserRouter>  

    <div className="App">
    <NavBar />
       <Switch>
      
    <Route exact path="/" component={Home} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/calculator" component={Calculator} />
    <Route exact path="/contactUs" component={ContactUs} />
    <Route exact path="/floatinglab" component={FloatingLab} />
    <Route exact path="/women" component={womenProd} />
    <Route exact path="/men" component={Men} />
    <Route exact path="/kids" component={kidsProd} />
    <Route exact path="/details" component={Detail} />
    <Route exact path="/all" component={AllProd} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/tophead" component={TopHeader} />



    {/* <Route exact path="/view" component={viewItem} /> */}
    {/* <Route exact path="/" component={Phonebook} />
    <Route path="/api" component={API} />
    <Route path="/upload" component={ImageUpload} />
    <Route component={"error"} /> */}
    <Route component={"error"} />
  </Switch>

   </div>
   </BrowserRouter>
  );}
   
}


 
 


export default App;
