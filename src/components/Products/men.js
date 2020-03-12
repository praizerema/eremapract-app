import React, { Component } from "react";
import { connect } from "react-redux";
import ViewItem from "../Products/viewItem";
import { viewItem } from "./actions/cartActions";
import { withAuthorization } from '../Session';

// import { addToCart } from './actions/cartActions';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showview: true,
      viewValue: {}
    };
  }
  handleView = id => {
    this.props.viewItem(id);
    this.setState({ showView: true });
  };

  render() {
    let itemList = this.props.men.map(item => {
      return (
        <div className=" col-sm-3 pb-5">
          <div
            className="card"
            key={item.id}
          >
            <div className="card-image">
              <img
                src={item.img}
                className="itemImg img-fluid"
                alt={item.title}
              />
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-content px-2 mt-1">
              {/* <p>{item.desc}</p> */}
              <span className="mr-3">
                <b>Price: {item.price}&#8358;</b>
              </span>
              <button
                to="/"
                className="btn btn-floating btn-small btn-view  px-5 pl-5"
                onClick={() => {
                  this.handleView(item.id);
                }}
              >
                View

              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="">
      <div className="container">

        <h3 className="center">Enjoy your Shopping</h3>
        <div className="box row">{itemList}</div>
        {this.state.showView && (
          <div
            className="card container mt-5"
            style={{
                position: "fixed",
              top: "10px",
              width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: "200",
              alignSelf: "center"
            }}
          >
          <div className="viewBody">
                  <span
                className="close text-right"
                onClick={e => this.setState({ showView: false })}
              >
                &#10005;
              </span> 
              <ViewItem />
              </div>
            {/* <span
              className="close"
              onClick={e => this.setState({ showView: false })}
            >
              &#10005;
            </span>
            {this.props.viewValue.desc}
            <h1>{this.props.viewValue.title}</h1>
            <img src={this.props.viewValue.img} alt=""/> */}
          </div>
        )}
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    men: state.men
  };
};
const mapDispatchToProps = dispatch => {
  return {
    viewItem: id => {
      const data = { id, type: "men" };
      dispatch(viewItem(data));
    }
    // showViews: bool => {
    //   dispatch(showViews(bool));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Men);
