import React from 'react';
import "./Feed.css"
import Sarah from './Person.jpg'
export default class Feed extends React.Component{
    render() {
        return(  
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

  

  </body>
  
        )
    }
}