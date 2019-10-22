import React from "react";
// import { Modal, Form, Button } from "react-bootstrap";
import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            password2:""

        }
    }
    firstnameHandler (e) {
        this.setState({
            firstname:e.target.value
        });}
    lastnameHandler (e) {
        this.setState({
            lastname:e.target.value
        });}
  
    passwordHandler(e) {this.setState({
        password:e.target.value
    });}
   cpaswordHandler (e){
       this.setState({
           password2:e.target.value
    });
    this.setState({
        passwordMatch: e.target.value === this.state.password ? true : false
      });
} 
emailHandler (e) { 
       var thenum = e.target.value.match(/[\w@.-]*/, "");
   if (thenum !== null) {
     this.setState({
       email: thenum[0]
     });
   }}
   phonenoHandler(e) {
    var thenum = e.target.value.match(/\d-() /, "");
    if (thenum !== null) {
      this.setState({
        phone: thenum[0]
      });
    }
  }
    login
  render() {
    return (
      <div className="">
         <div className='signupwrapper'>
        <div className="signupPage">
            <h2 clclassNameass="signupHead">Signup</h2>
            <form action="" method="POST" className=" row">
                <div className="col-6">
                <div className="form-group">
                <label for='firstname'>Firstname</label>
                <input className="form-control" name='firstname' id="firstname" type="text" placeholder="Firstname" onfocus="errhandling()" />
                </div></div>
                {/* <div className="errwrap">
                    <span id="errorFirst" className="error hide">Enter your firstname with more than 3
                        characters.
                    </span>
                </div> */}
                <div className="col-6">
                <div className="form-group">
                <label for='lastname'>Lastname</label>
                <input className="form-control"  name='lastname' id='lastname' type="text" placeholder="Lastname" onfocus="errhandling()" />
                </div></div>
                {/* <div className="errwrap">
                    <span id="errorLast" class="error hide">Enter your Lastname with 3 or more characters.</span>
                </div> */}
                
                <div className="col-6">
                <div className="form-group">
                <label for='email'>Email</label>
                <input className="form-control" name='email' id='email' type="text" placeholder="Email" onfocus="errhandling()" />
                </div></div>
                {/* <div className="errwrap">
                    <span id="errorEmail" class="error hide">Enter a valid email</span>
                </div> */}
                <div className="col-6">
                <div className="form-group">
                <label for='email'>Phone Number</label>
                <input className="form-control" name='phoneno' id='phoneno' type="text" placeholder="Phone Number" onfocus="errhandling()" />
                </div></div>
                {/* <div className="errwrap">
                    <span id="errorEmail" class="error hide">Enter a valid email</span>
                </div> */}
                <div className="form-group col-12">
                <label for='password'>Password</label>
                <input className="form-control" name='password' id="password" type="password" placeholder="Password" onfocus="errhandling()" />
                </div>
                {/* <div className="errwrap">
                    <span id="errorPass" class="error hide">This is not the expected Password</span>
                </div> */}
                <div className="form-group col-12">
                <label for='password2'> Confirm Password</label>
                <input className="form-control" name='password2' id='password2' type="password" placeholder="Confirm password"
                    onfocus="errhandling()" />
                    </div>
                {/* <div className="errwrap">
                    <span id="errorPass2" class="error hide">Passwords do not match</span>
                </div> */}
                <p className="col-12">
                    By clicking join you agree to erema's <a href="#">terms of agreement</a>.
                </p>
                <div className="col-12">
                <button className="btn btn-login font-weight-bold mb-3" type="button" name="signup" onclick="func()">Join</button>
                </div>
                
                <div className="errwrap">
                    <span id="error" class="error hide">Invalid Detail supply</span>
                </div>
                <p className="col-12">
                    Already on erema? <a href="login.html" target="_blank">Signin

                    </a>

                </p>
            </form>
        </div>

    </div>
    <div className="copyr"> copyright @Erema 2019 </div>

    </div>
    );
  }
}
export default Signup;