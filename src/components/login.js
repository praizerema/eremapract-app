import React from "react";
import "./styles.css";
import NotificationManager from "./utils/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import LOGOImg from "../assets/image/Group 1 (1).png";
import {Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "./Firebase";
import * as ROUTES from "./constants/routes";
const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);
const INITIAL_STATE = {
  selectedIndex: 0,
  valor: "",
  email: "",
  password: "",
  payload: {},
  process: false,
  error: {},
  error1: null,
  showerr: true,
};

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE };
    }
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
     handlePassword=(e)=>{
        this.setState({
            password: e.target.value});
     }
     handleEmail=(e)=>{
        var thenum = e.target.value.match(/[\w@.-]*/, "");
    if (thenum !== null) {
      this.setState({
        email: thenum[0]
      });
    }
     }
     initAuthorization = async (e, email, password) => {
        e.preventDefault();
        if (
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
        } else {
          const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error1 => {
        this.NotificationPrompt(
          "danger",
          "Error",
          error1.message
        );
        // this.setState({ error1 });
        this.setState({ process: false });
      });
        //   this.props.userLogin(params);
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
      };
    
      // componentWillReceiveProps(newProps) {
      //   if (
      //     newProps.error_details &&
      //     newProps.error_details.error_source === "login"
      //   ) {
      //     this.setState({ process: false });
      //     this.NotificationPrompt(
      //       "danger",
      //       newProps.error_details.status,
      //       newProps.error_details.message
      //     );
      //   }
      // }
    render() {
      const { email, password, error1 } = this.state;
      // console.log(email)
    return (
      <div className="pt-5">
      <div className="signupwrapper mt-5">
        <div className="loginPage">
        <div className="loginHead text-muted text-center"> 
             <a href="/">
             <img src={LOGOImg} style={{ width: "10%", height: "10%" }} />
             </a> 
              </div>
              <div className="text-center mb-4">
            <h6 clclassNameass="signupHead">Login to your account</h6>
           </div>
              
            <NotificationManager msg={this.state.error} />
            {/* {error1 && <div className="errdiv"><span className="float-right pb-4" onClick={e => this.setState({ error1: false })}>X</span><div className="text-center">{error1.message}</div> </div>} */}
            <form onSubmit={e => {
                e.preventDefault();
                this.setState({ process: true });
                this.initAuthorization(
                  e,
                  this.state.email,
                  this.state.password
                );
              }}
              >
                <div className="form-group">
                    <label for='email'>Email</label>
                <input className="form-control" name='email' id='email' type="text" placeholder=""
                  onChange={this.handleEmail} value={email}/>
                </div>
                <div className="form-group"> 
                    <label for='password'>Password</label>
                <input className="form-control" name='password' id='password' type="password" placeholder="" 
                onChange={this.handlePassword} value={password}/>
            </div>
                <div className="text-center"> 
                    <button
                type="submit"
                className="btn btn-login "
                disabled={this.state.process}
              >
                {this.state.process ? (
                  <FontAwesomeIcon icon={faSpinner} spin className="font-20" />
                ) : (
                  "Login"
                )}
              </button>
                </div>
               
            </form>
            <p className="font-10 mt-3">
    <Link className="black" to="/signup"> Do not have an account? Signup
 </Link>
</p>
<p className="font-10">
        <Link className="black" to="/forgotpassword">Forgot Password?
     </Link>
    </p>
        </div>
        </div>
        <Footer className="font-10"/>
    </div>
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase
)(Login);
export default SignInPage;
export { SignInForm };

