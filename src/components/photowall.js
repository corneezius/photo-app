import React, {Component} from "react";
import Photo from "./photo";


function Photowall(props) {
  return <div className="photo-grid">
      {props.posts.map((post, index) => <Photo key= {index} post={post} onRemovePhoto= {props.onRemovePhoto}/>)}
  </div>
}


// class Photowall extends Component {
//   render() {
//     return <div className="photo-grid">
//         {this.props.posts.map((post, index) => <Photo key= {index} post={post}/>)}
//     </div>
//   }
// }

export default Photowall;
