import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class NavBar2 extends Component{
    render(){
        return(
<nav className="navWrapper sticky-top">
    <div className="container">
    <Link to="/" className="brandLogo">tetset</Link>
        <ul className="float-right">
        <li className="px-5"> <Link to ="/all" >All </Link></li>
            <li className="px-5"> <Link to ="/women" >women</Link> </li>
            <li className="px-5"> <Link to ="/men" >Men </Link></li>
            <li className="px-5"> <Link to ="/kids" >kids </Link></li>
            <li className="px-5"> <Link to ="/cart" >Cart </Link></li>


            {/* <li className="px-5"> <Link to ="/cart" > <FontAwesomeIcon icon={faShoppingCart} /> </Link></li> */}
        </ul>
    </div>
</nav>
        )
    }
}
export default NavBar2;