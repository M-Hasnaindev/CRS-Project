import React, { useState, useEffect } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { BiLogoGooglePlus } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

function Companydashboard() {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  const handleAddCVClick = () => {
    navigate("/add-job");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleStudentDataClick = () => {
    const db = getDatabase();
    const studentsRef = ref(db, "Student CV");

    onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setStudentData(data);
      }
    });
  };

  useEffect(() => {
    handleStudentDataClick();
  }, []);

  const navigateToCV = (cvData) => {
    navigate("/cv", { state: { cvData } });
  };

  const renderStudentData = () => {
    if (studentData && Object.values(studentData).length > 0) {
      return (
        <div className="data_here student_data">
          <h2>Student Data</h2>
          <ul className="grid">
            {Object.values(studentData).map((student, index) => (
              <div
                className="student__cv__data__here"
                key={index}
                onClick={() => navigateToCV(student)}
              >
                <h3 className="fullname">fullName: &nbsp;{student.fullName}</h3>
                <p className="location">
                  location: &nbsp;&nbsp;&nbsp;{student.location}
                </p>
                <p className="bio">bio: &nbsp;&nbsp;&nbsp;{student.bio}</p>
              </div>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>No student data available.</p>;
    }
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
    <div className="main-page">
      <div className="page-section">
        <h1 className="heading">Company Dashboard</h1>
        <div className="page">
          <div className="top_section">
            <div className="section_1">
              <div className="student">
                <PiStudentBold />
              </div>
              <div className="buttons">
                <button className="edit" onClick={handleAddCVClick}>
                  Post Job
                </button>
                <button className="logout" onClick={handleLogout}>
                  logout
                </button>
              </div>
            </div>
            {/* <hr className='hr' /> */}
            <div className="section_2">
              <div className="cv_things">
                <div className="thing">
                  <p>Industry:</p>
                  <p>Location:</p>
                  <p>Employees:</p>
                  <p>Founded:</p>
                  <div className="icons">
                    <div className="icones">
                      <FaFacebookF />
                    </div>
                    <div className="icones">
                      <SiTwitter />
                    </div>
                    <div className="icones">
                      <BiLogoGooglePlus />
                    </div>
                    <div className="icones">
                      <FaGlobe />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page_2">
          <div className="middle_section">
            <div className="section_3">
              <div className="links">
                <div className="link_1">
                  <p>Job List</p>
                </div>
                <hr className="small" />
                <div className="link_1">
                  <p>Applied Request</p>
                </div>
                <hr className="small" />
                <div className="link_1" onClick={handleStudentDataClick}>
                  <p>Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page_3">
          <div className="bottom_section">
            <div className="section_4">
              <div className="data_here job_data">
                <h2>Job list</h2>
              </div>
              <div className="data_here applied_data">
                <h2>Appilied</h2>
              </div>
              {renderStudentData()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companydashboard;
