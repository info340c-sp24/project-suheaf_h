import React, { useState } from 'react';
import './css/Profile.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "firebase/auth";
import firebase from "firebase/compat/app";
import Any from './Annoymus.jpg'
const Profile = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: props.user.displayName,
    username: "@" + props.user.displayName,
    bio: props.user.displayName + ` is a passionate athlete who enjoys playing various sports, from basketball to soccer. 
    `,
    image: Any,
    favoriteTeam: 'Warriors'
  });

  const [newProfile, setNewProfile] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({
      ...newProfile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfile({
          ...newProfile,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(newProfile);
    setIsEditing(false);
  };

  const navigate = useNavigate(); // Access the navigate function from react-router-dom

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('User signed out successfully');
      navigate('/'); // Redirect to the landing page after sign-out
    }).catch((error) => {
      // An error happened.
      console.error('Error signing out:', error);
    });
  };

  return (
    <div>
      <header className="header">
        <h1>Welcome to the Profile Page</h1>
      </header>
      <div className="container">
        <div className="card">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="edit-form">
              <div className="image">
                <img src={newProfile.image} alt="Profile" />
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={newProfile.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" name="username" value={newProfile.username} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea name="bio" value={newProfile.bio} onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn">Save Changes</button>
            </form>
          ) : (
            <>
              <div className="image">
                <img src={profile.image} alt="Profile Image" />
              </div>
              <div className="name">{profile.name}</div>
              <div className="username">{profile.username}</div>
              <div className="number">1million <span className="followers">Followers</span></div>
              <button className="btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
              <div className="bio">{profile.bio}</div>
              <div className="social-icons">
                <span><i className="fa fa-twitter"></i></span>
                <span><i className="fa fa-facebook-f"></i></span>
                <span><i className="fa fa-instagram"></i></span>
                <span><i className="fa fa-linkedin"></i></span>
              </div>
              <div className="date">Favorite Team: {profile.favoriteTeam}</div>
              <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
