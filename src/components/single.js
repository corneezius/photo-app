import React, {Component} from "react"
import Photo from "./photo"
import Comments from "./comments"

class Single extends Component {
  render() {

  }
  handleSubmit() {

  }


  render() {
    const {match, posts} = this.props
    const id = Number(match.params.id)
    const post = posts.find((post) => post.id === id)
    const comments = this.props.comments[match.params.id] || []
    const index = this.props.posts.findIndex((post) => post.id === id)
    return <div className="single-photo">
        <Photo post={post} {...this.props} index={index}/>
        <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
    </div>
  }
}

export default Single;
