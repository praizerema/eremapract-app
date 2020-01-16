import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewItem from "../Products/viewItem";
import { viewItem } from "./actions/cartActions";

// import { addToCart } from './actions/cartActions';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class Men extends Component{
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
    

    render(){
        let itemList = this.props.men.map(item=>{ 
            return(
            <div className="card col-4" key={item.id}>
                <div className= "card-image col-sm-3">
                    <img src={item.img} className="itemImg img-fluid" alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                   
                </div>
                <div className="card-content">
<p>{item.desc}</p>
<span> <b>Price: {item.price}&#8358;</b> </span>
<button to= "/" className="btn-floating px-5 pl-5" onClick={()=>{this.handleView(item.id)}}>View
{/* <FontAwesomeIcon icon={faPlusCircle} style={{color:"red"}}/> */}
</button>
                </div>
            </div>
         )
        })
  
        return(
            <div className= "container">
                <h3 className="center">Our items</h3>
                <div className="box row">
                    {itemList}</div>
                    {this.state.showView && (
          <div
            className="card"
            style={{
              position: "fixed",
              top: "10px",
              width: "500px",
              height: "700px",
              zIndex: "200"
            }}
          >
          <span
              className="close text-right py-4 px-3"
              onClick={e => this.setState({ showView: false })}
            >
              &#10005;
            </span>
          <ViewItem />

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
        )
       }   
}
    const mapStateToProps = (state)=>{
        return {
          men: state.men
        }
      }
      const mapDispatchToProps = dispatch => {
        return {
          viewItem: id => {
            dispatch(viewItem(id));
          }
          // showViews: bool => {
          //   dispatch(showViews(bool));
          // }
        };
      };
    export default connect(mapStateToProps, mapDispatchToProps)(Men);