import company1 from "./Assest/company1.jpg";
import company2 from "./Assest/company2.jpg";
import company3 from "./Assest/company3.jpg";
import React, { useState, useEffect } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { BiLogoGooglePlus } from "react-icons/bi";
import { SiTwitter} from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";

function Studentdashboard() {
  const [showCompany, setShowCompany] = useState(true);
  const [showJobs, setShowJobs] = useState(true);
  const [companyJobs, setCompanyJobs] = useState([]);
  const navigate = useNavigate();

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

  const handleApply = () => {
    navigate("/apply")
  }

  useEffect(() => {
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
    const companyJobsRef = ref(db, "Company Jobs");

    onValue(companyJobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const companyJobsArray = Object.values(data);
        setCompanyJobs(companyJobsArray);
      }
    });
  }, []);
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
                <div className="thing">
                  <p>Location:</p>
                  <p>Qualification:</p>
                  <p>Percentage:</p>
                  <p>Passing Year:</p>
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
                      <div className="job" onClick={handleApply} key={index}>
                        <h3>FullName:&nbsp;{companyJob.fullName}</h3>
                        <p>location:&nbsp;&nbsp;&nbsp;{companyJob.location}</p>
                        <p>industry:&nbsp;&nbsp;&nbsp;{companyJob.industry}</p>
                        <p>employees:&nbsp;&nbsp;&nbsp;{companyJob.employees}</p>
                        <p>founded:&nbsp;&nbsp;&nbsp;{companyJob.founded}</p>
                        <p>facebook:&nbsp;&nbsp;&nbsp;{companyJob.facebook}</p>
                        <p>twitter:&nbsp;&nbsp;&nbsp;{companyJob.twitter}</p>
                        <p>googlePlus:&nbsp;&nbsp;&nbsp;{companyJob.googlePlus}</p>
                        <p>site:&nbsp;&nbsp;&nbsp;{companyJob.site}</p>
                        <p>bio:&nbsp;&nbsp;&nbsp;{companyJob.bio}</p>
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
              <div className="company__job__data">
              </div>
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
