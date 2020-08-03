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
      showview: true,
      qty: "1"
      //  viewValue: false
    };
  }

  handleClick = item => {
    this.props.addToCart({ ...item, quantity: parseInt(this.state.qty) });
    console.log(this.props.addToCart);
    this.setState({ showView: false });
    
  };
  handleqty = e =>
    this.setState({
      qty: e.target.value
    });

  render() {
    // Got this from pb remembe
    return (
      <div className="row px-5 py-5 container-fluid ">
        <div className="col-sm-4">
          <img
            id="target"
            className="viewImage"
            src={require("../../assets/image/" +
              this.props.viewValue.image)}
          />
        </div>
        <div className="col-sm-8">
          <h3 className="title">
            <b>{this.props.viewValue.name}</b>
          </h3>

          <div className="">
            <h6>Desciption</h6>
            <div>{this.props.viewValue.description}</div>
          </div>
          <div className="">
            <b>&#8358;{this.props.viewValue.price}</b>
          </div>
          <div className="mt-2">
            <span>QTY:</span>
            <select onChange={this.handleqty} value={this.state.qty} required>
              {/* <option>Choose</option> */}
              <option value="1" selected>
                1
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <div>
            <button
              className="btn btn-view mt-3"
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
  console.log(state.viewValue)
  return {
    viewValue: state.viewValue
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
