import React from 'react';
import { useLocation } from 'react-router-dom';

function Apply() { 
  const location = useLocation();
  const { companyJob } = location.state;
  console.log(companyJob);

  return (
    <>
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
    </>
  );
}

export default Apply;
