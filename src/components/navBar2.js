import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class NavBar2 extends Component{
    render(){
        return(
<div>
    <nav className="bg-primary" style={{position: "relative", }}>
        <ul>
            <li>
                <a className=" text-left">test</a>
                <div>
                <ul className="nav__submenu bg-danger">
          <li className="bg-primary ">
            <a>Our Company</a>
          </li>
          <li className="bg-primary">
            <a>Our Team</a>
          </li>
          <li className="nav__submenu-item ">
            <a>Our Portfolio</a>
          </li>
        </ul>
                </div>
            </li>
        </ul>
    </nav>
</div>
        )
    }
}
export default NavBar2;
const subMenu = ()=>{
    return (
        <ul className="nav__submenu bg-danger">
          <li className="bg-primary ">
            <a>Our Company</a>
          </li>
          <li className="bg-primary">
            <a>Our Team</a>
          </li>
          <li className="nav__submenu-item ">
            <a>Our Portfolio</a>
          </li>
        </ul>
      )
    
  }