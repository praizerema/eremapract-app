import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import AddMore from "./addMore";
import { withAuthorization } from '../Session';
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";

class Cart extends Component{
 //to remove the item completely
 handleRemove = (item)=>{
    this.props.removeItem(item);
}
//to add the quantity
handleAddQuantity = (item)=>{
    this.props.addQuantity(item);
}
//to substruct from the quantity
handleSubtractQuantity = (item)=>{
    this.props.subtractQuantity(item);
}
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <li className="collection-item avatar" key={item.id}>
                       <div className="container row cart-wrap">
                                    <div className="col-4"> 
                                    <div className="title col-12">{item.name}</div>
                                        <img className="col-12" src={require("../../assets/image/" +
              item.image)} alt={item.img}/>
              <p className="col-12 mt-3"><b>Price: &#8358;{item.price}</b></p> 

                                    </div>
                                
                                    <div className=" col-4 mt-5 row">
                                        <div className="col-12">{item.description}</div>
                                        <div className="col-6">
                                            <div className="col-12  mb-2"><b>Qty</b></div>
                                            <div className="qty-border col-12 row">
                                        <div className="col-4 text-center border-right">
                                        <Link to="/cart">  <FontAwesomeIcon icon={faPlusCircle} onClick={()=>{this.handleAddQuantity(item)}}  style={{color:" green"}}/></Link>
                                            
                                        </div>
                                        <div className="col-4 border-right text-center"><span> {item.quantity}</span></div>
                                        <div className="col-4 text-center">
                                        <Link to="/cart"> <FontAwesomeIcon icon={faMinusCircle} onClick={()=>{this.handleSubtractQuantity(item)}} style= {{color: "red"}}/></Link>
                                        </div>
                                        {/* <div className="add-remove col-5 text-left">
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleUp} onClick={()=>{this.handleAddQuantity(item)}} style= {{color: "black"}}/></Link>
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleDown} onClick={()=>{this.handleSubtractQuantity(item)}} style= {{color: "black"}}/></Link>
                                        </div> */}
                                        </div>
                                        </div>
                                        <div className="col-4 mt-4"> <button className="btn-danger remove" onClick={()=>{this.handleRemove(item)}}>Remove</button>

                                        </div>
                                       
                                    </div>
                                    
                               </div>     
                               </li>                  
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container-fluid">
                <div className="cart">

                    <h5>You have ordered:</h5>
                    <ul className="collection mt-5">
                        {addedItems}
                    </ul>
                </div>  
                <AddMore />
                {/* Recipe added */}
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    console.log(state.addedItems)
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (item)=>{dispatch(removeItem(item))},
        addQuantity: (item)=>{dispatch(addQuantity(item))},
        subtractQuantity: (item)=>{dispatch(subtractQuantity(item))}
    }
}
const condition = authUser => !authUser; 
export default withAuthorization(condition) (connect(mapStateToProps,mapDispatchToProps)(Cart))

