import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button'
import LOGOImg from "../../assets/image/Group 1 (1).png";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import * as ROUTES from '../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
 
      <Navbar bg="" expand="lg" className="navBack fixed-top">
        <Navbar.Brand>
          <Link to={ROUTES.HOME} className="navbar-brand">
            <img src={LOGOImg} className="logoImg" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="">
          <Nav className="mr-auto text-color-white ">
            <Nav.Link>
              <Link>About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={ROUTES.CONTACTUS}>Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={ROUTES.CART}>Cart</Link>
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link to={ROUTES.WOMEN} className="text-color-black">Ladies</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={ROUTES.MEN} className="text-color-black">
                  Men
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={ROUTES.KIDS} className="text-color-black">
                  Kids
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SignOutButton />
        </Navbar.Collapse>
      </Navbar>
    );
    const NavigationNonAuth = () => (

      <Navbar bg="" expand="lg" className="navBack fixed-top">
        <Navbar.Brand>
          <Link to={ROUTES.HOME} className="navbar-brand">
            <img src={LOGOImg} className="logoImg" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="">
          <Nav className="mr-auto text-color-white ">
            <Nav.Link>
              <Link>About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={ROUTES.SIGNIN}>Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={ROUTES.CONTACTUS}>Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={ROUTES.CART}>Cart</Link>
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link to={ROUTES.WOMEN} className="text-color-black">Ladies</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={ROUTES.MEN} className="text-color-black">
                  Men
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={ROUTES.KIDS} className="text-color-black">
                  Kids
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

    )

export default NavBar;


