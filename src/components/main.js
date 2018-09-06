import React, { Component} from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./addphoto";
import {Route} from "react-router-dom"

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.posts)
    return  (
          <div>
              <Route exact path = "/" render={() => (
                <div>
                  <h1><Title title= {"PushforGorilla"} /></h1>

                </div>
                // />

              )}/>
              </div>
            )}
}
            // <Route path = "/AddPhoto" render = {({history}) => (
            //   <AddPhoto onAddPhoto= {(addedPost) => {
            //       this.addPhoto(addedPost)
            //       history.push('/')
            //   }}/>
            // )} />
        // </div>


export default Main;
