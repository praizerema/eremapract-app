import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class Footer extends Component{
    render(){
        return(
<div className="container-fluid footerWrap">
    {/* <div className="row">
        <div className="col-sm-4"><div class="formDiv">
  <form id="email-form" action="">
    <div class="form-group">
      <label id="email-lab" for="email" >Email</label>
      <input class="form-control " name="email" type="email" placeholder="Email" required/>
    </div>
    <div class="text-right">
      <button class="btn btn-large btn-success">Start</button>
    </div>
  </form>
    </div></div>
    </div> */}
<div>copyright @Erema 2019</div>
</div>
            )
    }
}
export default Footer;