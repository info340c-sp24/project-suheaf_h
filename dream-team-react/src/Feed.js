import React, { Component } from "react";
import "./css/Feed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import TWEETS from './Tweets.json';
import CommentPopup from './PopUp.js';
import "./css/TweetPreview.css";
import Avatar from './Defeualt_profile.png';
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/database"; // Import Firebase Database
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: TWEETS,
      showReplies: {},
      newTweetContent: '',
      newTweetImage: null,
      showTweetPreview: false,
      showCommentPopup: null, 
      replies: {}, 
    };
    this.fileInputRef = React.createRef();
  }

  componentDidMount() {
    const database = firebase.database();
    database.ref('tweets').on('value', snapshot => {
      const tweetsData = snapshot.val();
      if (tweetsData) {
        const tweetsArray = Object.entries(tweetsData).map(([id, tweet]) => ({ id, ...tweet }));
        this.setState({ tweets: tweetsArray });
      }
    });
  }

  toggleReplies = (id) => {
    const { showReplies } = this.state;

    if (!showReplies[id]) {
      const database = firebase.database();
      database.ref(`replies/${id}`).on('value', snapshot => {
        const repliesData = snapshot.val();
        this.setState((prevState) => ({
          showReplies: {
            ...prevState.showReplies,
            [id]: !prevState.showReplies[id],
          },
          replies: {
            ...prevState.replies,
            [id]: repliesData ? Object.values(repliesData) : [],
          },
        }));
      });
    } else {
      this.setState((prevState) => ({
        showReplies: {
          ...prevState.showReplies,
          [id]: !prevState.showReplies[id],
        }
      }));
    }
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
      name: this.props.user.displayName,
      handle: "@" + this.props.user.displayName,
      content: newTweetContent,
      image: newTweetImage ? URL.createObjectURL(newTweetImage) : null,
      replies: 0,
    };

    const database = firebase.database();
    database.ref('tweets').push(newTweet)
      .then(() => {
        this.setState({
          newTweetContent: '',
          newTweetImage: null,
          showTweetPreview: false,
        });
        if (this.fileInputRef.current) {
          this.fileInputRef.current.value = '';
        }
      })
      .catch(error => {
        console.error("Error posting tweet: ", error);
      });
  };

  handleCloseTweetPreview = () => {
    this.setState({ showTweetPreview: false });
  };

  handleCommentSubmit = (comment) => {
    const { showCommentPopup } = this.state;
    const database = firebase.database();
    const newReply = {
      name: "Current User",
      handle: "@currentuser",
      content: comment,
      date: new Date().toISOString(),
    };

    database.ref(`replies/${showCommentPopup}`).push(newReply)
      .then(() => {
        this.setState({ showCommentPopup: null });
        // Reload replies for the tweet
        this.toggleReplies(showCommentPopup);
      })
      .catch(error => {
        console.error("Error posting reply: ", error);
      });
  };

  render() {
    const { newTweetContent, newTweetImage, showTweetPreview, showReplies, replies } = this.state;

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
                {showReplies[tweet.id] ? "Hide Replies" : "Show Replies"}
              </button>
              {showReplies[tweet.id] && (
                <div className="replies">
                  {replies[tweet.id] && replies[tweet.id].map((reply) => (
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
        <CommentPopup 
          show={this.state.showCommentPopup !== null} 
          onClose={() => this.setState({ showCommentPopup: null })} 
          onSubmit={this.handleCommentSubmit} 
        />
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
