import React, { Component } from "react";
import { connect } from "react-redux";
import ViewItem from "./viewItem";
import {
  viewItem,
  getMenProduct,
  getMenProductDis
} from "./actions/cartActions";
import { withAuthorization } from "../Session";
import { db } from "../Firebase/firebase";
// import cart from "../cart";

// import { addToCart } from './actions/cartActions';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showview: true,
      // viewValue: {},
      men: []
    };
  }
  handleView = id => {
    this.props.viewItem(id);
    this.setState({ showView: true });
  };

  UNSAFE_componentWillMount() {
    this.props.getMenProduct().then(data => {
      this.setState({ men: data });
      this.props.getMenProductDis(data);
    });
  }

  render() {
    let itemList = this.state.men.map(item => {
      return (
        <div className=" col-sm-3 pb-5">
          <div className="card" key={item.id}>
            <div className="card-image">
              <img
                src={require("../../assets/image/" + item.image)}
                className="itemImg img-fluid"
                alt={item.title}
              />
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-content px-2 mt-1">
              {/* <p>{item.desc}</p> */}
              <span className="mr-3">
                <b>&#8358;{item.price}</b>
              </span>
              <button
                className="btn btn-floating btn-small btn-view  px-5 mt-1 pl-5"
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
      <div className="men-page">
        <div className="container-fluid px-5 text-center">
          <h3 className="center">Enjoy your Shopping</h3>
          <div className="box row">{itemList}</div>
          {this.state.showView && (
            <div
              className="card  mt-5 px-0 mx-0 showView "
              
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
  console.log(state.men_product)

  return {
    // men: state.men,
    // product: state.product
    
  };
  
};

const mapDispatchToProps = dispatch => {
  return {
    viewItem: id => {
      const data = { id, type: "men" };
      dispatch(viewItem(data));
    },
    getMenProductDis: data => {
      dispatch(getMenProductDis(data));
    },
    getMenProduct
    // getMenProduct: id => {
    //   dispatch(getMenProduct);
    // }

    // showViews: bool => {
    //   dispatch(showViews(bool));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Men);
// /static/media/sandalunisex.d74e1268.jpeg
