import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { viewItem } from "./actions/cartActions";

import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
// import Recipe from "./recipe"
class ViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showview: false,
      qty: ""
      //  viewValue: false
    };
  }
  
  handleClick = item => {
    this.props.addToCart(item);
  };
  // handleqty = e => this.setState({
  //     qty: e.target.value
  //   });

  render() {
    // Got this from pb remember
    return (
   
        <div className="row px-5 py-5 container">
          <div className="col-sm-4">
            <img
              id="target"
              className="viewImage"
              src={this.props.viewValue.img}
            />
          </div>
          <div className="col-sm-8">
            <h3 className="title">
              <b>{this.props.viewValue.title}</b>
            </h3>

            <div className="">
              <h6>Desciption</h6>
              <div>{this.props.viewValue.desc}</div>
            </div>
            <div className="">
              <b>&#8358;{this.props.viewValue.price}</b>
            </div>
            <div>
              <span>QTY:</span>
              <select
              //onChange={this.handleqty} value={this.state.qty}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>
                <option value="4">7</option>
                <option value="4">8</option>
                <option value="4">9</option>
                <option value="4">10</option>
                <option value="4">11</option>
                <option value="4">12</option>
              </select>
            </div>
            <div>
              <button
                onClick={() => {
                  this.handleClick(this.props.viewValue);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
   
    );
  }
}
const mapStateToProps = state => {
  return {
    viewValue: state.viewValue
    
    // showView: state.showView
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);
// viewItem: id => {
//     const data = { id, type: "men" };
//     dispatch(viewItem(data));
//   }
//   viewItem: id => {
//     dispatch(viewItem(id));
//   }
