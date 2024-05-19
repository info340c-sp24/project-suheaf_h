
import React, { Component } from "react";


class CommentPopup extends Component {
  render() {
    const { show, onClose } = this.props;
    if (!show) return null;

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h2>Write a Comment</h2>
          <textarea placeholder="What's on your mind?" className="comment-input"></textarea>
          <button className="comment-button">Post Comment</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default CommentPopup;
