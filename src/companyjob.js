import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { toast } from "react-toastify";

function Companyjob() {
  const navigate = useNavigate();

  const handlecancel = () => {
    navigate("/company-dashboard")
    console.log("cancel edit CV")
  }

  const handleSaveJob = () => {
    const db = getDatabase(app);
    const cvDataRef = ref(db, "Company Jobs");
    const cvData = {
      fullName: document.getElementById("userFullName").value,
      location: document.getElementById("userLocation").value,
      industry: document.getElementById("userIndustry").value,
      employees: document.getElementById("userEmployees").value,
      founded: document.getElementById("userFounded").value,
      facebook: document.getElementById("userFacebook").value,
      twitter: document.getElementById("userTwitter").value,
      googlePlus: document.getElementById("userGooglePlus").value,
      site: document.getElementById("userSite").value,
      bio: document.getElementById("userBio").value,
    };

    push(cvDataRef, cvData)
      .then((newRef) => {
        console.log("CV data saved with ID: " + newRef.key);
        navigate("/company-dashboard");
        toast.success("JOB Edit Successfully.");
      })
      .catch((error) => {
        console.error("Error saving Company job: " + error.message);
    });
  }

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
        <h2>Post JOB</h2>
        <div className="cv">
          <div className="form-group">
                                <label htmlFor="userFullName">Full name</label>
                                <input type="text" className="form-control" id="userFullName" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userLocation">Location</label>
                                <input type="text" className="form-control" id="userLocation" placeholder="City, Country" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userIndustry">Industry</label>
                                <input type="text" className="form-control" id="userIndustry" placeholder="Information Technology"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmployees">Employees</label>
                                <input type="number" className="form-control" id="userEmployees" placeholder="No of Employees" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userFounded">Founded</label>
                                <input type="number" className="form-control" id="userFounded" placeholder="2015" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userFacebook">Facebook</label>
                                <input type="text" className="form-control" id="userFacebook" placeholder="https://www.facebook.com/" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userTwitter">Twitter</label>
                                <input type="text" className="form-control" id="userTwitter" placeholder="https://www.twitter.com/" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userGooglePlus">Google Plus</label>
                                <input type="text" className="form-control" id="userGooglePlus" placeholder="https://plus.google.com/" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userSite">Website</label>
                                <input type="text" className="form-control" id="userSite" placeholder="https://www.example.com/" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userBio">Company Description</label>
                                <textarea className="form-control" id="userBio" rows="4"></textarea>
                            </div>
                            <button type="button" className="btn btn-success btn-block text-uppercase mb-3" onClick={handleSaveJob}>Save Job</button>
                            <button type="button" className="btn-border btn btn-outline-danger btn-block text-uppercase" onClick={handlecancel}>Cancle</button>
        </div>
      </div>
    </div>
  )
}

export default Companyjob