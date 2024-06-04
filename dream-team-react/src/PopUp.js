
import React, { Component } from "react";


class CommentPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyContent: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ replyContent: event.target.value });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { replyContent } = this.state;

    if (replyContent.trim() !== '') {
      onSubmit(replyContent);
      this.setState({ replyContent: '' });
    }
  };

  render() {
    const { show, onClose } = this.props;
    const { replyContent } = this.state;

    if (!show) return null;

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h2>Write a Comment</h2>
          <textarea 
            placeholder="What's on your mind?" 
            className="comment-input" 
            value={replyContent} 
            onChange={this.handleInputChange}
          ></textarea>
          <button className="comment-button" onClick={this.handleSubmit}>Post Comment</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default CommentPopup;