import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import AddMore from "./addMore";
import { withAuthorization } from '../Session';

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

componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        addedItems: snapshot.val(),
        loading: false,
      });
    });
  }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
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
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleUp} onClick={()=>{this.handleAddQuantity(item)}} style= {{color: "black"}}/></Link>
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleDown} onClick={()=>{this.handleSubtractQuantity(item)}} style= {{color: "black"}}/></Link>
                                        </div>
                                        <button className="btn-danger remove" onClick={()=>{this.handleRemove(item)}}>Remove</button>
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
                    <ul className="collection">
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
const condition = authUser => !!authUser; 
export default withAuthorization(condition) (connect(mapStateToProps,mapDispatchToProps)(Cart))

