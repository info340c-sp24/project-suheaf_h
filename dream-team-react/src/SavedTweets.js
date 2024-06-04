import React from "react";
import "./css/Saved.css";
import TWEETS from './SavedTweets.json';
import REPLIES from './SavedReplies.json';

class SavedTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReplies: {},
    };
  }

  toggleReplies = (id) => {
    this.setState((prevState) => ({
      showReplies: {
        ...prevState.showReplies,
        [id]: !prevState.showReplies[id],
      },
    }));
  };

  renderReplies = (tweetId) => {
    return REPLIES.filter(reply => reply.id === tweetId).map(reply => (
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
    ));
  };

  render() {
    return (
      <div className="feed-container saved-tweets-container">
        <header>
          <h1>Saved Tweets</h1>
        </header>
        
        <div className="tweets-grid">
          {TWEETS.map((tweet) => (
            <div className="tweet" key={tweet.id}>
              <div className="tweet-header">
                <img src={tweet.avatar} alt="Avatar" className="avatar" />
                <div className="author-info">
                  <span className="author-name">{tweet.name}</span>
                  <span className="author-handle">{tweet.handle}</span>
                </div>
              </div>
              <div className="tweet-content">
                <p>{tweet.content}</p>
              </div>
              <div className="tweet-image-container">
                <img src={tweet.image} alt="Tweet" className="tweet-image" />
              </div>
              <div className="tweet-icons">
                <div className="like-count">{tweet.likes} Likes</div>
                <div className="reply-count">{tweet.replies} Replies</div>
              </div>
              <button className="toggle-replies-button" onClick={() => this.toggleReplies(tweet.id)}>
                {this.state.showReplies[tweet.id] ? "Hide Replies" : "Show Replies"}
              </button>
              {this.state.showReplies[tweet.id] && (
                <div className="replies">
                  {this.renderReplies(tweet.id)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SavedTweets;
