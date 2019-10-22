import React from 'react';
import { Switch, Route } from "react-router";
import logo from './logo.svg';
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


function App() {
  return (
    <div className="App">
      <ConfigRouters />
    </div>
  );
}

const ConfigRouters = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/calculator" component={Calculator} />
    <Route exact path="/contactUs" component={ContactUs} />
    
    <Route exact path="/floatinglab" component={FloatingLab} />
    {/* <Route exact path="/" component={Phonebook} />
    <Route path="/api" component={API} />
    <Route path="/upload" component={ImageUpload} />
    <Route component={"error"} /> */}
    <Route component={"error"} />
  </Switch>
);

export default App;
