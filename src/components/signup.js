import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: ""
    }
  }
  firstnameHandler = e =>
    this.setState({
      first_name: e.target.value
    });

  lastnameHandler = e => this.setState({
      last_name: e.target.value
    });
  

  passwordHandler = e => this.setState({ password: e.target.value});

  cpasswordHandler = e =>this.setState({confirm_password: e.target.value});
  
  emailHandler = e => this.setState({ email: e.target.value});
  
  phonenoHandler = e => this.setState({phone: e.target.value
      });
  
  handleSubmit(e){
    e.preventDefault();
    if(this.state.first_name.length < 2){
        alert("Invalid Detail: please enter 2 or more characters")
    return 0;
    }
    else if (this.state.last_name.length < 2){
        alert("Invalid Detail: please enter 2 or more characters")
        return 0;  
    }
    else if (this.state.last_name.length < 2){
        alert("Invalid Detail: please enter 2 or more characters")
        return 0;  
    }
    else if (this.state.phone.length > 11) {
        alert("Invalid Detail: Phone number digits cannot be more than 11");}
        else if (
            !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
              this.state.email
            )
          ) {
            alert("Invalid email");
          }
          else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(.{8,})$/.test(
              this.state.password)
            ) {
                alert("Password not Strong: Password must be at least 8 characters including one uppercase, one lowercase and one special character")
            }
            else if (this.state.password !== this.state.confirm_password) {
               alert("Invalid Password:Password mismatch"
                )
                return 0;  
              }
                else {
                    alert("You have signed up successfully")
                    return 0;  
                }       
            }
  render() {
    return (
      <div className="">
        <div className="signupwrapper container">
          <div className="signupPage">
            <h2 clclassNameass="signupHead">Signup</h2>
            <form
            className="row"
                action="post"
              onSubmit={e => {this.handleSubmit(e);}}>
              <div className="col-6">
                <div className="form-group">
                  <label for="firstname">Firstname</label>
                  <input
                    className="form-control"
                    name="first_name"
                    id="firstname"
                    type="text"
                    placeholder="Firstname"
                   onChange= {this.firstnameHandler}
                   value= {this.state.first_name}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="lastname">Lastname</label>
                  <input
                    className="form-control"
                    name="last_name"
                    id="lastname"
                    type="text"
                    placeholder="Lastname"
                    onChange= {this.lastnameHandler}
                    value= {this.state.last_name}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Email"
                    onChange= {this.emailHandler}
                    value= {this.state.email}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="email">Phone Number</label>
                  <input
                    className="form-control"
                    name="phone"
                    id="phoneno"
                    type="text"
                    placeholder="Phone Number"
                    onChange= {this.phonenoHandler}
                    value= {this.state.phone}
                  />
                </div>
              </div>
              <div className="form-group col-12">
                <label for="password">Password</label>
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange= {this.passwordHandler}
                  value= {this.state.password}
                />
              </div>
              <div className="form-group col-12">
                <label for="confirm_password"> Confirm Password</label>
                <input
                  className="form-control"
                  name="confirm_password"
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  onChange= {this.cpasswordHandler}
                  value= {this.state.confirm_password}
                />
              </div>
              <p className="col-12">
                By clicking join you agree to erema's
                <Link className="black" to="#">terms of agreement</Link>.
              </p>
              <div className="col-12">
                <button
                  className="btn btn-login font-weight-bold mb-3"
                  /* type="button" */
                  name="signUp"
                >
                  Join
                </button>
              </div>

              <p className="col-12">
                Already on erema? <Link className="black" to="/login">Signin</Link>
              </p>
            </form>
          </div>
        </div>
        <footer className="copyr"> copyright @Erema 2019 </footer>
      </div>
    );
  }
}
export default Signup;
