import React from "react";
import "./css/LandingPage.css";
import DreamTeam from "./DreamTeam.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="containerLand">
        <h1 className="TestH1">Dream Team</h1>
        <p className="P">Igniting the Passion of Sports Fans Everywhere</p>
        <img className="Imagee" src={DreamTeam} alt="Dream Team Image" />
        <button type="button" className="Button_Landing" onClick={this.props.handleSignInWithGoogle}>
          Sign In
        </button>
        <button type="button" className="Button_Landing" onClick={this.props.handleSignInWithEmail}>
          Sign Up
        </button>
      </div>
    );
  }
}
