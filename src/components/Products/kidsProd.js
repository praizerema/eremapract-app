import React, { Component } from "react";
import { connect } from "react-redux";
import ViewItem from "../Products/viewItem";
import { viewItem } from "./actions/cartActions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class KidsProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showview: false
      //  viewValue: false
    };
  }
  handleView = id => {
    this.props.viewItem(id);
    this.setState({ showView: true });
  };

  render() {
    let itemList = this.props.kids.map(item => {
      return (
        <div className="col-sm-3 pb-5">
          <div
            className="card"
            key={item.id}
          >
            <div className="card-image ">
              <img
                src={item.img}
                className="itemImg img-fluid"
                alt={item.title}
              />
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-content mt-1 px-1">
              <span className="mr-3">
                <b>{item.price}&#8358;</b>
              </span>
              <button
                to="/"
                className="btn btn-floating btn-small btn-view px-5 pl-5"
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
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    kids: state.kids
  };
};
const mapDispatchToProps = dispatch => {
  return {
    viewItem: id => {
      const data = { id, type: "kids" };
      dispatch(viewItem(data));
    }
    // showViews: bool => {
    //   dispatch(showViews(bool));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KidsProd);
