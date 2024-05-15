import React from 'react';
import './App.css';
import Interest from './Interest.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './NavBar';
import Feed from './Feed.js'
import AboutPage from './AboutPage.js'
import SavedTweets from './SavedTweets.js';
function App() {
  return (
    <div>
    <NavScrollExample />
   {/* <Interest /> */}
    <Feed />
    {/* <AboutPage /> */}
    {/* <SavedTweets /> */}
    </div>
  );
}

export default App;
