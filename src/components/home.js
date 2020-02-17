import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import homeimage from "../assets/image/img_5terre.jpg";
import LOGOImg from "../assets/image/fashionMen/Denimunisex.jpeg"
import ProductAFive from "../assets/image/kidsclothesimg/images.jpeg";
import ProductAEight from "../assets/image/kidsclothesimg/s-l500.jpg";
import productBTwo from "../assets/image/FashionWomen/download (2).jpeg";
import productBThree from "../assets/image/FashionWomen/download (3).jpeg";
import MenFive from "../assets/image/fashionMen/men5.jpeg";
import MenSix from "../assets/image/fashionMen/men6.jpeg";
import Footer from "./footer"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fuild">
        <div>
          <div>

            <div className="img-put" >
              <img src={LOGOImg} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="row px-5">
              <div className="px-4 col-sm-12 mb-5">
               <div className="font-22 font-weight-bold my-3">Our Products</div> 
               <div className="text-left">Our products ranges from kids clothing to adult both male and female.
                We also got you covered when it comes to the type of shoe to match the 
                outfits you buy. Products sold here are made of quality fabrics, they are carefully selected to suit your every need. 
                Find below more details on our available products
                </div>
               </div>
            
              <div className="col-sm-4 text-center mb-5 mt-3 img-linkdiv">
             <Link to="/kids"><img src={ProductAFive} alt="" style={{ width: "50%", height: "60%" }}/>
             <img src={ProductAEight} alt="" style={{ width: "50%", height: "60%" }}/></Link> 
               <div className="px-4 py-3 font-14 prod-box">
               <div className="px-4 font-19 font-weight-bold mb-2">Kids Fashion</div>
               <span>Hey! mamas and papas get clothes for kids as young as 1year old at very affordable prices.</span>
                </div></div>

                <div className="col-sm-4 text-center mb-5 mt-3 img-linkdiv">
             <Link to="/women"><img src={productBTwo} alt="" style={{ width: "50%", height: "60%" }}/>
             <img src={productBThree} alt="" style={{ width: "50%", height: "60%" }}/></Link> 
               <div className="px-4 py-3 font-14 prod-box">
               <div className="px-4 font-19 font-weight-bold mb-2">Ladies Fashion</div>
               <span>Hello get in here for all kinds of clothings for ladies of different sizes and shapes.
                They are made of good fabrics and are very affordable.</span>
                </div></div>
                
                <div className="col-sm-4 text-center mb-5 mt-3 img-linkdiv">
             <Link to="/men"><img src={MenFive} alt="" style={{ width: "50%", height: "60%" }}/>
             <img src={MenSix} alt="" style={{ width: "50%", height: "60%" }}/></Link> 
               <div className="px-4 py-3 font-14 prod-box">
               <div className="px-4 font-19 font-weight-bold mb-2">Kids Fashion</div>
               <span>Hey! mamas and papas get clothes for kids as young as 1year old at very affordable prices.</span>
                </div></div>
             
            </div>


            <div className=""><Footer/></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
