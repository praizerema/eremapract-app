import React from "react";
import "./styles.css";
import NotificationManager from "./utils/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Footer from "./footer";
import LOGOImg from "../assets/image/Group 1 (1).png";




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            selectedIndex: 0,
            valor: "",
            email: "",
            password: "",
            payload: {},
            process: false,
            error: {}
        }
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
     handleEmail=(e)=>{
        this.setState({
            email: e.target.value});
     }
     handlePassword=(e)=>{
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
          const params = {
            data: {
              email,
              password
            },
            location: "login"
          };
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
    
      componentWillReceiveProps(newProps) {
        if (
          newProps.error_details &&
          newProps.error_details.error_source === "login"
        ) {
          this.setState({ process: false });
          this.NotificationPrompt(
            "danger",
            newProps.error_details.status,
            newProps.error_details.message
          );
        }
      }
    render() {
    return (
      <div className="container-fluid">
        <div class="loginPage p-4">
            <div class="loginHead text-muted"> 
              <img src={LOGOImg} style={{ width: "10%", height: "10%" }} />
              </div>
            <NotificationManager msg={this.state.error} />
            <form onSubmit={e => {
                e.preventDefault();
                this.setState({ process: true });
                this.initAuthorization(
                  e,
                  this.state.email,
                  this.state.password
                );
              }}>
                <div class="form-group">
                    <label for='email'>Email</label>
                <input class="form-control" name='email' id='email' type="text" placeholder="Email"
                  onClick={this.handleEmail}/>
                </div>
                <div class="form-group"> 
                    <label for='password'>Password</label>
                <input class="form-control" name='password' id='password' type="password" placeholder="password" 
                onClick={this.handlePassword}/>
            </div>
                <div class="text-center"> 
                    {/* <button className="btn btn-login font-weight-bold mb-3" type="button" name="login" onclick="func()">Login</button> */}
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
            <p>
    Not on erema? <Link className="black" to="/signup">signup
 </Link>
</p>
<p>
        Forgot Password? Click <Link className="black" to="/forgotpassword">forgot_password
     </Link>
    </p>
        </div>
        <div className=""><Footer/></div>
    </div>
    );
  }
}
export default Login;

