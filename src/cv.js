import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCloudDownloadAlt } from 'react-icons/fa'

function Cv() {
  const location = useLocation();
  const cvData = location.state ? location.state.cvData : null;

  return (
    <>
    <div className="cv">
      <h1>CV</h1>
      {cvData ? (
        <div>
          <h2>Full Name: {cvData.fullName}</h2>
          <p>Location: &nbsp;&nbsp;&nbsp;{cvData.location}</p>
          <p>qualification: &nbsp;&nbsp;&nbsp;{cvData.qualification}</p>
          <p>passingYear: &nbsp;&nbsp;&nbsp;{cvData.passingYear}</p>
          <p>percentage: &nbsp;&nbsp;&nbsp;{cvData.percentage}</p>
          <p>facebook: &nbsp;&nbsp;&nbsp;{cvData.facebook}</p>
          <p>twitter: &nbsp;&nbsp;&nbsp;{cvData.twitter}</p>
          <p>googlePlus: &nbsp;&nbsp;&nbsp;{cvData.googlePlus}</p>
          <p>site: &nbsp;&nbsp;&nbsp;{cvData.site}</p>
          <p>Bio: &nbsp;&nbsp;&nbsp;{cvData.bio}</p>
        </div>
      ) : (
        <p>No CV data available.</p>
      )}
    </div>
    <div className="dowanload">
      <div className="dowanload_now">
        <button className='now'><FaCloudDownloadAlt className='D_BTN'/>Downaload</button>
      </div>
    </div>
    </>
  );
}

export default Cv;
