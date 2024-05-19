import React, { Component } from "react";
import "./css/Feed.css";
import Sarah from "./Person.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import TWEETS from './Tweets.json';
import CommentPopup from './PopUp.js';
import REPLIES from './Replies.json';
import "./css/TweetPreview.css";
import Avatar from './Defeualt_profile.png';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: TWEETS,
      showReplies: {},
      newTweetContent: '',
      newTweetImage: null,
      showTweetPreview: false,
      showCommentPopup: null, // Initialize to null
    };
    this.fileInputRef = React.createRef();
  }

  toggleReplies = (id) => {
    this.setState((prevState) => ({
      showReplies: {
        ...prevState.showReplies,
        [id]: !prevState.showReplies[id],
      },
    }));
  };

  handleInputChange = (event) => {
    this.setState({ newTweetContent: event.target.value });
  };

  handleImageChange = (event) => {
    this.setState({ newTweetImage: event.target.files[0] });
  };

  handleTweetPreview = () => {
    this.setState({ showTweetPreview: true });
  };

  toggleCommentPopup = (id) => {
    this.setState((prevState) => ({
      showCommentPopup: prevState.showCommentPopup === id ? null : id,
    }));
  };

  handleTweetPost = () => {
    const { newTweetContent, newTweetImage } = this.state;
    const newTweet = {
      id: this.state.tweets.length + 1,
      name: "Current User",
      handle: "@currentuser",
      content: newTweetContent,
      image: newTweetImage ? URL.createObjectURL(newTweetImage) : Sarah,
      replies: 0,
    };
    this.setState((prevState) => ({
      tweets: [newTweet, ...prevState.tweets],
      newTweetContent: '',
      newTweetImage: null,
      showTweetPreview: false,
    }));
    if (this.fileInputRef.current) {
      this.fileInputRef.current.value = '';
    }
  };

  handleCloseTweetPreview = () => {
    this.setState({ showTweetPreview: false });
  };

  render() {
    const { newTweetContent, newTweetImage, showTweetPreview } = this.state;

    return (
      <div className="feed-container">
        <header>
          <h1>Welcome Anonymous To Your Feed</h1>
        </header>

        <div className="post-box">
          <form className="post-form">
            <textarea
              className="post-input"
              placeholder="What's on your mind?"
              value={newTweetContent}
              onChange={this.handleInputChange}
            ></textarea>
            <input 
              type="file"
              className="post-input-file"
              accept="image/*"
              onChange={this.handleImageChange}
              ref={this.fileInputRef}
            />
            <button type="button" className="post-button" onClick={this.handleTweetPreview}>
              Post
            </button>
          </form>
        </div>

        <div className="tweets-grid">
          {this.state.tweets.map((tweet) => (
            <div className="tweet" key={tweet.id}>
              <div className="tweet-header">
                <img src={tweet.avatar || Avatar} alt="Avatar" className="avatar" />
                <div className="author-info">
                  <span className="author-name">{tweet.name}</span>
                  <span className="author-handle">{tweet.handle}</span>
                </div>
              </div>
              <div className="tweet-content">
                <p>{tweet.content}</p>
              </div>
              {tweet.image && (
                <div className="tweet-image-container">
                  <img src={tweet.image} alt="Tweet" className="tweet-image" />
                </div>
              )}
              <div className="tweet-icons">
                <FontAwesomeIcon icon={faThumbsUp} className="fa-icon" />
                <FontAwesomeIcon icon={faThumbsDown} className="fa-icon" />
                <div className="add-comment-icon" onClick={() => this.toggleCommentPopup(tweet.id)}>
                  <FontAwesomeIcon icon={faComment} className="fa-icon" />
                </div>
              </div>
              <div className="comment-section">
                <div className="reply-count">{tweet.replies} replies</div>
              </div>
              <button className="toggle-replies-button" onClick={() => this.toggleReplies(tweet.id)}>
                {this.state.showReplies[tweet.id] ? "Hide Replies" : "Show Replies"}
              </button>
              {this.state.showReplies[tweet.id] && (
                <div className="replies">
                  {REPLIES.filter(reply => reply.tweetId === tweet.id).map((reply) => (
                    <div className="reply" key={reply.id}>
                      <div className="reply-header">
                        <span className="reply-author-name">{reply.name}</span>
                        <span className="reply-author-handle">{reply.handle}</span>
                        <span className="reply-date">{reply.date}</span>
                      </div>
                      <div className="reply-content">
                        <p>{reply.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <TweetPreviewPopup
          show={showTweetPreview}
          tweetContent={newTweetContent}
          tweetImage={newTweetImage ? URL.createObjectURL(newTweetImage) : null}
          onClose={this.handleCloseTweetPreview}
          onPost={this.handleTweetPost}
        />
        <CommentPopup show={this.state.showCommentPopup !== null} onClose={() => this.setState({ showCommentPopup: null })} />
      </div>
    );
  }
}

const TweetPreviewPopup = ({ show, tweetContent, tweetImage, onClose, onPost }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="tweet-preview-popup-overlay">
      <div className="tweet-preview-popup">
        <div className="tweet-preview-header">
          <h2>Preview Your Tweet</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="tweet-preview-content">
          <p>{tweetContent}</p>
          {tweetImage && <img src={tweetImage} alt="Tweet Preview" className="tweet-preview-image" />}
        </div>
        <div className="button-container">
          <button onClick={onPost}>Post</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Feed;