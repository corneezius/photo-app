import React, {Component} from "react"
import Photo from "./photo"

class Comments extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const comment = event.target.elements.comment.value
    this.props.addComment(comment, this.props.id)
  }

  render() {
    console.log(this.props.comments)
    return <div className="comment">
    {
      this.props.comments.map((comment, index)=> {
        return (
          <p key={index}> {comment}</p>
        )
      })
    }
      <form className="comment-form" onSubmit= {this.handleSubmit}>
        <input type="text" placeholder="comment" name="comment"/>
        <input type="submit" />
      </form>

    </div>
  }
}

export default Comments
