import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
// import Recipe from "./recipe"
class Detail extends Component{
 //to remove the item completely
//  handleRemove = (id)=>{
//     this.props.removeItem(id);
// }
//to add the quantity
handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
}
//to substruct from the quantity
handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
}
    render(){
              
        let product = this.props.items.map(item=>{
                    return(
                       
                       
                        <div className="collection-item avatar" key={item.id}>
                                    <div className="item-img "> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc row">
                                        <span className="title col-12">{item.title}</span>
                                        <p className="col-12">{item.desc}</p>
                                        <p className="col-12"><b>Price: {item.price}&#8358;</b></p> 
                                        <p className="col-6">
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove col-6">
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleUp} onClick={()=>{this.handleAddQuantity(item.id)}} style= {{color: "black"}}/></Link>
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleDown} onClick={()=>{this.handleSubtractQuantity(item.id)}} style= {{color: "black"}}/></Link>
                                        </div>
                                        <button className="btn-danger remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                               </div>                        
                    )
                })

            
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {product}
                    </ul>
                </div>  
                {/* <Recipe /> */}
                {/* Recipe added */}
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.product
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)

