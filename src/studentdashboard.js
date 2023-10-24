import React, { useState, useEffect } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { BiLogoGooglePlus } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";

function Studentdashboard() {
  const [showCompany, setShowCompany] = useState(false);
  const [showJobs, setShowJobs] = useState(true);
  const [showReq, setShowReq] = useState(false);
  const [companyJobs, setCompanyJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  const handleAddCVClick = () => {
    navigate("/add-cv");
  };

  const handleLogout = () => {
    navigate("/login");
    toast.success("Logout Successfully");
  };

  const handleCompanies = () => {
    setShowCompany(true);
    setShowJobs(false);
    setShowReq(false);
  };

  const handleJobs = () => {
    setShowCompany(false);
    setShowJobs(true);
    setShowReq(false);
  };

  const handleAppliedJobRequest = () => {
    setShowReq(true);
    setShowCompany(false);
    setShowJobs(false);
  };

  const handleApply = (companyJob) => {
    navigate("/apply", { state: { companyJob } });
  };

  const handleApplyJob = (companyJob) => {
    navigate("/company-check", { state: { companyJob } });
  };

  const handleAcceptReject = (appliedJob, isAccepted) => {
    const updatedAppliedJob = { ...appliedJob, status: isAccepted ? "Accepted" : "Rejected" };
    // const message = isAccepted ? "You are hired!" : "You are rejected.";
    if(isAccepted){
      toast.success("you are hired");
    }
    else{
      toast.error("you are rejected")
    }
  };

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
    const appliedJobsRef = ref(db, "Applied Data");

    onValue(companyJobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const companyJobsArray = Object.values(data);
        setCompanyJobs(companyJobsArray);
      }
    });

    onValue(appliedJobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const appliedJobsArray = Object.values(data);
        setAppliedJobs(appliedJobsArray);
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
            <div className="section_2">
              <div className="cv_things">
                <div className="thing">
                  <p>FullName:</p>
                  <p>Email:</p>
                  <p>Password:</p>
                  <p>Contact no:</p>
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
                <div className="link_1" onClick={handleAppliedJobRequest}>
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
                style={{ display: showJobs ? "block" : "none" }}
              >
                <h2>Job list</h2>
                <div className="job__data__here">
                  {showJobs && (
                    <div className="jobies">
                      {companyJobs.map((companyJob, index) => (
                        <div className="job">
                          <div
                            className="container"
                            onClick={() => handleApply(companyJob)}
                            key={index}
                          >
                            <h3>&nbsp;{companyJob.fullName}</h3>
                            <p>
                              location:&nbsp;&nbsp;&nbsp;{companyJob.location}
                            </p>
                            <p>
                              industry:&nbsp;&nbsp;&nbsp;{companyJob.industry}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="data_here company_data"
                style={{ display: showCompany ? "block" : "none" }}
              >
                <h2>Company</h2>
                <div className="company__data__here job__data__here">
                  {showCompany && (
                    <div className="companies jobies">
                      {companyJobs.map((companyJob, index) => (
                        <div className="com job">
                          <div
                            className="boxes_container"
                            onClick={() => handleApplyJob(companyJob)}
                            key={index}
                          >
                            <h3>&nbsp;{companyJob.fullName}</h3>
                            <p>
                              location:&nbsp;&nbsp;&nbsp;{companyJob.location}
                            </p>
                            <p>
                              industry:&nbsp;&nbsp;&nbsp;{companyJob.industry}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="data_here applied_job"
                style={{ display: showReq ? "block" : "none" }}
              >
                <h2>Applied Job</h2>
                {showReq &&
                  appliedJobs.map((appliedJob, index) => (
                    <div className="applied-job" key={index}>
                      <h3>&nbsp;{appliedJob.company}</h3>
                      <p>Location:&nbsp;&nbsp;&nbsp;{appliedJob.location}</p>
                      <p>Industry:&nbsp;&nbsp;&nbsp;{appliedJob.industry}</p>
                      <div className="acceptorreject">
                        <div className="accept">
                          <button className="accepte" onClick={()=>handleAcceptReject(appliedJob,true)}>
                            Accept
                          </button>
                        </div>
                        <div className="reject">
                          <button className="rejects" onClick={()=>handleAcceptReject(appliedJob,false)}>
                            Rejects
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentdashboard;
