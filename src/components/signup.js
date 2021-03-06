import React from "react";
import "./styles.css";
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';
import NotificationManager from "./utils/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PasswordInput from "./password/passwordInput";
import firebase from "firebase";
import { db } from "./Firebase/firebase";
import LOGOImg from "../assets/image/Group 1 (1).png";
import Footer from "./footer";

const SignUpPage = () => (
  <div>
    <SignUpForm />

  </div>
);
const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  phone: "",
  error1: null,
  process: false,
  error: {}
};
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }
  firstnameHandler = e =>
    this.setState({
      first_name: e.target.value}
    );
  lastnameHandler = e => this.setState({
      last_name: e.target.value
    });
  

  passwordHandler = e => this.setState({ password: e.target.value});

  cpasswordHandler = e =>{
    this.setState({confirm_password: e.target.value});
    this.setState({
      passwordMatch: e.target.value === this.state.password ? true : false
    });
  }
  emailHandler = e => this.setState({ email: e.target.value});
   phonenoHandler = e => this.setState({phone: e.target.value
      });
  // handlePhone=(e) =>{
  //   var thenum = e.target.value.match(/\d-() /, "");
  //   if (thenum !== null) {
  //     this.setState({
  //       phone: thenum[0]
  //     });
  //   }
  // }
  // phonenoHandler = e => {
  //   var thenum = e.target.value.match(/\d-() /, "");
  //   if (thenum !== null) {
  //     this.setState({
  //       phone: thenum[0]
  //     });
  //   }
  // }
      NotificationPrompt(type, title, details) {
        const self = this;
        this.setState({
          error: {
            type,
            details,
            title,
            display: "block",
            self
          }
        });
      }
    
      initAuthorization = async (
        e,
      ) => {
    e.preventDefault();
    if(this.state.first_name.length < 2){
      this.NotificationPrompt(
        "warning",
        "Invalid First Name",
        "Enter a valid first name "
      );
      this.setState({ process: false });
    }
    else if (this.state.last_name.length < 2){
      this.NotificationPrompt(
        "warning",
        "Invalid Last Name",
        "Enter a valid last name"
      );
    }
    else if (!/\d{10,20}/.test(this.state.phone)) {
      this.setState({ process: false });
      this.NotificationPrompt(
        "warning",
        "Invalid Phone Number",
        "Enter a valid phone number"
      );
    }
        else if (
            !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
              this.state.email
            )
          ) {
            this.NotificationPrompt(
              "warning",
              "Invalid Email",
              "Enter a valid email"
            );
            this.setState({ process: false });
          }
          else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(.{8,})$/.test(
              this.state.password)
            ) {
              this.NotificationPrompt(
                "warning",
                "Password not Strong",
                `Password must be, 
                \nat least 8 characters, 
                \nat least one uppercase,
                \nat least one lowercase,
                \nat least one special characters`
              );
              this.setState({ process: false });
            }
            else if (this.state.password !== this.state.confirm_password) {
              this.NotificationPrompt(
                "warning",
                "Invalid Password",
                "Passwords don't match"
              );
              this.setState({ process: false });
              }
                else {
                  const { first_name, last_name, email, password, phone} = this.state;
                  var user = firebase.auth().currentUser;
                  this.props.firebase
                    .doCreateUserWithEmailAndPassword(email, password)
                    .then(authUser => {
                      // Create a user in your Firebase realtime database
                    //  return this.props.firebase
                    //     .user(authUser.user.uid)
                    //     .set({
                    //       first_name,
                    //       last_name,
                    //       email,
                    //     });
                    //   // this.setState({ ...INITIAL_STATE });
                    //   // this.props.history.push(ROUTES.HOME);
                    // })
                    // .then(() => {
                      this.setState({ ...INITIAL_STATE });
                      this.props.history.push(ROUTES.HOME);
                      //  return this.props.firebase
                      //   .user(authUser.user.uid)
                      //   .set({
                      //     first_name,
                      //     last_name,
                      //     email,
                      //   });
                    })
                    .catch(error1 => {
                      this.NotificationPrompt(
                        "danger",
                        "Error",
                        error1.message
                      );
                      this.setState({ process: false });
                      //this.setState({ error1});
                      
                    });
                    firebase.auth().onAuthStateChanged((user) => {
                      if (user) {
                        // User logged in already or has just logged in.
                        db.collection("users")
                        .doc(user.uid)
                          .set({
                            user:{ 
                          uid: user.uid,
                         firstname: first_name,
                         lastname: last_name,
                         email: email,
                         phoneno:phone,
                          }
                          })
                          //    .then(function(docRef) {
                          //        docRef.id= user.uid
                          //   console.log("Document written with ID: ", docRef.id);
                          // })
                        console.log(user.uid);
                      } 
                    });
                    
                          
                        
                        //   .then(function(docRef) {
                        //     console.log("Document written with ID: ", docRef.id);
                        //   })
                        //   .catch(function(error) {
                        //     console.error("Error adding document: ", error);
                        //   });
                        // console.log(db)
                    setTimeout(() => {
                      if (this.state.process) {
                        this.NotificationPrompt(
                          "danger",
                          "ERR_CONNECTION_CLOSED",
                          "Please check your internet connection and try again"
                        );
                        this.setState({ process: false });
                      }
                    }, 100000);
                }       
              }
  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      phone,
    } = this.state;
    return (
      <div className=" pt-5">
        <div className="signupwrapper mt-5">
          <div className="signupPage">
          <div className="loginHead text-muted text-center"> 
             <a href="/">
             <img src={LOGOImg} style={{ width: "10%", height: "10%" }} />
             </a> 
              </div>
          {/* {error1 && <div className="errdiv"><span className="float-right pb-4" onClick={e => this.setState({ error1: false })}>X</span><div className="text-center">{error1.message}</div> </div>}  */}
           <div className="text-center mb-4">
           <h4 clclassNameass="signupHead">Welcome</h4>
            <h5 clclassNameass="signupHead">Create Account</h5>
           </div>
           

            <NotificationManager msg={this.state.error} />

            <form
            className="row"
                action="post"
                onSubmit={e => {
                e.preventDefault();
                this.setState({ process: true });
                this.initAuthorization(
                  e,
                  first_name,
                   last_name,
                   email,
                   password,
                   confirm_password,
                   phone,
                );
              }}
            
              >
              <div className="col-6 pr-2">
                <div className="form-group">
                  <label for="firstname">Firstname</label>
                  <input
                  className="form-control"
                    name="first_name"
                    id="firstname"
                    type="text"
                    placeholder=""
                   onChange= {this.firstnameHandler}
                   value= {first_name}
                  />
                </div>
              </div>
              <div className="col-6 pl-2">
                <div className="form-group">
                  <label for="lastname">Lastname</label>
                  <input
                    className="form-control"
                    name="last_name"
                    id="lastname"
                    type="text"
                    placeholder=""
                    onChange= {this.lastnameHandler}
                    value= {last_name}
                  />
                </div>
              </div>
              <div className="col-6 pr-2">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="text"
                    placeholder=""
                    onChange= {this.emailHandler}
                    value= {email}
                  />
                </div>
              </div>
              <div className="col-6 pl-2">
                <div className="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                  className="form-control"
                    name="phone"
                    id="phoneno"
                    type="text"
                    placeholder=""
                    maxLength={20}
                    onChange= {this.phonenoHandler}
                    value= {phone}
                  />
                </div>
              </div>
              <div className="form-group col-12">
                
                <label for="password">Password</label>
                <PasswordInput
                  type="password"
                  className="form-control"
                  placeholder=""
                  onChange= {this.passwordHandler}
                  value= {password}
                />
                {/* <input
                  className="form-control"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange= {this.passwordHandler}
                  value= {password}
                /> */}
              </div>
              <div className="form-group col-12">
                <label for="confirm_password"> Confirm Password</label>
                <input
                className={`form-control ${
                    this.state.passwordMatch ? "successIndicator" : ""
                  }`}
                  name="confirm_password"
                  id="confirm_password"
                  type="password"
                  placeholder=""
                  onChange= {this.cpasswordHandler}
                  value= {confirm_password}
                />
              </div>
              <p className="col-12 font-10 text-right" >
                <Link className="black" to="#">Terms of Agreement</Link>.
              </p>
              <div className="col-12">
               
                <button
                type="submit"
                className="btn btn-login font-weight-bold mb-3"
                disabled={this.state.process}
              >
                {this.state.process ? (
                  <FontAwesomeIcon icon={faSpinner} spin className="font-20" />
                ) : (
                  "Join"
                )}
              </button>
              </div>

              <p className="col-12 font-10">
                Already have an account? <Link className="black" to="/signin">Signin</Link>
              </p>
            </form>
          </div>
        </div>
    <Footer />
      </div>
    );
  }

};
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(Signup);
export default SignUpPage;
export{SignUpForm}
