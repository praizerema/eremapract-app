import React, { Component } from "react";
import { connect } from "react-redux";
import ViewItem from "../Products/viewItem";
import { viewItem } from "./actions/cartActions";
import NavBar from "./navBar";
// import { showViews } from "./actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
class WomenProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showview: false
      //  viewValue: false
    };
  }
  handleView = id => {
    this.props.viewItem(id);
    this.setState({ showView: true });
  };

  render() {
    let itemList = this.props.women.map(item => {
      return (
        <div className=" col-sm-3 pb-5">
          <div
            className="card"
            key={item.id}
            onClick={() => {
              this.handleView(item.id);
            }}
          >
            <div className="card-image">
              <img src={item.img} className="itemImg " alt={item.title} />
              <span className="card-title">{item.title}</span>
            </div>

            <div className="card-content mt-1">
              <span>
                <b>{item.price}&#8358;</b>
              </span>
              {/* <span
              to="./cart"
              className="btn-floating px-5 pl-5"
              
            >
              <FontAwesomeIcon icon={faPlusCircle} style={{color:"red"}}/>
              view
            </span> */}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="">
        <NavBar />
        <div className="container">
          {/* <h3 className="center">Get in here</h3> */}
          <div className="box row">{itemList}</div>
          {this.state.showView && (
            <div
              className="card container row mt-5"
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
    women: state.women
    // viewValue: state.viewValue
    // showView: state.showView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewItem: id => {
      const data = { id, type: "women" };
      dispatch(viewItem(data));
    }
    // showViews: bool => {
    //   dispatch(showViews(bool));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WomenProd);
