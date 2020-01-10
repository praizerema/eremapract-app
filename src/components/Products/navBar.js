import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class NavBar extends Component{
    render(){
        return(
<nav className="navWrapper sticky-top">
    <div className="container">
    <Link to="/" className="brandLogo">Shopping</Link>
        <ul className="float-right">
            <li className="px-5"> <Link to ="/" >Shop</Link> </li>
            <li className="px-5"> <Link to ="/cart" >My cart </Link></li>
            {/* <li className="px-5"> <Link to ="/cart" > <FontAwesomeIcon icon={faShoppingCart} /> </Link></li> */}
        </ul>
    </div>
</nav>
        )
    }
}
export default NavBar;