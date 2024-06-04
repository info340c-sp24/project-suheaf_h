import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./css/CreateProfile.css";
import defaultProfileImage from './Defeualt_profile.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Import the Firebase Realtime Database module

export default function CreateProfile({ onProfileCreationComplete }) {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [name, setPreferedName] = useState("");
  const [handle, setHandle] = useState("");
  const [bio, setBio] = useState("");
  const [userExists, setUserExists] = useState(false); // State to track if the user exists in the database
  const navigate = useNavigate();

  // Check if the user exists in the database on component mount
  useEffect(() => {
    const userRef = firebase.database().ref('users').child(firebase.auth().currentUser.uid);
    userRef.once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          setUserExists(true);
        }
      })
      .catch(error => {
        console.error("Error checking user existence:", error);
      });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImage(URL.createObjectURL(file));
    } else {
      console.error("Invalid file type. Please upload an image.");
      setProfileImage(defaultProfileImage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Created:", { username, bio, profileImage });

    // Save or update user data in the database
    const userRef = firebase.database().ref('users').child(firebase.auth().currentUser.uid);
    if (!userExists) {
      // If the user does not exist, set the user data
      userRef.set({
        username: username,
        name: name,
        handle: handle,
        bio: bio,
        profileImage: profileImage
      })
      .then(() => {
        console.log("User data saved successfully");
        onProfileCreationComplete();
        navigate('/interest');
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
      });
    } else {
      // If the user exists, update the user data
      userRef.update({
        username: username,
        name: name,
        handle: handle,
        bio: bio,
        profileImage: profileImage
      })
      .then(() => {
        console.log("User data updated successfully");
        onProfileCreationComplete();
        navigate('/interest');
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
    }
  };

  return (
    <div className="create-profile-container">
      <h1 className="Create">Create Your Profile</h1>
      <form className="create-profile-form" onSubmit={handleSubmit}>
        <div className="profile-image-upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="profileImage"
            className="inputfile"
          />
          <label htmlFor="profileImage">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image-preview" />
            ) : (
              <div className="upload-placeholder">Upload Profile Picture</div>
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="preferredName">Preferred Name</label>
          <input
            type="text"
            id="preferredName"
            value={name}
            onChange={(e) => setPreferedName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="handle">Handle</label>
          <input
            type="text"
            id="handle"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">Create Profile</button>
      </form>
    </div>
  );
}
