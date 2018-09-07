import React, { Component} from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./addphoto";
import {Route, Link} from "react-router-dom"
import {removePost} from "../redux/actions"

class Main extends Component {
  constructor() {
    super()
  }



  render() {
    console.log(this.props)
    return  (
          <div>
            <h1>
              <Link to="/"> Photowall</Link>
            </h1>
              <Route exact path = "/" render={() => (
                <div>
                  <Photowall {...this.props}/>
                </div>

              )}/>

             <Route path ="/AddPhoto" render = {({history}) => (
               <AddPhoto {...this.props} onHistory={history}/>
                  )}/>
          </div>
            )}
        }



export default Main;
