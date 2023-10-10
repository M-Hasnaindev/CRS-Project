import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

function Studentcv() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userfullName: "",
    userLocation: "",
    userQualification: "",
    userPassingYear: "",
    userPercentage: "",
    userFacebook: "",
    userTwitter: "",
    userGooglePlus: "",
    userSite: "",
  });

  const handlecancel = () => {
    navigate("/student-dashboard")
    console.log("cancel edit CV")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlebackorsave = () => {
    const {
      userfullName,
      userLocation,
      userQualification,
      userPassingYear,
      userPercentage,
      userFacebook,
      userTwitter,
      userGooglePlus,
      userSite,
    } = userData;

    if (
      userfullName &&
      userLocation &&
      userQualification &&
      userPassingYear &&
      userPercentage &&
      userFacebook &&
      userTwitter &&
      userGooglePlus &&
      userSite
    ) {
      const db = getDatabase(app);

      const usersRef = ref(db, "Student CV");

      push(usersRef, userData)
        .then(() => {
          console.log(`CV was edit successfully!`);
          navigate("/student-dashboard");
        })
        .catch((error) => {
          console.error(
            "Error adding user data to Firebase Realtime Database: ",
            error
          );
        });
    } else {
      alert("Please fill in all the fields");
    }
    console.log("Button Was Clicked for editing CV");
  };
  const firebaseConfig = {
    apiKey: "AIzaSyA94tTiDEPq1krr9HFALAKU-Eg4B2VCYM4",
    authDomain: "practice-host-auth0.firebaseapp.com",
    databaseURL: "https://practice-host-auth0-default-rtdb.firebaseio.com",
    projectId: "practice-host-auth0",
    storageBucket: "practice-host-auth0.appspot.com",
    messagingSenderId: "1058475595172",
    appId: "1:1058475595172:web:5b980a9756ae3d849cdd31",
  };

  const app = initializeApp(firebaseConfig);
  return (
    <div className="page_4">
      <div className="cv_section">
        <h2>Edit CV</h2>
        <div className="cv">
          <div className="form-group">
            <label htmlFor="userFullName">Full name</label>
            <input
              type="text"
              className="form-control"
              id="userFullName"
              placeholder="Name"
              value={userData.userfullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="userLocation"
              placeholder="City, Country"
              value={userData.userLocation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userQualification">Qualification</label>
            <input
              type="text"
              className="form-control"
              id="userQualification"
              placeholder="Bachelor Of Computer Science"
              value={userData.userQualification}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassingYear">Passing Year</label>
            <input
              type="number"
              className="form-control"
              id="userPassingYear"
              placeholder="2015"
              value={userData.userPassingYear}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPercentage">Percentage</label>
            <input
              type="number"
              className="form-control"
              id="userPercentage"
              placeholder="50%"
              value={userData.userPercentage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userFacebook">Facebook</label>
            <input
              type="text"
              className="form-control"
              id="userFacebook"
              placeholder="https://www.facebook.com/"
              value={userData.userFacebook}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userTwitter">Twitter</label>
            <input
              type="text"
              className="form-control"
              id="userTwitter"
              placeholder="https://www.twitter.com/"
              value={userData.userTwitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userGooglePlus">Google Plus</label>
            <input
              type="text"
              className="form-control"
              id="userGooglePlus"
              placeholder="https://plus.google.com/"
              value={userData.userGooglePlus}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userSite">Website</label>
            <input
              type="text"
              className="form-control"
              id="userSite"
              placeholder="https://www.example.com/"
              value={userData.userSite}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userBio">Profile Description</label>
            <textarea className="form-control" id="userBio" rows="4"></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success btn-block text-uppercase mb-3"
            onClick={handlebackorsave}
          >
            Save Profile
          </button>
          <button
            type="button"
            className="btn-border btn btn-outline-danger btn-block text-uppercase"
            onClick={handlecancel}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Studentcv;
