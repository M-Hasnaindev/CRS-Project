import React from 'react'
import { useNavigate } from 'react-router-dom'; 

function Companyjob() {
    const navigate = useNavigate();

        const handlebackorsave = () => {
            navigate('/company-dashboard')
          };
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
                                <label htmlFor="userBio">Profile Description</label>
                                <textarea className="form-control" id="userBio" rows="4"></textarea>
                            </div>
                            <button type="button" className="btn btn-success btn-block text-uppercase mb-3" onClick={handlebackorsave}>Save Job</button>
                            <button type="button" className="btn-border btn btn-outline-danger btn-block text-uppercase" onClick={handlebackorsave}>Cancle</button>
        </div>
      </div>
    </div>
  )
}

export default Companyjob