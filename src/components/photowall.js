import React from "react";
import Photo from "./photo";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"


function Photowall(props) {
    return <div>
      <Link className="add-icon" to= {"/AddPhoto"}> </Link>
          <div className="photo-grid">
          {props.posts.map((post, index) => <Photo key= {index} post={post} onRemovePhoto= {props.onRemovePhoto}
          onNavigate = {props.navigate}/>)}
         </div>
      </div>
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto:PropTypes.func.isRequired
}

export default Photowall;
