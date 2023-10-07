import React, { useState } from "react";
import img from "./Assest/img.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showFirstStep, setShowFirstStep] = useState(true);

  const handleStudentButtonClick = () => {
    setShowFirstStep(false);
  };

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div className="signup_page">
      <div className="main-page">
        <h1 className="signup_heading">SignUp</h1>
        <div
          className="first_step"
          style={{ display: showFirstStep ? "flex" : "none" }}
        >
          <div className="image_right">
            <img src={img} alt="image" />
          </div>
          <div className="left_buttons">
            <div className="buttons_left">
              <button className="form_btn">
                Admin
              </button>
              <button className="form_btn" onClick={handleStudentButtonClick}>
                Student
              </button>
              <button className="form_btn">
                Comapny
              </button>
            </div>
          </div>
        </div>
        <div className="second_step">
          <div className="image_right">
            <img src={img} alt="image" />
          </div>
          <div className="left_form">
            <div className="sign-from">
              <div className="form-sign">
                <div className="sign">
                  <label htmlFor="forEveryone">Full Name:</label>
                  <input
                    type="text"
                    name="fullname"
                    id="foreveryone"
                    placeholder="Your Name"
                  />
                </div>
                <div className="sign">
                  <label htmlFor="forEmail">Email:</label>
                  <input
                    type="text"
                    name="email"
                    id="forEmail"
                    placeholder="https://www.example.com"
                  />
                </div>
                <div className="sign">
                  <label htmlFor="forPassword">Password:</label>
                  <input
                    type="text"
                    name="password"
                    id="forPassword"
                    placeholder="**********"
                  />
                </div>
                <div className="sign">
                  <label htmlFor="forContact">Contact</label>
                  <input
                    type="number"
                    name="Contact"
                    id="forContact"
                    placeholder="+92 1234567890"
                  />
                </div>
                <div className="sign">
                  <button
                    className="submit"
                    type="submit"
                    onClick={handleSignup}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
