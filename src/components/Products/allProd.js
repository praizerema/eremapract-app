import React, { Component } from "react";
import WomenProd from './womenProd';
import Men from './men';
import KidsProd from './kidsProd';
class AllProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
          return (
              <div>
              <KidsProd />
<WomenProd />
<Men />

              </div>
          )
        };};
export default AllProd;