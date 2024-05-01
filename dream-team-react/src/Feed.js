import React from 'react';


export default class Feed extends React.Component{
    render() {
        return(
            <div>
                 <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="./Landing.html"
            >Home <span className="sr-only">(current)</span></a
          >
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Interest.html">Interest</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./Feed.html">Feed</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="./SavedTweets.html">Saved Tweets</a>
          </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="./Profile.html">Profile</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="./AboutPage.html">About The Team</a>
          </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
  <body>
    
    <header>
      <h1>Welcome .... To Your feed</h1>
    </header>

    <div className="post-box">
        <form className="post-form">
            <textarea className="post-input" placeholder="What's on your mind?"></textarea>
            <button type="submit" className="post-button">Post</button>
        </form>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="app">
            <div className="tweet">
              <div className="tweet-header">
                <a href="/discussion">
                  <img
                    className="avatar"
                    src="Random_Person.jpeg"
                    alt="Sarah Nguyen"
                  />
                </a>
                <div className="author-info">
                  <p className="author-name">Sarah Nguyen</p>
                  <p className="author-handle">@SarahNguyen</p>
                </div>
              </div>
              <div className="tweet-content">
                <p>
                  Lebron James is the biggest Flooper and this is you all is
                  goat?
                </p>
                <img
                  className="tweet-image"
                  src="Lebron.jpg"
                  alt="Lebron James Flooping"
                />
              </div>
              <div className="tweet-icons">
                <button className="like-button">
                  <i className="material-icons">thumb_up</i>
                  <span className="like-count">100</span>
                </button>
                <button className="dislike-button">
                  <i className="material-icons">thumb_down</i>
                  <span className="dislike-count">20</span>
                </button>
                <div className="comment-section">
                  <input
                    type="text"
                    className="comment-input"
                    placeholder="Write a comment..."
                  />
                  <span className="reply-count">12 replies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
            <div className="app">
              <div className="tweet">
                <div className="tweet-header">
                  <a href="/discussion">
                    <img
                      className="avatar"
                      src="Random_Person.jpeg"
                      alt="Sarah Nguyen"
                    />
                  </a>
                  <div className="author-info">
                    <p className="author-name">Sarah Nguyen</p>
                    <p className="author-handle">@SarahNguyen</p>
                  </div>
                </div>
                <div className="tweet-content">
                   <p>
                    Lebron James is the biggest Flooper and this is you all is
                    goat?
                  </p>
                  <img
                    className="tweet-image"
                    src="Lebron.jpg"
                    alt="Lebron James Flooping"
                  />
                </div>
                <div className="tweet-icons">
                  <button className="like-button">
                    <i className="material-icons">thumb_up</i>
                    <span className="like-count">100</span>
                  </button>
                  <button className="dislike-button">
                    <i className="material-icons">thumb_down</i>
                    <span className="dislike-count">20</span>
                  </button>
                  <div className="comment-section">
                    <input
                      type="text"
                      className="comment-input"
                      placeholder="Write a comment..."
                    />
                    <span className="reply-count">12 replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="app">
              <div className="tweet">
                <div className="tweet-header">
                  <a href="/discussion">
                    <img
                      className="avatar"
                      src="Random_Person.jpeg"
                      alt="Sarah Nguyen"
                    />
                  </a>
                  <div className="author-info">
                    <p className="author-name">Sarah Nguyen</p>
                    <p className="author-handle">@SarahNguyen</p>
                  </div>
                </div>
                <div className="tweet-content">
                  <p>
                    Lebron James is the biggest Flooper and this is you all is
                    goat?
                  </p>
                  <img
                    className="tweet-image"
                    src="Lebron.jpg"
                    alt="Lebron James Flooping"
                  />
                </div>
                <div className="tweet-icons">
                  <button className="like-button">
                    <i className="material-icons">thumb_up</i>
                    <span className="like-count">100</span>
                  </button>
                  <button className="dislike-button">
                    <i className="material-icons">thumb_down</i>
                    <span className="dislike-count">20</span>
                  </button>
                  <div className="comment-section">
                    <input
                      type="text"
                      className="comment-input"
                      placeholder="Write a comment..."
                    />
                    <span className="reply-count">12 replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="app">
              <div className="tweet">
                <div className="tweet-header">
                  <a href="/discussion">
                    <img
                      className="avatar"
                      src="Random_Person.jpeg"
                      alt="Sarah Nguyen"
                    />
                  </a>
                  <div className="author-info">
                    <p className="author-name">Sarah Nguyen</p>
                    <p className="author-handle">@SarahNguyen</p>
                  </div>
                </div>
                <div className="tweet-content">
                  <p>
                    Lebron James is the biggest Flooper and this is you all is
                    goat?
                  </p>
                  <img
                    className="tweet-image"
                    src="Lebron.jpg"
                    alt="Lebron James Flooping"
                  />
                </div>
                <div className="tweet-icons">
                  <button className="like-button">
                    <i className="material-icons">thumb_up</i>
                    <span className="like-count">100</span>
                  </button>
                  <button className="dislike-button">
                    <i className="material-icons">thumb_down</i>
                    <span className="dislike-count">20</span>
                  </button>
                  <div className="comment-section">
                    <input
                      type="text"
                      className="comment-input"
                      placeholder="Write a comment..."
                    />
                    <span className="reply-count">12 replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="app">
              <div className="tweet">
                <div className="tweet-header">
                  <a href="/discussion">
                    <img
                      className="avatar"
                      src="Random_Person.jpeg"
                      alt="Sarah Nguyen"
                    />
                  </a>
                  <div className="author-info">
                    <p className="author-name">Sarah Nguyen</p>
                    <p className="author-handle">@SarahNguyen</p>
                  </div>
                </div>
                <div className="tweet-content">
                  <p>
                    Lebron James is the biggest Flooper and this is you all is
                    goat?
                  </p>
                  <img
                    className="tweet-image"
                    src="Lebron.jpg"
                    alt="Lebron James Flooping"
                  />
                </div>
                <div className="tweet-icons">
                  <button className="like-button">
                    <i className="material-icons">thumb_up</i>
                    <span className="like-count">100</span>
                  </button>
                  <button className="dislike-button">
                    <i className="material-icons">thumb_down</i>
                    <span className="dislike-count">20</span>
                  </button>
                  <div className="comment-section">
                    <input
                      type="text"
                      className="comment-input"
                      placeholder="Write a comment..."
                    />
                    <span className="reply-count">12 replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        <div className="col-md-6">
          <div className="app">
            <div className="tweet">
              <div className="tweet-header">
                <a href="/discussion">
                  <img
                    className="avatar"
                    src="Random_Person.jpeg"
                    alt="Sarah Nguyen"
                  />
                </a>
                <div className="author-info">
                  <p className="author-name">Sarah Nguyen</p>
                  <p className="author-handle">@SarahNguyen</p>
                </div>
              </div>
              <div className="tweet-content">
                <p>Curry Averaged 30 points a Game is he not Top 5?</p>
                <img
                  className="tweet-image"
                  src="Curry.jpg"
                  alt="Lebron James Flooping"
                />
              </div>
              <div className="tweet-icons">
                <button className="like-button">
                  <i className="material-icons">thumb_up</i>
                  <span className="like-count">100</span>
                </button>
                <button className="dislike-button">
                  <i className="material-icons">thumb_down</i>
                  <span className="dislike-count">20</span>
                </button>
                <div className="comment-section">
                  <input
                    type="text"
                    className="comment-input"
                    placeholder="Write a comment..."
                  />
                  <span className="reply-count">12 replies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
     </div>
        )
    }
}