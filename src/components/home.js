import React from "react";
// import { Modal, Form, Button } from "react-bootstrap";
import "./styles.css";
import homeimage from "../assets/image/img_5terre.jpg";
import LOGOImg from "../assets/image/Group 1 (3).png"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fuild">
        <div>
          <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-dark sticky-top homeHead  py-0">
              <a className="navbar-brand " href="#">
                <img src={LOGOImg} className="logoImg"/>
              </a>
              <button className="navbar-toggler mx-3 collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false" aria-controls="navbarSupportedContent" aria-label="Toggler navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              
              <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="./login">Sign </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./signup">Signup</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="./contactUs">Contact</a>
                    </li>
                  <li className="nav-item">
                      <a className="nav-link" href="./women">Product</a>
                    </li>
                </ul>
              </div>
           
            </nav>

            <div className="">
              <img src={homeimage} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="row px-4">
              <div className="col-sm-12 font-22 font-weight-bold my-3">Products</div>
             
              <div className="col-sm-4 text-left">
               <div className="px-4 font-19 font-weight-bold mb-2">Cat.A(Kids)</div>
               <div className="px-4 py-3 font-14 prod-box">
                <div className=""> <a href="#" className="acolor">Caps</a></div>
                <hr/>
              <div className=""> <a href="#" className="acolor">Skirts</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Pants</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Tops</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Shoes</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">More...</a></div>
                </div></div>

              <div className="col-sm-4 text-left">
              <div className="px-4 font-19 font-weight-bold mb-2">Cat.B(Women)</div>
              <div className="font-14 py-3 px-4 prod-box">
              <div className=""><a href="#" className="acolor">Gowns & dresses</a></div>
              <hr/>
              <div className=""><a href="#" className="acolor">Skirts</a></div>
              <hr/>
              <div className=""><a href="#" className="acolor">Tops & Pants</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Office Wears</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Shoes</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">More...</a></div>
              </div></div>
              <div className="col-sm-4 text-left">
              <div className="px-4 font-19 font-weight-bold mb-2">Cat.C(Men)</div>
              <div className="font-14 py-3 px-4 text-muted prod-box">
              <div className=""> <a href="#" className="acolor">Tops & Pants</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Office wears</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Casual Wears</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Hats & Caps</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">Shoes</a></div>
              <hr/>
              <div className=""> <a href="#" className="acolor">More...</a></div>
</div>
              </div>
            </div>


            <div className=""><footer>copyright @Erema 2019 </footer></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
