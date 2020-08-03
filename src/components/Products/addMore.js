import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import firebase from "firebase";
import { db } from "../Firebase/firebase"
//import { addShipping } from './actions/cartActions'
class AddMore extends Component{

    // componentWillUnmount() {
    //         if(this.refs.shipping.checked)
    //             this.props.substractShipping()
    // }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    
    handleClick=()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
        let guid = () => {
            let s4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1); 
            }
            //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
        var prod =this.props.addedItems.map(item=> {
            return(
                item.name,
                item.quantity,
                item.price
            )})
        
        console.log(guid());
       let orderid = guid()
        db.collection("order").doc(orderid)
          .set({
            uid: user.uid,
              orderid: orderid,
           total:this.props.total,
           orderdate: new Date()
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
        console.log(db)
        
        db.collection("order items").doc()
        .set({
            orderid: orderid,
            itemQuantity: this.props.addedItems.map(item=> item.quantity),
            itemCategory: this.props.addedItems.map(item=> item.category),
            itemid: this.props.addedItems.map(item=> item.id),
            orderdate: new Date(),
            uid: user.uid,
            total:this.props.total
            })
            
           
       
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        })
        
        
    //     db.collection("orderItems").doc(guid())
    //     .set({
    //       uid: user.uid,
    //         orderid: guid(),
    //         orderdate: new Date(),
    //      total:this.props.total
    //     })
    //     .then(function(docRef) {
    //       console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //       console.error("Error adding document: ", error);
    //     });
    //   console.log(db)
    
    }})
    }
    // componentDidMount() {
    //     const db = !firebase.apps.length
    //   ? firebase.initializeApp(config).firestore()
    //   : firebase.app().firestore();
    // db.collection("you")
    //   .add({
    //    cart: {product:this.props.addedItems, total:this.props.total}
    //   })
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //     console.error("Error adding document: ", error);
    //   });
    // console.log(db)
    // }
    

    render(){
        
        return(
            <div className="container">
                <div><b>Total: {this.props.total} &#8358;</b></div>
                <div className="checkout"><button className="waves-effect waves-light btn-primary" to="/login"  onClick={() => {
                  this.handleClick()
                }}> Checkout</button></div>
                {/* <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+1000&#8358;)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} &#8358;</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn-primary"  onClick={() => {
                  this.handleClick()
                }}> <Link to="">Checkout</Link> </button>
                    </div> */}
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