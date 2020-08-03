import React, { Component } from "react";
import { connect } from "react-redux";
import ViewItem from "../Products/viewItem";
import { viewItem,  getKidsProduct,
  getKidsProductDis } from "./actions/cartActions";
import firebase from "firebase";
import { db } from "../Firebase/firebase"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class KidsProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showview: false,
      kids: []
      //  viewValue: false
    };
  }
  handleView = id => {
    this.props.viewItem(id);
    this.setState({ showView: true });
  };
  UNSAFE_componentWillMount() {
    this.props.getKidsProduct().then(data => {
      this.setState({ kids: data });
      this.props.getKidsProductDis(data);
    });
  }

  render() {
//     db.collection("product")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log(data); // array of cities objects
// });
    let itemList = this.state.kids.map(item => {
      return (
        <div className="col-sm-3 pb-5">
          <div
            className="card"
            key={item.id}
          >
            <div className="card-image ">
              <img
              src={require("../../assets/image/" + item.image)}
                className="itemImg img-fluid"
                alt={item.title}
              />
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-content mt-1 px-1">
              <span className="mr-3">
                <b>&#8358;{item.price}</b>
              </span>
              <button
              
                className="btn btn-floating btn-small btn-view px-5 mt-1 pl-5"
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
      <div className="kids-page">
        <div className="container-fluid px-5 text-center">
        <h3 className="center">Enjoy your Shopping</h3>
          <div className="box row">{itemList}</div>
          {this.state.showView && (
            <div
              className="card  mt-5 px-0 mx-0 showView"
              /* style={{
                position: "fixed",
                top: "10px",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: "200",
                alignSelf: "center"
              }} */
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
    // kids: state.kids
    product: state.product
  };
};
const mapDispatchToProps = dispatch => {
  return {
    viewItem: id => {
      const data = { id, type: "kids" };
      dispatch(viewItem(data));
    },
    getKidsProductDis: data => {
      console.log(data)
      dispatch(getKidsProductDis(data));
    },
    getKidsProduct
    // showViews: bool => {
    //   dispatch(showViews(bool));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KidsProd);
