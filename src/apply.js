import React from "react";
import { useLocation } from "react-router-dom";

function Apply() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobFullName = queryParams.get("jobFullName");
  return (
    <div>
      <h1>Apply for Job</h1>
      <div className="jobies">
        <div className="job" >
          <h3>FullName:&nbsp;{jobFullName}</h3>
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
      </div>
    </div>
  );
}

export default Apply;
