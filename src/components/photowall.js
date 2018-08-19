import React from "react";
import Photo from "./photo";
import PropTypes from "prop-types"


function Photowall(props) {
    return <div>
      <a className="add-icon" onClick= {props.onNavigate} href="#AddPhoto"> </a>
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
