import React from "react";
import "./styles.css";
import Footer from "./footer";
class ContactUs extends React.Component {
    
    render() {
    return (
      <div className="p-5">
        <div class="loginPage p-4">
            <h2 class="loginHead text-muted">Contact Us</h2>
            <form action="" method="POST">
            <div class="form-group">
                    <label for='username'>Name </label>
                <input className="form-control" name='fname' id='fname' type="text" placeholder="" />
                </div>
                <div class="form-group">
                    <label for='username'>Email</label>
                <input className="form-control" name='email' id='email' type="text" placeholder="" />
                </div>
                <div class="form-group"> 
                    <label for='password'>Hi, Whats your reason for contacting us?</label>
                <textarea className="form-control" name='writetext' id='writetext' type="text" placeholder="" />
            </div>
               
                <div class="text-center"> 
                    <button className="btn btn-login font-weight-bold mb-3" type="button" name="login">Submit</button>
                </div>
          <div className="font-10 acolor">   <a href="/" className="acolor">Click here to go back to the Home Page</a></div>
                
            </form>
        </div>
       <Footer />
    </div>
    );
  }
}
export default ContactUs;

