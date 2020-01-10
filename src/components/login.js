import React from "react";
import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
    
    render() {
    return (
      <div className="container">
        <div class="loginPage p-4">
            <h2 class="loginHead text-muted">Login</h2>
            <form action="" method="POST">
                <div class="form-group">
                    <label for='username'>Email</label>
                <input class="form-control" name='username' id='username' type="text" placeholder="username"
                  onfocus="errhandling()"/>
                </div>
                 
                <div class="errwrap">
                    <span id="errorUser" class="error hide">Enter Username</span>
                </div>
                <div class="form-group"> 
                    <label for='password'>Password</label>
                <input class="form-control" name='password' id='password' type="password" placeholder="password" 
                 onfocus="errhandling()"/>
            </div>
               
                <div class="errwrap">
                    <span id="errorPass" class="error hide">Enter Password.</span>
                </div>
                <div class="text-center"> 
                    <button className="btn btn-login font-weight-bold mb-3" type="button" name="login" onclick="func()">Login</button>
                </div>
               
                <div class="errwrap">
                    <span id='error' class='error hide'>Invalid login</span>
                </div>
            </form>
            <p>
    Not on erema? <a href="./signup" target="_blank">signup
 </a>
</p>
<p>
        Forgot Password? Click <a href="./forgotpassword">forgot_password
     </a>
    </p>
        </div>
        <div className="copyr"> copyright @Erema 2019 </div>
    </div>
    );
  }
}
export default Login;

