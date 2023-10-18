import React, { useState, useEffect } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaFacebookF, FaGlobe } from "react-icons/fa";
import { BiLogoGooglePlus } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Studentdashboard() {
  const [showCompany, setShowCompany] = useState(true);
  const [showJobs, setShowJobs] = useState(true);
  const [companyJobs, setCompanyJobs] = useState([]);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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
    const db = getDatabase(app);

  const handleAddCVClick = () => {
    navigate("/add-cv");
  };

  const handleLogout = () => {
    navigate("/login");
    toast.success("Logout Successfully");
  };

  const handlePageChange = () => {
    navigate("/jobs");
  };

  const handleCompanies = () => {
    setShowCompany(true);
    setShowJobs(false);
  };

  const handleJobs = () => {
    setShowCompany(false);
    setShowJobs(true);
  };

  const handleAppliedJobs = () => {
    navigate("/applied-jobs");
  };

  // const handleApply = () => {
  //   navigate("/apply");
  // };

  const handleApplyForJob = () => {
    if (userData) {
      const cvRef = ref(db, `applied data/${userData.uid}`);
      set(cvRef, userData)
        .then(() => {
          toast.success("User data pushed successfully.");
        })
        .catch((error) => {
          console.error("Error user data:", error);
        });
        onValue(cvRef, (snapshot) => {
          const cvData = snapshot.val();
          console.log("CV data:", cvData);
        });
    }
  };
  

  useEffect(() => {
    const companyJobsRef = ref(db, "Company Jobs");
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in.");
        const uid = user.uid;
        const userRef = ref(db, `user/${uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          console.log("user data:", userData);
          setUserData(userData);
        });
      } else {
        console.log("User is signed out.");
      }
    });

    onValue(companyJobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const companyJobsArray = Object.values(data);
        setCompanyJobs(companyJobsArray);
      }
    });
  }, [db]);
  return (
    <div className="main-page">
      <div className="page-section">
        <h1 className="heading">Student Dashboard</h1>
        <div className="page">
          <div className="top_section">
            <div className="section_1">
              <div className="student">
                <PiStudentBold />
              </div>
              <div className="buttons">
                <button className="edit" onClick={handleAddCVClick}>
                  Edit Your CV
                </button>
                <button className="logout" onClick={handleLogout}>
                  logout
                </button>
              </div>
            </div>
            {/* <hr className='hr' /> */}
            <div className="section_2">
              <div className="cv_things">
              {userData && (
            <div className="thing">
              <p>FullName: &nbsp;&nbsp;{userData.fullname}</p>
              <p>Email: &nbsp;&nbsp;&nbsp;{userData.email}</p>
              {/* <p>Password: {userData.password}</p> */}
              <p>Contact no: &nbsp;&nbsp;&nbsp;{userData.Contact}</p>
              <p>User ID: &nbsp;&nbsp;&nbsp;{userData.uid}</p>
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
          )}
              </div>
            </div>
          </div>
        </div>
        <div className="page_2">
          <div className="middle_section">
            <div className="section_3">
              <div className="links">
                <div className="link_1" onClick={handleJobs}>
                  <p>Job List</p>
                </div>
                <hr className="small" />
                <div className="link_1" onClick={handleCompanies}>
                  <p>Company</p>
                </div>
                <hr className="small" />
                <div className="link_1">
                  <p>Applied Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page_3">
          <div className="bottom_section">
            <div className="section_4">
              <div
                className="data_here job_data"
                style={{ display: showCompany ? "block" : "none" }}
              >
                <h2>Job list</h2>
                <div className="job__data__here">
                  {showJobs && (
                    <div className="jobies">
                      {companyJobs.map((companyJob, index) => (
                        <div className="job" key={index}>
                          <div className="container">
                            <h3>&nbsp;{companyJob.fullName}</h3>
                            <p>
                              location:&nbsp;&nbsp;&nbsp;{companyJob.location}
                            </p>
                            <p>
                              industry:&nbsp;&nbsp;&nbsp;{companyJob.industry}
                            </p>
                          </div>
                          <div className="buttons_div">
                            <div className="apply_button">
                              <button className="apply_btn" onClick={handleApplyForJob}>
                                Apply
                              </button>
                            </div>
                            <div className="cancel_button">
                              <button className="cancel_btn">
                                Cancel
                              </button>
                            </div>
                            </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="data_here company_data"
                style={{ display: showCompany ? "none" : "block" }}
              >
                <h2>Company</h2>
                <div className="company__job__data"></div>
              </div>
              <div className="data_here applied_job">
                <h2>Applied Job</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentdashboard;
