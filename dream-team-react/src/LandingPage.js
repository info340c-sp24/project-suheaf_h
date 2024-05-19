import React from "react";
import "./css/LandingPage.css";
import DreamTeam from "./DreamTeam.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Dream Team</h1>
        <p>Igniting the Passion of Sports Fans Everywhere</p>
        <img src={DreamTeam} alt="Dream Team Image" />
        <a href="./SignInPage.html" style={{ width: "100%" }}>
          <button type="button" className="btn">
            Sign In
          </button>
        </a>
        <a href="./SignUpPage.html" style={{ width: "100%" }}>
          <button type="button" className="btn">
            Sign Up
          </button>
        </a>
      </div>
    );
  }
}
