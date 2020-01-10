import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { viewItem } from '../Products/actions/cartActions';
import { addToCart } from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class WomenProd extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{ 
            return(
            <div className="card col-3" key={item.id}
            > 
            <div className= "">  
                <div className= "card-image">
                    <img src={item.img} className="itemImg" alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                  </div>
                </div>
                <div className="card-content">
<p>{item.desc}</p>
<span> <b>Price: {item.price}&#8358;</b> </span>
<span to= "./cart" className="btn-floating px-5 pl-5" onClick={()=>{this.handleClick(item.id)}} >
<FontAwesomeIcon icon={faPlusCircle} style={{color:"red"}}/>
</span>
                </div>
            </div>
         )
        })
  
        return(
            <div className= "container">
                <h3 className="center">Our items</h3>
                <div className="box row">
                    {itemList}
                </div>
            </div>
        )
       }   
}
    
            const mapStateToProps = (state)=>{
                return {
                  items: state.items[1]
                }
              }
             
              const mapDispatchToProps= (dispatch)=>{
            
                return{
                    addToCart: (id)=>{dispatch(addToCart(id))}
                }
            }
  
    export default connect(mapStateToProps, mapDispatchToProps)(WomenProd);