import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import Interest from './Interest.js';
import NavScrollExample from './NavBar';
import Feed from './Feed.js';
import Profile from './Profile.js';
import AboutPage from './AboutPage.js';
import SavedTweets from './SavedTweets.js';
import CreateProfile from './CreateProfile.js';
import LandingPage from './LandingPage.js';
import { handleSignInWithEmail, handleSignInWithGoogle } from './Authentication.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSignInWithEmail = handleSignInWithEmail.bind(this);
    this.handleSignInWithGoogle = handleSignInWithGoogle.bind(this);
    this.state = {
      user: null,
      isNewUser: true,
    };

    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          const isNewUser = authResult.additionalUserInfo.isNewUser;
          this.setState({ isNewUser });
          return false;
        },
      },
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  handleProfileCreationComplete = () => {
    this.setState({ isNewUser: false });
  };

  render() {
    console.log(this.state.isNewUser)
    const { user, isNewUser } = this.state;

    if (!user) {
      return (
        <LandingPage
          handleSignInWithEmail={this.handleSignInWithEmail}
          handleSignInWithGoogle={this.handleSignInWithGoogle}
        />
      );
    }

    return (
      
        <div>
          
          <NavScrollExample />
          <Routes>
            {isNewUser && <Route path="/interest" element={<Interest user={user} />} />}
            <Route path="/" element={<Navigate to="/feed" user={user}/>} />
            <Route path="/feed" element={<Feed user={user} />} />
            <Route path="/savedTweets" element={<SavedTweets user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/about" element={<AboutPage user={user} />} />
  
           
          </Routes>
        </div>
    );
  }
}

export default App;
