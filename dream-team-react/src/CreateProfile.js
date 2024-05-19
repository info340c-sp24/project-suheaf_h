import React, { useState } from "react";
import "./css/CreateProfile.css";
import defaultProfileImage from './Defeualt_profile.png'

export default function CreateProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

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
  };

  return (
    <div className="create-profile-container">
      <h1>Create Your Profile</h1>
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
          <label htmlFor="username">Pereferred Name</label>
          <input
            type="text"
            id="perfered Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <label htmlFor="username">Handle</label>
          <input
            type="text"
            id="handle"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
