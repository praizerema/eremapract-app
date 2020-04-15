import React, { Component } from "react";
import { connect } from "react-redux";
import ViewItem from "../Products/viewItem";
import { viewItem, getWomenProduct,
  getWomenProductDis} from "./actions/cartActions";
import { withAuthorization } from '../Session';
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
      showview: true,
      viewValue: {},
      women:[]
    };
  }
  handleView = id => {
    this.props.viewItem(id);
    this.setState({ showView: true });
  };
  UNSAFE_componentWillMount() {
    this.props.getWomenProduct().then(data => {
      this.setState({ women: data });
      this.props.getWomenProductDis(data);
    });
  }
  render() {
    let itemList = this.state.women.map(item => {
      return (
        <div className=" col-sm-3 pb-5">
          <div
            className="card"
            key={item.id}
          >
            <div className="card-image">
              <img src={require("../../assets/image/" + item.image)} className="itemImg " alt={item.title} />
              <span className="card-title">{item.title}</span>
            </div>

            <div className="card-content mt-1 px-2">
              <span className="mr-3">
                <b>{item.price}&#8358;</b>
              </span>
              <button
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
      <div className="women-page">
        <h3 className="center">Enjoy your Shopping</h3>
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
                zIndex: "1000",
                alignSelf: "center",
               
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
   console.log(state.women)

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
    },
    getWomenProductDis: data => {
      console.log(data)
      dispatch(getWomenProductDis(data));
    },
    getWomenProduct
    // showViews: bool => {
    //   dispatch(showViews(bool));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WomenProd);