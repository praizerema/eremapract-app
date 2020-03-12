import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
//import { addShipping } from './actions/cartActions'
class AddMore extends Component{

    componentWillUnmount() {
            if(this.refs.shipping.checked)
                this.props.substractShipping()
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+1000&#8358;)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} &#8358;</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn"> <Link to="/login">Checkout</Link> </button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMore)