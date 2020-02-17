import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button'
import LOGOImg from "../../assets/image/Group 1 (1).png";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class NavBar extends Component {
  render() {
    return (
      <Navbar bg="" expand="lg" className="navBack sticky-top">
        <Navbar.Brand>
          {" "}
          <Link to="/" className="navbar-brand">
            <img src={LOGOImg} className="logoImg" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="">
          <Nav className="mr-auto text-color-white ">
            <Nav.Link>
              {" "}
              <Link>About Us</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactUS">Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="cart">Cart</Link>
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item to="/women">
                {" "}
                <Link className="text-color-black">Ladies</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/men" className="text-color-black">
                  Men
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/kids" className="text-color-black">
                  Kids
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item to="./cart">Cart</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
        <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// class NavBar extends Component{
//     render(){
//         return(
// <nav className="navWrapper sticky-top">
//     <div className="container">
//     <Link to="/" className="brandLogo">Shopping</Link>
//         <ul className="float-right">
//         <li className="px-5"> <Link to ="/all" >All </Link></li>
//             <li className="px-5"> <Link to ="/women" >women</Link> </li>
//             <li className="px-5"> <Link to ="/men" >Men </Link></li>
//             <li className="px-5"> <Link to ="/kids" >kids </Link></li>
//             <li className="px-5"> <Link to ="/cart" >Cart </Link></li>

//             {/* <li className="px-5"> <Link to ="/cart" > <FontAwesomeIcon icon={faShoppingCart} /> </Link></li> */}
//         </ul>
//     </div>
// </nav>
//         )
//     }
// }
// export default NavBar;
