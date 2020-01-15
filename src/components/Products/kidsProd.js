import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addToCart } from './actions/cartActions';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
class KidsProd extends Component{
handleDetail= (id)=>{

}
    handleClick = (id)=>{
        // this.props.addToView(id);
    }

    render(){
        let itemList = this.props.kids.map(item=>{ 
            return(
            <div className="card" key={item.id}>
                <div className= "card-image col-sm-3">
                    <img src={item.img} className="itemImg img-fluid" alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                   
                </div>
                <div className="card-content">
<p>{item.desc}</p>
<span> <b>Price: {item.price}&#8358;</b> </span>
<button to= "/" className="btn-floating px-5 pl-5" onClick={()=>{this.handleClick(item.id)}}>View
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
                    {itemList}
                </div>
            </div>
        )
       }   
}
    const mapStateToProps = (state)=>{
        return {
          kids: state.kids
        }
      }
    export default connect(mapStateToProps)(KidsProd);