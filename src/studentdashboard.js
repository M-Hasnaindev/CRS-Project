import React, { useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { BiLogoGooglePlus } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import company1 from "./Assest/company1.jpg";
import company2 from "./Assest/company2.jpg";
import company3 from "./Assest/company3.jpg";

function Studentdashboard() {
  const [showCompany, setShowCompany] = useState(true);
  const [showJobs, setShowJobs] = useState(true);
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

  const handleCompnaies = () => {
    setShowCompany(false);
  };
  const handleJobs = () => {
    setShowJobs(false);
  };
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
                <div className="link_1" onClick={handleCompnaies}>
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
                  <div className="jobies">
                    <div className="job"></div>
                  </div>
                </div>
              </div>
              <div
                className="data_here company_data"
                style={{ display: showCompany ? "none" : "block" }}
              >
                <h2>Company</h2>
                <div className="company__job__data">
                  <div className="companies">
                    <div className="company" onClick={handlePageChange}>
                      <img src={company1} alt="Company Image" width={"60%"} />
                      <h1 className="company_name">LIFE PEN CO.</h1>
                      <p className="company_founded">
                        Founded: <span>2020</span>
                      </p>
                      <p className="company_location">
                        location: <span>Karachi, Pakistan</span>
                      </p>
                    </div>
                    <div className="company" onClick={handlePageChange}>
                      <img src={company2} alt="Company Image" width={"60%"} />
                      <h1 className="company_name">STATE LIFE</h1>
                      <p className="company_founded">
                        Founded: <span>2002</span>
                      </p>
                      <p className="company_location">
                        location: <span>Lahore, Pakistan</span>
                      </p>
                    </div>
                    <div className="company" onClick={handlePageChange}>
                      <img src={company3} alt="Company Image" width={"60%"} />
                      <h1 className="company_name">IT SOLUTION</h1>
                      <p className="company_founded">
                        Founded: <span>2009</span>
                      </p>
                      <p className="company_location">
                        location: <span>KPK, Pakistan</span>
                      </p>
                    </div>
                  </div>
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
