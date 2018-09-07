import React, { Component} from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./addphoto";
import {Route} from "react-router-dom"
import {removePost} from "../redux/actions"

class Main extends Component {
  constructor() {
    super()
  }



  render() {
    console.log(this.props)
    return  (
          <div>
              <Route exact path = "/" render={() => (
                <div>
                  <h1><Title title= {"PushforGorilla"} /></h1>
                  <Photowall {...this.props}/>
                </div>

              )}/>
              </div>
            )}
        }



export default Main;
