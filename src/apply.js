import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from "firebase/app";

function Apply() {
  const location = useLocation();
  const { companyJob } = location.state;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showActive, setShowActive] = useState(false);

  const app_now = () => {
    const db = getDatabase(app);

    const appliedDataRef = ref(db, 'Applied Data');

    const cvData = {
      company: companyJob.fullName,
      location: companyJob.location,
      industry: companyJob.industry,

    };

    push(appliedDataRef, cvData);

    toast.success('Applied Successfully and CV was sent');
    navigate('/student-dashboard');
  };

  const handleShowModal = () => {
    setShowModal(true);
    setShowActive(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowActive(false);
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
    <>
      <div className="show" style={{ display: showActive ? 'none' : 'block' }}>
        <div className="cv">
          <h1>Apply For JOB</h1>
          {companyJob ? (
            <div>
            <h2>Company Name: {companyJob.fullName}</h2>
            <p>Location: &nbsp;&nbsp;&nbsp;{companyJob.location}</p>
            <p>Industry: &nbsp;&nbsp;&nbsp;{companyJob.industry}</p>
            <p>employees: &nbsp;&nbsp;&nbsp;{companyJob.employees}</p>
            <p>founded: &nbsp;&nbsp;&nbsp;{companyJob.founded}</p>
            <p>facebook: &nbsp;&nbsp;&nbsp;{companyJob.facebook}</p>
            <p>twitter: &nbsp;&nbsp;&nbsp;{companyJob.twitter}</p>
            <p>googlePlus: &nbsp;&nbsp;&nbsp;{companyJob.googlePlus}</p>
            <p>site: &nbsp;&nbsp;&nbsp;{companyJob.site}</p>
            <p>bio: &nbsp;&nbsp;&nbsp;{companyJob.bio}</p>
          </div>
          ) : (
            <p>No Job data available.</p>
          )}
        </div>
        <div className="download">
          <div className="applyed_now">
            <button className="applyingo" onClick={handleShowModal}>
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="open_modal">
            <div className="opened__modal">
              <div className="question">
                <h4>Are you sure to send your CV?</h4>
                <div className="yesorno">
                  <div className="yes">
                    <button className="yeses" onClick={app_now}>
                      Yes
                    </button>
                  </div>
                  <div className="no">
                    <button className="noo" onClick={handleCloseModal}>
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Apply;
