import React, { Component} from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Photowall from "./photowall";
import AddPhoto from "./addphoto";
import {Route, Link} from "react-router-dom"
import {removePost} from "../redux/actions"
import Single from "./single"

class Main extends Component {

  componentDidMount() {
    this.props.startLoadingPost()
    this.props.startLoadingComments()
  }

  render() {

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

              <Route path="/single/:id" render = {(params) => (
                <Single {...this.props} {...params} />
              )}/>
          </div>
            )}
        }



export default Main;
