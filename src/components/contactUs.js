import React from "react";
import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class ContactUs extends React.Component {
    
    render() {
    return (
      <div className="container">
        <div class="loginPage p-4">
            <h2 class="loginHead text-muted">Contact Us</h2>
            <form action="" method="POST">
            <div class="form-group">
                    <label for='username'>Name </label>
                <input class="form-control" name='fname' id='fname' type="text" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for='username'>Email</label>
                <input class="form-control" name='email' id='email' type="text" placeholder="Email" />
                </div>
                
                {/* <div class="errwrap">
                    <span id="errorUser" class="error hide">Enter Username</span>
                </div> */}
                <div class="form-group"> 
                    <label for='password'>Hi, Whats your reason for contacting us?</label>
                <textarea class="form-control" name='writetext' id='writetext' type="text" placeholder="Write in here..." />
            </div>
               
                {/* <div class="errwrap">
                    <span id="errorPass" class="error hide">Enter Password.</span>
                </div> */}
                <div class="text-center"> 
                    <button className="btn btn-login font-weight-bold mb-3" type="button" name="login">Submit</button>
                </div>
          <div>   <a href="./home">Click here</a> to go back to the Home Page</div>
                {/* <div class="errwrap">
                    <span id='error' class='error hide'>Invalid login</span>
                </div> */}
            </form>
        </div>
        <div className="copyr"> copyright @Erema 2019 </div>
    </div>
    );
  }
}
export default ContactUs;

