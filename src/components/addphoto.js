import React, {Component} from "react";
import ReactDOM from "react";

class AddPhoto extends Component {
  render () {
    return (
    <div>
      <h1> Photowall </h1>
      <div className="form">
        <form>
          <input type="text" placeholder="link" />
          <input type="text" placeholder="description" />
          <button>Post</button>
        </form>
      </div>
    </div>
  )}
}

export default AddPhoto;
