import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
// import Recipe from "./recipe"
class ViewItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showview: false
          //  viewValue: false
        };
      }
    render(){ 
        // if (this.props.viewValue === 0) {
        //   return null;
        // }
                return (
          <div
            className="viewWrap"
            //style={this.state.showView ? { display: "grid" } : { display: "none" }}
          >
            <div className="viewBody">
              {/* <div className="closeWrap text-left"> */}
              {/* <span
              className="close"
              onClick={e => this.setState({ showView: false })}
            >
              &#10005;
            </span> */}
                {/* </div> */}
                <div className="title">
                  {this.props.viewValue.title}
                </div>
                <div className="">
                  <img id="target" src={this.props.viewValue.img} />
                </div>
                
      
                <div className="">
                  {this.props.viewValue.desc}
                </div>
      
                <div className="">{this.props.viewValue.amount}</div>
              </div>
            </div>
         
        );
      };
    
}
const mapStateToProps = state => {
    return {
      viewValue: state.viewValue
      // showView: state.showView
    };
  };
export default connect (mapStateToProps)(ViewItem)
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
// // import Recipe from "./recipe"
// class ViewItem extends Component{
//  //to remove the item completely
//  handleRemove = (id)=>{
//     this.props.removeItem(id);
// }
// //to add the quantity
// handleAddQuantity = (id)=>{
//     this.props.addQuantity(id);
// }
// //to substruct from the quantity
// handleSubtractQuantity = (id)=>{
//     this.props.subtractQuantity(id);
// }
//     render(){
              
//         let viewValues = this.props.items.map(item=>{
//                     return(
                       
//                         <div className="collection-item avatar" key={item.id}>
//                                     <div className="item-img "> 
//                                         <img src={item.img} alt={item.img} className=""/>
//                                     </div>
                                
//                                     <div className="item-desc row">
//                                         <span className="title col-12">{item.title}</span>
//                                         <p className="col-12">{item.desc}</p>
//                                         <p className="col-12"><b>Price: {item.price}&#8358;</b></p> 
//                                         <p className="col-6">
//                                             <b>Quantity: {item.quantity}</b> 
//                                         </p>
//                                         <div className="add-remove col-6">
//                                             {/* <Link to="/cart"><FontAwesomeIcon icon={faAngleUp} onClick={()=>{this.handleAddQuantity(item.id)}} style= {{color: "black"}}/></Link>
//                                             <Link to="/cart"><FontAwesomeIcon icon={faAngleDown} onClick={()=>{this.handleSubtractQuantity(item.id)}} style= {{color: "black"}}/></Link> */}
//                                         </div>
//                                         <button className="btn-danger remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
//                                     </div>
                                    
//                                </div>                        
//                     )
//                 })
           
//        return(
//             <div className="container">
//                 <div className="cart">
//                     <h5>View</h5>
//                     <ul className="collection">
//                         {viewValues}
//                     </ul>
//                 </div>  
//                 {/* <Recipe /> */}
//                 {/* Recipe added */}
//             </div>
//        )
//     }
// }

// const mapStateToProps = (state)=>{
//     return{
//         items: state.viewValues
//         //addedItems: state.addedItems
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         removeItem: (id)=>{dispatch(removeItem(id))},
//         addQuantity: (id)=>{dispatch(addQuantity(id))},
//         subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ViewItem)


